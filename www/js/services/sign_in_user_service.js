(function(){
  var signInUser = function(ApiConfig, AccessToken, $http, Store){
    return {
              requestUserToken: function(username, password){
                var data = {
                              grant_type: 'password',
                              client_id: ApiConfig.CLIENT_ID,
                              client_secret: ApiConfig.CLIENT_SECRET,
                              username: username,
                              password: password
                           }
                $http({
                  method: 'POST',
                  url: ApiConfig.url('/oauth/token'),
                  headers: AccessToken.getRequestHeader(),
                  data: data
                }).then(function (response) {
                    console.log(response.data)
                    Store.setObject('user_signin_token', response.data)
                  }), function (response) {
                    console.log(response)
                  }
              },
              getUserData: function(){
                return Store.getObject('user_signin_data')
              },
              isSetUserData: function(){
                return this.getUserData != null ? true : false
              }
           }
  }

  angular
    .module('bookmebus')
    .factory('SignInUser', ['ApiConfig', 'AccessToken', '$http', 'Store', signInUser])
})()