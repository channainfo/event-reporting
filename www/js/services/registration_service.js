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
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('Registration', ['ApiConfig', 'AccessToken', 'ezfb', '$http', 'Store', '$state', registration])
})()
