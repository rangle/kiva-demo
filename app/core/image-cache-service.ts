import { Injectable } from 'angular2/core';

import imageCache = require('ui/image-cache');
import imageSource = require('image-source');

const globalImageCache = new imageCache.Cache();
globalImageCache.maxRequests = 10;

@Injectable()
export class ImageCache {
  //private cache: any = new imageCache.Cache();
  private cache = globalImageCache;

  consutructor() {
    
  }

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
      return this.cache.placeholder;
    }
  }

}
