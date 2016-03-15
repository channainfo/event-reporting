(function(){
  var ticketSearch = function(UserTokenHttp){
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

      decorateResult: function(){
        if(this.result) {
          for(var i=0; i< this.result['data'].length; i++){
            this.result['data'][i].attributes['departureTime'] = avocado.dateTime.getTimeFromSec(this.result['data'][i].attributes['departure'])
            this.result['data'][i].attributes['arrivalTime'] = avocado.dateTime.getTimeFromSec(this.result['data'][i].attributes['arrival'])
            this.result['data'][i].attributes['durationTime'] = avocado.dateTime.getTimeIntervalFromSec(this.result['data'][i].attributes['duration'])
          }
        }
      },

      hasResult: function(){
        return this.result.meta['type'] == 'result'
      },

      hasSuggested: function(){
        return this.result.meta['type'] == 'no_result' && this.result.data.length > 0
      }
    }
  }

  angular.module('bookmebus')
         .factory('TicketSearch', ['UserTokenHttp', ticketSearch])
})()
