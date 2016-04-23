
if(cordova.platformId == 'browser'){
  avocado.debug.log('browser')
  facebookConnectPlugin.browserInit(window.appSettings.fbAppId, window.appSettings.fbVersion);
}
