(function(){
  var appController = function($stateParams) {
    var self = this
    this.phoneNumber = $stateParams['phone_number']

    this.init = function(){
    }

    this.preload = function() {
    }

  }
  angular.module("reporting_module")
         .controller("AppController", [ "$stateParams", appController])
})()
