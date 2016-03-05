(function(){
  var appController = function(AccessToken, Flash) {
    this.init = function(){
      console.log("initializing...")
      AccessToken.setAppToken(function(oauthToken){
        console.log("app token", oauthToken)
      })
    },

    this.clearFlash = function() {
      Flash.reset()
    }
  }
  angular.module("bookmebus")
         .controller("AppController", ["AccessToken", "Flash", appController])
})()
