// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Cart Functionality
    let cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Create cart notification element
    const cartNotification = document.createElement('div');
    cartNotification.className = 'cart-notification';
    document.body.appendChild(cartNotification);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            cart.push(product);
            showCartNotification(`Added ${product.replace('-', ' ')} to cart!`);
        });
    });

    function showCartNotification(message) {
        cartNotification.textContent = message;
        cartNotification.style.display = 'block';
        setTimeout(() => {
            cartNotification.style.display = 'none';
        }, 2000);
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const successMessage = document.getElementById('success-message');
            
            // Reset error messages
            nameError.style.display = 'none';
            emailError.style.display = 'none';
            successMessage.style.display = 'none';
            
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name and message';
                nameError.style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid, show success message and reset form
                successMessage.textContent = 'Message sent successfully!';
                successMessage.style.display = 'block';
                contactForm.reset();
            }
        });
    }

    // Theme Switcher
    const themeButton = document.createElement('button');
    themeButton.textContent = '🌙';
    themeButton.className = 'theme-switcher';
    themeButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        background: #333;
        color: white;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        z-index: 1000;
    `;
    
    document.body.appendChild(themeButton);
    
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeButton.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // Add dark theme styles
    const darkThemeStyles = `
        .dark-theme {
            background-color: #1a1a1a;
            color: #fff;
        }
        .dark-theme .nav-links a {
            color: #fff;
        }
        .dark-theme .product {
            background-color: #333;
        }
        .dark-theme input {
            background-color: #333;
            color: #fff;
            border-color: #444;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = darkThemeStyles;
    document.head.appendChild(styleSheet);
});
