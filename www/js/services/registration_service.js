(function(){
  var registration = function(AccessTokenHttp){
    return {
      create: function(userParams, success, failed){

        var options = {
          method: 'POST',
          url: 'registrations',
          data: userParams
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
    .factory('Registration', ['AccessTokenHttp', registration])
})()
