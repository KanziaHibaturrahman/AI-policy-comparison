// data/jp.js — Japan AI Promotion Act
window.LAW_JP = {
  key: 'jp',
  flag: '🇯🇵',
  name: 'AI Promotion Act',
  sub: 'Act on the Promotion of R&D and Utilisation of AI-Related Technologies · Cabinet Office, Japan',
  enacted: '4 Jun 2025',
  approach: 'Voluntary',
  approach_key: 'vol',
  number: 'AI Promotion Act 2025',
  scope: 'Japan',
  status: 'In force from 1 Sep 2025',

  tiers: [
    {
      color: '#2563eb',
      name: 'Strategic coordination',
      desc: 'Government-led coordination for AI R&D investment, international standards, and cross-ministry alignment — no private obligations',
      count: 'Chapter II',
    },
    {
      color: '#2d8c4e',
      name: 'Voluntary guidelines',
      desc: 'Non-binding transparency and safety guidelines for AI developers — encouraged but carry no legal penalty for non-compliance',
      count: 'Chapter III',
    },
    {
      color: '#888',
      name: 'Sandbox regime',
      desc: 'Regulatory sandbox for AI experimentation — fast-track testing environment with limited liability for participating companies',
      count: 'Chapter IV',
    },
  ],

  docs: [
    {
      title: 'Cabinet Office overview (EN)',
      sub: 'Provisional English translation · PDF',
      url: 'https://www8.cao.go.jp/cstp/ai/ai_hou_gaiyou_en.pdf',
    },
    {
      title: 'Gov Japan summary',
      sub: 'gov-online.go.jp · official overview',
      url: 'https://www.gov-online.go.jp/hlj/en/november_2025/november_2025-08.html',
    },
    {
      title: 'Regulations.ai breakdown',
      sub: 'Article-by-article analysis',
      url: 'https://regulations.ai/regulations/japan-2025-5-ai-promotion-act',
    },
    {
      title: 'AI Strategy Council',
      sub: 'Implementation guidance · cao.go.jp',
      url: 'https://www8.cao.go.jp/cstp/ai/index.html',
    },
  ],

  fulltext: [
    {
      chapter: 'Chapter I — General Provisions',
      articles: [
        {
          num: 'Article 1',
          title: 'Purpose',
          text: 'The purpose of this Act is to promote research and development and utilization of technologies related to artificial intelligence by formulating a basic plan for the promotion of AI technology, clarifying the responsibilities of the state, local governments, AI business operators and AI users, and establishing systems for promoting AI utilization, in order to realize a safe and secure society and strengthen industrial competitiveness.',
        },
        {
          num: 'Article 3',
          title: 'Basic Principles',
          text: 'The promotion of AI technology shall be carried out in accordance with the following basic principles: AI technology shall be developed and utilized in a manner that respects human rights and dignity; the benefits of AI technology shall be shared widely among all people; AI technology shall contribute to solutions to social issues including environmental problems; safety and security shall be ensured in the development and utilization of AI technology; and Japan shall contribute to the development of international norms and standards for AI.',
        },
        {
          num: 'Article 5',
          title: 'Responsibilities of AI Business Operators',
          text: 'AI business operators shall make efforts to: develop and provide AI technology in a safe and secure manner; implement appropriate measures to prevent harm to users and third parties arising from AI systems; disclose necessary information about AI systems to users; cooperate with the government in implementing measures under this Act; and contribute to the development of international standards for AI.',
          note: 'All obligations on private actors in Japan\'s law use the phrase "shall make efforts to" (努めなければならない / tsutomenakereba naranai) — a standard legislative formula indicating encouragement without legal compulsion. There are no penalties for non-compliance with these obligations.',
        },
      ],
    },
    {
      chapter: 'Chapter II — Basic Plan',
      articles: [
        {
          num: 'Article 9',
          title: 'Formulation of Basic Plan',
          text: 'The government shall formulate a Basic Plan for the Promotion of AI Technology in order to comprehensively and systematically promote measures for research and development and utilization of AI technology. The Basic Plan shall set forth: the basic direction of measures for the promotion of AI technology; matters concerning the promotion of research and development; matters concerning the promotion of utilization across industry sectors; matters concerning human resource development in AI; and matters concerning international cooperation.',
        },
      ],
    },
    {
      chapter: 'Chapter IV — Regulatory Sandbox',
      articles: [
        {
          num: 'Article 22',
          title: 'Sandbox for AI Experimentation',
          text: 'In order to promote the development and social implementation of innovative AI technology, the government shall establish a regulatory sandbox system that allows AI business operators to conduct experimental utilization of AI technology under special conditions. Participants in the sandbox system shall be exempt from certain regulatory requirements that would otherwise apply, for the duration of the experiment, subject to conditions set by the relevant ministerial authorities.',
          note: 'Japan\'s sandbox regime is one of the most active in the world — as of early 2026, over 40 companies have used it to test AI systems in healthcare, mobility, and financial services.',
        },
      ],
    },
  ],
};
