(function(){
  var signInController = function($state, Session, FbConnect){
    this.user = {}
    this.error = false
    var self = this

    this.hasError = function(){
      return this.error
    }

    this.signInFb = function(){
      self.error = false
      FbConnect.fbToken(self.fbTokenSuccess)
    }

    this.fbTokenSuccess = function (accessToken) {
      console.log(accessToken)
      self.user["fb_access_token"] = accessToken
      Session.create(self.user, self.signInSuccess, self.signInFailed)
    }

    this.signin = function(){
      self.error = false
      Session.create(self.user, self.signInSuccess, self.signInFailed)
    }

    this.signInSuccess = function(userToken){
      $state.go('main')
    }

    this.signInFailed = function(error){
      self.error = true
    }

  }

  angular
    .module('bookmebus')
    .controller('SignInController', ['$state', 'Session', 'FbConnect', signInController])
})()