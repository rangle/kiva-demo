## Kiva Demo
### Built with [NativeScript](https://www.nativescript.org/) and [Angular2](https://angular.io/)

### Setup
* __Prerequisites__
  * Android SDK (Google API 23) for building / emulating Android
  * XCode (latest version) for building / emulating iOS
  * NodeJS
  * npm
  * git

* Install the nativescript CLI.  
`npm install -g nativescript`  

* Check that your system is configured correctly.  
`tns doctor`  

* Clone the Repository  
`git clone git@github.com:rangle/kiva-demo.git` 
`cd kiva-demo` 

* Add Platforms
`tns platform add android` 
`tns platform add ios`  
**OR**  
`tns install`  

* Install Dependencies
`npm install`

---

### Development
* Android: `tns livesync android --emulator --watch`

* iOS: `tns livesync ios --emulator --watch`  
> Note: you can remove `--emulator` if you would like the app to run on a connected device.

---

### Testing
_Coming Soon_

---

### Production
* `tns build <platform>`  
**Important:** When building for iOS, ensure you have a valid provisioning profile and Apple developer credentials.  
For Android the `.apk` can be found in `platforms/android/build/apk`.  
For iOS the `.ipa` is under `platforms/ios/build/device`.

___

### Resources
* [NativeScript troubleshooting guide](http://docs.nativescript.org/start/troubleshooting)
* [Angular2 official docs](https://angular.io/docs/ts/latest/)
* [TypeScript manual](https://www.typescriptlang.org/docs/tutorial.html)
* [Building apps with NativeScript and Angular 2](https://tjvantoll.github.io/nativescript-angular-guide/)
