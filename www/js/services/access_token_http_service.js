(function(){
  var accessTokenHttp = function(ApiConfig, AccessToken, $http){
    return {
      request: function(httpOptions, success, failed){
        httpOptions.headers = AccessToken.getRequestHeader()
        httpOptions.url = ApiConfig.apiUrl(httpOptions.url)

        if(success !== undefined && failed !== undefined)
          $http(httpOptions).then(success, failed)
        else if(success !== undefined)
          $http(httpOptions).then(success)
        else
          $http(httpOptions)
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('AccessTokenHttp', ['ApiConfig','AccessToken', '$http', accessTokenHttp])
})()
