(function(){
  var ticketSearchController = function(){
    this.config = {}
    this.config.minDate = moment().toDate()

    this.params = {
      from: '',
      to: '',
      on_date: moment().add(1, 'days').toDate()
    }
  }

  angular.module('bookmebus')
         .controller('TicketSearchController', ticketSearchController)
})()
