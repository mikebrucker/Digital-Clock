var date;
var second;
var minute;
var hour;
var day;
var month;
var year;
var browserHeight;
var browserHeightForDateMobile;
var browserHeightForDateDesktop;
var secondsColor;
var minutesColor;
var hoursColor;
var secondsFontColor;
var minutesFontColor;
var hoursFontColor;
var ampm;
var ampmColor;
var backgroundColor;

// Grabs users browser height to determine clock vertical positioning and date positioning for desktop and mobile
function heightContainer() {
    browserHeight = parseInt(window.innerHeight);
    document.querySelector('.container').style.height = (browserHeight + 'px');

    if (window.innerWidth < 1201) {
    browserHeightForDateMobile =(parseInt(window.innerHeight) / 2);
    document.querySelector('.container2').style.height = (browserHeightForDateMobile + 'px');
    } else {
    browserHeightForDateDesktop =(parseInt(window.innerHeight) / 3);
    document.querySelector('.container2').style.height = (browserHeightForDateDesktop + 'px');
    }
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
    if (month == 0) {
        document.querySelector('#month').innerHTML = 'January&nbsp;';
    }
    if (month == 1) {
        document.querySelector('#month').innerHTML = 'February&nbsp;';
    }
    if (month == 2) {
        document.querySelector('#month').innerHTML = 'March&nbsp;';
    }
    if (month == 3) {
        document.querySelector('#month').innerHTML = 'April&nbsp;';
    }
    if (month == 4) {
        document.querySelector('#month').innerHTML = 'May&nbsp;';
    }
    if (month == 5) {
        document.querySelector('#month').innerHTML = 'June&nbsp;';
    }
    if (month == 6) {
        document.querySelector('#month').innerHTML = 'July&nbsp;';
    }
    if (month == 7) {
        document.querySelector('#month').innerHTML = 'August&nbsp;';
    }
    if (month == 8) {
        document.querySelector('#month').innerHTML = 'September&nbsp;';
    }
    if (month == 9) {
        document.querySelector('#month').innerHTML = 'October&nbsp;';
    }
    if (month == 10) {
        document.querySelector('#month').innerHTML = 'November&nbsp;';
    }
    if (month == 11) {
        document.querySelector('#month').innerHTML = 'December&nbsp;';
    }
    document.querySelector('#day').innerHTML = (day + ',&nbsp;');
    document.querySelector('#year').innerHTML = year;
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
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    heightContainer();
    clockColor();
    displayTime();
}, 100);
