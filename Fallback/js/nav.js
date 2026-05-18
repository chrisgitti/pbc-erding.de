/* Navigation – Hamburger-Menü */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Aktiven Link markieren
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav ul a').forEach(function (a) {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) a.classList.add('active');
  });

  // Menü bei Klick auf Link schließen (mobile)
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
