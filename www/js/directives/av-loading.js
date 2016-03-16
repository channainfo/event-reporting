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
  angular.module('bookmebus').directive('avLoading', ['Loading', avLoading])

})()
