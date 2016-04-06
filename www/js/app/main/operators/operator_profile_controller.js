(function(){
  var operatorProfileController = function($state, $mdBottomSheet, ApiConfig){
    this.operatorRoutes = {
                            'result':{
                              'data':[
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                },
                                { 'attributes':
                                  {
                                    'arrivalTime': "01:00 PM",
                                    'departureTime': "07:00 AM",
                                    'durationTime': "6h",
                                    'operator_logo':{
                                      'medium': "http://localhost:3000/uploads/operator/logo/1/medium_green-eagle-express.png",
                                      'thumb': "http://localhost:3000/uploads/operator/logo/1/thumb_green-eagle-express.png"
                                    },
                                    'operator_name': "G-express",
                                    'price_local': '12.5',
                                    'vehicle_type_name': "Van-01"
                                  }
                                }
                              ]
                            }
                          }

    this.branches = [
      { 'location': 'Phnom Penh Office',
        'address': 'No. 38E0, St. 215, S/K Mittapheap, Khan 7 Makara, Phnom Penh City, Kingdom of Cambodia',
        'tel': '010 666 583/ 010 666 584',
        'coords': {
          latitude: 11.575961,longitude: 104.925362
        }
      },
      { 'location': 'Siem Reap Office',
        'address': 'No. 38E0, St. 215, S/K Mittapheap, Khan 7 Makara, Phnom Penh City, Kingdom of Cambodia',
        'tel': '023 537 8999/ 010 666 584',
        'coords': {
          latitude: 13.359579,longitude: 103.858909
        }
      },
      { 'location': 'Sihanoukville Office',
        'address': 'No. 38E0, St. 215, S/K Mittapheap, Khan 7 Makara, Phnom Penh City, Kingdom of Cambodia',
        'tel': '023 537 8999/ 010 666 584',
        'coords': {
          latitude: 10.629566,longitude: 103.506729
        }
      },
      { 'location': 'Battambang Office',
        'address': 'No. 38E0, St. 215, S/K Mittapheap, Khan 7 Makara, Phnom Penh City, Kingdom of Cambodia',
        'tel': '023 537 8999/ 010 666 584',
        'coords': {
          latitude: 13.093598,longitude: 103.198398
        }
      },
      { 'location': 'Poipet Office',
        'address': 'No. 38E0, St. 215, S/K Mittapheap, Khan 7 Makara, Phnom Penh City, Kingdom of Cambodia',
        'tel': '023 537 8999/ 010 666 584',
        'coords': {
          latitude: 13.643289,longitude: 102.576599
        }
      }
    ]

    this.fbCommentUrl = ApiConfig.HOST

    this.showBottomSheet = function(){
      avocado.debug.log("Show bottom sheet")
    }

    this.showDetails = function(){
      $state.go('select_route_detail')
    }

    this.showBottomSheet = function(){
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/operators/operator_profile_bottom_sheet.html'
      })
    }

    this.viewMap = function(){
      $state.go('view_map')
    }
  }

  angular.module('bookmebus')
         .controller('OperatorProfileController', ['$state', '$mdBottomSheet', 'ApiConfig', operatorProfileController])
})()