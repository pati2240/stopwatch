let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;

start.addEventListener('click', function () {
    timer = true;
    stopWatch();
    start.disabled = true;
    stop.disabled = false;
});
 
stop.addEventListener('click', function () {
    timer = false;
    start.disabled = false;
    stop.disabled = true;
});
 
reset.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});
function stopWatch() {
    if (timer) {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrS = hour;
        let minS = minute;
        let secS = second;
 
        if (hour < 10) {
            hrS = "0" + hrS;
        }
 
        if (minute < 10) {
            minS = "0" + minS;
        }
 
        if (second < 10) {
            secS = "0" + secS;
        }
 
        document.getElementById('hr').innerHTML = hrS;
        document.getElementById('min').innerHTML = minS;
        document.getElementById('sec').innerHTML = secS;
        setTimeout(stopWatch, 1000);
    }
}