// data/kz.js — Kazakhstan Law on Artificial Intelligence
window.LAW_KZ = {
  key: 'kz',
  flag: '🇰🇿',
  name: 'Law on Artificial Intelligence',
  sub: 'Law No. 230-VIII ZPK · President of the Republic of Kazakhstan',
  enacted: '17 Nov 2025',
  approach: 'Mixed',
  approach_key: 'mixed',
  number: 'Law No. 230-VIII ZPK',
  scope: 'Republic of Kazakhstan',
  status: 'In force from 18 Jan 2026',

  tiers: [
    {
      color: '#e63b2e',
      name: 'High-risk AI',
      desc: 'AI used in public administration, law enforcement, financial services, and healthcare — mandatory registration with Ministry of DSE',
      count: 'Art. 12–18',
    },
    {
      color: '#2563eb',
      name: 'Limited risk',
      desc: 'AI systems interacting directly with citizens — transparency disclosure and notification obligations apply',
      count: 'Art. 19–22',
    },
    {
      color: '#2d8c4e',
      name: 'General use',
      desc: 'Commercial and research AI — basic responsible use principles and documentation requirements',
      count: 'Art. 23–25',
    },
  ],

  docs: [
    {
      title: 'Official text (Zakon.kz)',
      sub: 'Kazakh/Russian · national legal database',
      url: 'https://online.zakon.kz/Document/?doc_id=34207749',
    },
    {
      title: 'Library of Congress',
      sub: 'Global Legal Monitor · Jan 2026',
      url: 'https://www.loc.gov/item/global-legal-monitor/2026-01-12/kazakhstan-new-law-introduces-rules-for-ai-systems-operating-in-the-country',
    },
    {
      title: 'EY Kazakhstan summary',
      sub: 'Tax & regulatory alert',
      url: 'https://www.ey.com/en_kz/technical/tax-alerts/2025/12/law-on-artificial-intelligence-kazakhstan',
    },
    {
      title: 'Ministry of DSE',
      sub: 'Digital development ministry guidance',
      url: 'https://www.gov.kz',
    },
  ],

  fulltext: [
    {
      chapter: 'Chapter I — General Provisions',
      articles: [
        {
          num: 'Article 1',
          title: 'Subject of Regulation',
          text: 'This Law regulates relations arising in connection with the development, testing, deployment and use of artificial intelligence systems in the Republic of Kazakhstan, and establishes rights and obligations of developers, operators, and users of AI systems, as well as the powers of state bodies in the sphere of artificial intelligence.',
        },
        {
          num: 'Article 2',
          title: 'Basic Concepts',
          text: '"Artificial intelligence" means a set of technological solutions that simulate human cognitive functions, including self-learning and the finding of solutions without predetermined algorithms. "AI system" means a software or hardware-software complex that uses artificial intelligence methods and technologies to perform tasks. "AI system operator" means an entity that deploys an AI system for use in goods, services, or internal operations within the territory of Kazakhstan.',
        },
        {
          num: 'Article 4',
          title: 'Principles of AI Regulation',
          text: 'The regulation of artificial intelligence in Kazakhstan shall be based on the following principles: ensuring the security and safety of AI systems; transparency of the functions and decision-making processes of AI systems; protection of human rights and freedoms; preventing discrimination in the application of AI systems; support for innovation and technological development; and proportionality of regulatory measures to identified risks.',
          note: 'Kazakhstan\'s law broadly follows EU AI Act principles but with lighter implementation requirements. The law was developed with technical assistance from the OECD and explicitly references the OECD AI Principles.',
        },
      ],
    },
    {
      chapter: 'Chapter II — Rights and Obligations',
      articles: [
        {
          num: 'Article 7',
          title: 'Obligations of AI System Operators',
          text: 'Operators of AI systems shall: ensure the safety and reliability of AI systems deployed in Kazakhstan; provide users with accurate information about the AI system, its capabilities, and limitations; implement measures to ensure the protection of personal data processed by the AI system in accordance with legislation on personal data protection; notify the authorized body of incidents involving AI systems that caused or could have caused material harm to individuals or the state.',
        },
      ],
    },
    {
      chapter: 'Chapter III — High-Risk AI Systems',
      articles: [
        {
          num: 'Article 12',
          title: 'Registration of High-Risk AI Systems',
          text: 'Operators of AI systems classified as high-risk shall register such systems with the Ministry of Digital Development, Innovation and Aerospace Industry before deployment. The registration application shall include: technical documentation describing the AI system\'s architecture, training data, and performance characteristics; a risk assessment conducted by an accredited body; a description of human oversight mechanisms; and a description of incident reporting procedures.',
        },
      ],
    },
  ],
};
