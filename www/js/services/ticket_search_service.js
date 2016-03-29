(function(){
  var ticketSearch = function(UserTokenHttp, Location, ApiConfig){
    return {
      result: null,
      attributes: {},
      run: function(searchParams, success, failed){
        var self = this
        self.result = null
        self.attributes = searchParams
        var options = {
                        method: 'GET',
                        url: 'ticket_searches',
                        params: searchParams
                      }

        UserTokenHttp.request( options, function(response){
          self.result = response.data
          success(self.result)
        } ,function(response){
          failed(response.data)
        })
      },

      decorate: function() {
        if(this.hasResult()){
          this.sortResult()
          this.decorateResult()
        }
        else if(this.hasSuggested())
          this.decorateSuggestedResult()
      },

      sortResult: function(){
        var departureNotOverDataSet = [];
        var departureOverDataSet = [];

        if(moment().isSame(this.attributes['on_date'], 'day')) {
          for(var i=0; i<this.result['data'].length; i++) {
            if(moment.duration(moment().format("HH:mm")).asSeconds() > this.result.data[i].attributes['departure']) {
              departureOverDataSet.push(this.result.data[i]);
            }
            else {
             departureNotOverDataSet.push(this.result.data[i]);
            }
          }
          this.result.data = $.merge(departureNotOverDataSet, departureOverDataSet)
        }
      },

      decorateResult: function(){
        if(this.result) {
          for(var i=0; i< this.result['data'].length; i++){
            this.result['data'][i].attributes['departureTime'] = avocado.dateTime.getTimeFromSec(this.result['data'][i].attributes['departure'])
            this.result['data'][i].attributes['arrivalTime'] = avocado.dateTime.getTimeFromSec(this.result['data'][i].attributes['arrival'])
            this.result['data'][i].attributes['durationTime'] = avocado.dateTime.getTimeIntervalFromSec(this.result['data'][i].attributes['duration'])
          }
        }
      },

      decorateSuggestedResult: function(){
        if(this.result){
          for(var i=0; i< this.result['data'].length; i++){
            var locationObj = {
              id: this.result['data'][i],
              name: this.getSuggestedLocationName(this.result['data'][i])
            }
            this.result['data'][i] = locationObj
          }
        }
      },

      getSuggestedLocationName: function(id){
        return Location.findById(id).attributes['name']
      },

      hasResult: function(){
        return this.result && this.result.meta['type'] == 'result'
      },

      hasSuggested: function(){
        return this.result && this.result.meta['type'] == 'no_result' && this.result.data.length > 0
      },

      hasNoSuggested: function(){
        return this.result && this.result.meta['type'] == 'no_result' && this.result.data.length == 0
      },

      hasTypo: function() {
        return this.result && this.result.meta['type'] == 'typo'
      },

      isDepartureAvailable: function(index){
        if(this.result != "")
        // (If selected date < today) OR (If selected date = today AND departure time < current time)
        if(moment().isAfter(this.attributes['on_date'], 'day') || moment().isSame(this.attributes['on_date'], 'day')
          && moment.duration(moment().format("HH:mm")).asSeconds() > this.result.data[index].attributes['departure']){
          return "Over"
        }
        else{
          // if selected date = today and day time and departure < 3 hours from now, except some operators
          if(moment().isSame(this.attributes['on_date'], 'day') && avocado.dayInterval.isDayTime()
          && avocado.dayInterval.isHourFromNow(this.result.data[index].attributes['departure'], ApiConfig.DAY_INSTANT_BOOKING_PREVENTION_IN_SECOND)
          && !avocado.selectableSeat.isAllowInstantBooking(this.result.data[index].attributes['operator_id'], ApiConfig.OPERATOR_ALLOW_SEAT_SELECTION)) {
            return "N/A"
          }
          // if selected date = today and night time and departure < 8 hours from now, except some opertors
          else if(moment().isSame(this.attributes['on_date'], 'day') && avocado.dayInterval.isNightTime()
          && avocado.dayInterval.isHourFromNow(this.result.data[index].attributes['departure'], ApiConfig.NIGHT_INSTANT_BOOKING_PREVENTION_IN_SECOND)
          && !avocado.selectableSeat.isAllowInstantBooking(this.result.data[index].attributes['operator_id'], ApiConfig.OPERATOR_ALLOW_SEAT_SELECTION)) {
            return "N/A"
          }
          else {
            if(this.result.data[index].attributes['availability'] > 0){
              return ""
            }
            else{
              return "Full"
            }
          }
        }
      }

    }
  }

  angular.module('bookmebus')
         .factory('TicketSearch', ['UserTokenHttp', 'Location', 'ApiConfig', ticketSearch])
})()
