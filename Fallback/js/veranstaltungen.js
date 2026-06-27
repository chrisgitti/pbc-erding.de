/* Turnierseite – dynamischer Monatskalender */
(function () {

  var WD_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  var MONTH_NAMES = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

  // Sondertermine (JHV, Vereinsmeisterschaft …) – spiegelt vereinstermine[] aus lib/data.ts
  var vereinstermine = [
    {
      date:  '2026-06-27',
      title: 'Jahreshauptversammlung 2026',
      time:  '10:00 Uhr Weißwurstfrühstück · 11:30 Uhr Versammlung',
      note:  'Mit anschließender Vereinsmeisterschaft',
      badge: 'verein',
      slug:  'jahreshauptversammlung-2026'
    },
    {
      date:  '2026-06-27',
      title: 'Vereinsmeisterschaft 2026',
      time:  'im Anschluss an die JHV',
      note:  'Internes Turnier um den Vereinsmeistertitel',
      badge: 'turnier'
    }
  ];

  function parseISO(s) {
    var p = s.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function lastWednesdayOfMonth(year, month) {
    var lastDay = new Date(year, month + 1, 0);
    var wd = lastDay.getDay();
    var back = (wd - 3 + 7) % 7;
    return new Date(year, month, lastDay.getDate() - back);
  }

  function buildMonthEvents(year, month) {
    var result = [];
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var lastWed = null;

    for (var day = 1; day <= daysInMonth; day++) {
      var d = new Date(year, month, day);
      var wd = d.getDay();
      if (wd === 0) {
        result.push({ date: new Date(d), title: 'Schnuppertraining & Vereinstraining', time: '13:00 – 16:00 Uhr', type: 'probetraining', note: 'Offen für Mitglieder und Interessierte' });
      } else if (wd === 2) {
        result.push({ date: new Date(d), title: 'Vereinstraining', time: '18:00 – 21:00 Uhr', type: 'training', note: 'Training und freies Spiel' });
      } else if (wd === 4) {
        result.push({ date: new Date(d), title: 'Vereinstraining', time: '18:00 – 21:00 Uhr', type: 'training', note: 'Training und Ligavorbereitung' });
      } else if (wd === 3) {
        lastWed = new Date(d);
      }
    }

    // Last Wednesday = Mittwochsturnier
    if (lastWed) {
      result.push({ date: lastWed, title: 'Mittwochsturnier', time: '18:30 Uhr', type: 'turnier', note: 'Offenes Turnier für Vereins- und Hobbyspieler' });
    }

    // Sondertermine für diesen Monat einmischen
    vereinstermine.forEach(function (v) {
      var d = parseISO(v.date);
      if (d.getFullYear() === year && d.getMonth() === month) {
        result.push({
          date:  d,
          title: v.title,
          time:  v.time,
          type:  v.badge === 'turnier' ? 'vereinstermin-turnier' : 'vereinstermin-verein',
          note:  v.note,
          slug:  v.slug
        });
      }
    });

    result.sort(function (a, b) { return a.date - b.date; });
    return result;
  }

  function eventRowHtml(ev, isPast) {
    var d = ev.date;
    var wd = WD_SHORT[d.getDay()];
    var day = String(d.getDate()).padStart(2, '0');
    var mon = MONTH_NAMES[d.getMonth()].substring(0, 3);
    var isTurnier = ev.type === 'turnier' || ev.type === 'vereinstermin-turnier';
    var isVereinstermin = ev.type === 'vereinstermin-turnier' || ev.type === 'vereinstermin-verein';
    var badgeClass, badgeLabel;
    if (ev.type === 'turnier' || ev.type === 'vereinstermin-turnier') {
      badgeClass = 'badge-gold'; badgeLabel = 'Turnier';
    } else if (ev.type === 'vereinstermin-verein') {
      badgeClass = 'badge-green'; badgeLabel = 'Verein';
    } else if (ev.type === 'probetraining') {
      badgeClass = 'badge-neutral'; badgeLabel = 'Schnuppertraining';
    } else {
      badgeClass = 'badge-neutral'; badgeLabel = 'Training';
    }
    var rowClass = 'cal-event-row'
      + (ev.type === 'turnier' ? ' cal-event-turnier' : '')
      + (isVereinstermin ? ' cal-event-vereinstermin' : '')
      + (isPast ? ' cal-event-past' : '');

    var inner = '<div class="cal-date-block' + (isPast ? ' cal-past' : '') + '">' +
        '<span class="cal-wd">' + wd + '</span>' +
        '<span class="cal-day">' + day + '</span>' +
        '<span class="cal-mon' + (isTurnier ? ' cal-mon-gold' : '') + '">' + mon + '</span>' +
      '</div>' +
      '<div class="cal-divider"></div>' +
      '<div class="cal-event-info">' +
        '<div class="cal-event-meta">' +
          '<span class="badge ' + badgeClass + '">' + badgeLabel + '</span>' +
          '<span class="cal-time">' + ev.time + '</span>' +
        '</div>' +
        '<p class="cal-event-title' + (ev.type === 'turnier' ? ' cal-title-gold' : '') + '">' + ev.title + '</p>' +
        '<p class="cal-event-note">' + ev.note + '</p>' +
      '</div>';

    if (ev.slug) {
      return '<a class="' + rowClass + '" href="news/' + ev.slug + '.html">' + inner + '</a>';
    }
    return '<div class="' + rowClass + '">' + inner + '</div>';
  }

  function renderCalendar() {
    var container = document.getElementById('kalender-container');
    if (!container) return;

    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var months = [
      { year: now.getFullYear(), month: now.getMonth() },
    ];
    if (now.getMonth() === 11) {
      months.push({ year: now.getFullYear() + 1, month: 0 });
    } else {
      months.push({ year: now.getFullYear(), month: now.getMonth() + 1 });
    }

    var html = '';
    months.forEach(function (m) {
      var events = buildMonthEvents(m.year, m.month);
      var future = events.filter(function (e) { return e.date >= today; });
      if (future.length === 0) return;

      var trainingCount = future.filter(function (e) { return e.type === 'training' || e.type === 'probetraining'; }).length;
      var turnierCount  = future.filter(function (e) { return e.type === 'turnier' || e.type === 'vereinstermin-turnier'; }).length;
      var monthLabel = MONTH_NAMES[m.month] + ' ' + m.year;

      html += '<div class="month-block">' +
        '<div class="month-header">' +
          '<div>' +
            '<h2 class="month-title">' + monthLabel + '</h2>' +
            '<p class="month-sub">Bowling Castle Erding</p>' +
          '</div>' +
          '<div class="month-counts">' +
            '<div class="month-count"><span class="month-count-num">' + trainingCount + '</span><span class="month-count-label">Trainings</span></div>' +
            '<div class="month-count-sep"></div>' +
            '<div class="month-count"><span class="month-count-num month-count-gold">' + turnierCount + '</span><span class="month-count-label">Turnier</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="month-events">';

      events.forEach(function (ev) {
        html += eventRowHtml(ev, ev.date < today);
      });

      html += '</div></div>';
    });

    container.innerHTML = html || '<p style="color:var(--text-muted)">Keine weiteren Termine in diesem Monat.</p>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCalendar);
  } else {
    renderCalendar();
  }

})();
