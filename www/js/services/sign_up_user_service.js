(function(){
  var signUpUser = function(ApiConfig, AccessToken, $location, $http, Store){
    return {
              setUserData: function(email, mobile, password, username){
                var data = {
                              email: email,
                              mobile_phone: mobile,
                              password: password,
                              username: username,
                              fb_access_token: ''
                           }
                $http({
                  method: 'POST',
                  url: ApiConfig.url('/api/v1/registrations'),
                  headers: AccessToken.getRequestHeader(),
                  data: data
                }).then(function (response) {
                    console.log(response)
                    Store.setObject('user_data', response.data)
                  }), function (response) {
                    console.log(response)
                  }
                $location.url('/sign_in')
              },
              getUserData: function(){
                return Store.getObject('user_data')
              },
              isSetUserData: function(){
                return this.getUserData != null ? true : false
              }
           }
  }

  angular
    .module('bookmebus')
    .factory('SignUpUser', ['ApiConfig', 'AccessToken', '$location', '$http', 'Store', signUpUser])
})()