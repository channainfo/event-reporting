(function(){
  var signInController = function(SignInUser){
    this.signin = function(){
      SignInUser.requestUserToken(this.signInUserName, this.signInPassword)
    }
  }

  angular
    .module('bookmebus')
    .controller('SignInController', ['SignInUser', signInController])
})()