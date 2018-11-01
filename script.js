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
}
function checkTime(i) {
    if (i < 10) { return "0" + i };  // add zero in front of numbers < 10
    return i;
}

/**
 * Add image to slide
 */
var urlSearch = new URLSearchParams(location.href);
var n = +urlSearch.get('n') || +localStorage.getItem('n') || 5;
var showTime = +urlSearch.get('t') || +localStorage.getItem('t') || 4000;

document.getElementById('default-1').innerText = '1 / ' + n;

var html = '';
for (var i = 2; i <= n; i++) {
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

setInterval(startTime, 500);

showSlides(slideIndex);
setInterval(function () {
    plusSlides(1);
}, showTime)

/* View in fullscreen */
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

var btnFull = document.getElementById('btnFullScreen');
var fulled = false;
btnFull.onclick = function() {
    if (fulled) {
        closeFullscreen();
    } else {
        openFullscreen()
    }
    fulled = !fulled;
}

