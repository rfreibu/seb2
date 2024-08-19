var slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow_epp");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var slideInterval = setInterval(function(){
    moveSlide(1);
}, 5000); // Change image every 5 seconds

var videoIndex = 1;
showVideo(videoIndex);

function moveVideo(n) {
    stopAllVideos(); // Stop all videos before moving to the next one
    showVideo(videoIndex += n);
}
function stopAllVideos() {
    var videos = document.querySelectorAll(".slideshow_vids video");
    videos.forEach(function(video) {
        video.pause();
        video.currentTime = 0; // Reset video to the start
    });
}
function showVideo(n) {
    var i;
    var videos = document.getElementsByClassName("slideshow_vids");
    if (n > videos.length) {videoIndex = 1}
    if (n < 1) {videoIndex = videos.length}
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    videos[videoIndex-1].style.display = "block";
}
