(function(){
  var reportController = function($stateParams, $mdDialog, ReportService){

    this.flags = ["Child", "Pregnant Women", "Same Household", "Animal Deadths"]
    this.durationTypes = ["Hours", "Days", "Weeks"]

    this.resetRecord = function() {
      this.record = { message: '',
                    flags: [],
                    on_set_date: new Date()
                  }
    }

    this.resetRecord()

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
        self.showAlert()
        self.resetRecord()
      }, function(response) {
        console.log('failed', response)
      })
    }

    this.showAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('body')))
          .clickOutsideToClose(true)
          .title('Event Reporting')
          .textContent('Your report has been submitted successfully. Thanks you')
          .ariaLabel('Event Reporting')
          .ok('Got it!')
          .targetEvent()
      );
    }

  }

  angular.module('reporting_module')
         .controller('ReportController', ['$stateParams', '$mdDialog', 'ReportService', reportController])
})()
