// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme Switcher
    const themeButton = document.createElement('button');
    themeButton.id = 'theme-toggle';
    themeButton.innerHTML = '🌙';
    document.body.appendChild(themeButton);

    let isDarkTheme = false;
    themeButton.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme');
        themeButton.innerHTML = isDarkTheme ? '☀️' : '🌙';
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            if (!nameInput.value.trim()) {
                alert('Please enter your name and message');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Logo Animation
    const logo = document.getElementById('main-logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Product Image Hover Effect
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
