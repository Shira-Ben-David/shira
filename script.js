document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .first-card');
    const imageContainers = document.querySelectorAll('.image-container');
    const prevBtn = document.querySelector('.nav-btn:nth-child(2)');
    const nextBtn = document.querySelector('.nav-btn:nth-child(3)');
    const closeBtn = document.querySelector('.nav-btn:nth-child(1)');
    let currentIndex = 0;

    cards.forEach((card, index) => {
        if (index !== 0) {
            card.style.display = 'none';
        }
    });

    imageContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            e.stopPropagation();
            
            imageContainers.forEach(cont => {
                cont.classList.remove('highlight');
                cont.style.opacity = '0.3';
                cont.style.transform = 'scale(1)';
            });
            
            this.classList.add('highlight');
            this.style.opacity = '1';
            this.style.transform = 'scale(1.2)';
            
            cards.forEach(card => {
                card.style.display = 'none';
            });

            const containerId = this.id;
            const matchingCard = document.getElementById(`${containerId}-card`);
            if (matchingCard) {
                matchingCard.style.display = 'flex';
                currentIndex = Array.from(cards).indexOf(matchingCard);
            }
        });
    });

    nextBtn.addEventListener('click', () => {
        cards[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].style.display = 'flex';
        
        imageContainers.forEach(container => {
            container.classList.remove('highlight');
            container.style.transform = 'scale(1)';
            container.style.opacity = currentIndex === 0 || currentIndex === 1 ? '1' : '0.3';
        });

        // Only highlight container if not on first two cards
        if (currentIndex > 1) {
            const cardId = cards[currentIndex].id;
            const containerId = cardId.replace('-card', '');
            const matchingContainer = document.getElementById(containerId);
            if (matchingContainer) {
                matchingContainer.classList.add('highlight');
                matchingContainer.style.opacity = '1';
                matchingContainer.style.transform = 'scale(1.2)';
            }
        }
    });

    // Previous button click handler with same logic as next
    prevBtn.addEventListener('click', () => {
        cards[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        cards[currentIndex].style.display = 'flex';
        
        imageContainers.forEach(container => {
            container.classList.remove('highlight');
            container.style.transform = 'scale(1)';
            container.style.opacity = currentIndex === 0 || currentIndex === 1 ? '1' : '0.3';
        });

        if (currentIndex > 1) {
            const cardId = cards[currentIndex].id;
            const containerId = cardId.replace('-card', '');
            const matchingContainer = document.getElementById(containerId);
            if (matchingContainer) {
                matchingContainer.classList.add('highlight');
                matchingContainer.style.opacity = '1';
                matchingContainer.style.transform = 'scale(1.2)';
            }
        }
    });

    // Close button handler
    closeBtn.addEventListener('click', () => {
        cards.forEach(card => {
            card.style.display = 'none';
        });
        imageContainers.forEach(container => {
            container.classList.remove('highlight');
            container.style.opacity = '1';
            container.style.transform = 'scale(1)';
        });
    });

    // Reset when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-container') && !e.target.closest('.nav-btn')) {
            imageContainers.forEach(container => {
                container.classList.remove('highlight');
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
            });
        }
    });
    cards.forEach((card, index) => {
    if (index === 0) {
        card.classList.add('visible');
    } else {
        card.classList.remove('visible');
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.image-container');
    
    containers.forEach(container => {
        container.addEventListener('click', function(e) {
            // Remove active class from all containers
            containers.forEach(c => c.classList.remove('active'));
            // Add active class to clicked container
            this.classList.add('active');
            e.stopPropagation();
        });
    });
    
    // Remove active class when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-container')) {
            containers.forEach(c => c.classList.remove('active'));
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.image-container');
    
    containers.forEach(container => {
        container.addEventListener('click', function(e) {
            // Remove active class from all containers
            containers.forEach(c => {
                c.classList.remove('active');
                // Ensure hover text is hidden on other elements
                const text = c.querySelector('.text');
                if (text) {
                    text.style.visibility = 'hidden';
                }
            });
            
            // Add active class to clicked container
            this.classList.add('active');
            // Ensure hover text remains visible
            const text = this.querySelector('.text');
            if (text) {
                text.style.visibility = 'visible';
            }
            e.stopPropagation();
        });
    });
    
    // Remove active class when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-container')) {
            containers.forEach(c => {
                c.classList.remove('active');
                const text = c.querySelector('.text');
                if (text) {
                    text.style.visibility = 'hidden';
                }
            });
        }
    });
});


