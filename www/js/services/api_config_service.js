(function(){
  angular.module('bookmebus')
         .factory('ApiConfig', function(){
            return{
              HOST: window.appSettings.server,
              BASE_API: window.appSettings.baseApi,
              CLIENT_ID: window.appSettings.clientId,
              CLIENT_SECRET: window.appSettings.clientSecret,
              DATE_FORMAT: window.appSettings.dateFormat,

              apiUrl: function(path){
                return this.BASE_API + path
              },
              authUrl: function(path){
                return this.HOST + "oauth/token"
              }

            }
         })
})()
