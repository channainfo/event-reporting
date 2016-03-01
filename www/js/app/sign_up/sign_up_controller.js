(function(){
  var signUpController = function($state, Registration){
    var self = this
    self.user = {}
    self.error = {}

    this.signup = function(){
      Registration.create(self.user, self.registrationSuccess, self.registrationFailed)
    }

    this.fieldError = function(field){
      var errorDes = self.error.error_description
      if(errorDes && errorDes[field])
        return errorDes[field][0]
      else
        return false
    }

    this.registrationSuccess = function(user) {
      $state.go('sign_in')
    }

    this.registrationFailed = function (error) {
      self.error = error
    }
  }

  angular.module('bookmebus')
         .controller('SignUpController', ['$state', 'Registration', signUpController])
})()
