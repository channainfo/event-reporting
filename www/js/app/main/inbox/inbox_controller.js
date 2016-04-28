(function(){
  var inboxController = function($stateParams, ReportService){

    this.flags = ["Child", "Pregnant Women", "Same Household", "Animal Deadths"]
    this.durationTypes = ["Hours", "Days", "Weeks"]

    this.record = { message: '',
                    flags: [],
                    on_set_date: new Date()
                  }

    this.record['phone_number'] = $stateParams['phone_number']
    var self = this

    this.exists = function (flag) {
       return this.record.flags.indexOf(flag) != -1;
    };

    this.markFlag = function(index){
      var flag = this.flags[index]
      var pos = this.record.flags.indexOf(flag)
      if(pos == -1)
        this.record.flags.push(flag)
      else
        this.record.flags.splice(pos, 1)
    }

    this.save = function() {
      console.log("saving: ", this.record)
      ReportService.create(this.record, function(response){
        console.log("suces", response)
      }, function(response) {
        console.log('failed', response)
      })
    }

  }

  angular.module('reporting_module')
         .controller('InboxController', ['$stateParams', 'ReportService', inboxController])
})()
