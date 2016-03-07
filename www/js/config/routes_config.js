(function(){
  var routerConfig = function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "js/app/main/main.html",
        publicAccess: false
      })
      .state('registration', {
        url: "/registration",
        templateUrl: "js/app/registration/registration.html",
        publicAccess: true
      })
      .state('sign_in', {
        url: "/sign_in",
        templateUrl: "js/app/sign_in/sign_in.html",
        publicAccess: true
      })
      .state('forget_password', {
        url: '/forget_password',
        templateUrl: 'js/app/forget_password/forget_password.html',
        publicAccess: true
      })
      .state('ticket_search', {
        url: '/ticket_search',
        templateUrl: 'js/app/main/ticket_search/ticket_search.html',
        publicAccess: false
      })
  }

  angular.module('bookmebus')
         .config(['$stateProvider', '$urlRouterProvider', routerConfig ]);
})()
