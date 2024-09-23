// Example JavaScript for interactive elements
const waifuCards = document.querySelectorAll('.waifu-card');

waifuCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#663399'; // Darker purple on hover
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#222'; // Back to original color
    });
});
