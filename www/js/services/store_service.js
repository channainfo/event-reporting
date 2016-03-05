(function(){
  angular.module('bookmebus')
         .factory('Store', function(){
            return{
              set: function(name, value){
                localStorage[name] = value
              },
              get: function(name){
                return localStorage[name]
              },
              clear: function(name){
                localStorage.clear(name)
              },
              isSet: function(name){
                return localStorage[name] != undefined
              },
              setObject: function(name, object){
                localStorage[name] = JSON.stringify(object)
              },
              getObject: function(name){
                if(localStorage[name] != undefined)
                  return JSON.parse(localStorage[name])
                else
                  return null
              }
            }
         })
})()
