let slideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(slideIndex += step);
}

function startCarousel() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startCarousel();
});

document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    startCarousel();
});

