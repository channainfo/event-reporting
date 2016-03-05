(function(){
  var session = function(UserToken){
    return {
      create: function(userParams, success, failed){
        UserToken.signInUser(userParams, success, failed)
      },

      destroy: function(){
        UserToken.destroy()
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('Session', ['UserToken', session])
})()