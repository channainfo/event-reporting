(function(){
  var avLoading = function(Loading) {
    return {
      restrict: 'EC',
      templateUrl: 'js/directives/av-loading.html',
      link: function(scope){
        scope.loading = Loading
      }
    }
  }
  angular.module('reporting_module').directive('avLoading', ['Loading', avLoading])

})()
