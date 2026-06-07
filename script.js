document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. ROUTING & NAVIGATION
    // ==========================================================================
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menuToggle');

    // Function to navigate to a target section
    const navigateToSection = (targetId) => {
        // Hide all sections, show active
        sections.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === targetId) {
                sec.classList.add('active');
            }
        });

        // Update active class on nav links
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            }
        });

        // Close mobile menu if open
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            const toggleIcon = menuToggle.querySelector('i');
            toggleIcon.className = 'fa-solid fa-bars';
        }

        // Scroll main content to top
        document.querySelector('.main-content').scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Nav Item Clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            window.location.hash = targetId;
            navigateToSection(targetId);
        });
    });

    // Hash Change Handler (for browser history back/forward)
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const validSection = document.getElementById(hash);
            if (validSection && validSection.classList.contains('page-section')) {
                navigateToSection(hash);
            }
        }
    });

    // Default load navigation
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) {
        const validSection = document.getElementById(initialHash);
        if (validSection && validSection.classList.contains('page-section')) {
            navigateToSection(initialHash);
        } else {
            navigateToSection('home');
        }
    } else {
        navigateToSection('home');
    }

    // Mobile Hamburger Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const toggleIcon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('open')) {
                toggleIcon.className = 'fa-solid fa-xmark';
            } else {
                toggleIcon.className = 'fa-solid fa-bars';
            }
        });
    }

    // Close sidebar clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars';
            }
        }
    });

    // ==========================================================================
    // 2. EXERCISE 3 TABS (PROMPT SHOWCASE)
    // ==========================================================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Deactivate all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate current
            btn.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 3. IMAGE LIGHTBOX MODAL
    // ==========================================================================
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');

    // Attach click events to all image containers with data-lightbox or images inside zoom-effect
    const lightboxImages = document.querySelectorAll('[data-lightbox], .zoom-effect img');

    lightboxImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxModal.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt || 'Ảnh minh họa sản phẩm thực hành';
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightboxModal.style.display = 'none';
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target === closeBtn) {
                closeLightbox();
            }
        });
    }

    // Keyboard ESC to close lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // ==========================================================================
    // 4. CONTACT FORM VALIDATION & SIMULATION
    // ==========================================================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                showFeedback('Vui lòng điền đầy đủ tất cả các trường thông tin!', 'error');
                return;
            }

            // Simulate sending feedback
            showFeedback('Đang gửi tin nhắn liên hệ...', 'info');

            setTimeout(() => {
                showFeedback(`Cảm ơn ${name}! Tin nhắn liên hệ của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất qua email ${email}.`, 'success');
                contactForm.reset();
            }, 1200);
        });
    }

    function showFeedback(msg, type) {
        if (!formFeedback) return;
        formFeedback.textContent = msg;
        formFeedback.className = 'form-feedback'; // reset classes
        
        if (type === 'success') {
            formFeedback.classList.add('success');
        } else if (type === 'error') {
            formFeedback.classList.add('error');
        } else {
            formFeedback.style.backgroundColor = 'rgba(0, 229, 255, 0.1)';
            formFeedback.style.color = '#00e5ff';
            formFeedback.style.border = '1px solid rgba(0, 229, 255, 0.3)';
        }
        
        formFeedback.classList.remove('hidden');
    }
});
