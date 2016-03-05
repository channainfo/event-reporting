(function(){
  var forgetPasswordController = function(ForgetPassword, Flash){
    var self = this
    self.requestSuccess = false

    this.create = function(){
      self.requestSuccess = false
      Flash.reset()
      ForgetPassword.create(self.email, self.sendRequestSuccess, self.sendRequestFailed)
    }

    this.sendRequestSuccess = function(data){
      Flash.setSuccessMessage("The password reset link has been sent")
      self.requestSuccess = true
    }

    this.sendRequestFailed = function(error){
      Flash.setErrorMessage('Email not found in our system')
    }

  }

  angular.module('bookmebus')
         .controller('ForgetPasswordController', ['ForgetPassword', 'Flash', forgetPasswordController])
})()
