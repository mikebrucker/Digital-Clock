var date;
var second;
var minute;
var hour;
var browserHeight;
var secondsColor;
var minutesColor;
var hoursColor;
var secondsFontColor;
var minutesFontColor;
var hoursFontColor;
var ampm;
var ampmColor;
var backgroundColor;

// Grabs users browser height to determine clock vertical positioning
function heightContainer() {
    browserHeight = parseInt(window.innerHeight);
    document.querySelector('.container').style.height = (browserHeight + 'px');
}

function displayTime() {
    if (hour < 10) {
        document.querySelector('#hours').innerHTML = ('&nbsp;' + hour);
    } else if ((hour > 12) && (hour < 22)) {
        document.querySelector('#hours').innerHTML = ('&nbsp;' + (hour - 12));
    } else if (hour > 21) {
        document.querySelector('#hours').innerHTML = (hour - 12);
    } else {
        document.querySelector('#hours').innerHTML = hour;
    }
    if (minute < 10) {
        document.querySelector('#minutes').innerHTML = ('0' + minute);
    } else {
        document.querySelector('#minutes').innerHTML = minute;
    }
    if (second < 10) {
        document.querySelector('#seconds').innerHTML = ('0' + second);
    } else {
        document.querySelector('#seconds').innerHTML = second;
    }
    if (hour > 11) {
        document.querySelector('#ampm').innerHTML = 'PM';
    } else {
        document.querySelector('#ampm').innerHTML = 'AM';
    }
}

function clockColor() {
    secondsColor = ("rgb(0, 0, ") + ((second * 4) + 19) + (", 0." + (second +41) +")");
    document.querySelector('#seconds').style.backgroundColor = secondsColor;

    secondsFontColor = ("rgb(0, ") + (255 - (second * 4)) + (", 0)");
    document.querySelector('#seconds').style.color = secondsFontColor;
    
    minutesColor = ("rgb(0, ") + ((minute * 4) + 19) + (", 0, 0." + (second +41) +")");
    document.querySelector('#minutes').style.backgroundColor = minutesColor;
    
    minutesFontColor = ("rgb(") + (255 - (minute * 4)) + (", 0, 0)");
    document.querySelector('#minutes').style.color = minutesFontColor;
    
    hoursColor = ("rgb(") + ((hour * 10) + 15) + (", 0, 0, 0." + (second +41) +")");
    document.querySelector('#hours').style.backgroundColor = hoursColor;
    
    hoursFontColor = ("rgb(0, 0, ") + (255 - (hour * 10)) + (")");
    document.querySelector('#hours').style.color = hoursFontColor;

    ampmColor = ("rgb(" + ((second * 4)+19) + ", " + (255 - second) + ", " + (255 - (second * 4)) + ")");
    
    ampm = document.querySelectorAll('.ampmColor');
    for(var i = 0; i < ampm.length; i++){
        ampm[i].style.color = ampmColor;
    }

    backgroundColor = ("linear-gradient(to bottom right, rgb(" + (255 - (second * 4)) + ", " + 0 + ", " + 255 + "),  rgb(" + 0 + ", " + 255 + ", " + (255 - (second * 4)) + "), rgb(" + 255 + ", " + (255 - (second * 4)) + ", " + 0 + "),  rgb(" + 0 + ", " + 0 + ", " + (255 - (second * 4)) + ")");
    document.querySelector('body').style.background = backgroundColor;
}


setInterval(function () {
    date = new Date();
    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();
    heightContainer();
    clockColor();
    displayTime();
}, 500);
