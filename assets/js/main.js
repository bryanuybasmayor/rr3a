/* =====================================================
   RR & 3A's Cafe — Shared Scripts
   Mobile nav toggle + dynamic copyright year.
   ===================================================== */

// ── Mobile nav toggle ──────────────────────────
const btn  = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');
const bars = btn.querySelectorAll('.hamburger-bar');

function openMobileMenu() {
  menu.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'Close navigation menu');
  // Animate bars into X
  bars[0].style.transform = 'translateY(5.5px) rotate(45deg)';
  bars[1].style.opacity = '0';
  bars[2].style.transform = 'translateY(-5.5px) rotate(-45deg)';
}

function closeMobileMenu() {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open navigation menu');
  // Reset bars
  bars[0].style.transform = '';
  bars[1].style.opacity = '';
  bars[2].style.transform = '';
}

btn.addEventListener('click', () => {
  menu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

// Close menu if user clicks outside
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ── Dynamic copyright year ─────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
