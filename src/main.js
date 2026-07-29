import './index.css';

// 1. DATA STORES
const testimonials = [
  {
    quote: "Tumelo brought structure, discipline, and absolute clarity to a complex technical and brand challenge. We finally feel distinctive and purposeful.",
    author: "Sven Rademeyer",
    role: "Product Lead",
    company: "Velora",
  },
  {
    quote: "Exceptional mastery of modern frontend frameworks and robust server configurations. Deployed our architectural project ahead of schedule with immaculate technical execution.",
    author: "Marcus Vance",
    role: "Principal Infrastructure Lead",
    company: "Northlane Group",
  },
  {
    quote: "A rare professional who bridges the gap between complex electrical engineering and high-end digital design. The systems integration is flawlessly stable.",
    author: "Elena Rostov",
    role: "Director of Technical Systems",
    company: "Aurel Labs",
  },
];

const projects = [
  {
    id: "Nexlink",
    year: "2024",
    brand: "Nexlink",
    title: "Infrastructure & Engineering Hub",
    tags: ["JAVASCRIPT", "HTML/CSS", "PYTHON", "WEB DEV"],
    image: "/src/assets/images/project_northlane_1782065051244.jpg",
    desc: "High-end automated development environment mapping complex cloud telemetry into elegant dashboards.",
    fullDescription: "Nexlink requested a multi-tier cloud optimization project combined with a gorgeous, high-contrast dashboard to monitor server-side analytics. I overhauled their system infrastructure to double rendering throughput and implemented custom asset monitoring portals.",
    challenge: "Unifying multi-region performance telemetry from different physical cloud arrays into a real-time reactive grid with sub-100ms response times.",
    outcome: "Reduced visual loads latency by 45% and improved team velocity through intuitive system architecture and clean web design patterns.",
    stats: [
      { label: "Latency reduction", value: "45%" },
      { label: "Load speed", value: "0.8s" },
      { label: "System availability", value: "99.9%" }
    ]
  },
  {
    id: "velora",
    year: "2025",
    brand: "Velora",
    title: "Modern Brand Engine",
    tags: ["JAVASCRIPT", "HTML/CSS", "PYTHON", "WEB DEV"],
    image: "/src/assets/images/project_velora_1782065065932.jpg",
    desc: "Elegant editorial ecommerce platform engineered with premium rendering speeds and advanced responsive layouts.",
    fullDescription: "Velora is an ambitious boutique agency. I designed and built their entire full-stack platform, integrating deep IT infrastructure security alongside a custom, buttery smooth React frontend focusing on editorial typography and dynamic layout animations.",
    challenge: "Delivering infinite-scroll visual indexes of heavy abstract brand portfolios without compromising the lightweight performance constraints on mobile platforms.",
    outcome: "A flawless, 100/100 Lighthouse performance-scored visual magazine and boutique ecommerce gateway that generated 3x organic engagement.",
    stats: [
      { label: "Performance score", value: "100/100" },
      { label: "Engagement increase", value: "300%" },
      { label: "Conversion rate", value: "4.2%" }
    ]
  },
  {
    id: "aurel",
    year: "2026",
    brand: "Aurel",
    title: "Industrial Electrical & Digital Integration",
    tags: ["JAVASCRIPT", "HTML/CSS", "PYTHON", "WEB DEV"],
    image: "/src/assets/images/project_aurel_1782065077484.jpg",
    desc: "Systems architecture bridging complex industrial hardware controls with intuitive interactive network interfaces.",
    fullDescription: "For Aurel, I executed a massive hybrid project incorporating smart building electrical planning alongside an integrated visual building management platform. By matching physical engineering layout concepts with premium full-stack CSS grids, this site monitors real-time building resource usage.",
    challenge: "Translating low-level hardware communication protocol registers into intuitive frontend dashboard views accessible by non-technical operators.",
    outcome: "An enterprise-scale control interface supporting domestic and industrial diagnostic layers with zero configuration overhead.",
    stats: [
      { label: "Hardware nodes integrated", value: "180+" },
      { label: "Daily diagnostic loops", value: "12K" },
      { label: "Operator setup time", value: "5 mins" }
    ]
  }
];

// STATE Variables
let isDarkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
let currentTestimonial = 0;
let projectStream = 'IT Infrastructure';
let projectBudget = 'Core Development';

// 2. INITIALIZE LOGIC ON DOM CONTENT LOAD
document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupScrollEffects();
  setupScrollspy();
  setupTestimonialsSlider();
  setupWorkflowSteps();
  setupFaqAccordion();
  setupNewsletters();
  setupContactDrawer();
  setupMobileMenu();
  setupSpecsModal();
  setupBlogClaps();
});

// 3. THEME TOGGLES
function setupTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const appWrapper = document.getElementById('app-wrapper');
  
  function applyTheme() {
    if (isDarkMode) {
      document.body.classList.add('dark', 'bg-[#000000]', 'text-white');
      document.body.classList.remove('bg-neutral-100', 'text-black');
      if (appWrapper) {
        appWrapper.classList.add('dark', 'bg-[#0f0f0f]', 'text-white', 'border-white');
        appWrapper.classList.remove('bg-white', 'text-black', 'border-black');
      }
      document.documentElement.classList.add('dark');
      if (themeToggle) {
        themeToggle.innerHTML = `
          <svg class="w-3.5 h-3.5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          <span class="hidden sm:inline">LIGHT</span>
        `;
      }
    } else {
      document.body.classList.remove('dark', 'bg-[#000000]', 'text-white');
      document.body.classList.add('bg-neutral-100', 'text-black');
      if (appWrapper) {
        appWrapper.classList.remove('dark', 'bg-[#0f0f0f]', 'text-white', 'border-white');
        appWrapper.classList.add('bg-white', 'text-black', 'border-black');
      }
      document.documentElement.classList.remove('dark');
      if (themeToggle) {
        themeToggle.innerHTML = `
          <svg class="w-3.5 h-3.5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <span class="hidden sm:inline">DARK</span>
        `;
      }
    }
  }

  // Set initial theme
  applyTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      applyTheme();
    });
  }
}

// 3.5 ACTIVE NAVIGATION TRACKER (SCROLLSPY)
function setupScrollspy() {
  const sections = [
    { id: 'hero', navId: 'nav-link-studio', mobileId: 'mobile-link-studio' },
    { id: 'projects-section', navId: 'nav-link-projects', mobileId: 'mobile-link-projects' },
    { id: 'blog-section', navId: 'nav-link-blog', mobileId: 'mobile-link-blog' },
    { id: 'contact-sec', navId: 'nav-link-contact', mobileId: 'mobile-link-contact' }
  ];

  function getActiveSection() {
    let currentActive = 'hero';
    const scrollY = window.scrollY;

    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - 150; // offset spacing for a beautiful transition point
        const height = el.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentActive = sec.id;
        }
      }
    }

    // Exact bottom check so Contact lights up instantly when user scrolls all the way down
    if ((window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 120) {
      currentActive = 'contact-sec';
    }

    return currentActive;
  }

  function updateActiveState() {
    const activeSectionId = getActiveSection();

    sections.forEach(sec => {
      const desktopLink = document.getElementById(sec.navId);
      const mobileLink = document.getElementById(sec.mobileId);

      if (sec.id === activeSectionId) {
        if (desktopLink) {
          desktopLink.classList.remove('text-neutral-600', 'dark:text-neutral-400', 'border-transparent');
          desktopLink.classList.add('text-black', 'dark:text-white', 'font-extrabold', 'border-black', 'dark:border-white');
        }
        if (mobileLink) {
          mobileLink.classList.add('text-[#22c55e]', 'dark:text-[#22c55e]', 'font-extrabold');
          mobileLink.classList.remove('text-neutral-600', 'dark:text-neutral-400');
        }
      } else {
        if (desktopLink) {
          desktopLink.classList.add('text-neutral-600', 'dark:text-neutral-400', 'border-transparent');
          desktopLink.classList.remove('text-black', 'dark:text-white', 'font-extrabold', 'border-black', 'dark:border-white');
        }
        if (mobileLink) {
          mobileLink.classList.remove('text-[#22c55e]', 'dark:text-[#22c55e]', 'font-extrabold');
          mobileLink.classList.add('text-neutral-600', 'dark:text-neutral-400');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveState, { passive: true });
  updateActiveState();
}

// 4. SCROLL INTERACTIONS & NAVIGATION SCROLLS
function setupScrollEffects() {
  const backToTopBtn = document.getElementById('back-to-top');
  const heroSection = document.getElementById('hero');
  const fadeSections = document.querySelectorAll('.fade-in-section');

  // Back to top visibility
  function checkScroll() {
    let show = false;
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      show = rect.bottom < 0;
    } else {
      show = window.scrollY > 400;
    }

    if (show) {
      backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Fade In Section animations using standard IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeSections.forEach((sec) => {
    observer.observe(sec);
  });
}

// 5. TESTIMONIAL SLIDER/CAROUSEL
function setupTestimonialsSlider() {
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const metaEl = document.getElementById('testimonial-meta');
  const indexEl = document.getElementById('testimonial-index');
  
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (!quoteEl) return;

  function renderSlide() {
    const slide = testimonials[currentTestimonial];
    quoteEl.style.opacity = 0;
    authorEl.style.opacity = 0;
    metaEl.style.opacity = 0;

    setTimeout(() => {
      quoteEl.textContent = `"${slide.quote}"`;
      authorEl.textContent = `— ${slide.author}`;
      metaEl.textContent = `/ ${slide.role}, ${slide.company}`;
      indexEl.textContent = `[ JOURNAL RECORD: 0${currentTestimonial + 1} / 0${testimonials.length} ]`;

      quoteEl.style.opacity = 1;
      authorEl.style.opacity = 1;
      metaEl.style.opacity = 1;
    }, 200);
  }

  // Active styles transition
  quoteEl.style.transition = 'opacity 0.2s ease-in-out';
  authorEl.style.transition = 'opacity 0.2s ease-in-out';
  metaEl.style.transition = 'opacity 0.2s ease-in-out';

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
      renderSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
      renderSlide();
    });
  }

  renderSlide();
}

// 6. WORKFLOW STEP HOVER EFFECTS
function setupWorkflowSteps() {
  const stepCards = document.querySelectorAll('.workflow-step-card');

  stepCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      // Deactivate all steps
      stepCards.forEach((c) => {
        c.classList.remove('bg-black', 'text-white', 'bg-white', 'text-black', 'bg-[#121212]');
        c.classList.add('bg-white', 'text-black', 'dark:bg-black', 'dark:text-white', 'hover:bg-neutral-50', 'dark:hover:bg-[#121212]');
        
        // Reset sub parts
        const badge = c.querySelector('.workflow-step-badge');
        if (badge) {
          badge.classList.remove('border-white', 'text-white', 'border-black', 'text-black');
          badge.classList.add('border-black', 'text-black', 'dark:border-neutral-700', 'dark:text-neutral-400');
        }

        const title = c.querySelector('.workflow-step-title');
        if (title) {
          title.className = "workflow-step-title text-base font-black tracking-tight uppercase mb-1 text-black dark:text-white";
        }

        const subtitle = c.querySelector('.workflow-step-subtitle');
        if (subtitle) {
          subtitle.className = "workflow-step-subtitle text-[9px] font-mono uppercase mb-4 tracking-wider text-neutral-500 dark:text-neutral-400";
        }

        const desc = c.querySelector('.workflow-step-desc');
        if (desc) {
          desc.className = "workflow-step-desc text-xs leading-relaxed font-sans text-neutral-600 dark:text-neutral-400";
        }

        const documents = c.querySelectorAll('.workflow-step-doc');
        documents.forEach((doc) => {
          doc.className = "workflow-step-doc flex items-center gap-1.5 transition-colors duration-300 text-neutral-500 dark:text-neutral-400";
          const bullet = doc.querySelector('.workflow-step-bullet');
          if (bullet) {
            bullet.className = "workflow-step-bullet w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600";
          }
        });
      });

      // Activate current step
      card.classList.remove('bg-white', 'text-black', 'dark:bg-black', 'dark:text-white', 'hover:bg-neutral-50', 'dark:hover:bg-[#121212]');
      card.classList.add('active-workflow-step', 'dark:bg-white', 'dark:text-black', 'bg-black', 'text-white');

      const badge = card.querySelector('.workflow-step-badge');
      if (badge) {
        badge.classList.remove('border-black', 'text-black', 'dark:border-neutral-700', 'dark:text-neutral-400');
        badge.classList.add('border-white', 'text-white', 'dark:border-black', 'dark:text-black');
      }

      const title = card.querySelector('.workflow-step-title');
      if (title) {
        title.className = "workflow-step-title text-base font-black tracking-tight uppercase mb-1 text-white dark:text-black";
      }

      const subtitle = card.querySelector('.workflow-step-subtitle');
      if (subtitle) {
        subtitle.className = "workflow-step-subtitle text-[9px] font-mono uppercase mb-4 tracking-wider text-neutral-400 dark:text-neutral-500";
      }

      const desc = card.querySelector('.workflow-step-desc');
      if (desc) {
        desc.className = "workflow-step-desc text-xs leading-relaxed font-sans text-neutral-300 dark:text-neutral-800";
      }

      const documents = card.querySelectorAll('.workflow-step-doc');
      documents.forEach((doc) => {
        doc.className = "workflow-step-doc flex items-center gap-1.5 transition-colors duration-300 text-neutral-300 dark:text-neutral-800";
        const bullet = doc.querySelector('.workflow-step-bullet');
        if (bullet) {
          bullet.className = "workflow-step-bullet w-1 h-1 rounded-full bg-neutral-450 dark:bg-neutral-900";
        }
      });
    });
  });
}

// 7. FAQ ACCORDION MENUS
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-accordion-trigger');
    const content = item.querySelector('.faq-accordion-content');
    const plusIcon = item.querySelector('.faq-icon-plus');
    const minusIcon = item.querySelector('.faq-icon-minus');

    if (button && content) {
      button.addEventListener('click', () => {
        const isOpen = !content.classList.contains('max-h-0');

        // Close all other FAQs
        faqItems.forEach((otherItem) => {
          const otherContent = otherItem.querySelector('.faq-accordion-content');
          const otherPlus = otherItem.querySelector('.faq-icon-plus');
          const otherMinus = otherItem.querySelector('.faq-icon-minus');
          if (otherContent) {
            otherContent.classList.add('max-h-0');
            otherContent.classList.remove('border-t', 'py-5', 'bg-[#0a0a0a]', 'bg-[#fafafa]');
          }
          if (otherPlus) otherPlus.classList.remove('hidden');
          if (otherMinus) otherMinus.classList.add('hidden');
        });

        // Open current if it was closed
        if (!isOpen) {
          content.classList.remove('max-h-0');
          content.classList.add('max-h-[300px]', 'border-t', 'py-5', 'bg-[#fafafa]', 'dark:bg-[#0a0a0a]');
          if (plusIcon) plusIcon.classList.add('hidden');
          if (minusIcon) minusIcon.classList.remove('hidden');
        } else {
          content.classList.add('max-h-0');
          content.classList.remove('border-t', 'py-5', 'bg-[#fafafa]', 'dark:bg-[#0a0a0a]');
          if (plusIcon) plusIcon.classList.remove('hidden');
          if (minusIcon) minusIcon.classList.add('hidden');
        }
      });
    }
  });
}

// 8. NEWSLETTER SIGN UP
function setupNewsletters() {
  const form = document.querySelector('.newsletter-signup-form');
  const container = document.getElementById('newsletter-container');

  if (form && container) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const email = input ? input.value : "";
      if (!email) return;

      container.innerHTML = `
        <div class="p-3 bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-neutral-200 uppercase tracking-widest font-bold">
          Success. You are added successfully.
        </div>
      `;

      setTimeout(() => {
        // Reset after 5 seconds
        container.innerHTML = `
          <form class="newsletter-signup-form flex border border-neutral-800 bg-neutral-950">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS"
              required
              class="flex-grow px-3 py-2 text-[9px] bg-transparent border-0 text-white placeholder-neutral-600 focus:outline-none font-mono"
            />
            <button 
              type="submit"
              class="px-4 py-2 bg-white text-black text-[9px] font-mono uppercase tracking-widest font-black hover:bg-neutral-200 transition-colors duration-200"
            >
              Signup
            </button>
          </form>
        `;
        setupNewsletters(); // Re-bind listener
      }, 5000);
    });
  }
}

// 9. CONTACT DRAWER (Brief Launcher)
function setupContactDrawer() {
  const drawer = document.getElementById('contact-drawer');
  const openButtons = document.querySelectorAll('.open-campaign-drawer');
  const closeBtn = document.getElementById('drawer-close');
  const overlay = document.getElementById('contact-drawer-overlay');

  const streamButtons = document.querySelectorAll('.stream-focus-btn');
  const budgetButtons = document.querySelectorAll('.budget-tier-btn');
  const contactForm = document.getElementById('drawer-contact-form');
  const formContent = document.getElementById('drawer-form-content');
  const successContent = document.getElementById('drawer-success-content');

  function openDrawer() {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
  }

  function closeDrawer() {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
  }

  openButtons.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Set stream selection
  streamButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      streamButtons.forEach(s => {
        s.className = "stream-focus-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black dark:bg-black dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-white dark:hover:text-white";
      });
      btn.className = "stream-focus-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-black text-white border-black dark:bg-white dark:text-black dark:border-white";
      projectStream = btn.dataset.stream;
    });
  });

  // Set budget selection
  budgetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      budgetButtons.forEach(b => {
        b.className = "budget-tier-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black dark:bg-black dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-white dark:hover:text-white";
      });
      btn.className = "budget-tier-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-black text-white border-black dark:bg-white dark:text-black dark:border-white";
      projectBudget = btn.dataset.budget;
    });
  });

  // Form submit handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get input values
      const name = document.getElementById('contact-name')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const message = document.getElementById('contact-msg')?.value || '';

      console.log("Brief Filed:", { name, email, message, projectStream, projectBudget });

      // Show success content
      formContent.classList.add('hidden');
      successContent.classList.remove('hidden');

      setTimeout(() => {
        closeDrawer();
        // Reset states after animations complete
        setTimeout(() => {
          formContent.classList.remove('hidden');
          successContent.classList.add('hidden');
          contactForm.reset();
          
          // Reset Selected Buttons Layouts
          streamButtons.forEach((s, idx) => {
            if (idx === 0) {
              s.className = "stream-focus-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-black text-white border-black dark:bg-white dark:text-black dark:border-white";
              projectStream = s.dataset.stream;
            } else {
              s.className = "stream-focus-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black dark:bg-black dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-white dark:hover:text-white";
            }
          });
          budgetButtons.forEach((b, idx) => {
            if (idx === 1) {
              b.className = "budget-tier-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-black text-white border-black dark:bg-white dark:text-black dark:border-white";
              projectBudget = b.dataset.budget;
            } else {
              b.className = "budget-tier-btn p-3 text-left font-mono text-[10px] uppercase tracking-wider border cursor-pointer transition-colors duration-200 font-bold bg-white text-neutral-600 border-neutral-300 hover:border-black hover:text-black dark:bg-black dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-white dark:hover:text-white";
            }
          });
        }, 500);
      }, 4000);
    });
  }
}

// 9A. MOBILE NAV DRAWER (Hamburger Menu)
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!toggleBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu drawer when any link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Make sure starting a project from mobile menu closes it first
  const startProjectBtn = drawer.querySelector('.open-campaign-drawer');
  if (startProjectBtn) {
    startProjectBtn.addEventListener('click', () => {
      closeMenu();
    });
  }
}

// 10. PROJECT DETAIL SPECS MODAL
function setupSpecsModal() {
  const modal = document.getElementById('specs-modal');
  const modalOverlay = document.getElementById('specs-modal-overlay');
  const modalCloseButtons = document.querySelectorAll('.close-specs-modal');
  const projectCards = document.querySelectorAll('.project-card-trigger');

  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Populate elements inside specs-modal
    document.getElementById('modal-specs-brand').textContent = `/ ${project.brand}`;
    document.getElementById('modal-specs-image').src = project.image;
    document.getElementById('modal-specs-image').alt = project.brand;
    document.getElementById('modal-specs-year').textContent = `ACTIVE_BUILT_SYSTEM_YEAR: ${project.year}`;
    document.getElementById('modal-specs-title').textContent = `${project.brand} — ${project.title}`;
    document.getElementById('modal-specs-full-desc').textContent = project.fullDescription;
    document.getElementById('modal-specs-challenge').textContent = `"${project.challenge}"`;
    document.getElementById('modal-specs-outcome').textContent = project.outcome;

    // Populate Tags
    const tagsWrapper = document.getElementById('modal-specs-tags');
    tagsWrapper.innerHTML = '';
    project.tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = "font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase border bg-neutral-100 text-black border-neutral-300 dark:bg-neutral-900 dark:text-white dark:border-neutral-700";
      tagSpan.textContent = tag;
      tagsWrapper.appendChild(tagSpan);
    });

    // Populate Stats Scorecard
    const statsWrapper = document.getElementById('modal-specs-stats');
    statsWrapper.innerHTML = '';
    project.stats.forEach(st => {
      const statCard = document.createElement('div');
      statCard.className = "p-2.5 border text-center border-black bg-neutral-50 dark:border-white dark:bg-[#121212]";
      statCard.innerHTML = `
        <span class="block text-base font-black font-mono tracking-tight text-black dark:text-white">${st.value}</span>
        <span class="block text-[8px] font-mono uppercase text-neutral-400 mt-1 leading-none">${st.label}</span>
      `;
      statsWrapper.appendChild(statCard);
    });

    // Trigger visible animations
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    modal.querySelector('.modal-container-card').classList.remove('scale-95');
    modal.querySelector('.modal-container-card').classList.add('scale-100');
  }

  function closeModal() {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-container-card').classList.remove('scale-100');
    modal.querySelector('.modal-container-card').classList.add('scale-95');
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.dataset.projectId;
      openModal(pId);
    });
  });

  modalCloseButtons.forEach(btn => btn.addEventListener('click', closeModal));
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
}

// 11. BLOG CLAPS INCREMENTS
function setupBlogClaps() {
  const clapButtons = document.querySelectorAll('.clap-btn');

  clapButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      const countEl = btn.querySelector('.clap-count-number');
      let currentClaps = parseInt(btn.dataset.claps || '0');
      currentClaps++;
      
      // Update data attribute & element text content
      btn.dataset.claps = currentClaps;
      countEl.textContent = currentClaps;
    });
  });
}
