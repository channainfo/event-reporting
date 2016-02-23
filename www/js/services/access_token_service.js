(function(){
  var accessToken = function(ApiConfig, $http, Store){
    return {
      _name: 'app_token',
      setAppToken: function(success, failed){
        if(this.isSetAppToken()){
          var oauthToken = this.getAppToken()
          success(oauthToken)
          return;
        }
        this._authorizeApp(success, failed)
      },

      revokeAppToken: function(success, failed) {
        Store.clear(this._name)
        this._authorizeApp(success, failed)
      },

      getAppToken: function(){
        return Store.getObject(this._name)
      },

      isSetAppToken: function(){
        return this.getAppToken() != null ? true : false
      },

      //private:
      _authorizeApp: function(success, failed){
        var self = this
        var data = { grant_type: 'client_credentials',
                     client_id: ApiConfig.CLIENT_ID,
                     client_secret: ApiConfig.CLIENT_SECRET }
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
      }
    }
  }

  angular.module('bookmebus')
         .factory('AccessToken', ['ApiConfig', '$http', 'Store', accessToken ])

})()
