(function(){
  var operatorsController = function($state){
    this.viewProfile = function(){
      $state.go('operator_profile')
    }
  }

  angular.module('bookmebus')
         .controller('OperatorsController', ['$state', operatorsController])
})()