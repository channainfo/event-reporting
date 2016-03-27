(function(){
  var ticketSearchController = function($rootScope, $state, Location, TicketSearch, Loading, Flash){
    var self = this
    this.config = {}
    this.config.minDate = moment().toDate()

    this.params = {
      from: "",
      to: "",
      on_date: TicketSearch.attributes['on_date'] || moment().add(1, 'days').toDate()
    }

    this.origins = []
    this.destinations = []

    this.loadOrigins = function(){
      Flash.reset()
      var locations = Location.readStore()
      locations.sort(function(a, b){
        return b.attributes.hits_origin - a.attributes.hits_origin
      })
      this.origins = locations
    }

    this.loadDestinations = function(){
      Flash.reset()
      var locations = Location.readStore()
      locations.sort(function(a, b){
        return b.attributes.hits_destination - a.attributes.hits_destination
      })
      this.destinations = locations
    }

    this.swapLocation = function() {
      var from = self.params.from
      self.params.from = self.params.to
      self.params.to = from
    }

    this.findTickets = function(){
      if(self.params.from == "" || self.params.to == ""){
        Flash.setErrorMessage("Origin/Destination can't be blank")
        return
      }
      TicketSearch.run(self.params, self.ticketSearchSuccess, self.ticketSearchFailed)
      Loading.show()
      $state.go('search_result')
    }

    this.ticketSearchSuccess = function(searchResult){
      Loading.hide()
      $rootScope.$broadcast('ticketSearchSuccess', searchResult)
    }

    this.ticketSearchFailed = function(searchError){
      $rootScope.$broadcast('ticketSearchFailed', searchError)
    }

  }

  angular.module('bookmebus')
         .controller('TicketSearchController', ['$rootScope', '$state', 'Location', 'TicketSearch', 'Loading', 'Flash', ticketSearchController ])
})()
