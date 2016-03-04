(function(){
  var session = function(UserToken){
    return {
      create: function(userParams, success, failed){
        UserToken.signInUser(userParams, success, failed)
      }
    }
  }

  angular
    .module('bookmebus')
    .factory('Session', ['UserToken', session])
})()