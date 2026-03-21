// data/kr.js — South Korea AI Basic Act
window.LAW_KR = {
  key: 'kr',
  flag: '🇰🇷',
  name: 'AI Basic Act',
  sub: 'Law No. 20676 · National Assembly of the Republic of Korea',
  enacted: '21 Jan 2025',
  approach: 'Risk-based',
  approach_key: 'risk',
  number: 'Law No. 20676',
  scope: 'Republic of Korea',
  status: 'In force from 22 Jan 2026',

  tiers: [
    {
      color: '#e63b2e',
      name: 'High-impact AI',
      desc: 'AI systems with significant impact on fundamental rights, safety, or critical social functions — mandatory obligations and notification requirements',
      count: 'Art. 35–40',
    },
    {
      color: '#b45309',
      name: 'General AI',
      desc: 'Standard obligations including transparency disclosures, technical documentation, and user notification requirements',
      count: 'Art. 20–30',
    },
    {
      color: '#2d8c4e',
      name: 'Exempt',
      desc: 'AI used for national security purposes, pure academic research, and certain personal non-commercial uses',
      count: 'Art. 3',
    },
  ],

  docs: [
    {
      title: 'English translation (CSET)',
      sub: 'Georgetown University · PDF download',
      url: 'https://cset.georgetown.edu/wp-content/uploads/t0625_south_korea_ai_law_EN.pdf',
    },
    {
      title: 'Official Korean text',
      sub: 'National Law Information Center (perma)',
      url: 'https://perma.cc/CL3T-VHZ6',
    },
    {
      title: 'CSET publication',
      sub: 'Full analysis and commentary',
      url: 'https://cset.georgetown.edu/publication/south-korea-ai-law-2025/',
    },
    {
      title: 'Library of Congress summary',
      sub: 'Global Legal Monitor · Feb 2026',
      url: 'https://www.loc.gov/item/global-legal-monitor/2026-02-20/south-korea-comprehensive-ai-legal-framework-takes-effect',
    },
  ],

  fulltext: [
    {
      chapter: 'Chapter I — General Provisions',
      articles: [
        {
          num: 'Article 1',
          title: 'Purpose',
          text: 'The purpose of this Act is to promote the responsible development and utilization of AI technology in order to enhance citizens\' quality of life and contribute to national development by establishing principles and standards for AI development and utilization, designating and supporting high-impact AI systems, and providing for fundamental rights protection and safety assurance.',
        },
        {
          num: 'Article 2',
          title: 'Definitions',
          text: '"Artificial intelligence" means technology that enables machines to perform tasks that require human cognitive abilities, such as learning, reasoning, and problem-solving, as well as systems utilizing such technology. "High-impact AI system" means an AI system that has a significant impact on citizens\' lives, safety, or rights in areas designated by Presidential Decree, including healthcare, financial services, public infrastructure, and law enforcement.',
        },
        {
          num: 'Article 4',
          title: 'Responsibilities of the State',
          text: 'The State shall establish and implement policies necessary for the promotion of responsible AI development and utilization, including measures to support research and development of AI technology, protect citizens from AI-related harms, ensure fair access to AI technology, and strengthen international cooperation in AI governance.',
        },
      ],
    },
    {
      chapter: 'Chapter II — Basic Principles',
      articles: [
        {
          num: 'Article 6',
          title: 'Basic Principles',
          text: 'AI development and utilization shall comply with the following principles: Humans shall be able to monitor and control AI systems and intervene in their operations at any time; AI shall not discriminate against individuals based on race, gender, age, disability, national origin, or other grounds; AI systems shall be transparent and their operating mechanisms shall be explainable to users; AI systems shall ensure privacy protection and secure processing of personal data.',
        },
      ],
    },
    {
      chapter: 'Chapter IV — High-Impact AI Systems',
      articles: [
        {
          num: 'Article 35',
          title: 'Designation of High-Impact AI Systems',
          text: 'The Minister of Science and ICT shall designate AI systems that have a significant impact on citizens\' fundamental rights, safety, or livelihood as "high-impact AI systems." Factors to consider in designation include: the number of users affected; the degree of impact on life, physical safety, or property; irreversibility of harm; and the degree to which the AI system replaces human decision-making.',
          note: 'The Ministry of Science and ICT (MSIT) serves as the primary regulator with authority to designate high-impact systems, issue guidelines, and impose administrative penalties.',
        },
        {
          num: 'Article 38',
          title: 'Obligations of High-Impact AI Operators',
          text: 'Operators of high-impact AI systems shall: establish and implement measures to ensure the reliability and safety of the AI system; disclose the fact that an AI system is being used to users when the AI system is used in services that significantly affect the rights and interests of users; maintain technical documentation sufficient to demonstrate compliance with this Act; notify the Minister of Science and ICT of any serious incident arising from use of a high-impact AI system.',
        },
      ],
    },
  ],
};
