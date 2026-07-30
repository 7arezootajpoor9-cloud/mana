const menuBtn = document.querySelector(".header__toggle");
const mobileMenu = document.querySelector(".header__mobile-menu");

menuBtn.addEventListener("click", function(){

    menuBtn.classList.toggle("active");

    mobileMenu.classList.toggle("active");

});