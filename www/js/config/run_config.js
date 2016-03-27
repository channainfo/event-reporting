(function(){

  var runConfig = function ($rootScope, $state, $mdDateLocale, UserToken, ApiConfig) {

    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

      if(!UserToken.isAppVisited() && toState.name != 'introduction') {
        $state.go('introduction')
        event.preventDefault()
      }

      if(!UserToken.isSignedIn() && !toState.publicAccess){
        $state.go('sign_in')
        event.preventDefault()
      }

      if(UserToken.isSignedIn() && toState.name == 'sign_in'){
        $state.go("main")
        event.preventDefault()
      }

    })

    $mdDateLocale.formatDate = function(date) {
       return moment(date).format(ApiConfig.DATE_FORMAT)
    }

    $mdDateLocale.parseDate = function(dateString) {
      var m = moment(dateString, ApiConfig.DATE_FORMAT, true)
      return m.isValid() ? m.toDate() : new Date(NaN)
    }

  }
  angular.module('bookmebus').run(['$rootScope', '$state', '$mdDateLocale',
                                   'UserToken', 'ApiConfig' ,runConfig ]);
})()
