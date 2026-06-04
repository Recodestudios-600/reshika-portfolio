const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const savedTheme = localStorage.getItem('reshika-portfolio-theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('reshika-portfolio-theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));
