import * as platform from 'platform';

export function isAndroid() {
  return platform.device.os === platform.platformNames.android;
}

export function isIOS() {
  return platform.device.os === platform.platformNames.ios;
}