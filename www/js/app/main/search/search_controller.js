(function(){
  var searchController = function($rootScope, $state, ReportService){
    this.defaultPage = 1
    this.defaultSize = 2
    var self = this

    this.init = function(){
      ReportService.all(function(records){
        self.records = records
        console.log("records: ", self.records)
      }, function(response) {
        console.log("response: ", response)
      })
    }

  }

  angular
    .module('reporting_module')
    .controller('SearchController',['$rootScope', '$state', 'ReportService', searchController])
})()
