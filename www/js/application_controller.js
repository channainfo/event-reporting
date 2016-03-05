(function(){
  var applicationController = function(AccessToken, Flash){
    this.init = function(){
      Flash.reset()
      AccessToken.setAppToken('app_token')
    }
  }
  angular.module('bookmebus')
         .controller('ApplicationController', ['AccessToken', applicationController])
})()
