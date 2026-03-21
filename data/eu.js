// data/eu.js — European Union AI Act
window.LAW_EU = {
  key: 'eu',
  flag: '🇪🇺',
  name: 'EU Artificial Intelligence Act',
  sub: 'Regulation (EU) 2024/1689 · European Parliament & Council',
  enacted: '1 Aug 2024',
  approach: 'Risk-based',
  approach_key: 'risk',
  number: 'EU 2024/1689',
  scope: '27 member states',
  status: 'In force · Phased rollout 2024–2026',

  tiers: [
    {
      color: '#e63b2e',
      name: 'Unacceptable risk',
      desc: 'Prohibited outright — social scoring, subliminal manipulation, real-time biometric surveillance in public spaces',
      count: '8 categories',
    },
    {
      color: '#b45309',
      name: 'High risk',
      desc: 'Strict compliance required — critical infrastructure, medical devices, law enforcement, migration management',
      count: 'Annex III',
    },
    {
      color: '#2563eb',
      name: 'Limited risk',
      desc: 'Transparency obligations only — chatbots, deepfakes, emotion recognition systems',
      count: 'Art. 50',
    },
    {
      color: '#2d8c4e',
      name: 'Minimal risk',
      desc: 'No obligations — spam filters, AI in video games, most general consumer applications',
      count: 'Majority',
    },
  ],

  docs: [
    {
      title: 'Full legal text (EUR-Lex)',
      sub: 'Regulation EU 2024/1689 · EN · PDF',
      url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng',
    },
    {
      title: 'AI Act Explorer (FLI)',
      sub: 'Interactive article-by-article navigator',
      url: 'https://artificialintelligenceact.eu/ai-act-explorer/',
    },
    {
      title: 'PDF download (Official Journal)',
      sub: 'OJ:L_202401689 · full regulation',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202401689',
    },
    {
      title: 'CSET analysis',
      sub: 'Georgetown University policy breakdown',
      url: 'https://cset.georgetown.edu',
    },
  ],

  fulltext: [
    {
      chapter: 'Chapter I — General Provisions',
      articles: [
        {
          num: 'Article 1',
          title: 'Subject Matter',
          text: 'This Regulation lays down harmonised rules on artificial intelligence with the aim of improving the functioning of the internal market by laying down a uniform legal framework in particular for the development, placing on the market, putting into service and use of artificial intelligence systems (AI systems) in the Union, while ensuring a high level of protection of health, safety, fundamental rights as enshrined in the Charter of Fundamental Rights of the European Union, including democracy, the rule of law and environmental protection.',
        },
        {
          num: 'Article 2',
          title: 'Scope',
          text: 'This Regulation applies to providers placing on the market or putting into service AI systems in the Union, irrespective of whether those providers are established in the Union or in a third country; users of AI systems located within the Union; and providers and users of AI systems that are located in a third country, where the output produced by the system is used in the Union.',
        },
        {
          num: 'Article 3',
          title: 'Definitions',
          text: '"AI system" means a machine-based system that is designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments.',
        },
      ],
    },
    {
      chapter: 'Chapter II — Prohibited AI Practices',
      articles: [
        {
          num: 'Article 5',
          title: 'Prohibited AI Practices',
          text: 'The following AI practices shall be prohibited: (a) the placing on the market, putting into service or use of an AI system that deploys subliminal techniques beyond a person\'s consciousness or purposefully manipulative or deceptive techniques, with the objective, or the effect of materially distorting the behaviour of a person or a group of persons; (b) the placing on the market, putting into service or use of an AI system that exploits any of the vulnerabilities of a natural person or a specific group of persons due to their age, disability or a specific social or economic situation.',
          note: 'These prohibitions apply from 2 February 2025 — the earliest provision to enter into force under the phased implementation schedule.',
        },
      ],
    },
    {
      chapter: 'Chapter III — High-Risk AI Systems',
      articles: [
        {
          num: 'Article 6',
          title: 'Classification Rules for High-Risk AI Systems',
          text: 'Irrespective of whether an AI system is placed on the market or put into service independently from the products referred to in points (a) and (b), that AI system shall be considered high-risk where both of the following conditions are fulfilled: (a) the AI system is intended to be used as a safety component of a product, or the AI system is itself a product, covered by the Union harmonisation legislation listed in Annex I; (b) the product whose safety component pursuant to point (a) is the AI system, or the AI system itself as a product, is required to undergo a third-party conformity assessment.',
        },
        {
          num: 'Article 9',
          title: 'Risk Management System',
          text: 'A risk management system shall be established, implemented, documented and maintained in relation to high-risk AI systems. The risk management system shall be understood as a continuous iterative process planned and run throughout the entire lifecycle of a high-risk AI system, requiring regular systematic review and updating. It shall comprise the following steps: (a) the identification and analysis of the known and the reasonably foreseeable risks that the high-risk AI system can pose to health, safety or fundamental rights.',
        },
      ],
    },
    {
      chapter: 'Chapter V — General-Purpose AI Models',
      articles: [
        {
          num: 'Article 51',
          title: 'Classification of GPAI Models with Systemic Risk',
          text: 'A general-purpose AI model shall be classified as a general-purpose AI model with systemic risk if it meets any of the following conditions: (a) it has high impact capabilities evaluated on the basis of appropriate technical tools and methodologies, including indicators and benchmarks; (b) based on a decision of the Commission, ex officio or following a qualified alert from the scientific panel, it has capabilities or an impact equivalent to those set out in point (a).',
          note: 'GPAI models trained with over 10^25 FLOPs are presumed to have systemic risk unless the provider demonstrates otherwise. These rules applied from 2 August 2025.',
        },
      ],
    },
  ],
};
