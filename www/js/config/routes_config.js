(function(){
  var routerConfig = function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "js/app/main/main.html",
        publicAccess: false
      })
      .state('sign_up', {
        url: "/sign_up",
        templateUrl: "js/app/sign_up/sign_up.html",
        publicAccess: true
      })
      .state('sign_in', {
        url: "/sign_in",
        templateUrl: "js/app/sign_in/sign_in.html",
        publicAccess: true
      })
  }

  angular.module('bookmebus')
         .config(['$stateProvider', '$urlRouterProvider', routerConfig ]);
})()
