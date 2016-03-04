(function(){
  var registration = function(ApiConfig, AccessToken, ezfb, $http, Store, $state){
    return {
      create: function(userParams, success, failed){
        var self = this
        $http({
          method: 'POST',
          url: ApiConfig.url('/api/v1/registrations'),
          headers: AccessToken.getRequestHeader(),
          data: userParams
        })
        .then(function (response) {
          var user = response.data
          success(user)
        }, function (response) {
          var error = response.data
          failed(error)
        })
      },
      getFbUserData: function(){
        ezfb.login(function(res) {
          if(res.authResponse) {
            var fb_token = res.authResponse.accessToken
            Store.setObject('fb_access_token', fb_token)
            ezfb.api('/me', function(response){
              Store.setObject('fb_user_data', response)
            })
          }
        }, {scope: 'email,user_likes'})
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('Registration', ['ApiConfig', 'AccessToken', 'ezfb', '$http', 'Store', '$state', registration])
})()
