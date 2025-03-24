// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.lg\\:hidden');
    const mainNav = document.querySelector('nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-menu-open');
            if (mainNav.classList.contains('mobile-menu-open')) {
                mainNav.style.maxHeight = mainNav.scrollHeight + 'px';
            } else {
                mainNav.style.maxHeight = null;
            }
        });
    }

    // Form Handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    });

    // Quick View Buttons
    const quickViewButtons = document.querySelectorAll('button.bg-black');
    quickViewButtons.forEach(button => {
        if (button.textContent.includes('Quick View')) {
            button.addEventListener('click', () => {
                const productCard = button.closest('.group');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('p').textContent;
                alert(`Quick View for ${productName} - ${productPrice}`);
            });
        }
    });

    // Track Order Form
    const trackOrderForm = document.querySelector('#order-number')?.closest('form');
    if (trackOrderForm) {
        trackOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderNumber = document.querySelector('#order-number').value;
            const email = document.querySelector('#email').value;
            if (orderNumber && email) {
                alert('Tracking information will be sent to your email.');
            }
        });
    }

    // Return/Exchange Form
    const returnForm = document.querySelector('select')?.closest('form');
    if (returnForm && returnForm.querySelector('select')?.options[0]?.text === 'Select request type') {
        returnForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your return/exchange request has been submitted. We will contact you shortly.');
        });
    }

    // Filter and Sort Functionality
    const filterSelects = document.querySelectorAll('select');
    filterSelects.forEach(select => {
        select.addEventListener('change', () => {
            // In a real application, this would filter/sort products
            console.log('Filter/Sort changed:', select.value);
        });
    });

    // Initialize Header Icons
    const headerIcons = {
        search: document.querySelector('.fa-search'),
        user: document.querySelector('.fa-user'),
        cart: document.querySelector('.fa-shopping-bag')
    };

    // Add to Cart Animation
    const addToCartButtons = document.querySelectorAll('button.bg-black');
    if (headerIcons.cart) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                headerIcons.cart.classList.add('animate-bounce');
                setTimeout(() => {
                    headerIcons.cart.classList.remove('animate-bounce');
                }, 1000);
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Lazy Loading
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            }
        });
    }, imageOptions);

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });

    // Header Icons Click Handlers
    if (headerIcons.search) {
        headerIcons.search.addEventListener('click', () => {
            alert('Search functionality coming soon!');
        });
    }

    if (headerIcons.user) {
        headerIcons.user.addEventListener('click', () => {
            alert('Account functionality coming soon!');
        });
    }

    if (headerIcons.cart) {
        headerIcons.cart.addEventListener('click', () => {
            alert('Shopping cart coming soon!');
        });
    }
});