document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Dynamic Footer Year
    // ==========================================
    // Automatically updates the year in the footer so you don't have to.
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${currentYear} Md. Rakibul Islam Chowdhury. All rights reserved.`;
    }

    // ==========================================
    // 2. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    // Fades in sections as the user scrolls down the page.
    
    // Select all elements we want to animate
    const hiddenElements = document.querySelectorAll('.skill-category, .project-card, .services-section p');

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'show' class when the element enters the viewport
                entry.target.classList.add('show');
                // Optional: Stop observing once it has been revealed
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Triggers when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the bottom of the screen
    });

    // Apply the observer to all hidden elements
    hiddenElements.forEach((el) => observer.observe(el));


    // ==========================================
    // 3. Mobile Navigation Toggle
    // ==========================================
    // Toggles the mobile menu open and closed.
    
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('open'); // For animating the hamburger lines
        });

        // Close menu when a link is clicked
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('open');
            });
        });
    }
    // ==========================================
    // 4. Contact Form Handling
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.querySelector('.form-success-msg');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the page from reloading
            
            // Here you would normally send the data to a backend or service like EmailJS/Formspree.
            // For now, we simulate a successful send:
            
            const btn = contactForm.querySelector('.submit-btn');
            btn.innerHTML = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerHTML = 'Send Message';
                btn.style.opacity = '1';
                contactForm.reset(); // Clears the inputs
                successMsg.style.display = 'block'; // Shows the green success text
                
                // Hide the success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }, 1500); // Simulates a 1.5 second network request
        });
    }
});