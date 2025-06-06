document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('menu-active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('menu-active');
        }
    });
}); 