// JavaScript functionality for various features

// Hamburger Menu Toggle
const menuToggle = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// Language Switcher
const languageSwitcher = () => {
    const languageSelect = document.querySelector('#language');
    languageSelect.addEventListener('change', (e) => {
        switch(e.target.value) {
            case 'english':
                document.body.lang = 'en';
                break;
            case 'yoruba':
                document.body.lang = 'yo';
                break;
            case 'igbo':
                document.body.lang = 'ig';
                break;
            case 'hausa':
                document.body.lang = 'ha';
                break;
            case 'pidgin':
                document.body.lang = 'pcm';
                break;
        }
    });
};

// Smooth Scrolling
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Form Validation
const validateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.querySelector('#name');
        if (nameInput.value.trim() === '') {
            alert('Name is required');
            return;
        }
        // Submit form if validation passes
        form.submit();
    });
};

// Intersection Observer Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    menuToggle();
    languageSwitcher();
    smoothScroll();
    validateForm();
    animateOnScroll();
});