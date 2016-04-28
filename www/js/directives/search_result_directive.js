(function(){
  angular.module('reporting_module')
         .directive('searchResult', function(){
            return{
              templateUrl: 'js/directives/search_result_tmpl.html',
              scope: {
                result: "=",
                departureAvailable: "=",
                showBottomSheet: "&",
                showDetails: "&"
              }
            }
         })
})()
