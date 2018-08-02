var date;
var second;
var minute;
var hour;
var browserHeight;

function displayTime() {
    if (hour < 10) {
        document.querySelector('#hours').innerHTML = ('&nbsp;' + hour);
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
}

function heightContainer() {
    browserHeight = parseInt(window.innerHeight);
    document.querySelector('.container').style.height = (browserHeight + 'px');
}

setInterval(function () {
    date = new Date();
    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();
    heightContainer();
    displayTime();


}, 250);
