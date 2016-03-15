(function(){
  var searchResultController = function($scope, $mdBottomSheet, $state, ApiConfig, TicketSearch){
    this.host = ApiConfig.HOST
    this.resultDecorator = null
    var self = this

    $scope.$on('ticketSearchSuccess', function(event, data){
      avocado.debug.log("Data = ", data)
      self.searchResultDecorate()
    })

    this.searchResultDecorate = function(){
      TicketSearch.decorateResult()
      this.resultDecorator = TicketSearch
    }

    this.showBottomSheet = function(){
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/search_result/search_result_bottom_sheet.html'
      })
    }


  }

  angular.module('bookmebus')
         .controller('SearchResultController', ['$scope', '$mdBottomSheet', '$state', 'ApiConfig', 'TicketSearch',
                                               searchResultController]);
})()
