/* Galerie – Lightbox via native <dialog> */
(function () {

  var photos = [
    { src: 'images/galerie/billardhalle.jpg',  alt: 'Billardtische im Bowling Castle Erding', label: 'Spielstätte', quote: 'Von außen ein Hingucker – innen dein neues Billard-Zuhause.' },
    { src: 'images/galerie/billardhalle2.jpg', alt: 'Billardhalle im Bowling Castle Erding',  label: 'Spielstätte', quote: 'Top-Tische, starke Gemeinschaft, echtes Spielgefühl – komm vorbei und spiel mit!' },
    { src: 'images/galerie/erding2.jpg',       alt: 'PBC Erding – Mannschaftsfoto',           label: 'Mannschaft',  quote: 'Jeder Stoß zählt, jeder Punkt verbindet – als Team sind wir stärker.' },
    { src: 'images/galerie/erding3.jpg',       alt: 'PBC Erding – Mannschaftsfoto',           label: 'Mannschaft',  quote: 'Mit Leidenschaft am Tisch und Zusammenhalt im Rücken wächst jedes Spiel.' },
    { src: 'images/galerie/spieler1.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Billard spielt man nicht nur mit der Hand – sondern mit Kopf, Gefühl und Geduld.' },
    { src: 'images/galerie/spieler2.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Jeder Stoß ist eine Entscheidung. Jeder Lauf eine neue Chance.' },
    { src: 'images/galerie/spieler3.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Billard ist der Moment, in dem Konzentration alles andere ausblendet.' },
    { src: 'images/galerie/spieler4.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Ich spiele Billard, weil ein guter Stoß mehr sagt als tausend Worte.' },
    { src: 'images/galerie/spieler5.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Am Tisch zählt nicht, wer laut ist – sondern wer ruhig bleibt.' },
    { src: 'images/galerie/spieler6.jpg',      alt: 'Konzentrierter Stoß am Billardtisch',   label: 'Spielszene',  quote: 'Billard ist Präzision, Taktik und Leidenschaft.' },
    { src: 'images/galerie/spieler7.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Manchmal reicht eine Kugel, um den ganzen Abend zu drehen.' },
    { src: 'images/galerie/spieler8.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Billard ist nicht nur Zeitvertreib. Es ist ein Spiel mit Blick fürs Detail.' },
    { src: 'images/galerie/spieler9.jpg',      alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Jeder Stoß ist eine kleine Entscheidung zwischen Gefühl, Technik und Strategie.' },
    { src: 'images/galerie/spieler10.jpg',     alt: 'Spielszene am Billardtisch',             label: 'Spielszene',  quote: 'Der Tisch ist klein – aber die Möglichkeiten sind endlos.' },
  ];

  var dialog = document.getElementById('lightbox');
  var lbImg  = document.getElementById('lb-img');
  var lbLbl  = document.getElementById('lb-label');
  var lbQuo  = document.getElementById('lb-quote');
  var lbCtr  = document.getElementById('lb-counter');
  var lbPrev = document.getElementById('lb-prev');
  var lbNext = document.getElementById('lb-next');
  var lbClose= document.getElementById('lb-close');

  var current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length;
    var p = photos[current];
    lbImg.src = p.src;
    lbImg.alt = p.alt;
    lbLbl.textContent = p.label;
    lbQuo.textContent = p.quote;
    lbCtr.textContent = (current + 1) + ' / ' + photos.length;
    if (!dialog.open) dialog.showModal();
  }

  function close() {
    dialog.close();
    lbImg.src = '';
  }

  // Thumbnail clicks
  document.querySelectorAll('.galerie-item').forEach(function (item) {
    item.addEventListener('click', function () {
      show(parseInt(item.getAttribute('data-index'), 10));
    });
  });

  // Navigation
  lbPrev.addEventListener('click', function () { show(current - 1); });
  lbNext.addEventListener('click', function () { show(current + 1); });
  lbClose.addEventListener('click', close);

  // Backdrop click closes
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) close();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'Escape')     close();
  });

})();
