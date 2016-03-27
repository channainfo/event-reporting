(function(){
  var userToken = function(ApiConfig, $http, Store){
    return  {
      _appVisited: 'appVisited',
      _name: 'user_token',

      isAppVisited: function(){
        return Store.get(this._appVisited) != undefined
      },

      setAppVisited: function(){
        Store.set(this._appVisited, "yes")
      },

      isSignedIn: function(){
        return this.isSetUserToken()
      },

      destroy: function() {
        Store.clear(this._name)
      },

      getUserToken: function(){
        return Store.getObject(this._name)
      },

      isSetUserToken: function(){
        return this.getUserToken() != null ? true : false
      },

      getRequestHeader: function(){
        return {
                  Accept: 'application/json',
                  Authorization: 'Bearer ' + Store.getObject('user_token').access_token
               }
      },

      signInUser: function(userParams, success, failed){
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
          url: ApiConfig.authUrl(),
          data: data,
        })
        .then(function (response) {
            var oauthToken = response.data
            Store.setObject(self._name, oauthToken )
            success(oauthToken)
         }, function (response) {
            failed(response.data)
        });
      }
    }
  }

  angular.module('bookmebus')
         .factory('UserToken', ['ApiConfig', '$http', 'Store', userToken ])
})()
