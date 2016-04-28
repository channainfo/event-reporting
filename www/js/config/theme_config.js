(function(){
  var themeProvider = function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
                      .primaryPalette('light-blue', {
                        'default': '500',
                        'hue-1': '300',
                        'hue-2': '800',
                        'hue-3': 'A100'
                      })
                      .accentPalette('light-blue', {
                        'default': 'A200',
                        'hue-1': 'A100',
                        'hue-2': 'A400',
                        'hue-3': 'A700'
                      })
  }

  angular.module('reporting_module')
         .config(['$mdThemingProvider', themeProvider]);
})()