// this import should be first in order to load some required settings
// (like globals and reflect-metadata)
import { nativeScriptBootstrap } from 'nativescript-angular/application';
import { KivaApp } from './app.component';
import {setStatusBarColors} from "./utils/status-bar-util";
import { KivaApi } from './core/kiva-api-service';
import { LoansService } from './core/loans-service';
import { HTTP_PROVIDERS } from 'angular2/http';
import fontModule = require('ui/styling/font');

// Making the status bar transparent and white
setStatusBarColors();

// Register fonts (iOS)
// GOTHAM
// fontModule.ios.registerFont('GOTHAM-BLACK.TTF');
// fontModule.ios.registerFont('GOTHAM-BLACKITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-BOLD.TTF');
// fontModule.ios.registerFont('GOTHAM-BOLDITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-LIGHT.TTF');
// fontModule.ios.registerFont('GOTHAM-LIGHTITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-MEDIUM.TTF');
// fontModule.ios.registerFont('GOTHAM-MEDIUMITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-THIN.TTF');
// fontModule.ios.registerFont('GOTHAM-THINITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-ULTRA.TTF');
// fontModule.ios.registerFont('GOTHAM-ULTRAITALIC.TTF');
// fontModule.ios.registerFont('GOTHAM-XLIGHT.TTF');
// fontModule.ios.registerFont('GOTHAM-XLIGHTITALIC.TTF');
nativeScriptBootstrap(KivaApp, [
  HTTP_PROVIDERS,
  KivaApi,
  LoansService
]);
