const btn = document.querySelector(".header__btn");
const nav = document.querySelector(".header__nav");
const intro = document.querySelector(".intro__content");
btn.addEventListener("click", function() {
    btn.classList.toggle("header__btn--opened");
    nav.classList.toggle("header__nav--opened");
    intro.classList.toggle("header__btn--opened");
})