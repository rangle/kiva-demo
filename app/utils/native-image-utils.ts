import imageCache = require('ui/image-cache');
import imageSource = require('image-source');
import observable = require("data/observable");

const globalImageCache = new imageCache.Cache();
globalImageCache.maxRequests = 20;
globalImageCache.placeholder = imageSource.fromFile('~/images/placeholder.png');


export function fetchAndCache(src: string) : void {
  let image = globalImageCache.get(src);
  if (!image) {
    globalImageCache.push({
      key: src,
      url: src,
    });
  }
}
// http://pstaev.blogspot.ca/2016/04/using-nativescripts-imagecache-to-cache.html
export class NativeImage extends observable.Observable {
  private _src: string;
  constructor(src: string) {
    super();
    this._src = src;
  }

  get src() : imageSource.ImageSource {
    let image = globalImageCache.get(this._src);

    if (image) {
      return image;
    }
    else {
      globalImageCache.push({
        key: this._src,
        url: this._src,
        completed: (image) => {
          this.notify({
            object: this,
            eventName: observable.Observable.propertyChangeEvent,
            propertyName: "src",
            value: image
          });
        }
      });
    }
    return globalImageCache.placeholder;
  }
}

export function loadImageAsync(src: string, shouldCache: boolean) {
  return imageSource.fromUrl(src)
}
