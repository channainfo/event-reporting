(function(){
   var passengerDetailController = function($mdBottomSheet){
    // this.selectedSeatInfo = SelectedSeat.getNumOfSeats()
    this.genders = ['Female', 'Male']
    this.nationalities = [{ label: 'Cambodian', value: 1}, { label:'Non-Cambodian', value: 0}]
    this.passengerNationalities = []
    this.totalPrice = 12
    var passengersInfo = []
    this.price = [12, 11]
    var allNationality = []

    this.pickUpSwitchChange = function(status){
      this.isPickUp = status
      if(status == false){
        this.name = ""
        this.address =""
        this.note = ""
        this.isChecked = false;
        this.passengerGender = ""
      }
    }

    this.showListBottomSheet = function() {
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/passenger_detail/bottom_passenger_detail_info.html'
      })
    };

    this.tripSummaryNext = function(){
      alert("ok")
    }

  }


  angular.module('bookmebus')
         .controller('PassengerDetailController', ['$mdBottomSheet', passengerDetailController])
})()