// data/compare.js — Comparison table, timeline, jurisdiction profiles, and tier details
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
        {
          label: 'Risk tiers',
          expandable: true,
          eu:{text:'4 tiers',type:'yes'}, kr:{text:'3 tiers',type:'yes'}, vn:{text:'Partial',type:'partial'}, kz:{text:'Partial',type:'partial'}, jp:{text:'None',type:'na'},
        },
        { label: 'Prohibitions', eu:{text:'8 categories',type:'yes'},  kr:{text:'Yes',type:'yes'},      vn:{text:'Limited',type:'partial'}, kz:{text:'Limited',type:'partial'}, jp:{text:'No',type:'no'} },
        { label: 'GPAI covered', eu:{text:'Yes · Art. 51–56',type:'yes'}, kr:{text:'Yes',type:'yes'}, vn:{text:'Partial',type:'partial'}, kz:{text:'No',type:'no'},           jp:{text:'Yes',type:'yes'} },
      ],
    },
    {
      label: 'Obligations',
      rows: [
        { label: 'Transparency req.',      eu:{text:'Yes',type:'yes'},            kr:{text:'Yes',type:'yes'},        vn:{text:'Yes',type:'yes'},        kz:{text:'Yes',type:'yes'},        jp:{text:'Encouraged',type:'partial'} },
        { label: 'Conformity assessment',  eu:{text:'Yes · high-risk',type:'yes'},kr:{text:'Yes',type:'yes'},        vn:{text:'No',type:'no'},          kz:{text:'Limited',type:'partial'}, jp:{text:'No',type:'no'} },
        { label: 'Human oversight',        eu:{text:'Yes',type:'yes'},            kr:{text:'Yes',type:'yes'},        vn:{text:'Partial',type:'partial'}, kz:{text:'Partial',type:'partial'}, jp:{text:'Encouraged',type:'partial'} },
        { label: 'Environmental rules',    eu:{text:'No',type:'no'},              kr:{text:'No',type:'no'},          vn:{text:'Yes',type:'yes'},        kz:{text:'No',type:'no'},           jp:{text:'No',type:'no'} },
      ],
    },
    {
      label: 'Enforcement',
      rows: [
        { label: 'Regulator',      eu:{text:'AI Office + NCA',type:'text'}, kr:{text:'MSIT',type:'text'},        vn:{text:'MOST + MIC',type:'text'}, kz:{text:'Ministry of DSE',type:'text'}, jp:{text:'Cabinet Office',type:'text'} },
        { label: 'Max fine',       eu:{text:'€35M / 7% revenue',type:'yes'},kr:{text:'By decree',type:'partial'},vn:{text:'Specified',type:'partial'},kz:{text:'Specified',type:'partial'},    jp:{text:'None',type:'na'} },
        { label: 'Sandbox regime', eu:{text:'Yes · Art. 57–63',type:'yes'}, kr:{text:'Yes',type:'yes'},          vn:{text:'No',type:'no'},           kz:{text:'Planned',type:'partial'},     jp:{text:'Yes',type:'yes'} },
      ],
    },
  ],

  // Full tier breakdown for the expandable row in compare view
  tierDetails: {
    eu: {
      name: 'European Union',
      flag: '🇪🇺',
      count: '4 tiers',
      tiers: [
        {
          color: '#e63b2e',
          name: 'Unacceptable risk',
          badge: 'Banned outright',
          what: 'AI systems considered a fundamental threat to people\'s rights with no redemptive use case. Covers social scoring by governments, subliminal or manipulative AI, systems that exploit vulnerable groups, real-time biometric surveillance in public spaces, emotion recognition in workplaces and schools, and AI that infers sensitive attributes like race, sexual orientation, or political opinion.',
          implementation: 'Prohibited with no exemptions. Any AI system falling into this category cannot be placed on the EU market or put into service. Applies from 2 February 2025.',
          examples: 'Social credit systems, police facial recognition in public spaces, ad targeting based on inferred political beliefs, workplace emotion scanners.',
        },
        {
          color: '#b45309',
          name: 'High risk',
          badge: 'Strict compliance',
          what: 'AI used as safety components in products under EU harmonisation law, or AI deployed in Annex III sectors: critical infrastructure, education, employment (CV screening, hiring decisions), essential services (credit scoring, insurance), law enforcement, border control, justice administration, and democratic processes.',
          implementation: 'Must complete a conformity assessment before deployment. Ongoing requirements: risk management system, data governance documentation, technical documentation, user transparency measures, human oversight mechanisms, and accuracy/robustness standards. Broad high-risk obligations apply from August 2026.',
          examples: 'AI CV screening tools, medical diagnostic AI, credit scoring models, border control biometrics, predictive policing tools, AI in court sentencing.',
        },
        {
          color: '#2563eb',
          name: 'Limited risk',
          badge: 'Transparency only',
          what: 'AI systems that interact directly with humans, generate synthetic content, or perform emotion/biometric recognition. The risk here is deception — people may not know they are interacting with AI or viewing AI-generated content.',
          implementation: 'No pre-market approval needed. Must disclose to users that they are interacting with AI. AI-generated images, audio, and video must be labelled as artificially generated or manipulated. Applies from August 2026.',
          examples: 'Customer service chatbots, AI-generated images and deepfakes, emotion detection in marketing, AI-written content.',
        },
        {
          color: '#2d8c4e',
          name: 'Minimal risk',
          badge: 'No obligations',
          what: 'All other AI systems not falling into the above categories. This covers the vast majority of commercial AI products on the market — estimated at over 95% of all AI applications.',
          implementation: 'No mandatory obligations whatsoever. Providers may voluntarily adopt codes of conduct aligned with the Act\'s principles. No registration or approval required.',
          examples: 'Spam filters, AI in video games, recommendation algorithms, AI-assisted writing tools, search engines, navigation AI.',
        },
      ],
    },

    kr: {
      name: 'South Korea',
      flag: '🇰🇷',
      count: '3 tiers',
      tiers: [
        {
          color: '#e63b2e',
          name: 'High-impact AI',
          badge: 'Designated & controlled',
          what: 'AI systems designated by the Ministry of Science and ICT (MSIT) that significantly affect citizens\' fundamental rights, safety, or livelihood. Designation is case-by-case, not category-based. Key factors: number of people affected, irreversibility of potential harm, and degree to which the AI replaces human judgment in important decisions.',
          implementation: 'Operators must: implement safety and reliability measures, disclose AI use to affected users, maintain technical documentation, and notify MSIT of serious incidents within specified timeframes. Designation decisions are published in the Government Gazette.',
          examples: 'Medical diagnosis AI, financial loan decision systems, hiring and recruitment AI, public benefit allocation systems, AI in criminal justice.',
        },
        {
          color: '#b45309',
          name: 'General AI',
          badge: 'Standard transparency',
          what: 'Commercial and public-facing AI systems that do not meet the high-impact designation threshold. The majority of deployed business AI falls into this category.',
          implementation: 'Basic transparency disclosures to users, general documentation requirements. No pre-market approval or independent audit required. Operators self-assess compliance.',
          examples: 'Customer service AI, content recommendation systems, AI business productivity tools, retail AI assistants.',
        },
        {
          color: '#2d8c4e',
          name: 'Exempt',
          badge: 'No obligations',
          what: 'AI used exclusively for national security purposes, pure academic research with no commercial deployment, or personal non-commercial use. The exemption is narrow and strictly interpreted.',
          implementation: 'No obligations apply. However the exemption is conditional — if a research model gets commercialised or a personal-use tool is deployed at scale, it immediately loses exempt status and must comply with the appropriate tier.',
          examples: 'Military AI systems, university research models (pre-commercialisation), personal hobby projects, government intelligence AI.',
        },
      ],
    },

    vn: {
      name: 'Vietnam',
      flag: '🇻🇳',
      count: '3 tiers',
      tiers: [
        {
          color: '#e63b2e',
          name: 'Prohibited uses',
          badge: 'Criminal penalties',
          what: 'AI systems that threaten national sovereignty, territorial integrity, or social order. Also covers AI used to produce or spread disinformation, manipulate political opinion or democratic processes, conduct unlawful surveillance, or discriminate on the basis of ethnicity, religion, or gender.',
          implementation: 'Outright ban. Violations are subject to both criminal prosecution and administrative penalties under Chapter VII of the law. Foreign AI systems that fall into this category cannot operate in Vietnam.',
          examples: 'AI political disinformation systems, foreign propaganda AI, surveillance tools targeting dissidents, AI manipulating election discourse.',
        },
        {
          color: '#b45309',
          name: 'Conditional use',
          badge: 'Prior approval required',
          what: 'AI deployed in healthcare, financial services, education, and public administration. These sectors are considered high-stakes because AI errors can have serious, direct consequences for individuals.',
          implementation: 'Must obtain prior registration and approval from the relevant ministry before deployment. Operators must: conduct validation studies, maintain full audit logs of AI decisions, ensure a qualified professional reviews AI recommendations before acting on them, and report adverse incidents within 72 hours. Unique to Vietnam: AI infrastructure operators must also report energy consumption and carbon emissions under Article 11.',
          examples: 'AI medical diagnostic tools, algorithmic credit scoring, AI in government service delivery, educational AI assessment tools.',
        },
        {
          color: '#2d8c4e',
          name: 'General use',
          badge: 'Transparency + environmental',
          what: 'All other commercial and consumer AI systems operating in Vietnam. No prior approval needed but ongoing compliance obligations apply — including the environmental reporting requirement which is unique among the five jurisdictions covered.',
          implementation: 'Must comply with transparency obligations (disclose AI nature to users), data protection rules, and report environmental impact of AI infrastructure annually under Article 11. No pre-approval, no audit required.',
          examples: 'E-commerce recommendation AI, customer service chatbots, AI content creation tools, social media AI.',
        },
      ],
    },

    kz: {
      name: 'Kazakhstan',
      flag: '🇰🇿',
      count: '3 tiers',
      tiers: [
        {
          color: '#e63b2e',
          name: 'High-risk AI',
          badge: 'Register before deployment',
          what: 'AI used in public administration, law enforcement, financial services, and healthcare — as defined and updated by the Ministry of Digital Development, Innovation and Aerospace Industry (Ministry of DSE). Kazakhstan\'s framework broadly follows EU AI Act principles but with lighter implementation requirements, developed with OECD technical assistance.',
          implementation: 'Must register with Ministry of DSE before deployment. Registration application must include: technical documentation describing architecture and training data, an independent risk assessment by an accredited body, a description of human oversight mechanisms, and an incident reporting plan. Post-deployment incident reporting is mandatory.',
          examples: 'AI in government decision-making systems, law enforcement analytics, bank credit AI, hospital diagnostic systems, tax assessment AI.',
        },
        {
          color: '#2563eb',
          name: 'Limited risk',
          badge: 'Disclose to citizens',
          what: 'AI systems that interact directly with citizens in service contexts — government chatbots, automated call systems, AI-powered public portals. The concern is that citizens may not know they are interacting with AI when accessing public services.',
          implementation: 'Must clearly disclose AI nature to users at the start of any interaction. Notification and transparency obligations apply. No registration or independent audit required.',
          examples: 'Government service chatbots, automated tax helplines, AI-powered citizen portals, automated complaint-handling systems.',
        },
        {
          color: '#2d8c4e',
          name: 'General use',
          badge: 'Basic documentation',
          what: 'Commercial AI systems with no direct citizen interaction and outside the high-risk sectors. The majority of business AI in Kazakhstan falls here.',
          implementation: 'Must follow basic responsible use principles and maintain internal documentation. No registration, no approval, no independent audit required. Self-assessed compliance.',
          examples: 'Internal business AI tools, research applications, AI-assisted software development, marketing AI.',
        },
      ],
    },

    jp: {
      name: 'Japan',
      flag: '🇯🇵',
      count: 'No tiers',
      note: 'Japan\'s AI Promotion Act does not contain a risk classification system. All obligations on private actors use "shall make efforts to" language — indicating encouragement without legal compulsion. There are no penalties for non-compliance. Japan instead uses three voluntary tracks: Strategic coordination (government R&D planning), Voluntary guidelines (private sector best practices), and a Regulatory Sandbox (experimental deployment with limited liability). None of these create legally binding risk tiers.',
      tiers: [],
    },
  },

  profiles: [
    { key:'eu', flag:'🇪🇺', name:'European Union', ratified_by:'European Parliament & Council', ratified_on:'13 Jun 2024', implemented:'1 Aug 2024 (phased to Aug 2026)', approach:'Risk-based · Binding' },
    { key:'kr', flag:'🇰🇷', name:'South Korea',    ratified_by:'National Assembly of Korea',    ratified_on:'26 Dec 2024', implemented:'22 Jan 2026',                    approach:'Risk-based · Binding' },
    { key:'vn', flag:'🇻🇳', name:'Vietnam',        ratified_by:'National Assembly of Vietnam',  ratified_on:'10 Dec 2025', implemented:'1 Mar 2026',                     approach:'Mixed · Binding' },
    { key:'kz', flag:'🇰🇿', name:'Kazakhstan',     ratified_by:'President Tokayev',             ratified_on:'17 Nov 2025', implemented:'18 Jan 2026',                    approach:'Mixed · Binding' },
    { key:'jp', flag:'🇯🇵', name:'Japan',          ratified_by:'National Diet of Japan',        ratified_on:'4 Jun 2025',  implemented:'1 Sep 2025',                     approach:'Promotional · Voluntary' },
  ],
};

window.TIMELINE_EVENTS = [
  { date:'Jul 2024', filled:true,  who:'European Union', upcoming:false, event:'EU AI Act published in Official Journal',  desc:'Regulation EU 2024/1689 enters into force on 1 August 2024.' },
  { date:'Sep 2024', filled:true,  who:'European Union', upcoming:false, event:'Framework Convention opens for signature', desc:'Council of Europe — world\'s first internationally binding AI treaty, signed by EU, US, UK, Israel.' },
  { date:'Feb 2025', filled:true,  who:'European Union', upcoming:false, event:'Prohibited AI practices apply',            desc:'Unacceptable-risk bans and AI literacy requirements enter into force.' },
  { date:'Jun 2025', filled:true,  who:'Japan',          upcoming:false, event:'AI Promotion Act enacted',                 desc:'Promulgated on 4 June 2025.' },
  { date:'Aug 2025', filled:true,  who:'European Union', upcoming:false, event:'GPAI model rules apply',                  desc:'General-purpose AI model obligations under Art. 51–56 take effect.' },
  { date:'Sep 2025', filled:true,  who:'Japan',          upcoming:false, event:'AI Promotion Act in force',                desc:'Full enforcement begins 1 September 2025.' },
  { date:'Nov 2025', filled:true,  who:'Kazakhstan',     upcoming:false, event:'AI Law signed by President Tokayev',       desc:'Law No. 230-VIII ZPK signed on 17 November 2025.' },
  { date:'Dec 2024', filled:true,  who:'South Korea',    upcoming:false, event:'AI Basic Act passed',                      desc:'Law No. 20676 passed by National Assembly on 26 December 2024.' },
  { date:'Dec 2025', filled:true,  who:'Vietnam',        upcoming:false, event:'AI Law passed by National Assembly',       desc:'Law No. 134/2025/QH15 passed on 10 December 2025.' },
  { date:'Jan 2026', filled:true,  who:'Kazakhstan',     upcoming:false, event:'Kazakhstan AI Law in force',               desc:'Entered into force 18 January 2026.' },
  { date:'Jan 2026', filled:true,  who:'South Korea',    upcoming:false, event:'AI Basic Act in force',                    desc:'Full enforcement from 22 January 2026 after one-year transition.' },
  { date:'Mar 2026', filled:true,  who:'Vietnam',        upcoming:false, event:'Vietnam AI Law in force',                  desc:'Effective 1 March 2026.' },
  { date:'Aug 2026', filled:false, who:'European Union', upcoming:true,  event:'High-risk AI obligations apply',           desc:'Broad high-risk AI system requirements under Chapter III enter into force.' },
];
