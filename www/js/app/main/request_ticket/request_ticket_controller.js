(function(){
  var requestTicketController = function($mdBottomSheet){
    this.genders= ['Female', 'Male']
    this.nationalities = [{ label: 'Cambodian', value: 1},{ label: 'Non-Cambodian', value: 0}]
    var passengersInfo = []
    var price = [12, 11]
    this.subTotal = 0

    this.pickUpSwitchChange = function(status){
      this.isPickUp = status
      if(status == false){
        this.passengerGender = ""
        this.name = ""
        this.address = ""
        this.note = ""
      }
    }

    this.showListBottomSheet = function() {
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/request_ticket/bottom_request_ticket_info.html'
      })
    }

  }

  angular.module('bookmebus')
         .controller('RequestTicketController', ['$mdBottomSheet', requestTicketController])
})()