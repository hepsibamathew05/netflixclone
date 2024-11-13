const carouselWrapper = document.querySelector('.carousel-wrapper');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const itemsToShow = 4; // Number of items to show at a time
const totalItems = document.querySelectorAll('.carousel-item').length;

rightArrow.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        carouselWrapper.style.transform = `translateX(-${currentIndex * 25}%)`;
        leftArrow.style.display = 'block'; // Show left arrow when moving right
    }

    if (currentIndex >= totalItems - itemsToShow) {
        rightArrow.style.display = 'none'; // Hide right arrow if at the end
    }
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselWrapper.style.transform = `translateX(-${currentIndex * 25}%)`;
        rightArrow.style.display = 'block'; // Show right arrow when moving left
    }

    if (currentIndex === 0) {
        leftArrow.style.display = 'none'; // Hide left arrow if at the start
    }
});
