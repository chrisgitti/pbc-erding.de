/* Chronik / News – Lightbox für .article-photo Bilder */
(function () {
  var photos = Array.from(document.querySelectorAll('.article-photo'));
  if (!photos.length) return;

  /* Dialog dynamisch erzeugen – nutzt die vorhandenen Lightbox-CSS-Klassen */
  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Bildvorschau');
  dialog.innerHTML =
    '<button class="lightbox-close" aria-label="Schließen">✕</button>' +
    '<div class="lightbox-inner">' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Vorheriges Bild">‹</button>' +
      '<div style="flex:1;display:flex;flex-direction:column;align-items:center;">' +
        '<img class="lightbox-img" src="" alt="">' +
        '<p class="lightbox-counter"></p>' +
      '</div>' +
      '<button class="lightbox-nav lightbox-next" aria-label="Nächstes Bild">›</button>' +
    '</div>';
  document.body.appendChild(dialog);

  var lbImg   = dialog.querySelector('.lightbox-img');
  var lbCtr   = dialog.querySelector('.lightbox-counter');
  var lbPrev  = dialog.querySelector('.lightbox-prev');
  var lbNext  = dialog.querySelector('.lightbox-next');
  var lbClose = dialog.querySelector('.lightbox-close');
  var current = 0;

  if (photos.length === 1) {
    lbPrev.style.display = 'none';
    lbNext.style.display = 'none';
    lbCtr.style.display  = 'none';
  }

  function show(index) {
    current = (index + photos.length) % photos.length;
    lbImg.src = photos[current].src;
    lbImg.alt = photos[current].alt;
    if (photos.length > 1) lbCtr.textContent = (current + 1) + ' / ' + photos.length;
    if (!dialog.open) dialog.showModal();
  }

  function close() {
    dialog.close();
    lbImg.src = '';
  }

  photos.forEach(function (img, i) {
    img.addEventListener('click', function () { show(i); });
  });

  lbPrev.addEventListener('click', function () { show(current - 1); });
  lbNext.addEventListener('click', function () { show(current + 1); });
  lbClose.addEventListener('click', close);

  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'Escape') close();
  });
})();
