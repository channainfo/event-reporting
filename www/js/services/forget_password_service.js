(function(){
  var forgetPassword = function(ApiConfig, AccessToken, $http, Store){
    return {
      create: function(email, success, failed){
        var data = { email: email }

        $http({
          method: 'POST',
          url: ApiConfig.url('/api/v1/forget_passwords'),
          headers: AccessToken.getRequestHeader(),
          data: data
        })
        .then(function(response){
          success(response.data)
          }, function(response){
          failed(response.data)
        })
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('ForgetPassword', ['ApiConfig', 'AccessToken', '$http', 'Store', forgetPassword])
})()
