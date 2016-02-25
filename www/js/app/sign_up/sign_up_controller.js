(function(){
  var signUpController = function(SignUpUser){
    this.signup = function(){
      SignUpUser.setUserData(this.userEmail, this.userMobile, this.userPassword, this.userName)
    }
  }

  angular.module('bookmebus')
         .controller('SignUpController', ['SignUpUser', signUpController])
})()
