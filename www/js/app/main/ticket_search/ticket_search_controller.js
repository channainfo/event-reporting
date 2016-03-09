(function(){
  var ticketSearchController = function(Location){
    var self = this
    this.config = {}
    this.config.minDate = moment().toDate()

    this.params = {
      origin: '',
      destination: '',
      on_date: moment().add(1, 'days').toDate()
    }

    this.origins = function(){
      var locations = Location.readStore()
      locations.sort(function(a, b){
        return b.attributes.hits_origin - a.attributes.hits_origin
      })
      var result = []

      for(var i=0;i<locations.length; i++) {
        if(locations[i].attributes.name != self.params.destination) {
          if(self.params.origin == "")
            result.push(locations[i])
          else if(locations[i].attributes.name_lower.indexOf(self.params.origin.toLowerCase()) != -1)
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
        if(locations[i].attributes.name != self.params.origin) {
          if(self.params.destination == "")
            result.push(locations[i])
          else if(locations[i].attributes.name_lower.indexOf(self.params.destination.toLowerCase()) != -1)
            result.push(locations[i])
        }
      }
      return result
    }

    this.swapLocation = function() {
      var origin = self.params.origin
      self.params.origin = self.params.destination
      self.params.destination = origin
    }

  }

  angular.module('bookmebus')
         .controller('TicketSearchController', ['Location', ticketSearchController ])
})()
