(function(){
  var themeProvider = function($mdThemingProvider) {
    var customPrimary = {
        '50': '#1aff1b',
        '100': '#00ff02',
        '200': '#00e501',
        '300': '#00cc01',
        '400': '#00b301',
        '500': '#009901',
        '600': '#008001',
        '700': '#006601',
        '800': '#004d01',
        '900': '#003300',
        'A100': '#33ff34',
        'A200': '#4cff4e',
        'A400': '#66ff67',
        'A700': '#001900'
    };
    $mdThemingProvider
      .definePalette('customPrimary', customPrimary);

    $mdThemingProvider.theme('default')
                      .primaryPalette('customPrimary')
                      .accentPalette('blue')
  }

  angular.module('bookmebus')
         .config(['$mdThemingProvider', themeProvider]);
})()