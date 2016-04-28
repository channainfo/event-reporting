(function(){
  var appController = function($stateParams, Store, Flash) {
    var self = this
    this.phoneNumber = $stateParams['phone_number']

    this.init = function(){
    }

    this.preload = function() {
    }

    this.clearFlash = function() {
      Flash.reset()
    }

  }
  angular.module("reporting_module")
         .controller("AppController", [ "$stateParams", "Store", "Flash", appController])
})()
