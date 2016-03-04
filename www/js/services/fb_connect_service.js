(function(){
  var fbConnect = function(ezfb){
    return {
      fbData: function(success){
        ezfb.login(function(res) {
          if(res.authResponse) {
            var accessToken = res.authResponse.accessToken
            ezfb.api('/me', function(response){
              var fbData = response
              fbData.accessToken = accessToken
              success(fbData)
            })
          }
        }, {scope: 'email, public_profile'})
      },

      fbToken: function(success){
        ezfb.login(function(res) {
          if(res.authResponse) {
            var accessToken = res.authResponse.accessToken
            success(accessToken)
          }
        })
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('FbConnect', ['ezfb', fbConnect])
})()
