var date;
var second;
var minute;
var hour;
var browserHeight;

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
