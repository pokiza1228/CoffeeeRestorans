const btn = document.querySelector(".header__btn");
const btn = document.querySelector(".header__nav");
const btn = document.querySelector(".intro__content");
btn.addEventListener("click", function() {
    btn.classList.toggle("header__btn--opened");
    nav.classList.toggle("header__nav");
    nav.classList.toggle("header__btn--opened");
})