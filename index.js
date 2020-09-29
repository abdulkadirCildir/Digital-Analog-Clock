const showTime = document.getElementById("clock");
const showFormat = document.getElementById("timeFormat");
const timeString = document.getElementById("timeString");

function checktime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let format = ["AM", "PM"];   // timeFormat(AM-PM)
    format = hour >= 12 ? showFormat.innerHTML = format[1] : showFormat.innerHTML = format[0];

    hour = newCheck(hour);

    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);


    timeString.innerHTML = currentTime.toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric'});

    showTime.innerHTML = hour + " : " + minute + " : " + second;
}


function newCheck(time) {
    if (time > 12) {
      time = time - 12;
    } 
    if (time === 0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }


checktime();
setInterval(checktime, 1000);
