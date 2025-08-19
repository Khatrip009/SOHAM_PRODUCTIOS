        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });

        // Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });

        // Close mobile nav when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            });
        });

        // Visitor counter
        const updateViewCounts = () => {
            // Simulate API call for total views
            const totalViews = Math.floor(Math.random() * 1000) + 500;
            document.getElementById('totalViews').textContent = totalViews.toLocaleString('en-IN');
            
            // Local visits counter
            let yourVisits = localStorage.getItem('soham-your-visits') || 0;
            yourVisits = Number(yourVisits) + 1;
            localStorage.setItem('soham-your-visits', yourVisits);
            document.getElementById('yourVisits').textContent = yourVisits.toLocaleString('en-IN');
        };

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show success message (in a real implementation, this would send to a server)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });

        // Product image gallery functionality
        document.querySelectorAll('[data-card]').forEach(card => {
            const main = card.querySelector('.main-image');
            const thumbs = card.querySelectorAll('.thumb');
            
            thumbs.forEach(t => {
                t.addEventListener('click', () => {
                    const url = t.getAttribute('data-full');
                    main.src = url;
                    thumbs.forEach(x => x.classList.remove('active'));
                    t.classList.add('active');
                });
            });
        });

        // Load More functionality
        document.addEventListener('DOMContentLoaded', function() {
            const grid = document.querySelector('.products-grid');
            const cards = grid ? Array.from(grid.querySelectorAll('[data-card]')) : [];
            const loadMoreBtn = document.getElementById('loadMore');
            
            if (!grid || !cards.length || !loadMoreBtn) return;
            
            // Show first 4 products initially
            cards.forEach((card, i) => {
                if (i < 4) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 100 * i);
                }
            });
            
            let visibleCount = 4;
            
            loadMoreBtn.addEventListener('click', () => {
                // Show next 4 products
                const nextCards = cards.slice(visibleCount, visibleCount + 4);
                
                nextCards.forEach((card, i) => {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 100 * i);
                });
                
                visibleCount += nextCards.length;
                
                // Hide button if all products are visible
                if (visibleCount >= cards.length) {
                    loadMoreBtn.classList.add('hidden');
                }
            });
            
            // Hide button if all products are already visible
            if (visibleCount >= cards.length) {
                loadMoreBtn.classList.add('hidden');
            }
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.hero-content, .usp-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
            
            // Initialize view counts
            updateViewCounts();
        });