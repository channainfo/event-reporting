(function(){
  var searchResultController = function($scope, $mdBottomSheet, $state, ApiConfig, TicketSearch){
    this.host = ApiConfig.HOST
    this.resultDecorator = null
    this.suggestedResultDecorator = null
    this.hasResult = false
    this.hasSuggested = false
    var self = this

    $scope.$on('ticketSearchSuccess', function(event, data){
      avocado.debug.log("Data = ", data)
      if(TicketSearch.hasResult()){
        self.hasResult = true
        self.searchResultDecorate()
      }
      else if(TicketSearch.hasSuggested()){
        self.hasSuggested = true
        self.suggestedResultDecorate()
      }
    })

    this.searchResultDecorate = function(){
      TicketSearch.decorateResult()
      this.resultDecorator = TicketSearch
    }

    this.suggestedResultDecorate = function(){
      TicketSearch.decorateSuggestedResult()
      this.suggestedResultDecorator = TicketSearch
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
