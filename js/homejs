document.getElementById('play-button').addEventListener('click', function() {
    const video = document.getElementById('hero-video');
    video.style.display = 'block';  // Show the video
    video.play();  // Play the video
  });
  


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const movieCards = document.querySelectorAll('.movie-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');

            movieCards.forEach(card => {
                if (genre === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardGenre = card.getAttribute('data-genre');
                    card.style.display = cardGenre === genre ? 'block' : 'none';
                }
            });
        });
    });
});
