(function(){
  var accessTokenHttp = function(ApiConfig, AccessToken, $http){
    return {
      request: function(httpOptions, success, failed){
        httpOptions.headers = AccessToken.getRequestHeader()
        httpOptions.url = ApiConfig.apiUrl(httpOptions.url)
        $http(httpOptions).then(success, failed)
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('AccessTokenHttp', ['ApiConfig','AccessToken', '$http', accessTokenHttp])
})()
