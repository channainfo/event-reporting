(function(){
  var appController = function(AccessToken, Flash) {
    this.init = function(){
      avocado.debug.log("initializing...")
      AccessToken.setAppToken(function(oauthToken){
        avocado.debug.log("app token", oauthToken)
      })
    },

    this.clearFlash = function() {
      Flash.reset()
    }
  }
  angular.module("bookmebus")
         .controller("AppController", ["AccessToken", "Flash", appController])
})()
