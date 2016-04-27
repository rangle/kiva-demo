import * as application from 'application';
import * as platform from 'platform';
import * as color from 'color';
declare var android: any;
declare var UIResponder: any;
declare var UIStatusBarStyle: any;
declare var UIApplication: any;
declare var UIApplicationDelegate: any;

export function setStatusBarColors() {
  // Make the iOS status bar transparent with white text.
  // See https://github.com/burkeholland/nativescript-statusbar/issues/2
  // for details on the technique used.
  if (application.ios) {
    var AppDelegate = UIResponder.extend({
      applicationDidFinishLaunchingWithOptions: function() {
        UIApplication.sharedApplication().statusBarStyle = UIStatusBarStyle.LightContent;
        return true;
      }
    }, {
        name: "AppDelegate",
        protocols: [UIApplicationDelegate]
      });
    application.ios.delegate = AppDelegate;
  }

  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android) {
    application.android.onActivityStarted = function() {
      if (application.android && platform.device.sdkVersion >= "21") {
        var View = android.view.View;
        var window = application.android.startActivity.getWindow();
        window.setStatusBarColor(new color.Color('#236133').android);
        // window.setStatusBarColor(0x000000);

        // var decorView = window.getDecorView();
        // decorView.setSystemUiVisibility(
        //   View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        //   | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        //   | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        //   | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    }
  }
}

export function getStatusBarHeight() {
  let result = 0;
  let resourceId = application.android.currentContext
    .getResources()
    .getIdentifier('status_bar_height', 'dimen', 'android');
  if (resourceId > 0) {
    result = application.android.currentContext
      .getResources()
      .getDimensionPixelSize(resourceId);
  }
  return result;
}
