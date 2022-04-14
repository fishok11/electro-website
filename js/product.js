const сardWidth = document.querySelector(".main-product__item");
const сardMargin = parseInt(getComputedStyle(сardWidth, true).marginRight);
const card = сardWidth.offsetWidth + сardMargin;

document.getElementsByClassName("navline-item__link-left")[0].addEventListener("click", function(e) {
    e.preventDefault();

    let cardItems = document.querySelector(".main-product");
    cardItems.scrollBy ({
        left: -(card),
        behavior: "smooth"
    });
});


document.getElementsByClassName("navline-item__link-right")[0].addEventListener("click", function(e) {
    e.preventDefault();

    let cardItems = document.querySelector(".main-product");
    cardItems.scrollBy ({
        left: card,
        behavior: "smooth"
    });
});