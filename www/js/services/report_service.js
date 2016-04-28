(function(){
  var reportService = function(ApiConfig, Http){
    return {
      create: function(report, success, failed) {
        report.created_at = new Date()
        report.updated_at = new Date()

        Http.request({
          method: 'POST',
          data: report,
          url: 'reports/'
        }, success, failed)
      },
      all: function(success, failed) {
        http.request({
          method: 'GET',
          data: {},
          url: 'reports/_search'
        })
      }
    }
  }

  angular.module('reporting_module')
         .factory('ReportService', ['ApiConfig', 'Http', reportService ])

})()
