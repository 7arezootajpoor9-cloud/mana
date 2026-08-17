const menuBtn = document.querySelector(".header__toggle");
const mobileMenu = document.querySelector(".header__mobile-menu");

menuBtn.addEventListener("click", function(){

    menuBtn.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


const featureContent = document.querySelector('.feature-section__content');

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        featureContent.classList.add('show');
    }

});

observer.observe(featureContent);