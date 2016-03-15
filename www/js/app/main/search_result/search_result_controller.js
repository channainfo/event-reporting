(function(){
  var searchResultController = function($mdBottomSheet, $state, ApiConfig, SearchResult){
    this.host = ApiConfig.HOST
    this.resultDecorator = null

    this.searchResultDecorate = function(){
      SearchResult.decorate()
      this.resultDecorator = SearchResult
    }


    this.showBottomSheet = function(){
      $mdBottomSheet.show({
        templateUrl: 'js/app/main/search_result/search_result_bottom_sheet.html'
      })
    }

    
  }

  angular.module('bookmebus')
         .controller('SearchResultController', ['$mdBottomSheet', '$state', 'ApiConfig', 'SearchResult',
                                               searchResultController]);
})()