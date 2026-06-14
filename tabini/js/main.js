document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Burger animation
            const spans = burger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
        });
    }

    // Phone Screenshot Switcher logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const screenshots = document.querySelectorAll('.phone-screenshot');
    let activeIndex = 0;
    let autoPlayInterval;

    function switchTab(index) {
        if (index < 0 || index >= tabButtons.length) return;
        
        // Remove active class from all tabs & screenshots
        tabButtons.forEach(btn => btn.classList.remove('active'));
        screenshots.forEach(img => img.classList.remove('active'));

        // Add active to selected tab & screenshot
        tabButtons[index].classList.add('active');
        screenshots[index].classList.add('active');
        activeIndex = index;
    }

    if (tabButtons.length > 0 && screenshots.length > 0) {
        // Event listeners for tabs
        tabButtons.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                switchTab(idx);
                resetAutoPlay();
            });
        });

        // Auto play function
        function startAutoPlay() {
            autoPlayInterval = setInterval(() => {
                let nextIndex = (activeIndex + 1) % tabButtons.length;
                switchTab(nextIndex);
            }, 5000); // Change every 5 seconds
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Initialize AutoPlay
        startAutoPlay();
    }
});
