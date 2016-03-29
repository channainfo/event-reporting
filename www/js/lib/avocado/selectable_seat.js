avocado.selectableSeat = {
  isAllowInstantBooking: function(operatorId, allowOperatorIds) {
    var operatorIds = allowOperatorIds.split(",");
    return $.inArray(operatorId.toString(), operatorIds) != -1 ? true : false;
  }
}