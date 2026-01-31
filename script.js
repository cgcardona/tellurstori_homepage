/**
 * Stori Website - JavaScript
 * Handles navigation, animations, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===========================
    // Navbar Scroll Effect
    // ===========================
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class when past threshold
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
    
    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===========================
    // Scroll Animations
    // ===========================
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===========================
    // Add animation classes to sections
    // ===========================
    const addScrollAnimations = () => {
        const elementsToAnimate = [
            '.value-card',
            '.feature-block',
            '.instrument-category',
            '.ai-card',
            '.tier-card',
            '.license-card',
            '.tech-category',
            '.timeline-item',
            '.blockchain-stat'
        ];
        
        elementsToAnimate.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.setAttribute('data-animate', '');
                el.style.transitionDelay = `${index * 0.1}s`;
            });
        });
        
        // Observe all new animated elements
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    };
    
    addScrollAnimations();
    
    // ===========================
    // Active Navigation Link
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveNavLink = () => {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    
    // ===========================
    // Parallax Effect for Hero
    // ===========================
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.3;
            
            if (scrolled < window.innerHeight) {
                heroVisual.style.transform = `translateY(${rate}px)`;
            }
        }, { passive: true });
    }
    
    // ===========================
    // Stats Counter Animation
    // ===========================
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const animateStats = (container) => {
        const statValues = container.querySelectorAll('.stat-value, .stat-number');
        
        statValues.forEach(stat => {
            const finalValue = stat.textContent;
            
            // Skip if it's not a number
            if (!/^\d+/.test(finalValue.replace(/[<>%+]/g, ''))) return;
            
            const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
            if (isNaN(numericValue)) return;
            
            const prefix = finalValue.match(/^[<>]/) ? finalValue.match(/^[<>]/)[0] : '';
            const suffix = finalValue.match(/[%+ms\w]*$/) ? finalValue.match(/[%+ms\w]*$/)[0] : '';
            
            let current = 0;
            const increment = numericValue / 30;
            const duration = 1000;
            const stepTime = duration / 30;
            
            const counter = setInterval(() => {
                current += increment;
                
                if (current >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = prefix + Math.floor(current) + suffix;
                }
            }, stepTime);
        });
    };
    
    document.querySelectorAll('.hero-stats, .blockchain-stats, .performance-specs').forEach(container => {
        statsObserver.observe(container);
    });
    
    // ===========================
    // Button Ripple Effect
    // ===========================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===========================
    // Lazy Load Images
    // ===========================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // ===========================
    // Keyboard Navigation
    // ===========================
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
    
    // ===========================
    // Prevent Flash of Unstyled Content
    // ===========================
    document.body.classList.add('loaded');
    
    // ===========================
    // Console Welcome Message
    // ===========================
    console.log('%c🎵 Stori', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cProfessional DAW with AI Music Generation', 'font-size: 14px; color: #a0a0b0;');
    console.log('%cBuild with love using Swift, SwiftUI, and AudioCraft', 'font-size: 12px; color: #6a6a7a;');
});
