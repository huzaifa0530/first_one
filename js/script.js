/* ============================================
   PSN ONLINE LEARNING — LMS JAVASCRIPT
   Handles: course rendering, search, mobile nav,
   scroll animations, navbar scroll state
   ============================================ */

// ---------- COURSE DATA ----------
const courses = [
  {
    id: 1,
    title: 'Critical Care Nephrology',
    category: 'Critical Care',
    categoryKey: 'critical-care',
    description: 'Master advanced techniques for managing kidney function in critical care settings. Covers AKI management, renal replacement therapies, and fluid-electrolyte balance.',
    price: 'PKR 15,000',
    duration: '3 days',
    lessons: 15,
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/6285380/pexels-photo-6285380.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Dr. Zahid Nabi',
    instructorTitle: 'President, PSN',
    tag: 'Enrolling Now',
  },
  {
    id: 2,
    title: 'AI in Medical Practice',
    category: 'AI Learning',
    categoryKey: 'ai',
    description: 'Harness AI to revolutionize diagnosis, treatment, and patient care. Learn AI-driven diagnostic tools, predictive analytics, and personalized treatment planning.',
    price: 'PKR 20,000',
    duration: '6 weeks',
    lessons: 12,
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/9574516/pexels-photo-9574516.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Mr. Naveed Aziz',
    instructorTitle: 'AI Teaching Specialist',
    tag: 'Starting Soon',
  },
  {
    id: 3,
    title: 'Dialysis Techniques & Advances',
    category: 'Dialysis',
    categoryKey: 'dialysis',
    description: 'Explore hemodialysis and peritoneal dialysis techniques, latest advancements, vascular access management, and dialysis quality control protocols.',
    price: 'PKR 12,000',
    duration: '4 weeks',
    lessons: 10,
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/6129691/pexels-photo-6129691.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Dr. Ali Saqlain Haider',
    instructorTitle: 'Vice President, PSN',
    tag: 'Popular',
  },
  {
    id: 4,
    title: 'Chronic Kidney Disease Management',
    category: 'CKD',
    categoryKey: 'ckd',
    description: 'Comprehensive course on CKD staging, progression prevention, nutritional management, and long-term patient care strategies in nephrology practice.',
    price: 'PKR 10,000',
    duration: '5 weeks',
    lessons: 14,
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/4031525/pexels-photo-4031525.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Prof. Dr. Ahmed Zeb Khan',
    instructorTitle: 'Secretary, PSN',
    tag: 'CME 12 Credits',
  },
  {
    id: 5,
    title: 'Kidney Transplantation Program',
    category: 'Transplantation',
    categoryKey: 'transplant',
    description: 'In-depth coverage of kidney transplant procedures, donor evaluation, immunosuppression protocols, post-transplant care, and complication management.',
    price: 'PKR 25,000',
    duration: '8 weeks',
    lessons: 20,
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/39192335/pexels-photo-39192335.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Prof. Dr. Amer Azhar',
    instructorTitle: 'President Emeritus',
    tag: 'Premium',
  },
  {
    id: 6,
    title: 'Pediatric Nephrology Essentials',
    category: 'Pediatric',
    categoryKey: 'pediatric',
    description: 'Focused care approaches for kidney diseases in children. Covers congenital anomalies, pediatric dialysis, growth management, and family support.',
    price: 'PKR 14,000',
    duration: '4 weeks',
    lessons: 8,
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/7088834/pexels-photo-7088834.jpeg?auto=compress&cs=tinysrgb&w=600',
    instructor: 'Dr. Faiza Saeed',
    instructorTitle: 'Executive Member, PSN',
    tag: 'New',
  },
];

// ---------- RENDER COURSE CARDS ----------
function renderCourses(courseList) {
  const grid = document.getElementById('courseGrid');
  const noResults = document.getElementById('noResults');

  if (!grid) return;

  if (courseList.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = courseList
    .map(
      (course) => `
    <article class="psn-course-card psn-animate">
      <div class="psn-course-card__image">
        <img src="${course.image}" alt="${course.title}" loading="lazy" />
        <span class="psn-course-card__tag">${course.tag}</span>
      </div>
      <div class="psn-course-card__body">
        <span class="psn-course-card__category">${course.category}</span>
        <h3 class="psn-course-card__title">${course.title}</h3>
        <p class="psn-course-card__desc">${course.description}</p>
        <div class="psn-course-card__meta">
          <span class="psn-course-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${course.duration}
          </span>
          <span class="psn-course-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            ${course.lessons} modules
          </span>
          <span class="psn-course-card__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            ${course.level}
          </span>
        </div>
        <div class="psn-course-card__footer">
          <span class="psn-course-card__price">${course.price}</span>
          <a href="#" class="psn-btn psn-btn--primary psn-btn--sm">Enroll Now</a>
        </div>
      </div>
      <div class="psn-course-card__instructor">
        <div class="psn-course-card__instructor-avatar">${getInitials(course.instructor)}</div>
        <div>
          <div class="psn-course-card__instructor-name">${course.instructor}</div>
          <div class="psn-course-card__instructor-title">${course.instructorTitle}</div>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  observeAnimations();
}

function getInitials(name) {
  return name
    .replace(/^(Dr\.|Prof\.|Mr\.)\s*/i, '')
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

// ---------- SEARCH ----------
function handleSearch() {
  const input = document.getElementById('courseSearch');
  if (!input) return;

  const query = input.value.trim().toLowerCase();

  if (query === '') {
    renderCourses(courses);
    return;
  }

  const filtered = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query)
    );
  });

  renderCourses(filtered);

  const coursesSection = document.getElementById('courses');
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---------- MOBILE NAV ----------
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('psn-nav__links--active');
    toggle.classList.toggle('psn-nav__toggle--active');
    const isOpen = links.classList.contains('psn-nav__links--active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('psn-nav__links--active');
      toggle.classList.remove('psn-nav__toggle--active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- NAVBAR SCROLL STATE ----------
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            navbar.classList.add('psn-nav--scrolled');
          } else {
            navbar.classList.remove('psn-nav--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

// ---------- SCROLL ANIMATIONS ----------
function observeAnimations() {
  const elements = document.querySelectorAll('.psn-animate:not(.psn-animate--visible)');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('psn-animate--visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('psn-animate--visible');
          }, index * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

// ---------- ANIMATED STAT COUNTERS ----------
function animateCounters() {
  const counters = document.querySelectorAll('.psn-hero__stat-num[data-count]');
  if (!counters.length) return;

  if (!('IntersectionObserver' in window)) {
    counters.forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      el.textContent = target.toLocaleString() + '+';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.textContent.replace(/[0-9,]/g, '');
          let current = 0;
          const increment = Math.max(1, Math.ceil(target / 40));
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current.toLocaleString() + suffix;
          }, 30);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

// ---------- CATEGORY FILTER ----------
function setupCategoryFilter() {
  const cards = document.querySelectorAll('.psn-category-card');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const category = card.dataset.category;
      const input = document.getElementById('courseSearch');
      if (input) {
        const categoryMap = {
          ckd: 'CKD',
          dialysis: 'Dialysis',
          transplant: 'Transplantation',
          pediatric: 'Pediatric',
          hypertension: 'Hypertension',
          ai: 'AI',
        };
        input.value = categoryMap[category] || category;
        handleSearch();
      }
    });
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderCourses(courses);
  setupMobileNav();
  setupNavbarScroll();
  setupCategoryFilter();
  animateCounters();
  observeAnimations();

  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('courseSearch');

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
  }
});
