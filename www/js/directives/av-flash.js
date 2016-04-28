(function(){
  var avFlash = function(Flash) {
    return {
      restrict: 'EC',
      templateUrl: 'js/directives/av-flash.html',
      link: function(scope){
        avocado.debug.log("Flash", Flash)
        scope.flash = Flash
      }
    }
  }
  angular.module('reporting_module').directive('avFlash', ['Flash', avFlash])

})()
