(function(){

  var runConfig = function ($rootScope, $state, UserToken) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      if(!UserToken.isSignedIn() && !toState.publicAccess){
        $state.go('sign_in')
        event.preventDefault()
      }
    })
  }
  angular.module('bookmebus').run(['$rootScope', '$state', 'UserToken', runConfig ]);
})()
