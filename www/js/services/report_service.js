(function(){
  var reportService = function(ApiConfig, Http){
    return {
      create: function(report, success, failed) {
        report.created_at = new Date()
        report.updated_at = new Date()

        Http.request({
          method: 'POST',
          data: report,
          url: 'volunteer_event/'
        }, success, failed)
      },
      all: function(success, failed) {
        Http.request({
          method: 'GET',
          data: {},
          url: 'volunteer_event/_search'
        }, function(response) {
           console.log("data: ", response.data)
            success(response.data.hits)
        }, function(response){
            failed(response.data)
        })
      }
    }
  }

  angular.module('reporting_module')
         .factory('ReportService', ['ApiConfig', 'Http', reportService ])

})()
