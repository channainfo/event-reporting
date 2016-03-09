//http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
(function(){
  var accessTokenCheck = function($q, $injector, ApiConfig) {
    return  {
      responseError: function(response) {
          // Session has expired
          if (response.status == 419){
              var AccessToken = $injector.get('AccessToken');
              var $http = $injector.get('$http');
              var deferred = $q.defer();

              AccessToken.authorizeApp().then(deferred.resolve, deferred.reject);

              // When the session recovered, make the same backend call again and chain the request
              return deferred.promise.then(function() {
                  return $http(response.config);
              });
          }
          return $q.reject(response);
      }
  }

  angular.module('bookmebus')
         .factory('AccessTokenCheck', ['$q', '$injector' , accessTokenCheck ])
})()
