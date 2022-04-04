let slide = 0;

document.getElementsByClassName("slider-button__left")[0].addEventListener("click", function() {
    const slides = document.getElementsByClassName("main-slider__item");
    slides[slide].classList.remove('main-slider__item--active');
    slide--;
    slides[slide].classList.add('main-slider__item--active');
    console.log(slide)
});

document.getElementsByClassName("slider-button__right")[0].addEventListener("click", function() {
    const slides = document.getElementsByClassName("main-slider__item");
    slides[slide].classList.remove('main-slider__item--active');
    slide++;
    slides[slide].classList.add('main-slider__item--active');
    console.log(slide)
});





