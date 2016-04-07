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
* Install Dependencies
`npm install`

---
### Development
* Android: `npm run dev-android`
* iOS: `npm run dev-ios`
---
### Testing
* On an emulator: `npm run test-<platform>`
* On a device running the app: `npm run test <platform>`
> __Note:__ If testing on a physical device, ensure that the device is able to access your machine's localhost before running the above command.
* All tests are available in `app/tests`
---
### Production
_Coming Soon_

___
### Resources
* [NativeScript troubleshooting guide](http://docs.nativescript.org/start/troubleshooting)
* [Angular2 official docs](https://angular.io/docs/ts/latest/)
* [TypeScript manual](https://www.typescriptlang.org/docs/tutorial.html)
* [Building apps with NativeScript and Angular 2](https://tjvantoll.github.io/nativescript-angular-guide/)

