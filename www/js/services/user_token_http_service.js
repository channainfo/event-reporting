(function(){
  var userTokenHttp = function(ApiConfig, UserToken, $http){
    return {
      request: function(httpOptions, success, failed){
        httpOptions.headers = UserToken.getRequestHeader()
        httpOptions.url = ApiConfig.apiUrl(httpOptions.url)
        $http(httpOptions).then(success, failed)
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('UserTokenHttp', ['ApiConfig', 'UserToken', '$http', userTokenHttp])
})()
