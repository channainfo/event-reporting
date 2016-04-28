(function(){
  angular.module('reporting_module')
         .factory('Loading', function(){
            return{
              isVisible: false,

              show: function() {
                this.isVisible = true
              },
              hide: function() {
                this.isVisible = false
              }
            }
         })
})()