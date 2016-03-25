(function(){
  var appController = function(AccessToken, Location, Store, Flash) {
    var self = this

    this.init = function(){
      avocado.debug.log("initializing...")
      avocado.debug.log("authorizing app ...")
      AccessToken.setAppToken(function(oauthToken){
        avocado.debug.log("auth token:", oauthToken)
        self.preload()
      })
    }

    this.preload = function() {
      Location.load()
    }

    this.clearFlash = function() {
      Flash.reset()
    }

  }
  angular.module("bookmebus")
         .controller("AppController", ["AccessToken", "Location", "Store", "Flash", appController])
})()
