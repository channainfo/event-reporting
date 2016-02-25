(function(){
  var signUpController = function(SignUpUser){
    this.user = {}
    this.signup = function(){
      SignUpUser.setUserData(this.user)
    }
  }

  angular.module('bookmebus')
         .controller('SignUpController', ['SignUpUser', signUpController])
})()
