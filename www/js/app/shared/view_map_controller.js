(function(){
  var viewMapController = function(){
    var map
    var locations = [
      { lat: 11.575961, lng: 104.925362, title: "#103 Eo, Sisowath Street, S.K Wat Phnom, Khan Daun Penh, Phnom Penh City, Kingdom of Cambodia" },
      { lat: 11.578774, lng: 104.924366, title: "#2020 , No Road 5, S.K Toul Sangke, Khan Russey Keo, Phnom Penh" }
    ]
    var location = new plugin.google.maps.LatLng(locations[0].lat, locations[0].lng)

    document.addEventListener("deviceready", function() {
      var element = document.querySelector('.mapCanvas')
      // Initialize the map view
      map = plugin.google.maps.Map.getMap(element, {
        'camera': {
          'latLng': location,
          'zoom': 15
        }
      })

      map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
        for(var i = 0; i<locations.length; i++){
          var locObj = new plugin.google.maps.LatLng(locations[i].lat,locations[i].lng);
          map.addMarker({
            'position': locObj,
            'title': locations[i].title
          }, function(marker) {
            marker.hideInfoWindow()
          })
        }
      })
    }, false);
  }

  angular.module('bookmebus')
         .controller('ViewMapController', viewMapController)
})()