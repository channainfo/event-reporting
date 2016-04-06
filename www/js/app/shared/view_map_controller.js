(function(){
  var viewMapController = function(){
    this.map = {
      center: { latitude: 11.575961, longitude: 104.925362 },
      zoom: 15
    }

    this.marker = [
      {
        id: 1,
        latitude: 11.575961,
        longitude: 104.925362
      },
      {
        id: 2,
        latitude: 11.578774,
        longitude: 104.924366
      },
      {
        id: 3,
        latitude: 11.574907,
        longitude: 104.927049
      }
    ]

    this.option = {
      draggable: false
    }
  }

  angular.module('bookmebus')
         .controller('ViewMapController', viewMapController)
})()