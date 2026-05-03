import "./style.css";

    const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

// Toggle Menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Optional: animate hamburger into an X
    hamburger.classList.toggle('is-active');
});

// Close menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Scroll Reveal Logic (Optional but nice)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(window => {
        const windowHeight = window.innerHeight;
        const revealTop = window.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            window.classList.add('active');
        }
    });
});