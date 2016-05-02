// this import should be first in order to load some required settings
// (like globals and reflect-metadata)
import { nativeScriptBootstrap } from 'nativescript-angular/application';
import { KivaApp } from './app.component';
import {setStatusBarColors} from "./utils/status-bar-util";
import { KivaApi } from './core/kiva-api-service';
import { LoansService } from './core/loans-service';
import { RouterService } from './core/router-service';
import { HTTP_PROVIDERS } from 'angular2/http';
import fontModule = require('ui/styling/font');
import application = require('application');
import platform = require('platform');
import { NS_ROUTER_PROVIDERS } from "nativescript-angular/router";

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

// check the current platform (we are interested in android only)
// alternatively, you may have app.android.js and app.ios.js
if(platform.device.os === platform.platformNames.android) {
    application.onLaunch = function(intent) {
        // hook the onActivityCreated callback upon application launching
        application.android.onActivityCreated = function(activity) {
            // apply the default theme once the Activity is created
            // Changing the SplashTheme for AppTheme
            const id = activity.getResources().getIdentifier("AppTheme", "style", activity.getPackageName());
            activity.setTheme(id);
            // //Making the status bar transparent and white
            setStatusBarColors();
        }
    }
}

// set the statusbar to white across the entire application on iOS
if(platform.device.os === platform.platformNames.ios) {
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
            
            console.log('did finish launching!');

            // set the status bar to light content
            UIApplication.sharedApplication().statusBarStyle = 1; 

            return true;
        }

        applicationDidBecomeActive(application: UIApplication): void {
            console.log("applicationDidBecomeActive: " + application)
        }
    }
    application.ios.delegate = MyDelegate;
}

nativeScriptBootstrap(KivaApp, [
  RouterService,
  NS_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  KivaApi,
  LoansService
]);
