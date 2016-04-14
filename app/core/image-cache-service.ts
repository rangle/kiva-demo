import { Injectable } from 'angular2/core';

import imageCache = require('ui/image-cache');
import imageSource = require('image-source');

const globalImageCache = new imageCache.Cache();
globalImageCache.maxRequests = 10;
globalImageCache.placeholder = imageSource.fromFile('~/images/placeholder.png');
@Injectable()
export class ImageCache {
  private cache = globalImageCache;

  public getImage(src: string) : imageSource.ImageSource {
    let image = this.cache.get(src);

    if (image) {
      return imageSource.fromNativeSource(image);
    }
    else {
      this.cache.push({
        key: src,
        url: src,
        completed: function (image, key) {
          if (src === key) {
            return imageSource.fromNativeSource(image);
          }
        }
      });
      console.log(this.cache.placeholder);
      return this.cache.placeholder;
    }
  }

  fetchAndCache(src: string) : void {
    let image = this.cache.get(src);
    if (!image) {
      this.cache.push({
        key: src,
        url: src,
        completed: function(image, key) {
          if (src === key) {
            return imageSource.fromNativeSource(image);
          }
        }
      });
    }
  }

}
