(function(){
  var signUpController = function(AccessToken){
    this.login = function(){
      AccessToken.setAppToken();
    }
  }

  angular.module('bookmebus')
         .controller('SignUpController', ['AccessToken', signUpController])
})()
