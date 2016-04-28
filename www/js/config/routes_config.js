(function(){
  var routerConfig = function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'js/app/main/search/search.html',
        publicAccess: false
      })
      .state('main', {
        url: "/:phone_number",
        templateUrl: "js/app/main/main.html",
        publicAccess: false
      })
  }

  angular.module('reporting_module')
         .config(['$stateProvider', '$urlRouterProvider', routerConfig ]);
})()
