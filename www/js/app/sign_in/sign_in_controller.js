(function(){
  var signInController = function($state, Session, FbConnect, Flash){
    this.user = {}
    var self = this

    this.signInFb = function(){
      Flash.reset()
      FbConnect.fbToken(self.fbTokenSuccess)
    }

    this.fbTokenSuccess = function (accessToken) {
      console.log(accessToken)
      self.user["fb_access_token"] = accessToken
      Session.create(self.user, self.signInSuccess, self.signInFailed)
    }

    this.signin = function(){
      Flash.reset()
      Session.create(self.user, self.signInSuccess, self.signInFailed)
    }

    this.signInSuccess = function(userToken){
      $state.go('main')
    }

    this.signInFailed = function(error){
      Flash.setErrorMessage("Invalid login/password")
    }

  }

  angular
    .module('bookmebus')
    .controller('SignInController', ['$state', 'Session', 'FbConnect', 'Flash', signInController])
})()
