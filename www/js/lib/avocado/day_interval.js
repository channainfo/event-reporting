avocado.dayInterval = {
  isDayTime: function() {
    // from 6:00AM to 5:59PM
    var dateObj = new Date;
    return dateObj.getHours() >= 6 && dateObj.getHours() < 18 ? true : false;
  },

  isNightTime: function() {
    // from 6:00PM to 5:59AM
    var dateObj = new Date;
    return (dateObj.getHours() >= 0 && dateObj.getHours() < 6) || (dateObj.getHours() >= 18 && dateObj.getHours() <= 23) ? true : false;
  },

  isHourFromNow: function(departure_time, hour_in_sec) {
    var current_time_in_sec = new Date().getSeconds() + (60 * new Date().getMinutes()) + (60 * 60 * new Date().getHours());
    return departure_time - current_time_in_sec < hour_in_sec;
  }
}