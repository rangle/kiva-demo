// this import should be first in order to load some required settings
// (like globals and reflect-metadata)
import { nativeScriptBootstrap } from 'nativescript-angular/application';
import { KivaApp } from './app.component';
import { HTTP_PROVIDERS } from 'angular2/http';

nativeScriptBootstrap(KivaApp, [
  HTTP_PROVIDERS
]);
