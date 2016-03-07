(function(){
  var ticketSearchController = function(){
    this.myDate = new Date(Date.now() + (1 * 24 * 60 * 60 * 1000))
    this.minDate = new Date(
      this.myDate.getFullYear(),
      this.myDate.getMonth(),
      this.myDate.getDate() - 1
    )
  }

  angular.module('bookmebus')
         .controller('TicketSearchController', ticketSearchController)
})()