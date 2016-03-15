(function(){
  var ticketSearch = function(UserTokenHttp){
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
          success(self.result)
        } ,function(response){
          failed(response.data)
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
         .factory('TicketSearch', ['UserTokenHttp', ticketSearch])
})()