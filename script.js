/* ========================================
   NO WAIT! - Fast Food Restaurant
   JavaScript Functionality
   ======================================== */

// ===== Loader =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 1200);
  }
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Scroll Animations (Intersection Observer) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ===== Menu Category Filter =====
const catButtons = document.querySelectorAll('.menu-cat-btn');
const menuGroups = document.querySelectorAll('.menu-group');
const menuItems = document.querySelectorAll('.menu-item-card');

if (catButtons.length > 0) {
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      if (category === 'all') {
        // Show all groups
        menuGroups.forEach(group => {
          group.style.display = 'block';
        });
        menuItems.forEach(item => {
          item.style.display = 'flex';
        });
      } else {
        // Show only matching group
        menuGroups.forEach(group => {
          if (group.dataset.group === category) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      }
    });
  });
}

// ===== Gallery Lightbox =====
function openLightbox(element) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (lightbox && lightboxImg) {
    const img = element.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close lightbox on background click
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Parallax effect for hero section =====
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroVisual = hero.querySelector('.hero-visual');
    if (heroVisual && scrolled < window.innerHeight) {
      heroVisual.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
  });
}

// ===== Add stagger animation delay to cards =====
document.querySelectorAll('.featured-grid .food-card, .deals-grid .deal-card, .trust-grid .trust-card, .gallery-grid .gallery-item').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
