(function(){

  var runConfig = function ($rootScope, $state, $mdDateLocale, ApiConfig) {

    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

    })

    $mdDateLocale.formatDate = function(date) {
       return moment(date).format(ApiConfig.DATE_FORMAT)
    }

    $mdDateLocale.parseDate = function(dateString) {
      var m = moment(dateString, ApiConfig.DATE_FORMAT, true)
      return m.isValid() ? m.toDate() : new Date(NaN)
    }

  }
  angular.module('reporting_module').run(['$rootScope', '$state', '$mdDateLocale',
                                          'ApiConfig' ,runConfig ]);
})()
