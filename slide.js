
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let textSlides = document.getElementsByClassName("Changing price");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < textSlides.length; i++) {
        textSlides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    textSlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000);
}

// Pause slideshow when hovering over it
let slideshowContainer = document.querySelector('.SlideshowContainer');
slideshowContainer.addEventListener('mouseenter', function () {
    clearTimeout(slideshowTimeout);
});

// Resume slideshow when not hovering
slideshowContainer.addEventListener('mouseleave', function () {
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(showSlides, 1600);
});

let slideshowTimeout = setTimeout(showSlides, 1600);
