function filterServices(category) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent === (category === 'all' ? 'Все процедуры' : category)) {
                btn.classList.add('active');
            }
        });

        const allCards = document.querySelectorAll('.service-card');
        allCards.forEach(card => {
            card.style.display = (category === 'all' || card.getAttribute('data-category') === category)
                ? 'block'
                : 'none';
        });
    }