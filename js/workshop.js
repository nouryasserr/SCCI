const cards = document.querySelectorAll('.cardd');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(card => card.classList.add('blurred-card'));
        card.classList.remove('blurred-card');
    });
    card.addEventListener('mouseout', () => {
        cards.forEach(card => card.classList.remove('blurred-card'));
    });
});