(function(){
  var userToken = function(ApiConfig, $http, Store){
    return  {
      _name: 'user_token',
      isSignedIn: function(){
        return this.isSetUserToken()
      },

      signInUser: function(userParams, success, failed){
        if(this.isSignedIn()){
          var userToken = Store.getObject(this._name)
          success(userToken)
          return;
        }
        this._authenticateUser(userParams, success, failed)
      },

      signOutUser: function(userParams) {
        Store.clear(this._name)
      },

      getUserToken: function(){
        return Store.getObject(this._name)
      },

      isSetUserToken: function(){
        return this.getUserToken() != null ? true : false
      },

      //private:
      _authenticateUser: function(userParams, success, failed){
        var data = { grant_type: 'password',
                     client_id: ApiConfig.CLIENT_ID,
                     client_secret: ApiConfig.CLIENT_SECRET
                 }
        if(angular.isUndefined(userParams.fb_access_token)){
          data.username = userParams.username
          data.password = userParams.password
        }
        else
          data.fb_access_token = userParams.fb_access_token

        var self = this
        $http({
          method: 'POST',
          url: ApiConfig.url('/oauth/token'),
          data: data,
        })
        .then(function (response) {
            var oauthToken = response.data
            Store.setObject(self._name, oauthToken )
            success(oauthToken)
         }, function (response) {
            failed(response.data)
        });
      },
    }
  }

  angular.module('bookmebus')
         .factory('UserToken', ['ApiConfig', '$http', 'Store', userToken ])
})()
