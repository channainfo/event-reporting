(function(){
  var signInController = function(Session){
    this.user = {}
    this.error = false
    var self = this

    this.hasError = function(){
      return this.error
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
    .controller('SignInController', ['Session', signInController])
})()