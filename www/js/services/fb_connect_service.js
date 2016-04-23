(function(){
  //
  var fbConnect = function(){
    return {
      fbData: function(success){
        facebookConnectPlugin.login(["email", "public_profile"], function(res) {
          if(res.authResponse) {
            var accessToken = res.authResponse.accessToken
            facebookConnectPlugin.api('/me', null,
              function(response) {
                var fbData = response
                fbData.accessToken = accessToken
                success(fbData)
              }
            )
          }
        })
      },

      fbToken: function(success){
        facebookConnectPlugin.login(["email"],
          function(){
            facebookConnectPlugin.getAccessToken(function(accessToken) {
              success(accessToken)
            })
          }
        )
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('FbConnect', fbConnect)
})()
