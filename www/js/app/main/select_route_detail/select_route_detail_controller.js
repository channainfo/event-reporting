(function(){
  var selectRouteDetailController = function(){
    this.showMap = function(){
      avocado.debug.log("show boarding drop-off point map")
    }
  }

  angular.module('bookmebus')
         .controller('SelectRouteDetailController', selectRouteDetailController)
})()