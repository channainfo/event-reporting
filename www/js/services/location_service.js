(function(){
  var location = function(AccessTokenHttp, Store){
    return {
      name: 'locations',
      path: 'locations',
      readStore: function(){
        return Store.getObject(this.name)
      },
      writeStore: function(data){
        Store.setObject(this.name, data)
      },
      findById: function(id){
        var locations = this.readStore()
        for(var i=0; i<locations.length; i++)
          if(locations[i]['id'] == id)
            return locations[i]
        return null
      },
      load: function(success, failed){
        var options = {
          method: 'GET',
          url: this.path,
        }
        var self = this
        AccessTokenHttp.request(options, function(response){
          avocado.debug.log("writting to store: ", response.data.data)
          self.writeStore(response.data.data)
          if(angular.isDefined(success))
            success(response.data.data)
        }, function(response){
          avocado.debug.log("failed to load locations with: ", response.data)
          if(angular.isDefined(failed))
            failed(response.data)
        })
      }
    }
  }

  angular.module('bookmebus').factory('Location', ['AccessTokenHttp', 'Store', location])
})()
