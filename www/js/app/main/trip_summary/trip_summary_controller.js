(function(){
  var tripSummaryController = function($mdDialog){

    this.openTermConditionDialog = function(){
      $mdDialog.show({
        templateUrl: 'js/app/main/select_seat/term_condition_dialog.html',
        parent: angular.element(document.body),
        clickOutsideToClose: false
      })
    }

    this.openTermConditionDialog = function(){
      $mdDialog.cancel();
    }

    this.openMapDialog = function(){
      $mdDialog.show({
        templateUrl: 'js/app/main/search_result/map_dialog.html',
        parent: angular.element(document.body),
        clickOutsideToClose: false,
        fullscreen: true
      });
    }

  }

  angular.module('bookmebus')
         .controller('TripSummaryController', ['$mdDialog', tripSummaryController])

})()