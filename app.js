// app.js — govern.ai navigation, rendering, and routing

(function () {
  'use strict';

  const state = { view: 'overview', law: 'eu', compareFilter: 'all' };

  const LAWS = {
    eu: () => window.LAW_EU,
    kr: () => window.LAW_KR,
    vn: () => window.LAW_VN,
    kz: () => window.LAW_KZ,
    jp: () => window.LAW_JP,
  };

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

  const EU_MEMBERS = [
    'Austria','Belgium','Bulgaria','Croatia','Cyprus','Czech Republic',
    'Denmark','Estonia','Finland','France','Germany','Greece','Hungary',
    'Ireland','Italy','Latvia','Lithuania','Luxembourg','Malta','Netherlands',
    'Poland','Portugal','Romania','Slovakia','Slovenia','Spain','Sweden'
  ];

  const DIM_TOOLTIPS = {
    'In force': 'The date the law officially became legally effective.',
    'Legally binding': 'Whether the law creates enforceable legal obligations with penalties for non-compliance.',
    'Extraterritorial': 'Whether the law applies to companies outside the country if their AI affects citizens within it.',
    'Risk tiers': 'Whether the law classifies AI systems into different risk categories with different obligations for each.',
    'Prohibitions': 'Whether the law outright bans certain AI practices regardless of safeguards.',
    'GPAI covered': 'Whether general-purpose AI models (like large language models) are explicitly regulated.',
    'Transparency req.': 'Whether AI systems must disclose that they are AI, or explain their decisions to users.',
    'Conformity assessment': 'Whether high-risk AI systems must be independently audited before deployment.',
    'Human oversight': 'Whether the law requires humans to be able to monitor, intervene, or override AI decisions.',
    'Environmental rules': 'Whether the law includes obligations to report or reduce the energy/carbon footprint of AI systems.',
    'Regulator': 'The government body responsible for overseeing and enforcing the AI law.',
    'Max fine': 'The maximum financial penalty for the most serious violations of the law.',
    'Sandbox regime': 'Whether the law provides a controlled testing environment where companies can experiment with AI under relaxed rules.',
  };

  const FILTER_SECTIONS = {
    all: null,
    binding: ['Basics', 'Enforcement'],
    risk: ['Risk framework'],
    penalties: ['Enforcement'],
  };

  // ——— TOOLTIP ———
  function initTooltip() {
    let tip = document.getElementById('gov-tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'gov-tooltip';
      tip.className = 'gov-tooltip';
      document.body.appendChild(tip);
    }
    return tip;
  }

  function showTooltip(e, html) {
    const tip = initTooltip();
    tip.innerHTML = html;
    tip.style.display = 'block';
    positionTooltip(e, tip);
  }

  function positionTooltip(e, tip) {
    const x = e.clientX + 14;
    const y = e.clientY - 10;
    const vw = window.innerWidth;
    const w = tip.offsetWidth;
    tip.style.left = (x + w > vw - 10 ? e.clientX - w - 14 : x) + 'px';
    tip.style.top  = (y + window.scrollY) + 'px';
  }

  function hideTooltip() {
    const tip = document.getElementById('gov-tooltip');
    if (tip) tip.style.display = 'none';
  }

  // ——— TIER DETAIL BUILDER ———
  const TIER_DETAILS = {
    eu: {
      'Unacceptable risk': {
        criteria: 'Poses a clear threat to fundamental rights, democracy, or safety. Covers: social scoring by public authorities, subliminal manipulation, exploitation of vulnerable groups, real-time biometric identification in public spaces, emotion recognition in workplaces or schools, and AI inferring race, political opinion, or sexual orientation.',
        implementation: 'Outright ban — no exemptions. Applies from 2 February 2025.',
        examples: 'Social credit systems, police facial recognition in public, ad targeting based on inferred political beliefs.',
      },
      'High risk': {
        criteria: 'AI used as safety components in products under EU harmonisation law, OR AI in Annex III areas: critical infrastructure, education, employment, essential services, law enforcement, migration, justice, democratic processes.',
        implementation: 'Requires risk management system, data governance, technical documentation, user transparency, human oversight, and conformity assessment before deployment.',
        examples: 'AI CV screening tools, credit scoring models, medical diagnostic AI, border control AI, predictive policing tools.',
      },
      'Limited risk': {
        criteria: 'AI systems that interact directly with humans (chatbots), generate synthetic content (deepfakes), or perform emotion recognition or biometric categorisation.',
        implementation: 'Must disclose to users that they are interacting with AI. Deepfakes must be labelled. No pre-market approval required.',
        examples: 'Customer service chatbots, AI-generated images and video, emotion detection in marketing.',
      },
      'Minimal risk': {
        criteria: 'All other AI systems not falling into higher categories. The vast majority of commercial AI products fall here.',
        implementation: 'No mandatory obligations. Providers may voluntarily adopt codes of conduct.',
        examples: 'Spam filters, AI in video games, recommendation algorithms, AI-assisted writing tools.',
      },
    },
    kr: {
      'High-impact AI': {
        criteria: 'AI systems designated by MSIT that significantly affect citizens\' fundamental rights, safety, or livelihood. Factors: number of users, irreversibility of harm, degree of replacement of human judgment.',
        implementation: 'Mandatory safety measures, user disclosure, technical documentation, and incident notification to MSIT.',
        examples: 'Medical diagnosis AI, financial loan decision systems, hiring AI, public benefit allocation.',
      },
      'General AI': {
        criteria: 'AI systems in commercial or public services that do not meet the high-impact designation threshold.',
        implementation: 'Standard transparency disclosures and basic documentation. No pre-market approval.',
        examples: 'Customer service AI, content recommendation systems, business productivity tools.',
      },
      'Exempt': {
        criteria: 'AI used exclusively for national security, pure academic research with no commercial deployment, or personal non-commercial use.',
        implementation: 'No obligations. Commercial use of research AI removes the exemption.',
        examples: 'Military AI systems, university research models, personal hobby projects.',
      },
    },
    vn: {
      'Prohibited uses': {
        criteria: 'AI systems threatening national sovereignty, territorial integrity, social order, or manipulating political opinion.',
        implementation: 'Outright ban. Violations subject to criminal and administrative penalties under Chapter VII.',
        examples: 'AI political disinformation systems, foreign propaganda AI, surveillance tools used against dissidents.',
      },
      'Conditional use': {
        criteria: 'AI deployed in healthcare, financial services, education, and public administration.',
        implementation: 'Requires prior registration and ministerial approval. Ongoing audit and reporting obligations.',
        examples: 'AI medical diagnostic tools, algorithmic credit scoring, AI in government service delivery.',
      },
      'General use': {
        criteria: 'All other commercial and consumer AI systems operating in Vietnam.',
        implementation: 'Transparency obligations, data protection compliance, and environmental impact reporting under Article 11.',
        examples: 'E-commerce recommendation AI, customer service chatbots, AI content creation tools.',
      },
    },
    kz: {
      'High-risk AI': {
        criteria: 'AI used in public administration, law enforcement, financial services, and healthcare as defined by Ministry of DSE.',
        implementation: 'Mandatory registration with Ministry of DSE before deployment. Requires technical documentation, accredited risk assessment, and human oversight description.',
        examples: 'Government decision-making AI, law enforcement analytics, bank credit AI, hospital diagnostic systems.',
      },
      'Limited risk': {
        criteria: 'AI systems that interact directly with citizens in service contexts — chatbots, automated call systems, AI-powered public portals.',
        implementation: 'Must disclose AI nature to users. Transparency and notification obligations apply.',
        examples: 'Government chatbots, automated customer service lines, citizen-facing AI portals.',
      },
      'General use': {
        criteria: 'Commercial AI systems with no direct citizen interaction and outside high-risk sectors.',
        implementation: 'Basic documentation and responsible use principles. No registration required.',
        examples: 'Internal business AI tools, research applications, AI-assisted software development.',
      },
    },
    jp: {
      'Strategic coordination': {
        criteria: 'Government-level coordination — R&D investment planning, international standards participation, cross-ministry strategy. No private sector obligations.',
        implementation: 'Cabinet Office formulates a Basic Plan. Government ministries coordinate AI policy across sectors.',
        examples: 'National AI strategy documents, Japan\'s OECD participation, government R&D grants.',
      },
      'Voluntary guidelines': {
        criteria: 'All private AI developers and deployers in Japan. These are best-practice guidelines, not binding rules.',
        implementation: '"Shall make efforts to" language throughout — no penalties for non-compliance.',
        examples: 'AI safety disclosures, transparency documentation, bias testing — all voluntary.',
      },
      'Sandbox regime': {
        criteria: 'Companies applying to test innovative AI systems outside existing regulatory frameworks.',
        implementation: 'Fast-track approval with limited liability. Time-bound testing. Over 40 companies participated as of early 2026.',
        examples: 'Autonomous vehicle AI on public roads, AI medical devices in trials, AI in financial products.',
      },
    },
  };

  function buildTierDetail(tier, lawKey) {
    const d = TIER_DETAILS[lawKey]?.[tier.name];
    if (!d) return `<p class="tier-detail-text">${tier.desc}</p>`;
    return `
      <div class="tier-detail-grid">
        <div class="tier-detail-block">
          <div class="tier-detail-label">What counts as this tier</div>
          <p class="tier-detail-text">${d.criteria}</p>
        </div>
        <div class="tier-detail-block">
          <div class="tier-detail-label">Implementation</div>
          <p class="tier-detail-text">${d.implementation}</p>
        </div>
        <div class="tier-detail-block">
          <div class="tier-detail-label">Examples</div>
          <p class="tier-detail-text">${d.examples}</p>
        </div>
      </div>
    `;
  }

  // ——— RENDER: OVERVIEW ———
  function renderOverview() {
    const l = law();
    const [apClass, apLabel] = AP_MAP[l.approach_key];
    const scopeHtml = l.key === 'eu'
      ? `<span class="scope-hover">${l.scope}</span>`
      : l.scope;

    const tiersHtml = l.tiers.map((t, i) => `
      <div class="tier-row tier-clickable" data-tier="${i}">
        <div class="tier-dot" style="background:${t.color}"></div>
        <div class="tier-name">${t.name}</div>
        <div class="tier-desc">${t.desc}</div>
        <div class="tier-count">${t.count}</div>
        <div class="tier-chevron">›</div>
      </div>
      <div class="tier-detail" id="tier-detail-${i}" style="display:none">
        <div class="tier-detail-inner">${buildTierDetail(t, l.key)}</div>
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
          <div class="status-pill"><div class="status-dot"></div>${l.status}</div>
        </div>
        <a href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer" class="btn btn-solid" style="white-space:nowrap">Read full text ↗</a>
      </div>
      <div class="meta-grid reveal visible">
        <div class="meta-card"><div class="meta-label">Enacted</div><div class="meta-val">${l.enacted}</div></div>
        <div class="meta-card"><div class="meta-label">Approach</div><div class="meta-val"><span class="ch-approach ${apClass}">${apLabel}</span></div></div>
        <div class="meta-card"><div class="meta-label">Law number</div><div class="meta-val mono">${l.number}</div></div>
        <div class="meta-card"><div class="meta-label">Scope</div><div class="meta-val">${scopeHtml}</div></div>
      </div>
      <div class="section-header">
        <div class="section-title">Risk classification</div>
        <div class="section-line"></div>
      </div>
      <div class="tier-hint">Click any tier to expand details</div>
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
      `<a class="toc-item ${i===0?'active':''}" href="#chapter-${i}" data-ch="${i}">${ch.chapter}</a>`
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
        <a href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="white-space:nowrap">Official source ↗</a>
      </div>
      <div class="text-view">
        <div class="text-toc">
          <div class="toc-title">Contents</div>
          ${tocHtml}
          <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border)">
            <div class="toc-title">Source</div>
            <a class="toc-item" href="${l.docs[0].url}" target="_blank" rel="noopener noreferrer" style="color:var(--blue)">Official document ↗</a>
          </div>
        </div>
        <div class="law-body">${bodyHtml}</div>
      </div>
    `;
  }

  // ——— RENDER: COMPARE ———
  function renderCompare() {
    const data = window.COMPARE_DATA;
    const keys = ['eu','kr','vn','kz','jp'];
    const filter = state.compareFilter;
    const allowedSections = FILTER_SECTIONS[filter];
    const heads = [
      { flag:'🇪🇺', name:'European Union', year:'Reg. 2024/1689', ap:'risk' },
      { flag:'🇰🇷', name:'South Korea',    year:'Law 20676',      ap:'risk' },
      { flag:'🇻🇳', name:'Vietnam',        year:'Law 134/2025',   ap:'mixed' },
      { flag:'🇰🇿', name:'Kazakhstan',     year:'Law 230-VIII',   ap:'mixed' },
      { flag:'🇯🇵', name:'Japan',          year:'AI Promotion',   ap:'vol' },
    ];

    const filteredSections = allowedSections
      ? data.sections.filter(s => allowedSections.includes(s.label))
      : data.sections;

    const tableHtml = filteredSections.map(sec => `
      <div class="ct-section">
        <div class="ct-sh">${sec.label}</div>
        <div class="ct-sh ct-sh-fill"></div>
      </div>
      ${sec.rows.map(row => `
        <div class="ct-row">
          <div class="ct-label has-tip" data-tip="${(DIM_TOOLTIPS[row.label]||'').replace(/"/g,'&quot;')}">${row.label}</div>
          ${keys.map(k=>`<div class="ct-cell">${chipHtml(row[k])}</div>`).join('')}
        </div>
      `).join('')}
    `).join('');

    const profileCards = data.profiles.map(p => `
      <div class="profile-card">
        <div class="profile-flag">${p.flag}</div>
        <div class="profile-name">${p.name}</div>
        <div class="profile-row"><span class="profile-label">Ratified by</span><span class="profile-val">${p.ratified_by}</span></div>
        <div class="profile-row"><span class="profile-label">Ratified on</span><span class="profile-val">${p.ratified_on}</span></div>
        <div class="profile-row"><span class="profile-label">In force</span><span class="profile-val">${p.implemented}</span></div>
        <div class="profile-row"><span class="profile-label">Approach</span><span class="profile-val">${p.approach}</span></div>
      </div>
    `).join('');

    return `
      <div class="compare-controls">
        <div>
          <div class="page-title" style="font-size:1.6rem;font-family:'Playfair Display',serif">Jurisdiction comparison</div>
          <div class="page-sub" style="margin-top:0.3rem">5 laws · 15 dimensions · updated March 2026</div>
        </div>
        <div class="filter-row">
          <div class="filter-chip ${filter==='all'?'on':''}" data-filter="all">All</div>
          <div class="filter-chip ${filter==='binding'?'on':''}" data-filter="binding">Binding only</div>
          <div class="filter-chip ${filter==='risk'?'on':''}" data-filter="risk">Risk-based</div>
          <div class="filter-chip ${filter==='penalties'?'on':''}" data-filter="penalties">Penalties</div>
        </div>
      </div>
      <div class="country-headers">
        <div class="ch-blank"><span>Dimension</span></div>
        ${heads.map(h=>`
          <div class="ch-card">
            <div class="ch-flag">${h.flag}</div>
            <div class="ch-name">${h.name}</div>
            <div class="ch-year">${h.year}</div>
            <div class="ch-approach ${AP_MAP[h.ap][0]}">${AP_MAP[h.ap][1]}</div>
          </div>
        `).join('')}
      </div>
      <div class="ctable">${tableHtml}</div>
      <div style="margin-top:2.5rem">
        <div class="section-header">
          <div class="section-title">Jurisdiction profiles</div>
          <div class="section-line"></div>
        </div>
        <div class="profile-grid">${profileCards}</div>
      </div>
    `;
  }

  // ——— RENDER: TIMELINE (swimlane) ———
  function renderTimeline() {
    const events = window.TIMELINE_EVENTS;
    const lanes = ['European Union','South Korea','Vietnam','Kazakhstan','Japan'];
    const laneFlags = {'European Union':'🇪🇺','South Korea':'🇰🇷','Vietnam':'🇻🇳','Kazakhstan':'🇰🇿','Japan':'🇯🇵'};
    const START = new Date('2024-07-01');
    const END   = new Date('2026-12-01');
    const totalMonths = (END.getFullYear()-START.getFullYear())*12 + END.getMonth()-START.getMonth();
    const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    function pct(dateStr) {
      const [mon, yr] = dateStr.split(' ');
      const d = new Date(parseInt(yr), MONTHS.indexOf(mon), 1);
      const diff = (d.getFullYear()-START.getFullYear())*12 + d.getMonth()-START.getMonth();
      return Math.max(0, Math.min(100, (diff/totalMonths)*100));
    }

    const ticksHtml = ['2024','2025','2026'].map(y => {
      const d = new Date(parseInt(y),0,1);
      const diff = (d.getFullYear()-START.getFullYear())*12 + d.getMonth()-START.getMonth();
      const p = Math.max(0,(diff/totalMonths)*100);
      return `<div class="tl-tick" style="left:${p}%">${y}</div>`;
    }).join('');

    const lanesHtml = lanes.map(lane => {
      const laneEvs = events.filter(e => e.who === lane || (lane==='European Union' && e.who==='Council of Europe'));
      const dotsHtml = laneEvs.map(e => {
        const p = pct(e.date);
        const evData = encodeURIComponent(JSON.stringify({date:e.date,event:e.event,desc:e.desc,upcoming:e.upcoming||false}));
        return `<div class="tl-event-dot ${e.filled?'filled':'upcoming'}" style="left:${p}%" data-event="${evData}"></div>`;
      }).join('');
      return `
        <div class="tl-lane">
          <div class="tl-lane-label">
            <span class="tl-lane-flag">${laneFlags[lane]}</span>
            <span class="tl-lane-name">${lane}</span>
          </div>
          <div class="tl-lane-track">
            <div class="tl-lane-line"></div>
            ${dotsHtml}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div style="margin-bottom:2rem">
        <div class="page-title" style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:0.4rem">Enforcement timeline</div>
        <div class="page-sub">Hover dots for event details. Hollow circles = upcoming.</div>
      </div>
      <div class="tl-swimlane">
        <div class="tl-axis"><div class="tl-axis-spacer"></div><div class="tl-axis-track">${ticksHtml}</div></div>
        ${lanesHtml}
      </div>
      <div class="tl-legend">
        <div class="tl-legend-item"><div class="tl-event-dot filled" style="position:relative;left:auto;transform:none;flex-shrink:0"></div><span>Enacted / In force</span></div>
        <div class="tl-legend-item"><div class="tl-event-dot upcoming" style="position:relative;left:auto;transform:none;flex-shrink:0"></div><span>Upcoming</span></div>
      </div>
    `;
  }

  // ——— RENDER DISPATCHER ———
  function render() {
    const main = document.getElementById('main-content');
    if (!main) return;
    if (state.view==='overview')      main.innerHTML = renderOverview();
    else if (state.view==='fulltext') main.innerHTML = renderFullText();
    else if (state.view==='compare')  main.innerHTML = renderCompare();
    else if (state.view==='timeline') main.innerHTML = renderTimeline();
    bindInnerEvents();
    updateSidebar();
    setupReveal();
  }

  function bindInnerEvents() {
    document.querySelectorAll('.tab[data-tab]').forEach(tab => {
      tab.addEventListener('click', () => { state.view = tab.dataset.tab; render(); });
    });

    document.querySelectorAll('.filter-chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => { state.compareFilter = chip.dataset.filter; render(); });
    });

    document.querySelectorAll('.toc-item[data-ch]').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('chapter-'+item.dataset.ch)?.scrollIntoView({behavior:'smooth',block:'start'});
        document.querySelectorAll('.toc-item').forEach(t=>t.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Tier expand/collapse
    document.querySelectorAll('.tier-clickable').forEach(row => {
      row.addEventListener('click', () => {
        const i = row.dataset.tier;
        const detail = document.getElementById('tier-detail-'+i);
        const isOpen = detail.style.display !== 'none';
        document.querySelectorAll('.tier-detail').forEach(d=>d.style.display='none');
        document.querySelectorAll('.tier-clickable').forEach(r=>r.classList.remove('open'));
        if (!isOpen) { detail.style.display='block'; row.classList.add('open'); }
      });
    });

    // EU scope hover
    const scopeEl = document.querySelector('.scope-hover');
    if (scopeEl) {
      scopeEl.addEventListener('mouseenter', e => showTooltip(e,
        `<div class="tip-title">EU member states (27)</div><div class="tip-members">${EU_MEMBERS.join(' · ')}</div>`));
      scopeEl.addEventListener('mousemove', e => positionTooltip(e, document.getElementById('gov-tooltip')));
      scopeEl.addEventListener('mouseleave', hideTooltip);
    }

    // Dimension tooltips
    document.querySelectorAll('.ct-label.has-tip').forEach(el => {
      const tip = el.dataset.tip;
      if (!tip) return;
      el.addEventListener('mouseenter', e => showTooltip(e, `<div class="tip-dim">${tip}</div>`));
      el.addEventListener('mousemove', e => positionTooltip(e, document.getElementById('gov-tooltip')));
      el.addEventListener('mouseleave', hideTooltip);
    });

    // Timeline dot tooltips
    document.querySelectorAll('.tl-event-dot[data-event]').forEach(dot => {
      dot.addEventListener('mouseenter', e => {
        const ev = JSON.parse(decodeURIComponent(dot.dataset.event));
        showTooltip(e, `
          <div class="tip-date">${ev.date}${ev.upcoming?' · upcoming':''}</div>
          <div class="tip-event">${ev.event}</div>
          <div class="tip-desc">${ev.desc}</div>
        `);
      });
      dot.addEventListener('mousemove', e => positionTooltip(e, document.getElementById('gov-tooltip')));
      dot.addEventListener('mouseleave', hideTooltip);
    });
  }

  function updateSidebar() {
    document.querySelectorAll('.sidebar .nav-item[data-view]').forEach(el => {
      el.classList.remove('active');
      if (el.dataset.view===state.view && (!el.dataset.law || el.dataset.law===state.law)) el.classList.add('active');
    });
  }

  function setupReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold:0.08});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  function navigate(view, lawKey) {
    state.view = view;
    if (lawKey) state.law = lawKey;
    render();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth'});
  }

  function bindSidebar() {
    document.querySelectorAll('.sidebar .nav-item[data-view]').forEach(el => {
      el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.view, el.dataset.law||null); });
    });
  }

  function bindTopNav() {
    const ne = document.getElementById('nav-explorer');
    const nc = document.getElementById('nav-compare');
    const nt = document.getElementById('nav-timeline');
    if (ne) ne.addEventListener('click', e => { e.preventDefault(); navigate('overview','eu'); });
    if (nc) nc.addEventListener('click', e => { e.preventDefault(); navigate('compare'); });
    if (nt) nt.addEventListener('click', e => { e.preventDefault(); navigate('timeline'); });
  }

  function bindHeroCtas() {
    document.querySelectorAll('a[data-nav]').forEach(el => {
      el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.nav, el.dataset.law||null); });
    });
  }

  function bindScrollNav() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY>10));
  }

  function initCursor() {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => {
      mx=e.clientX; my=e.clientY;
      cursor.style.left=mx+'px'; cursor.style.top=my+'px';
    });
    (function animRing(){
      rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12;
      ring.style.left=rx+'px'; ring.style.top=ry+'px';
      requestAnimationFrame(animRing);
    })();
    document.addEventListener('mouseover', e => {
      const over = e.target.closest('a,button,.nav-item,.tab,.tier-clickable,.ch-card,.ct-row,.filter-chip,.doc-link,.profile-card,.tl-event-dot,.scope-hover,.ct-label');
      cursor.style.width = over?'18px':'10px';
      cursor.style.height = over?'18px':'10px';
      ring.style.opacity = over?'0':'0.4';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCursor(); bindScrollNav(); bindSidebar(); bindTopNav(); bindHeroCtas(); render(); setupReveal();
  });

})();
