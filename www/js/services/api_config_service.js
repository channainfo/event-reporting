angular.module('bookmebus')
       .factory('ApiConfig', function(){
          return{
            HOST: 'http://192.168.1.107:3000',
            CLIENT_ID: 'c2d68b9cc38800d5469f51de14fd119770eec92da14102273daa36f24e8c6016',
            CLIENT_SECRET: 'a37eebf1c06b3e8c0284606be153f3c517107fc5bc98e94ee09b731d968fba5b',
            url: function(path){
              return this.HOST + path
            }
          }
       })