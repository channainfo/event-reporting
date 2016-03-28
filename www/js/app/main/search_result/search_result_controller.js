(function(){
  var searchResultController = function($scope, $mdBottomSheet, $state, TicketSearch){
    this.resultDecorator = null
    var self = this

    $scope.$on('ticketSearchSuccess', function(event, data){
      self.searchResultDecorate()
    })

    this.searchResultDecorate = function(){
      TicketSearch.decorate()
      this.resultDecorator = TicketSearch
    }

    this.showBottomSheet = function(){
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/search_result/search_result_bottom_sheet.html'
      })
    }

    this.showDetails = function(){
      $state.go('select_route_detail')
    }
  }

  angular.module('bookmebus')
         .controller('SearchResultController', ['$scope', '$mdBottomSheet', '$state', 'TicketSearch',
                                               searchResultController]);
})()
