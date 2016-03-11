(function(){
  var searchResultController = function($mdBottomSheet, $state){
    this.searchRoutes = [{ id: 2,
                           type: "ticket_availability_results",
                           attributes: {
                             price_local: 10,
                             price_foreigner: 12,
                             price_unit: "usd",
                             operator_id: 1,
                             operator_name: "Thero Express",
                             operator_logo: {
                               thumb: "/uploads/operator/logo/1/thumb_thero-express.png",
                               medium: "/uploads/operator/logo/1/medium_thero-express.png"
                             },
                             rate: null,
                             vehicle_type_name: "Van-15",
                             vehicle_seats_count: 15,
                             amenities: ["wifi","water"],
                             departure: 27000,
                             duration: 21600,
                             arrival: 48600,
                             total_sold: 0,
                             availability: 15,
                             origin_id: 1,
                             destination_id: 2,
                             vehicle_code: "TE VAN02",
                             vehicle_name: "TE VAN02",
                             is_selectable: 1,
                             operator_status: "active"
                           }
                          },
                          { id:6,
                             type: "ticket_availability_results",
                             attributes: {
                               price_local: 11,
                               price_foreigner: 11,
                               price_unit: "usd",
                               operator_id: 1,
                               operator_name: "G Express",
                               operator_logo: {
                                 thumb: "/uploads/operator/logo/1/thumb_thero-express.png",
                                 medium: "/uploads/operator/logo/1/medium_thero-express.png"
                               },
                               rate: null,
                               vehicle_type_name: "Bus-32",
                               vehicle_seats_count: 15,
                               amenities: ["wifi","water"],
                               departure: 72000,
                               duration: 21600,
                               arrival: 93600,
                               total_sold: 0,
                               availability: 15,
                               origin_id: 1,
                               destination_id: 2,
                               vehicle_code: "TE VAN01",
                               vehicle_name: "TE VAN01",
                               is_selectable: 1,
                               operator_status: "active"
                             }
                          },
                          { id:3,
                             type: "ticket_availability_results",
                             attributes: {
                               price_local: 10,
                               price_foreigner: 12,
                               price_unit: "usd",
                               operator_id: 1,
                               operator_name: "Mekong Express",
                               operator_logo: {
                                 thumb: "/uploads/operator/logo/1/thumb_thero-express.png",
                                 medium: "/uploads/operator/logo/1/medium_thero-express.png"
                               },
                               rate: null,
                               vehicle_type_name: "Van-15",
                               vehicle_seats_count: 15,
                               amenities: ["wifi","water"],
                               departure: 34200,
                               duration: 21600,
                               arrival: 55800,
                               total_sold: 0,
                               availability: 15,
                               origin_id: 1,
                               destination_id: 2,
                               vehicle_code: "TE VAN01",
                               vehicle_name: "TE VAN01",
                               is_selectable: 1,
                               operator_status: "active"
                             }
                          }
                        ]

    this.getDepartureArrivalTime = function(index, key){
      return moment.utc(this.searchRoutes[index].attributes[key] * 1000).format('hh:mm A')
    }

    this.getRouteDuration = function(index){
      return this.showDuration(this.searchRoutes[index].attributes["duration"])
    }

    this.showDuration = function(number_of_seconds) {
      var result = [];
      var hour = parseInt(number_of_seconds / 3600);
      var minute =  parseInt(number_of_seconds - (hour * 3600)) / 60;

      if(hour > 0)
        result.push(hour + "h")
      if(minute > 0)
        result.push(minute + "min")

      return result.join(" ");
    }

    this.showBottomSheet = function(){
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/search_result/search_result_bottom_sheet.html'
      })
    }

    for(var i=0; i<this.searchRoutes.length; i++){
      this.searchRoutes[i].attributes.departure = this.getDepartureArrivalTime(i, 'departure')
      this.searchRoutes[i].attributes.arrival = this.getDepartureArrivalTime(i, 'arrival')
      this.searchRoutes[i].attributes.duration = this.getRouteDuration(i)
    }
  }

  angular.module('bookmebus')
         .controller('SearchResultController', ['$mdBottomSheet', '$state', searchResultController]);
})()