document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Show the first slide by default
    slides[currentSlide].style.display = 'block';

    // Function to show the next slide
    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = 'block';
    }

    // Function to show the previous slide
    function prevSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].style.display = 'block';
    }

    // Add event listeners for next and previous buttons
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.addEventListener('click', prevSlide);

    const nav = document.createElement('div');
    nav.classList.add('carousel-nav');
    nav.appendChild(prevButton);
    nav.appendChild(nextButton);
    carousel.appendChild(nav);
});
