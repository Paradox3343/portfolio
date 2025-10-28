// Initialize Vanta.js globe animation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Vanta.js
    VANTA.GLOBE({
        el: "#vanta-globe",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4f46e5,
        backgroundColor: 0x111827,
        size: 0.8
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Add hover effect to project images
    document.querySelectorAll('.project-img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.parentElement.querySelector('img').classList.add('project-img-hover');
        });
        img.addEventListener('mouseleave', () => {
            img.parentElement.querySelector('img').classList.remove('project-img-hover');
        });
    });

    // Animation observer
const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});