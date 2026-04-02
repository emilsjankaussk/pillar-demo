// ─── HERO SLIDER ───
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
function showSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  current = (n + slides.length) % slides.length;
  slides[current]?.classList.add('active');
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
}
window.nextSlide = () => showSlide(current + 1);
window.prevSlide = () => showSlide(current - 1);
document.querySelectorAll('.dot').forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
setInterval(() => showSlide(current + 1), 5000);

// ─── STICKY NAV shadow ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,.1)' : 'none';
});

// ─── SMOOTH scroll for back-to-top ───
document.querySelector('.back-to-top')?.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── PROJECT FILTER ───
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
