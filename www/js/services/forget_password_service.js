(function(){
  var forgetPassword = function(AccessTokenHttp){
    return {
      create: function(email, success, failed){
        var options = {
          method: 'POST',
          url: 'forget_passwords',
          data: { email: email }
        }

        AccessTokenHttp.request(options, function(response){
          success(response.data)
        }, function(response){
          failed(response.data)
        })
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('ForgetPassword', ['AccessTokenHttp', forgetPassword])
})()
