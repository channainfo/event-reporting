(function(){
  var userTokenHttp = function(ApiConfig, UserToken, $http){
    return {
      request: function(httpOptions, success, failed){
        httpOptions.headers = UserToken.getRequestHeader()
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
    .factory('UserTokenHttp', ['ApiConfig', 'UserToken', '$http', userTokenHttp])
})()
