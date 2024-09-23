const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});

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
