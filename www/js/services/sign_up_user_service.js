(function(){
  var signUpUser = function(ApiConfig, AccessToken, $location, $http, Store){
    return {
              setUserData: function(user){
                $http({
                  method: 'POST',
                  url: ApiConfig.url('/api/v1/registrations'),
                  headers: AccessToken.getRequestHeader(),
                  data: user
                }).then(function (response) {
                    console.log(response)
                    Store.setObject('user_data', response.data)
                  }), function (response) {
                    console.log(response)
                  }
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
