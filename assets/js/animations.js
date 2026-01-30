document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger if available (handled via CDN in HTML)
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Elements
    const fadeElements = document.querySelectorAll('.fade-up');

    fadeElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Hero Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroText = document.querySelector('.hero-text');
    const heroBtn = document.querySelector('.hero-btn');

    if (heroTitle) {
        gsap.from(heroTitle, { opacity: 0, y: 50, duration: 1, delay: 0.2 });
    }
    if (heroText) {
        gsap.from(heroText, { opacity: 0, y: 30, duration: 1, delay: 0.4 });
    }
    if (heroBtn) {
        gsap.from(heroBtn, { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    }
});
