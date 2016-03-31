(function(){
  var searchResultController = function($scope, $mdBottomSheet, $state, TicketSearch, Loading){
    this.resultDecorator = null
    this.findTicketError = false
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

    this.findSuggestedTickets = function(originName, destinationName){
      var params = {
        from: originName,
        to: destinationName,
        on_date: this.resultDecorator.attributes['on_date']
      }

      TicketSearch.run(params, self.suggestedRouteSearchSuccess, self.suggestedRouteSearchFailed)
      Loading.show()
      $state.go('search_result')
    }

    this.suggestedRouteSearchSuccess = function(searchResult){
      Loading.hide()
      self.searchResultDecorate()
    }

    this.suggestedRouteSearchFailed = function(searchError){
      self.findTicketError = true
    }
  }

  angular.module('bookmebus')
         .controller('SearchResultController', ['$scope', '$mdBottomSheet', '$state', 'TicketSearch', 'Loading',
                                               searchResultController]);
})()
