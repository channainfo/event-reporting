(function(){
  var avFlashReset = function(Flash) {
    return {
      restrict: 'C',
      link: function(scope, element){
        $(element).on('keydown', function(){
          Flash.reset()
        })
      }
    }
  }
  angular.module('bookmebus').directive('avFlashReset', ['Flash', avFlashReset])

})()
