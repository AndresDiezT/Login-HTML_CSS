document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-mobile a');
    const logo = document.querySelector('.logo');

    burgerMenu.addEventListener('click', () => {
        navMobile.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });

    logo.addEventListener('click', () => {
        navMobile.classList.remove('active');
        burgerMenu.classList.remove('active');
    });
});


const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const counter = document.querySelector('.carousel-counter');

let currentSlide = 0;

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    counter.textContent = `${currentSlide + 1}/${slides.length}`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

updateCarousel();