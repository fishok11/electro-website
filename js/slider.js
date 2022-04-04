let slideIndex = 0;

document.getElementsByClassName("slider-button__left")[0].addEventListener("click", function() {
    if ( slideIndex > 0 ) {
        const slides = document.getElementsByClassName("main-slider__item");
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex--;
        slides[slideIndex].classList.add('main-slider__item--active');
    }
});

document.getElementsByClassName("slider-button__right")[0].addEventListener("click", function() {
    if ( slideIndex < 2 ) {
        const slides = document.getElementsByClassName("main-slider__item");
        slides[slideIndex].classList.remove('main-slider__item--active');
        slideIndex++;
        slides[slideIndex].classList.add('main-slider__item--active');
    } 
});





