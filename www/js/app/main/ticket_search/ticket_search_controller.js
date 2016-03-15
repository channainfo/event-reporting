(function(){
  var ticketSearchController = function($state, Location, TicketSearch, Store){
    var self = this
    this.config = {}
    this.config.minDate = moment().toDate()

    this.params = {
      from: '',
      to: '',
      on_date: moment().add(1, 'days').toDate()
    }

    this.origins = function(){
      var locations = Location.readStore()
      locations.sort(function(a, b){
        return b.attributes.hits_origin - a.attributes.hits_origin
      })
      var result = []

      for(var i=0;i<locations.length; i++) {
        if(locations[i].attributes.name != self.params.to) {
          if(self.params.from == "")
            result.push(locations[i])
          else if(locations[i].attributes.name_lower.indexOf(self.params.from.toLowerCase()) != -1)
            result.push(locations[i])
        }
      }
      return result
    }

    this.destinations = function(){
      var locations = Location.readStore()
      locations.sort(function(a, b){
        return b.attributes.hits_destination - a.attributes.hits_destination
      })
      var result = []

      for(var i=0;i< locations.length; i++) {
        if(locations[i].attributes.name != self.params.from) {
          if(self.params.to == "")
            result.push(locations[i])
          else if(locations[i].attributes.name_lower.indexOf(self.params.to.toLowerCase()) != -1)
            result.push(locations[i])
        }
      }
      return result
    }

    this.swapLocation = function() {
      var from = self.params.from
      self.params.from = self.params.to
      self.params.to = from
    }

    this.findTickets = function(){
      TicketSearch.run(self.params)
      $state.go('search_result')
    }

    this.ticketSearchSuccess = function(searchResult){
      avocado.debug.log(searchResult)
      //if(TicketSearch.hasResult() || TicketSearch.hasSuggested())
        $state.go('search_result')
    }

    this.ticketSearchFailed = function(response){
      avocado.debug.log(response)
      avocado.debug.log('search failed')
    }

  }

  angular.module('bookmebus')
         .controller('TicketSearchController', ['$state', 'Location', 'TicketSearch', 'Store', ticketSearchController ])
})()
