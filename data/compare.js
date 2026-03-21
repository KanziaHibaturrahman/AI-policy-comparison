// data/compare.js — Comparison table, timeline, and jurisdiction profiles
window.COMPARE_DATA = {
  sections: [
    {
      label: 'Basics',
      rows: [
        { label: 'In force',        eu:{text:'Aug 2024',type:'text'}, kr:{text:'Jan 2026',type:'text'}, vn:{text:'Mar 2026',type:'text'}, kz:{text:'Jan 2026',type:'text'}, jp:{text:'Sep 2025',type:'text'} },
        { label: 'Legally binding', eu:{text:'Yes',type:'yes'},       kr:{text:'Yes',type:'yes'},       vn:{text:'Yes',type:'yes'},       kz:{text:'Yes',type:'yes'},       jp:{text:'Voluntary',type:'no'} },
        { label: 'Extraterritorial',eu:{text:'Yes',type:'yes'},       kr:{text:'Limited',type:'partial'},vn:{text:'No',type:'no'},        kz:{text:'No',type:'no'},         jp:{text:'No',type:'no'} },
      ],
    },
    {
      label: 'Risk framework',
      rows: [
        { label: 'Risk tiers',   eu:{text:'4 tiers',type:'yes'},       kr:{text:'3 tiers',type:'yes'},  vn:{text:'Partial',type:'partial'}, kz:{text:'Partial',type:'partial'}, jp:{text:'None',type:'na'} },
        { label: 'Prohibitions', eu:{text:'8 categories',type:'yes'},  kr:{text:'Yes',type:'yes'},      vn:{text:'Limited',type:'partial'}, kz:{text:'Limited',type:'partial'}, jp:{text:'No',type:'no'} },
        { label: 'GPAI covered', eu:{text:'Yes · Art. 51–56',type:'yes'}, kr:{text:'Yes',type:'yes'}, vn:{text:'Partial',type:'partial'}, kz:{text:'No',type:'no'},           jp:{text:'Yes',type:'yes'} },
      ],
    },
    {
      label: 'Obligations',
      rows: [
        { label: 'Transparency req.',      eu:{text:'Yes',type:'yes'},          kr:{text:'Yes',type:'yes'},     vn:{text:'Yes',type:'yes'},     kz:{text:'Yes',type:'yes'},     jp:{text:'Encouraged',type:'partial'} },
        { label: 'Conformity assessment',  eu:{text:'Yes · high-risk',type:'yes'},kr:{text:'Yes',type:'yes'},   vn:{text:'No',type:'no'},       kz:{text:'Limited',type:'partial'},jp:{text:'No',type:'no'} },
        { label: 'Human oversight',        eu:{text:'Yes',type:'yes'},          kr:{text:'Yes',type:'yes'},     vn:{text:'Partial',type:'partial'},kz:{text:'Partial',type:'partial'},jp:{text:'Encouraged',type:'partial'} },
        { label: 'Environmental rules',    eu:{text:'No',type:'no'},            kr:{text:'No',type:'no'},       vn:{text:'Yes',type:'yes'},     kz:{text:'No',type:'no'},       jp:{text:'No',type:'no'} },
      ],
    },
    {
      label: 'Enforcement',
      rows: [
        { label: 'Regulator',      eu:{text:'AI Office + NCA',type:'text'}, kr:{text:'MSIT',type:'text'},       vn:{text:'MOST + MIC',type:'text'}, kz:{text:'Ministry of DSE',type:'text'}, jp:{text:'Cabinet Office',type:'text'} },
        { label: 'Max fine',       eu:{text:'€35M / 7% revenue',type:'yes'},kr:{text:'By decree',type:'partial'},vn:{text:'Specified',type:'partial'},kz:{text:'Specified',type:'partial'},   jp:{text:'None',type:'na'} },
        { label: 'Sandbox regime', eu:{text:'Yes · Art. 57–63',type:'yes'}, kr:{text:'Yes',type:'yes'},         vn:{text:'No',type:'no'},          kz:{text:'Planned',type:'partial'},     jp:{text:'Yes',type:'yes'} },
      ],
    },
  ],

  profiles: [
    {
      key: 'eu',
      flag: '🇪🇺',
      name: 'European Union',
      ratified_by: 'European Parliament & Council',
      ratified_on: '13 Jun 2024',
      implemented: '1 Aug 2024 (phased to Aug 2026)',
      approach: 'Risk-based · Binding',
    },
    {
      key: 'kr',
      flag: '🇰🇷',
      name: 'South Korea',
      ratified_by: 'National Assembly of Korea',
      ratified_on: '26 Dec 2024',
      implemented: '22 Jan 2026',
      approach: 'Risk-based · Binding',
    },
    {
      key: 'vn',
      flag: '🇻🇳',
      name: 'Vietnam',
      ratified_by: 'National Assembly of Vietnam',
      ratified_on: '10 Dec 2025',
      implemented: '1 Mar 2026',
      approach: 'Mixed · Binding',
    },
    {
      key: 'kz',
      flag: '🇰🇿',
      name: 'Kazakhstan',
      ratified_by: 'President Tokayev (signed into law)',
      ratified_on: '17 Nov 2025',
      implemented: '18 Jan 2026',
      approach: 'Mixed · Binding',
    },
    {
      key: 'jp',
      flag: '🇯🇵',
      name: 'Japan',
      ratified_by: 'National Diet of Japan',
      ratified_on: '4 Jun 2025',
      implemented: '1 Sep 2025',
      approach: 'Promotional · Voluntary',
    },
  ],
};

window.TIMELINE_EVENTS = [
  { date:'Jul 2024', filled:true,  who:'European Union',  upcoming:false, event:'EU AI Act published in Official Journal',   desc:'Regulation EU 2024/1689 enters into force on 1 August 2024.' },
  { date:'Sep 2024', filled:true,  who:'European Union',  upcoming:false, event:'Framework Convention opens for signature',  desc:'Council of Europe — world\'s first internationally binding AI treaty, signed by EU, US, UK, Israel.' },
  { date:'Feb 2025', filled:true,  who:'European Union',  upcoming:false, event:'Prohibited AI practices apply',             desc:'Unacceptable-risk bans and AI literacy requirements enter into force.' },
  { date:'Jun 2025', filled:true,  who:'Japan',           upcoming:false, event:'AI Promotion Act enacted',                  desc:'Promulgated on 4 June 2025.' },
  { date:'Aug 2025', filled:true,  who:'European Union',  upcoming:false, event:'GPAI model rules apply',                   desc:'General-purpose AI model obligations under Art. 51–56 take effect.' },
  { date:'Sep 2025', filled:true,  who:'Japan',           upcoming:false, event:'AI Promotion Act in force',                 desc:'Full enforcement begins 1 September 2025.' },
  { date:'Nov 2025', filled:true,  who:'Kazakhstan',      upcoming:false, event:'AI Law signed by President Tokayev',        desc:'Law No. 230-VIII ZPK signed on 17 November 2025.' },
  { date:'Dec 2024', filled:true,  who:'South Korea',     upcoming:false, event:'AI Basic Act passed',                       desc:'Law No. 20676 passed by National Assembly on 26 December 2024.' },
  { date:'Dec 2025', filled:true,  who:'Vietnam',         upcoming:false, event:'AI Law passed by National Assembly',        desc:'Law No. 134/2025/QH15 passed on 10 December 2025.' },
  { date:'Jan 2026', filled:true,  who:'Kazakhstan',      upcoming:false, event:'Kazakhstan AI Law in force',                desc:'Entered into force 18 January 2026.' },
  { date:'Jan 2026', filled:true,  who:'South Korea',     upcoming:false, event:'AI Basic Act in force',                     desc:'Full enforcement from 22 January 2026 after one-year transition.' },
  { date:'Mar 2026', filled:true,  who:'Vietnam',         upcoming:false, event:'Vietnam AI Law in force',                   desc:'Effective 1 March 2026.' },
  { date:'Aug 2026', filled:false, who:'European Union',  upcoming:true,  event:'High-risk AI obligations apply',            desc:'Broad high-risk AI system requirements under Chapter III enter into force.' },
];
