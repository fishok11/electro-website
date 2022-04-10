const basketItem = document.getElementsByClassName("shop-list")[0];

document.getElementsByClassName("top-menu__basket-link")[0].addEventListener("click", function() {
  basketItem.classList.toggle('shop-list--active');
});
