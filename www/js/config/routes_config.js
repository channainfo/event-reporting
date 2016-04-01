(function(){
  var routerConfig = function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "js/app/main/main.html",
        publicAccess: false
      })
      .state('introduction', {
        url: "/introduction",
        templateUrl: "js/app/introduction/introduction.html",
        publicAccess: true
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
      .state('search_result', {
        url: '/search_result',
        templateUrl: 'js/app/main/search_result/search_result.html',
        publicAccess: false
      })
      .state('select_route_detail', {
        url: '/select_route_detail',
        templateUrl: 'js/app/main/select_route_detail/select_route_detail.html',
        publicAccess: false
      })
      .state('select_seat', {
        url: '/select_seat',
        templateUrl: 'js/app/main/select_seat/select_seat.html',
        publicAccess: false
      })
      .state('passenger_detail', {
        url: '/passenger_detail',
        templateUrl: 'js/app/main/passenger_detail/passenger_detail.html',
        publicAccess: false
      })
      .state('request_ticket', {
        url: '/request_ticket',
        templateUrl: 'js/app/main/request_ticket/request_ticket.html',
        publicAccess: false
      })
  }

  angular.module('bookmebus')
         .config(['$stateProvider', '$urlRouterProvider', routerConfig ]);
})()
