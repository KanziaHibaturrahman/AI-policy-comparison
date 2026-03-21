// data/vn.js — Vietnam Law on Artificial Intelligence
window.LAW_VN = {
  key: 'vn',
  flag: '🇻🇳',
  name: 'Law on Artificial Intelligence',
  sub: 'Law No. 134/2025/QH15 · National Assembly of Vietnam',
  enacted: '10 Dec 2025',
  approach: 'Mixed',
  approach_key: 'mixed',
  number: 'Law 134/2025/QH15',
  scope: 'Socialist Republic of Vietnam',
  status: 'In force from 1 Mar 2026',

  tiers: [
    {
      color: '#e63b2e',
      name: 'Prohibited uses',
      desc: 'AI systems threatening national security, social order, or used for targeted manipulation of political opinion — outright ban',
      count: 'Chapter II',
    },
    {
      color: '#b45309',
      name: 'Conditional use',
      desc: 'AI in healthcare, finance, and public administration — requires prior registration and ministerial approval',
      count: 'Chapter III',
    },
    {
      color: '#2d8c4e',
      name: 'General use',
      desc: 'Consumer and commercial AI — transparency, data protection, and environmental reporting requirements apply',
      count: 'Chapter IV',
    },
  ],

  docs: [
    {
      title: 'Government announcement (EN)',
      sub: 'baochinhphu.vn · official press release',
      url: 'https://en.baochinhphu.vn/first-ever-law-on-artificial-intelligence-approved-111251211093619398.htm',
    },
    {
      title: 'English translation',
      sub: 'LuatVietnam · subscription required',
      url: 'https://english.luatvietnam.vn/law-no-134-2025-qh15-dated-december-10-2025-of-the-national-assembly-on-artificial-intelligence-422299-doc1.html',
    },
    {
      title: 'Baker McKenzie analysis',
      sub: 'Legal outlook and obligations overview',
      url: 'https://www.bakermckenzie.com/en/insight/publications/2026/02/vietnam-artificial-intelligence-law-foundation-and-outlook',
    },
    {
      title: 'Library of Congress',
      sub: 'Global Legal Monitor summary',
      url: 'https://www.loc.gov',
    },
  ],

  fulltext: [
    {
      chapter: 'Chapter I — General Provisions',
      articles: [
        {
          num: 'Article 1',
          title: 'Scope of Regulation',
          text: 'This Law regulates principles for artificial intelligence development, research, application and management; rights and obligations of relevant agencies, organisations and individuals involved in AI activities; the state management of artificial intelligence; and international cooperation on artificial intelligence in the territory of Vietnam.',
        },
        {
          num: 'Article 3',
          title: 'Interpretation of Terms',
          text: '"Artificial intelligence system" means a machine-based system that can, for a given set of objectives, make predictions, recommendations, or decisions influencing real or virtual environments. "AI system developer" means an organisation or individual that designs, builds, deploys, or maintains an artificial intelligence system for use in the territory of Vietnam. "AI system operator" means an organisation or individual that puts an AI system into use in their products, services, or internal operations.',
        },
        {
          num: 'Article 5',
          title: 'Principles of AI Development and Use',
          text: 'AI development, research and application in Vietnam shall adhere to the following principles: ensuring national sovereignty, security and social order; respecting human rights and dignity; ensuring transparency and accountability in AI decision-making; protecting personal data and privacy; promoting innovation while managing associated risks; and minimising adverse environmental impacts of AI infrastructure.',
        },
      ],
    },
    {
      chapter: 'Chapter II — Prohibited Acts',
      articles: [
        {
          num: 'Article 9',
          title: 'Prohibited Acts',
          text: 'The following acts are prohibited: using AI systems to threaten national security, sovereignty, or territorial integrity of Vietnam; using AI to produce, store, or disseminate false information that causes public panic or social disorder; developing or deploying AI systems that discriminate against individuals on the basis of ethnicity, religion, gender, or political opinion; using AI to conduct unlawful surveillance of individuals; deploying AI systems to manipulate public opinion or interfere in democratic processes.',
          note: 'Vietnam\'s law is notable for its environmental provisions — operators of AI infrastructure must report energy consumption and carbon emissions, and implement measures to minimise environmental impact under Article 11. This is unique among the five jurisdictions covered in lex.ai.',
        },
      ],
    },
    {
      chapter: 'Chapter III — Conditional AI Use',
      articles: [
        {
          num: 'Article 15',
          title: 'AI in Healthcare',
          text: 'AI systems used for medical diagnosis, treatment recommendation, drug development, or patient monitoring shall be subject to prior approval by the Ministry of Health. Providers shall: conduct clinical validation studies before deployment; maintain audit logs of all AI-assisted decisions; ensure that a qualified medical professional reviews AI recommendations before they are acted upon; and report any adverse incidents to the Ministry of Health within 72 hours.',
        },
      ],
    },
  ],
};
