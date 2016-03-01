(function(){
  var ezfbConfig = function(ezfbProvider){
    ezfbProvider.setInitParams({
      appId: '578057442333046',
      version: 'v2.3'
    });
  }

  angular.module('bookmebus')
         .config(['ezfbProvider', ezfbConfig])
})()