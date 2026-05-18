/* Kommende Veranstaltungen – Datumslogik
   Portiert aus lib/turnier-utils.ts und components/sections/EventsSection.tsx */

(function () {

  // ── Spielplandaten (aus lib/data.ts, nur offene Spiele relevant) ──
  var spielplan = [
  ];

  // ── Datumslogik ──

  function lastWednesdayOfMonth(year, month) {
    var lastDay = new Date(year, month + 1, 0);
    var wd = lastDay.getDay();
    var back = (wd - 3 + 7) % 7;
    return new Date(year, month, lastDay.getDate() - back);
  }

  function getNextMittwochsturnier(from) {
    var today = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    var thisMonth = lastWednesdayOfMonth(today.getFullYear(), today.getMonth());
    if (thisMonth >= today) return thisMonth;
    var nm = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
    var ny = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear();
    return lastWednesdayOfMonth(ny, nm);
  }

  function getNextTrainingDays(from, count) {
    var result = [];
    var d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    while (result.length < count) {
      var wd = d.getDay();
      if (wd === 0)       result.push({ date: new Date(d), type: 'schnuppertraining' });
      else if (wd === 2 || wd === 4) result.push({ date: new Date(d), type: 'training' });
      d.setDate(d.getDate() + 1);
    }
    return result;
  }

  function formatDE(date) {
    var wd = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][date.getDay()];
    var d  = String(date.getDate()).padStart(2, '0');
    var m  = String(date.getMonth() + 1).padStart(2, '0');
    return wd + '. ' + d + '.' + m + '.' + date.getFullYear();
  }

  function parseISO(s) {
    var p = s.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  // ── Einträge berechnen ──

  function computeEntries() {
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    var entries = [];

    // Nächstes Mittwochsturnier
    var turnier = getNextMittwochsturnier(today);
    entries.push({
      type:  'turnier',
      title: 'Mittwochsturnier',
      date:  turnier,
      dateStr: formatDE(turnier),
      time:  '18:30 Uhr',
      sub:   'Bowling Castle Erding – offen für alle'
    });

    // Nächste 3 Trainingstage
    var trainings = getNextTrainingDays(today, 3);
    trainings.forEach(function (t) {
      if (t.type === 'schnuppertraining') {
        entries.push({
          type:  'training',
          title: 'Schnuppertraining',
          date:  t.date,
          dateStr: formatDE(t.date),
          time:  '13:00 – 16:00 Uhr',
          sub:   'Bowling Castle Erding – kostenlos & offen'
        });
      } else {
        var wd = t.date.getDay();
        entries.push({
          type:  'training',
          title: wd === 2 ? 'Vereinstraining' : 'Training & Ligavorbereitung',
          date:  t.date,
          dateStr: formatDE(t.date),
          time:  'ab 18:00 Uhr',
          sub:   'Bowling Castle Erding'
        });
      }
    });

    // Nächster offener Spieltag je Mannschaft
    spielplan.forEach(function (sp) {
      var spDate = parseISO(sp.datum);
      if (spDate >= today) {
        entries.push({
          type:  'liga',
          title: sp.mannschaft + ' – Ligaspieltag',
          date:  spDate,
          dateStr: formatDE(spDate),
          time:  sp.uhrzeit + ' Uhr',
          sub:   sp.heim + ' vs. ' + sp.gast
        });
      }
    });

    // Sortieren nach Datum, dann auf 4 begrenzen
    entries.sort(function (a, b) { return a.date - b.date; });
    return entries.slice(0, 4);
  }

  // ── Render ──

  function render() {
    var loading = document.getElementById('events-loading');
    var grid    = document.getElementById('events-grid');
    if (!grid) return;

    var entries = computeEntries();

    var html = entries.map(function (e) {
      return '<div class="event-card event-' + e.type + '">' +
        '<p class="event-date">' + e.dateStr + '</p>' +
        '<p class="event-title">' + e.title + '</p>' +
        '<p class="event-time">' + e.time + ' · ' + e.sub + '</p>' +
        '</div>';
    }).join('');

    if (loading) loading.style.display = 'none';
    grid.innerHTML = html;
    grid.style.display = 'grid';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
