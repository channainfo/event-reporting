(function(){
  angular.module('bookmebus')
         .factory('ApiConfig', function(){
            return{
              HOST: window.appSettings.server,
              CLIENT_ID: window.appSettings.clientId,
              CLIENT_SECRET: window.appSettings.clientSecret,
              DATE_FORMAT: window.appSettings.dateFormat,
              url: function(path){
                return this.HOST + path
              }
            }
         })
})()
