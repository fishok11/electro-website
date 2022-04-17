let slideIndex = 0;
const slides = document.getElementsByClassName("main-slider__item");

document.getElementsByClassName("slider-button__left")[0].addEventListener("click", function(e) {
    e.preventDefault();

    if ( slideIndex > 0 ) {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex--;
        slides[slideIndex].classList.add('main-slider__item--active');
        clearInterval(interval)
    } 
});

document.getElementsByClassName("slider-button__right")[0].addEventListener("click", function(e) {
    e.preventDefault();

    if ( slideIndex < (slides.length - 1) ) {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex++;
        slides[slideIndex].classList.add('main-slider__item--active');
        clearInterval(interval)
    } 
});

function sliderSwipAuto() {

    if ( slideIndex >= (slides.length - 1) ) {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex = 0
        slides[slideIndex].classList.add('main-slider__item--active');
    } else {
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex++;
        slides[slideIndex].classList.add('main-slider__item--active');
    } 
}

const interval = setInterval(sliderSwipAuto, 4000)