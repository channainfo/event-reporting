(function(){
  var mainController = function($state, $mdSidenav, Session){

    this.signOut = function(){
      Session.destroy()
      $state.go('sign_in')
    }

    this.toggleSidenav = function(menuId){
      $mdSidenav(menuId).toggle()
    }
  }

  angular
    .module('bookmebus')
    .controller('MainController',['$state', '$mdSidenav', 'Session', mainController])
})()
