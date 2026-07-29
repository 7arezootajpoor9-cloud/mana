const menuBtn = document.querySelector(".header__toggle");
const closeBtn = document.querySelector(".header__mobile-toggle-close");
const mobileMenu = document.querySelector(".header__mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
});