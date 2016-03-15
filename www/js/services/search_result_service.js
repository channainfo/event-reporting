(function(){
  var searchResult = function(TicketSearch){
    return {
      result: null,
      attributes: null,

      decorate: function(){
        var result = TicketSearch.result
        this.attributes = TicketSearch.attributes
        if(result != null)
          this._decorateResult()
      },

      _decorateResult: function(){
        var result = TicketSearch.result
        for(var i=0; i<result['data'].length; i++){
          result['data'][i].attributes['departureTime'] = avocado.dateTime.getTimeFromSec(result['data'][i].attributes['departure'])
          result['data'][i].attributes['arrivalTime'] = avocado.dateTime.getTimeFromSec(result['data'][i].attributes['arrival'])
          result['data'][i].attributes['durationTime'] = avocado.dateTime.getTimeIntervalFromSec(result['data'][i].attributes['duration'])
        }

        this.result = result
        avocado.debug.log("Search result = ", this.result)
      }
    }
  }

  angular.module('bookmebus')
         .factory('SearchResult', ['TicketSearch', searchResult])
})()