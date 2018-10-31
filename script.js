// Next/previous controls
function plusSlides(num) {
    showSlides(slideIndex += num);
}

// Thumbnail image controls
function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (num > slides.length) { slideIndex = 1 }
    if (num < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s;
    date.innerHTML = checkTime(today.getDate()) + '/' + checkTime(today.getMonth() + 1) + '/' + today.getFullYear()
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { return "0" + i };  // add zero in front of numbers < 10
    return i;
}

/**
 * Add image to slide
 */
var urlSearch = new URLSearchParams(location.href);
var n = +urlSearch.get('n') || 5;
var showTime = +urlSearch.get('t') || 4000;

document.getElementById('default-1').innerText = '1 / ' + n;
document.getElementById('default-2').innerText = '2 / ' + n;
document.getElementById('default-3').innerText = '3 / ' + n;

var html = '';
for (var i = 4; i <= n; i++) {
    html +=
        '<div class="mySlides fade">' +
        '<div class="numbertext">' + i + ' / ' + n + '</div>' +
        '<img src="https://picsum.photos/1000/350?v=' + Math.random() + '" style="width:100%">' +
        '</div>'
}
document.querySelector('.slideshow-container').innerHTML += html;



var time = document.getElementById('time');
var date = document.getElementById('date');
var slideIndex = 1;

startTime();

showSlides(slideIndex);
setInterval(function () {
    plusSlides(1);
}, showTime)

