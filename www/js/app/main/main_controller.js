(function(){
  var mainController = function($state, $mdSidenav){

    this.toggleSidenav = function(menuId){
      $mdSidenav(menuId).toggle()
    }
  }

  angular
    .module('reporting_module')
    .controller('MainController',['$state', '$mdSidenav', mainController])
})()
