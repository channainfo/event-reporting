(function(){
  var applicationController = function(AccessToken){
    this.init = function(){
      AccessToken.setAppToken('app_token')
    }
  }
  angular.module('bookmebus')
         .controller('ApplicationController', ['AccessToken', applicationController])
})()