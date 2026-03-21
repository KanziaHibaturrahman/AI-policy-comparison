// app.js — lex.ai navigation, rendering, and routing

(function () {
  'use strict';

  // ——— STATE ———
  const state = { view: 'overview', law: 'eu' };

  // Law registry — populated after data scripts load
  const LAWS = {
    eu: () => window.LAW_EU,
    kr: () => window.LAW_KR,
    vn: () => window.LAW_VN,
    kz: () => window.LAW_KZ,
    jp: () => window.LAW_JP,
  };

  // ——— HELPERS ———
  function law() { return LAWS[state.law](); }

  function chipHtml(cell) {
    if (cell.type === 'text') return `<span class="mono-cell">${cell.text}</span>`;
    return `<span class="chip ${cell.type}">${cell.text}</span>`;
  }

  function docIconSvg() {
    return `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
      <rect x="3" y="1" width="10" height="14" rx="1.5"/>
      <line x1="6" y1="5" x2="10" y2="5"/>
      <line x1="6" y1="8" x2="10" y2="8"/>
      <line x1="6" y1="11" x2="8" y2="11"/>
    </svg>`;
  }

  const AP_MAP = {
    risk:  ['ap-risk',  'Risk-based'],
    vol:   ['ap-vol',   'Voluntary'],
    mixed: ['ap-mixed', 'Mixed'],
  };

  // ——— RENDER: OVERVIEW ———
  function renderOverview() {
    const l = law();
    const [apClass, apLabel] = AP_MAP[l.approach_key];

    const tiersHtml = l.tiers.map(t => `
      <div class="tier-row">
        <div class="tier-dot" style="background:${t.color}"></div>
        <div class="tier-name">${t.name}</div>
        <div class="tier-desc">${t.desc}</div>
        <div class="tier-count">${t.count}</div>
      </div>
    `).join('');

    const docsHtml = l.docs.map(d => `
      <a class="doc-link" href="${d.url}" target="_blank" rel="noopener noreferrer">
        <div class="doc-icon">${docIconSvg()}</div>
        <div>
          <div class="doc-title">${d.title}</div>
          <div class="doc-sub">${d.sub}</div>
        </div>
      </a>
    `).join('');

    return `
      <div class="tabs">
        <div class="tab active" data-tab="overview">Overview</div>
        <div class="tab" data-tab="fulltext">Full text</div>
      </div>

      <div class="page-header reveal visible">
        <div>
          <div class="page-flag">${l.flag}</div>
          <div class="page-title">${l.name}</div>
          <div class="page-sub">${l.sub}</div>
          <div class="status-pill">
            <div class="status-dot"></div>${l.status}
          </div>
        </div>
        <a href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer"
           class="btn btn-solid" style="white-space:nowrap">
          Read full text ↗
        </a>
      </div>

      <div class="meta-grid reveal visible">
        <div class="meta-card">
          <div class="meta-label">Enacted</div>
          <div class="meta-val">${l.enacted}</div>
        </div>
        <div class="meta-card">
          <div class="meta-label">Approach</div>
          <div class="meta-val">
            <span class="ch-approach ${apClass}">${apLabel}</span>
          </div>
        </div>
        <div class="meta-card">
          <div class="meta-label">Law number</div>
          <div class="meta-val mono">${l.number}</div>
        </div>
        <div class="meta-card">
          <div class="meta-label">Scope</div>
          <div class="meta-val">${l.scope}</div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-title">Risk classification</div>
        <div class="section-line"></div>
      </div>
      <div class="risk-tiers reveal visible">${tiersHtml}</div>

      <div class="section-header">
        <div class="section-title">Official documents</div>
        <div class="section-line"></div>
      </div>
      <div class="doc-grid reveal visible">${docsHtml}</div>
    `;
  }

  // ——— RENDER: FULL TEXT ———
  function renderFullText() {
    const l = law();

    const tocHtml = l.fulltext.map((ch, i) =>
      `<a class="toc-item ${i === 0 ? 'active' : ''}" href="#chapter-${i}" data-ch="${i}">${ch.chapter}</a>`
    ).join('');

    const bodyHtml = l.fulltext.map((ch, i) => `
      <div id="chapter-${i}">
        <div class="law-chapter">${ch.chapter}</div>
        ${ch.articles.map(a => `
          <div class="law-article-num">${a.num}</div>
          <div class="law-article-title">${a.title}</div>
          <p class="law-text">${a.text}</p>
          ${a.note ? `<div class="law-note">${a.note}</div>` : ''}
        `).join('')}
      </div>
    `).join('');

    return `
      <div class="tabs">
        <div class="tab" data-tab="overview">Overview</div>
        <div class="tab active" data-tab="fulltext">Full text</div>
      </div>

      <div class="page-header reveal visible">
        <div>
          <div class="page-flag">${l.flag}</div>
          <div class="page-title">${l.name}</div>
          <div class="page-sub">${l.sub}</div>
        </div>
        <a href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer"
           class="btn btn-outline" style="white-space:nowrap">
          Official source ↗
        </a>
      </div>

      <div class="text-view">
        <div class="text-toc">
          <div class="toc-title">Contents</div>
          ${tocHtml}
          <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border)">
            <div class="toc-title">Source</div>
            <a class="toc-item" href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer"
               style="color:var(--blue)">
              Official document ↗
            </a>
          </div>
        </div>
        <div class="law-body">${bodyHtml}</div>
      </div>
    `;
  }

  // ——— RENDER: COMPARE ———
  function renderCompare() {
    const data = window.COMPARE_DATA;
    const keys = ['eu', 'kr', 'vn', 'kz', 'jp'];

    const heads = [
      { flag: '🇪🇺', name: 'European Union', year: 'Reg. 2024/1689', ap: 'risk' },
      { flag: '🇰🇷', name: 'South Korea',    year: 'Law 20676',      ap: 'risk' },
      { flag: '🇻🇳', name: 'Vietnam',        year: 'Law 134/2025',   ap: 'mixed' },
      { flag: '🇰🇿', name: 'Kazakhstan',     year: 'Law 230-VIII',   ap: 'mixed' },
      { flag: '🇯🇵', name: 'Japan',          year: 'AI Promotion',   ap: 'vol' },
    ];

    const headerHtml = `
      <div class="country-headers">
        <div class="ch-blank"><span>Dimension</span></div>
        ${heads.map(h => `
          <div class="ch-card">
            <div class="ch-flag">${h.flag}</div>
            <div class="ch-name">${h.name}</div>
            <div class="ch-year">${h.year}</div>
            <div class="ch-approach ${AP_MAP[h.ap][0]}">${AP_MAP[h.ap][1]}</div>
          </div>
        `).join('')}
      </div>`;

    const tableHtml = data.sections.map(sec => `
      <div class="ct-section">
        <div class="ct-sh">${sec.label}</div>
        <div class="ct-sh ct-sh-fill"></div>
      </div>
      ${sec.rows.map(row => `
        <div class="ct-row">
          <div class="ct-label">${row.label}</div>
          ${keys.map(k => `<div class="ct-cell">${chipHtml(row[k])}</div>`).join('')}
        </div>
      `).join('')}
    `).join('');

    const strengthHtml = data.strength.map(s => `
      <div class="strength-card">
        <div class="strength-flag">${s.flag}</div>
        <div class="strength-name">${s.name}</div>
        <div class="strength-row">
          <div class="strength-label">Comprehensiveness</div>
          <div class="strength-bar-wrap">
            <div class="strength-track">
              <div class="strength-fill" style="width:${s.comp}%"></div>
            </div>
            <span class="strength-score">${(s.comp / 10).toFixed(1)}</span>
          </div>
        </div>
        <div class="strength-row">
          <div class="strength-label">Enforcement strength</div>
          <div class="strength-bar-wrap">
            <div class="strength-track">
              <div class="strength-fill" style="width:${s.enf}%"></div>
            </div>
            <span class="strength-score">${(s.enf / 10).toFixed(1)}</span>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <div class="compare-controls">
        <div>
          <div class="page-title" style="font-size:1.6rem;font-family:'Playfair Display',serif">
            Jurisdiction comparison
          </div>
          <div class="page-sub" style="margin-top:0.3rem">
            5 laws · 15 dimensions · updated March 2026
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-chip on">All</div>
          <div class="filter-chip">Binding only</div>
          <div class="filter-chip">Risk-based</div>
          <div class="filter-chip">Penalties</div>
        </div>
      </div>

      ${headerHtml}
      <div class="ctable">${tableHtml}</div>

      <div style="margin-top:2.5rem">
        <div class="section-header">
          <div class="section-title">Regulatory strength index</div>
          <div class="section-line"></div>
        </div>
        <div class="strength-grid">${strengthHtml}</div>
      </div>
    `;
  }

  // ——— RENDER: TIMELINE ———
  function renderTimeline() {
    const events = window.TIMELINE_EVENTS;

    const eventsHtml = events.map(e => `
      <div class="tl-item">
        <div class="tl-date">${e.date}</div>
        <div class="tl-dot-wrap">
          <div class="tl-dot ${e.filled ? 'filled' : ''}"></div>
        </div>
        <div class="tl-content">
          <div class="tl-jurisdiction">${e.who}</div>
          <div class="tl-event">${e.event}</div>
          <div class="tl-desc">${e.desc}</div>
          ${e.upcoming ? '<div class="tl-upcoming">Upcoming</div>' : ''}
        </div>
      </div>
    `).join('');

    return `
      <div style="margin-bottom:2.5rem">
        <div class="page-title" style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:0.4rem">
          Enforcement timeline
        </div>
        <div class="page-sub">
          Key legislative dates across all 5 jurisdictions — chronological order
        </div>
      </div>
      <div class="timeline-view">
        <div class="tl-track"></div>
        ${eventsHtml}
      </div>
    `;
  }

  // ——— MAIN RENDER DISPATCHER ———
  function render() {
    const main = document.getElementById('main-content');
    if (!main) return;

    if (state.view === 'overview')  main.innerHTML = renderOverview();
    else if (state.view === 'fulltext') main.innerHTML = renderFullText();
    else if (state.view === 'compare')  main.innerHTML = renderCompare();
    else if (state.view === 'timeline') main.innerHTML = renderTimeline();

    bindInnerEvents();
    updateSidebar();
    setupReveal();
  }

  // ——— INNER EVENT BINDING (tabs, filter chips) ———
  function bindInnerEvents() {
    // Tabs
    document.querySelectorAll('.tab[data-tab]').forEach(tab => {
      tab.addEventListener('click', () => {
        state.view = tab.dataset.tab;
        render();
      });
    });

    // Filter chips — visual toggle only
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('on'));
        chip.classList.add('on');
      });
    });

    // TOC links in full text
    document.querySelectorAll('.toc-item[data-ch]').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById('chapter-' + item.dataset.ch);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.toc-item').forEach(t => t.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }

  // ——— SIDEBAR ACTIVE STATE ———
  function updateSidebar() {
    document.querySelectorAll('.sidebar .nav-item[data-view]').forEach(el => {
      el.classList.remove('active');
      const v = el.dataset.view;
      const l = el.dataset.law;
      if (v === state.view && (!l || l === state.law)) {
        el.classList.add('active');
      }
    });
  }

  // ——— SCROLL REVEAL ———
  function setupReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ——— NAVIGATE HELPER ———
  function navigate(view, lawKey) {
    state.view = view;
    if (lawKey) state.law = lawKey;
    render();
    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
  }

  // ——— SIDEBAR CLICKS ———
  function bindSidebar() {
    document.querySelectorAll('.sidebar .nav-item[data-view]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        navigate(el.dataset.view, el.dataset.law || null);
      });
    });
  }

  // ——— TOP NAV CLICKS ———
  function bindTopNav() {
    const navExplorer = document.getElementById('nav-explorer');
    const navCompare  = document.getElementById('nav-compare');
    const navTimeline = document.getElementById('nav-timeline');

    if (navExplorer) navExplorer.addEventListener('click', e => { e.preventDefault(); navigate('overview', 'eu'); });
    if (navCompare)  navCompare.addEventListener('click',  e => { e.preventDefault(); navigate('compare'); });
    if (navTimeline) navTimeline.addEventListener('click', e => { e.preventDefault(); navigate('timeline'); });
  }

  // ——— HERO CTA CLICKS ———
  function bindHeroCtas() {
    document.querySelectorAll('a[data-nav]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const v = el.dataset.nav;
        const l = el.dataset.law || null;
        navigate(v, l);
      });
    });
  }

  // ——— NAV SCROLL EFFECT ———
  function bindScrollNav() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // ——— CURSOR ———
  function initCursor() {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();

    document.addEventListener('mouseover', e => {
      if (e.target.closest('a, button, .nav-item, .tab, .tier-row, .ch-card, .ct-row, .filter-chip, .doc-link, .strength-card')) {
        cursor.style.width  = '18px';
        cursor.style.height = '18px';
        ring.style.opacity  = '0';
      } else {
        cursor.style.width  = '10px';
        cursor.style.height = '10px';
        ring.style.opacity  = '0.4';
      }
    });
  }

  // ——— INIT ———
  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    bindScrollNav();
    bindSidebar();
    bindTopNav();
    bindHeroCtas();
    render();
    setupReveal();
  });

})();
