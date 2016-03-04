(function(){
  var signUpController = function($state, Registration, FbConnect){
    var self = this
    self.user = {}
    self.error = {}

    this.signupFb = function(){
      FbConnect.fbData(this.fbConnectSuccess)
    }

    this.fbConnected = function(){
      if(self.user["fb_access_token"] != undefined && self.user["fb_access_token"] != '')
        return true

      return false
    }

    this.fbConnectSuccess = function(fbData){
      self.user = {}
      self.user["email"] = fbData["email"]
      self.user["fb_access_token"] = fbData["accessToken"]
      self.user["first_name"] = fbData["first_name"]
      self.user["last_name"] = fbData["last_name"]
    }

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
         .controller('SignUpController', ['$state', 'Registration', 'FbConnect', signUpController])
})()
