// ===== Navbar Toggle =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Nav link click pe menu band ho jaye (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// ===== Skills Tabs Filter =====
const tabBtns = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skill-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    skillCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// ===== Progress Bar Animation on Scroll =====
const progressBars = document.querySelectorAll('.progress div');

// Step 1: width of all are firstly 0 
progressBars.forEach(bar => {
  const styleAttr = bar.getAttribute('style');
  if (styleAttr) {
    const match = styleAttr.match(/width:\s*([\d]+%)/);
    if (match) {
      bar.dataset.width = match[1];
      bar.style.width = '0%';
    }
  }
});

// Step 2: Scroll pr animate 
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.dataset.width;
      if (targetWidth) {
        entry.target.style.width = targetWidth;
        progressObserver.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.5 });

// Step 3: Observe karo
progressBars.forEach(bar => progressObserver.observe(bar));


// ===== Contact Form Submit =====
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully! I will get back to you soon.');
    contactForm.reset();
  });
}