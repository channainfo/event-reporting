(function(){
  var ticketSearch = function($rootScope, UserTokenHttp){
    return {
      result: null,
      attributes: {},
      run: function(searchParams, success, failed){
        var self = this
        self.result = null
        self.attributes = searchParams
        var options = {
                        method: 'GET',
                        url: 'ticket_searches',
                        params: searchParams
                      }

        UserTokenHttp.request( options, function(response){
          self.result = response.data
          $rootScope.$broadcast('ticketSearchSuccess', self.result)
        } ,function(response){
          $rootScope.$broadcast('ticketSearchFailed', self.result)
        })
      },

      getResult: function(){
        return this.result
      },

      hasResult: function(){
        return this.result.meta['type'] == 'result'
      },

      hasSuggested: function(){
        return this.result.meta['type'] == 'no_result' && this.result.data.length > 0
      }
    }
  }

  angular.module('bookmebus')
         .factory('TicketSearch', ['$rootScope', 'UserTokenHttp', ticketSearch])
})()