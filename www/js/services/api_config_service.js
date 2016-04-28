(function(){
  angular.module('reporting_module')
         .factory('ApiConfig', function(){
            return{
              SERVER: window.appSettings.server,
              BASE_API: window.appSettings.baseApi,
              CLIENT_ID: window.appSettings.clientId,
              CLIENT_SECRET: window.appSettings.clientSecret,
              DATE_FORMAT: window.appSettings.dateFormat,

              DAY_INSTANT_BOOKING_PREVENTION_IN_SECOND: window.appSettings.dayInstantBookingPreventionInSecond,
              NIGHT_INSTANT_BOOKING_PREVENTION_IN_SECOND: window.appSettings.nightInstantBookingPreventionInSecond,

              OPERATOR_ALLOW_SEAT_SELECTION: window.appSettings.operatorAllowSeatSelection,

              serverUrl: function(path){
                return this.SERVER + path
              },

            }
         })
})()
