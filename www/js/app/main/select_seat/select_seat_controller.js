(function(){
  var selectSeatController = function(){
    this.route = {
                    "data": {
                      "id": "1",
                      "type": "vehicle_seat_availabilities",
                      "attributes": {
                        "vehicle": {
                          "id": 1,
                          "name": "TE VAN01",
                          "code": "TE VAN01",
                          "amenities": ["wifi", "water"],
                          "status": "active",
                          "vehicle_seats_count": 15,
                          "vehicle_type": {
                            "id": 1,
                            "name": "Van-15",
                            "column": 4,
                            "row": 5,
                            "layouts": [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                            "amenities": ["wifi", "water"]
                          }
                        },
                        "seats": [{
                          "id": 1,
                          "position": 2,
                          "label": "A1",
                          "status": "pending",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 2,
                          "position": 3,
                          "label": "A2",
                          "status": "pending",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 3,
                          "position": 4,
                          "label": "A3",
                          "status": "pending",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 4,
                          "position": 5,
                          "label": "A4",
                          "status": "pending",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 5,
                          "position": 6,
                          "label": "A5",
                          "status": "pending",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 6,
                          "position": 8,
                          "label": "A6",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 7,
                          "position": 9,
                          "label": "A7",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 8,
                          "position": 11,
                          "label": "A8",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 9,
                          "position": 12,
                          "label": "A9",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 10,
                          "position": 13,
                          "label": "A10",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 11,
                          "position": 15,
                          "label": "A11",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 12,
                          "position": 16,
                          "label": "A12",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 13,
                          "position": 17,
                          "label": "A13",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 14,
                          "position": 18,
                          "label": "A14",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }, {
                          "id": 15,
                          "position": 19,
                          "label": "A15",
                          "status": "available",
                          "booked_at": null,
                          "booked_expired_at": null
                        }],
                        "route_schedule_vehicle": {
                          "id": 1,
                          "price_local": 10,
                          "price_foreigner": 12,
                          "price_unit": "usd"
                        }
                      }
                    }
                  }

    this.numOfRows = this.route.data.attributes.vehicle.vehicle_type['row']
    this.numOfCols = this.route.data.attributes.vehicle.vehicle_type['column']
    this.rows = []
    this.cols = []

    for(var i=0; i<this.numOfRows; i++){
      this.rows.push(i)
    }
    for(var i=0; i<this.numOfCols; i++){
      this.cols.push(i)
    }

    this.seats = this.route.data.attributes['seats']

    var result = {}
    for(var i=0; i<this.seats.length;i++){
      result[this.seats[i].position] = this.seats[i]
    }
    this.seats = result

    this.currentSeat = null
    this.hasSeat = function(row, col){
      var position = row * this.numOfCols + col
      this.currentSeat = this.seats[position]
      if (this.currentSeat != undefined)
        return true
      else
        return false
    }

    this.numOfSeats = []
    this.selectSeat = function(ev){
      var selectedSeat = angular.element(ev.currentTarget)
      var selectedSeatValue = ev.currentTarget.childNodes[1].outerText
      if(selectedSeat.hasClass('selected-seat') == true){
        selectedSeat.removeClass('selected-seat')
        for(var i=0; i<this.numOfSeats.length; i++){
          if(this.numOfSeats[i] == selectedSeatValue){
            this.numOfSeats.splice(i, 1)
          }
        }
      }
      else{
        selectedSeat.addClass('selected-seat')
        this.numOfSeats.push(selectedSeatValue)
      }
    }
  }

  angular.module('bookmebus')
         .controller('SelectSeatController', selectSeatController)
})()