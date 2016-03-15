avocado.dateTime = {
  getTimeFromSec: function(timeInSec){
    return moment.utc(timeInSec * 1000).format('hh:mm A')
  },

  getTimeIntervalFromSec: function(timeInSec){
    var result = [];
    var hour = parseInt(timeInSec / 3600);
    var minute =  parseInt(timeInSec - (hour * 3600)) / 60;

    if(hour > 0)
      result.push(hour + "h")
    if(minute > 0)
      result.push(minute + "min")

    return result.join(" ");
  }
}