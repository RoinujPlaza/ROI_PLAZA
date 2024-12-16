let currentSlide = 0;

function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 320}px)`;
}

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar ul');
    navbarMenu.classList.toggle('active');
}