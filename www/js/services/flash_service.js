(function(){
  angular.module('bookmebus')
         .factory('Flash', function(){
            return{
              show: false,
              type: '',
              message: '',
              icon: '',

              reset: function(){
                this.show = false
                this.message = ''
                this.icon = ''
              },
              isVisible: function() {
                return this.show
              },
              setSuccessMessage: function(message) {
                this.message = message
                this.type = 'success'
                this.icon = 'ok'
                this.show = true
              },

              setErrorMessage: function(message){
                this.message = message
                this.type = 'error'
                this.icon = 'error'
                this.show = true
              },
              setVisible: function(visible) {
                this.show = visible
              },
              setIcon: function(icon){
                this.icon = icon
              }
            }
         })
})()
