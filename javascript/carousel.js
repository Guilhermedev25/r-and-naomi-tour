document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const backgroundImage = document.querySelector('.background-image');
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Update background image
        const currentImage = slides[currentIndex].querySelector('img').src;
        backgroundImage.style.backgroundImage = `url(${currentImage})`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    function startAutoPlay() {
        interval = setInterval(nextSlide, 5000);
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Touch events for mobile
    let touchStartX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    carousel.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
        startAutoPlay();
    });

    // Initialize carousel
    startAutoPlay();
    updateCarousel();
}); 