(function(){
  angular.module('bookmebus')
         .factory('ApiConfig', function(){
            return{
              HOST: window.appSettings.server,
              BASE_API: window.appSettings.baseApi,
              CLIENT_ID: window.appSettings.clientId,
              CLIENT_SECRET: window.appSettings.clientSecret,
              DATE_FORMAT: window.appSettings.dateFormat,

              DAY_INSTANT_BOOKING_PREVENTION_IN_SECOND: window.appSettings.dayInstantBookingPreventionInSecond,
              NIGHT_INSTANT_BOOKING_PREVENTION_IN_SECOND: window.appSettings.nightInstantBookingPreventionInSecond,

              OPERATOR_ALLOW_SEAT_SELECTION: window.appSettings.operatorAllowSeatSelection,

              apiUrl: function(path){
                return this.BASE_API + path
              },
              authUrl: function(path){
                return this.HOST + "oauth/token"
              }

            }
         })
})()
