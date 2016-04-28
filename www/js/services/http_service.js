(function(){
  var http = function(ApiConfig, $http){
    return {
      request: function(params, success, failed){
        var options = {
          method : params['method'],
          url :  ApiConfig.serverUrl(params['url']),
          dataType: 'json',
          contentType: 'application/json',
          data : JSON.stringify(params['data'])
        }

        console.log("http request: ", options)
        $http(options)
        .then(function (response) {
            success(response)
         }, function (response) {
            failed(response)
        });
      }
    }
  }

  angular.module('reporting_module')
         .factory('Http', ['ApiConfig', '$http', http ])

})()
