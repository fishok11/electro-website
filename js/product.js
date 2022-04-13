document.getElementsByClassName("navline-item__link-left")[0].addEventListener("click", function(e) {
    e.preventDefault();

    let cardItems = document.querySelector(".main-product");
    cardItems.scrollBy ({
        left: -399,
        behavior: "smooth"
    });
    console.log(0)
});


document.getElementsByClassName("navline-item__link-right")[0].addEventListener("click", function(e) {
    e.preventDefault();

    let cardItems = document.querySelector(".main-product");
    cardItems.scrollBy ({
        left: 399,
        behavior: "smooth"
    });
    console.log(1)
});