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


const slides = document.querySelectorAll('.product-showcase__slide');
const nextButton = document.querySelector('.product-showcase__arrow--next');
const prevButton = document.querySelector('.product-showcase__arrow--prev');
const thumbs = document.querySelectorAll('.product-showcase__thumb');
let currentSlide = 0;


function showSlide(index) {

    if(index === currentSlide) {
        return;
    }

    const oldSlide = slides[currentSlide];
    const newSlide = slides[index];

    const oldImages = oldSlide.querySelector('.product-showcase__images');

    oldImages.classList.add('flip-out');
    setTimeout(function() {

        oldSlide.classList.remove('active');

        newSlide.classList.add('active');

        const newImages = newSlide.querySelector('.product-showcase__images');

        const newInfo = newSlide.querySelector('.product-showcase__info');

        newImages.classList.add('flip-in');

        newInfo.classList.add('flip-text');


        thumbs.forEach(function(thumb) {
            thumb.classList.remove('active');
        });
        thumbs[index].classList.add('active');

        const progressLines = document.querySelectorAll(
            '.product-showcase__progress-line'
        );

        progressLines.forEach(function(line) {
            line.classList.remove('active');
        });

        progressLines[index].classList.add('active');

        currentSlide = index;


        setTimeout(function() {
            oldImages.classList.remove('flip-out');
            newImages.classList.remove('flip-in');
            newInfo.classList.remove('flip-text');
        }, 700);
    }, 350);
}


nextButton.addEventListener('click', function() {
    let nextSlide = currentSlide + 1;
    if(nextSlide >= slides.length) {
        nextSlide = 0;
    }
    showSlide(nextSlide);
});


prevButton.addEventListener('click', function() {
    let previousSlide = currentSlide - 1;
    if(previousSlide < 0) {
        previousSlide = slides.length - 1;
    }
    showSlide(previousSlide);
});



thumbs.forEach(function(thumb, index) {
    thumb.addEventListener('click', function() {
        showSlide(index);
    });
});


function autoSlide() {
    setTimeout(function() {
        let nextSlide = currentSlide + 1;
        if(nextSlide >= slides.length) {
            nextSlide = 0;
        }
        showSlide(nextSlide);
        autoSlide();
    }, 3000);
}
autoSlide();