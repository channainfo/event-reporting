(function(){
  var appController = function(AccessToken) {
    this.init = function(){
      console.log("initializing...")
      AccessToken.setAppToken(function(oauthToken){
        console.log("app token", oauthToken)
      })
    }
  }
  angular.module("bookmebus")
         .controller("AppController", ["AccessToken", appController])
})()
