document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // GSAP ScrollTrigger Implementation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // General Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');

        revealElements.forEach((element) => {
            gsap.fromTo(element,
                { y: 50, opacity: 0, autoAlpha: 0 },
                {
                    duration: 1.2,
                    y: 0,
                    opacity: 1,
                    autoAlpha: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    } else {
        // Fallback Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });
    }

    // Sticky Header with Scroll Effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing if we add body click listener
            document.body.classList.toggle('mobile-open');
        });

        // Close menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('mobile-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (document.body.classList.contains('mobile-open') &&
                !e.target.closest('nav') &&
                !e.target.closest('.mobile-toggle')) {
                document.body.classList.remove('mobile-open');
            }
        });
    }

    // Page Load Animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Form Validation Enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--color-signal)';
                } else {
                    field.style.borderColor = 'var(--color-border)';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Initialize Carousel
    const carouselContainer = document.querySelector('.carousel-container');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    if (carouselContainer && dotsContainer && prevBtn && nextBtn) {
        const items = carouselContainer.querySelectorAll('.carousel-item');

        if (items.length > 0) {
            // Function to calculate scroll amount dynamically
            const getScrollDetails = () => {
                const itemWidth = items[0].offsetWidth;
                const style = window.getComputedStyle(carouselContainer);
                const gap = parseFloat(style.gap) || 0;
                return { itemWidth, gap, totalWidth: itemWidth + gap };
            };

            // Generate Dots
            items.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');

                dot.addEventListener('click', () => {
                    const { totalWidth } = getScrollDetails();
                    carouselContainer.scrollTo({
                        left: totalWidth * index,
                        behavior: 'smooth'
                    });
                });
                dotsContainer.appendChild(dot);
            });

            // Navigation Buttons
            nextBtn.addEventListener('click', () => {
                const { totalWidth } = getScrollDetails();
                carouselContainer.scrollBy({ left: totalWidth, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                const { totalWidth } = getScrollDetails();
                carouselContainer.scrollBy({ left: -totalWidth, behavior: 'smooth' });
            });

            // Auto Scroll Logic
            let autoScrollInterval;
            let isHovering = false;
            let isScrolling = false; // Debounce manual scrolling interference

            const startAutoScroll = () => {
                if (!autoScrollInterval) {
                    autoScrollInterval = setInterval(() => {
                        if (!isHovering && !isScrolling) {
                            const { totalWidth } = getScrollDetails();
                            const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;

                            // Check if wrap around is needed
                            // We use a small buffer (10px) to handle float rounding errors
                            if (carouselContainer.scrollLeft >= maxScroll - 10) {
                                carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
                            } else {
                                carouselContainer.scrollBy({ left: totalWidth, behavior: 'smooth' });
                            }
                        }
                    }, 3000); // 3 seconds interval
                }
            };

            const stopAutoScroll = () => {
                if (autoScrollInterval) {
                    clearInterval(autoScrollInterval);
                    autoScrollInterval = null;
                }
            };

            // Interactions to pause auto-scroll
            carouselContainer.addEventListener('mouseenter', () => isHovering = true);
            carouselContainer.addEventListener('mouseleave', () => isHovering = false);
            carouselContainer.addEventListener('touchstart', () => isHovering = true, { passive: true });
            carouselContainer.addEventListener('touchend', () => isHovering = false);

            // Use Intersection Observer to only auto-scroll when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startAutoScroll();
                    } else {
                        stopAutoScroll();
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(carouselContainer);

            // Sync Dots on Scroll
            let scrollTimeout;
            carouselContainer.addEventListener('scroll', () => {
                isScrolling = true;
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => isScrolling = false, 150);

                const { totalWidth } = getScrollDetails();
                if (totalWidth <= 0) return;

                const scrollLeft = carouselContainer.scrollLeft;
                const activeIndex = Math.round(scrollLeft / totalWidth);

                const dots = dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                        // Ensure we don't go out of bounds if dots > items (shouldn't happen)
                    }
                });
            });
        }
    }
});