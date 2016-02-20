angular.module('bookmebus')
       .factory('AccessToken', ['ApiConfig', '$http', 'Store', function(ApiConfig, $http, Store){
          return{
            setAppToken: function(){
              var data = {
                            grant_type: 'client_credentials',
                            client_id: ApiConfig.CLIENT_ID,
                            client_secret: ApiConfig.CLIENT_SECRET
                          }
                        console.log(data)
              $http({
                method: 'POST',
                url: ApiConfig.url('/oauth/token'),
                data: data,

              }).then(function (response) {
                  Store.setObject('app_token', response.data)
                }, function (response) {
                  console.log(response)
                });
            },
            getAppToken: function(){
              return Store.getObject('app_token')
            },
            isSetAppToken: function(){
              return this.getAppToken != null ? true : false
            }
          }
       }])