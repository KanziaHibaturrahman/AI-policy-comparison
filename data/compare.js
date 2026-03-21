// data/compare.js — Comparison table & timeline data
window.COMPARE_DATA = {
  sections: [
    {
      label: 'Basics',
      rows: [
        {
          label: 'In force',
          eu: { text: 'Aug 2024', type: 'text' },
          kr: { text: 'Jan 2026', type: 'text' },
          vn: { text: 'Mar 2026', type: 'text' },
          kz: { text: 'Jan 2026', type: 'text' },
          jp: { text: 'Sep 2025', type: 'text' },
        },
        {
          label: 'Legally binding',
          eu: { text: 'Yes', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'Yes', type: 'yes' },
          kz: { text: 'Yes', type: 'yes' },
          jp: { text: 'Voluntary', type: 'no' },
        },
        {
          label: 'Extraterritorial',
          eu: { text: 'Yes', type: 'yes' },
          kr: { text: 'Limited', type: 'partial' },
          vn: { text: 'No', type: 'no' },
          kz: { text: 'No', type: 'no' },
          jp: { text: 'No', type: 'no' },
        },
      ],
    },
    {
      label: 'Risk framework',
      rows: [
        {
          label: 'Risk tiers',
          eu: { text: '4 tiers', type: 'yes' },
          kr: { text: '3 tiers', type: 'yes' },
          vn: { text: 'Partial', type: 'partial' },
          kz: { text: 'Partial', type: 'partial' },
          jp: { text: 'None', type: 'na' },
        },
        {
          label: 'Prohibitions',
          eu: { text: '8 categories', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'Limited', type: 'partial' },
          kz: { text: 'Limited', type: 'partial' },
          jp: { text: 'No', type: 'no' },
        },
        {
          label: 'GPAI covered',
          eu: { text: 'Yes · Art. 51–56', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'Partial', type: 'partial' },
          kz: { text: 'No', type: 'no' },
          jp: { text: 'Yes', type: 'yes' },
        },
      ],
    },
    {
      label: 'Obligations',
      rows: [
        {
          label: 'Transparency req.',
          eu: { text: 'Yes', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'Yes', type: 'yes' },
          kz: { text: 'Yes', type: 'yes' },
          jp: { text: 'Encouraged', type: 'partial' },
        },
        {
          label: 'Conformity assessment',
          eu: { text: 'Yes · high-risk', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'No', type: 'no' },
          kz: { text: 'Limited', type: 'partial' },
          jp: { text: 'No', type: 'no' },
        },
        {
          label: 'Human oversight',
          eu: { text: 'Yes', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'Partial', type: 'partial' },
          kz: { text: 'Partial', type: 'partial' },
          jp: { text: 'Encouraged', type: 'partial' },
        },
        {
          label: 'Environmental rules',
          eu: { text: 'No', type: 'no' },
          kr: { text: 'No', type: 'no' },
          vn: { text: 'Yes', type: 'yes' },
          kz: { text: 'No', type: 'no' },
          jp: { text: 'No', type: 'no' },
        },
      ],
    },
    {
      label: 'Enforcement',
      rows: [
        {
          label: 'Regulator',
          eu: { text: 'AI Office + NCA', type: 'text' },
          kr: { text: 'MSIT', type: 'text' },
          vn: { text: 'MOST + MIC', type: 'text' },
          kz: { text: 'Ministry of DSE', type: 'text' },
          jp: { text: 'Cabinet Office', type: 'text' },
        },
        {
          label: 'Max fine',
          eu: { text: '€35M / 7% revenue', type: 'yes' },
          kr: { text: 'By decree', type: 'partial' },
          vn: { text: 'Specified', type: 'partial' },
          kz: { text: 'Specified', type: 'partial' },
          jp: { text: 'None', type: 'na' },
        },
        {
          label: 'Sandbox regime',
          eu: { text: 'Yes · Art. 57–63', type: 'yes' },
          kr: { text: 'Yes', type: 'yes' },
          vn: { text: 'No', type: 'no' },
          kz: { text: 'Planned', type: 'partial' },
          jp: { text: 'Yes', type: 'yes' },
        },
      ],
    },
  ],

  strength: [
    { key: 'eu', flag: '🇪🇺', name: 'European Union', comp: 95, enf: 90 },
    { key: 'kr', flag: '🇰🇷', name: 'South Korea',    comp: 78, enf: 70 },
    { key: 'vn', flag: '🇻🇳', name: 'Vietnam',        comp: 60, enf: 55 },
    { key: 'kz', flag: '🇰🇿', name: 'Kazakhstan',     comp: 55, enf: 50 },
    { key: 'jp', flag: '🇯🇵', name: 'Japan',          comp: 45, enf: 20 },
  ],
};

window.TIMELINE_EVENTS = [
  { date: 'Jun 2025', filled: true,  who: 'Japan',          upcoming: false, event: 'AI Promotion Act enacted', desc: 'Promulgated on 4 June 2025; enforcement from 1 September 2025.' },
  { date: 'Jul 2024', filled: true,  who: 'European Union', upcoming: false, event: 'EU AI Act published in Official Journal', desc: 'Regulation EU 2024/1689 enters into force on 1 August 2024.' },
  { date: 'Sep 2024', filled: true,  who: 'Council of Europe', upcoming: false, event: 'Framework Convention opens for signature', desc: 'World\'s first internationally binding AI treaty — signed by EU, US, UK, Israel and others.' },
  { date: 'Sep 2025', filled: true,  who: 'Japan',          upcoming: false, event: 'AI Promotion Act in force', desc: 'Full enforcement begins 1 September 2025.' },
  { date: 'Feb 2025', filled: true,  who: 'European Union', upcoming: false, event: 'Prohibited AI practices apply', desc: 'Unacceptable-risk bans and AI literacy requirements enter into force.' },
  { date: 'Aug 2025', filled: true,  who: 'European Union', upcoming: false, event: 'GPAI model rules apply', desc: 'General-purpose AI model obligations under Art. 51–56 take effect.' },
  { date: 'Nov 2025', filled: true,  who: 'Kazakhstan',     upcoming: false, event: 'AI Law signed by President Tokayev', desc: 'Law No. 230-VIII ZPK signed on 17 November 2025.' },
  { date: 'Dec 2025', filled: true,  who: 'Vietnam',        upcoming: false, event: 'AI Law passed by National Assembly', desc: 'Law No. 134/2025/QH15 passed on 10 December 2025; effective 1 March 2026.' },
  { date: 'Dec 2024', filled: true,  who: 'South Korea',    upcoming: false, event: 'AI Basic Act passed', desc: 'Law No. 20676 passed by National Assembly on 26 December 2024; promulgated 21 January 2025.' },
  { date: 'Jan 2026', filled: true,  who: 'Kazakhstan',     upcoming: false, event: 'Kazakhstan AI Law in force', desc: 'Entered into force 18 January 2026.' },
  { date: 'Jan 2026', filled: true,  who: 'South Korea',    upcoming: false, event: 'AI Basic Act in force', desc: 'Full enforcement from 22 January 2026 after one-year transition period.' },
  { date: 'Mar 2026', filled: true,  who: 'Vietnam',        upcoming: false, event: 'Vietnam AI Law in force', desc: 'Effective 1 March 2026.' },
  { date: 'Aug 2026', filled: false, who: 'European Union', upcoming: true,  event: 'High-risk AI obligations apply', desc: 'Broad high-risk AI system requirements under Chapter III enter into force.' },
];
