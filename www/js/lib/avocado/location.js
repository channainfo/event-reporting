avocado.location = function(locations) {
  this.records = locations

  this.origins = function(){
    this.records.sort(function(a, b){
      return  b.attributes.hits_origin - a.attributes.hits_origin
    })
    return this.records
  }


  this.destinations = function() {
    this.records.sort(function(a, b){
       return  b.attributes.hits_destination - a.attributes.hits_destination
    })
    return this.records
  }
}
