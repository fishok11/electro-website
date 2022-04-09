let slideIndex = 0;
const slides = document.getElementsByClassName("main-slider__item");

document.getElementsByClassName("slider-button__left")[0].addEventListener("click", function(e) {
    e.preventDefault();

    if ( slideIndex > 0 ) {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex--;
        slides[slideIndex].classList.add('main-slider__item--active');
    }
});

document.getElementsByClassName("slider-button__right")[0].addEventListener("click", function(e) {
    e.preventDefault();

    if ( slideIndex < (slides.length - 1) ) {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex++;
        slides[slideIndex].classList.add('main-slider__item--active');
    } 
});





