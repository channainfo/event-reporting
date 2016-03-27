(function(){
  var introController = function($state, UserToken){
    this.accessTicket = function(){
      UserToken.setAppVisited()
      $state.go('main')
    }
  }

  angular
    .module('bookmebus')
    .controller('IntroductionController', ['$state', 'UserToken', introController])
})()
