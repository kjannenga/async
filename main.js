
$(document).ready(function(){
  function startClock() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    setInterval(startClock, 1000)

    if (seconds < 10) {
    seconds = "0" + seconds;
    } if (minutes < 10) {
    seconds = "0" + minutes;
    } if (hours < 10) {
    seconds = "0" + hours;
    }

    if (hours > 12) {
    hours = hours - 12;
    }
    if (hours === 0) {
    hours = 12;    
    }
    if (hours < 12){
        hours = hours
    }

   
    var str = document.getElementById('clock')

    str.innerHTML = hours + ":" + minutes + ":" + seconds
  }


  startClock()

})