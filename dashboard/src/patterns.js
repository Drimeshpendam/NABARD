import { ardTopics, esiTopics, gaTopics, mainsTopics, qualifyingTopics } from './analysis.js'

// Phase-I merit blueprint is based on 2021–2025 memory-based PYQ analysis.
// Counts are observed ranges, not official guarantees.
export const phase1 = [
  {
    section: 'ARD — Agriculture & Rural Development', marks: 40, color: '#3ddc84',
    note: 'Observed five-year pattern: current affairs/schemes ~24%; soil, animal husbandry and horticulture are the most reliable static blocks. 2025 used ~20 different chapters in 40 questions.',
    topics: ardTopics,
  },
  {
    section: 'ESI — Economic & Social Issues', marks: 40, color: '#6c9cff',
    note: 'Observed 2021–2025 cluster: financial inclusion/rural credit, social sector, agriculture economy and poverty/employment account for about 68% of questions. Schemes, reports and Budget-linked facts dominate recent papers.',
    topics: esiTopics,
  },
  {
    section: 'GA — General Awareness', marks: 20, color: '#f8ae00',
    note: 'Usually 15–18 current-affairs questions; 2024 leaned heavily toward banking/finance and schemes. Prepare 6 months deeply, with rural/agri/finance first.',
    topics: gaTopics,
  },
  {
    section: 'Qualifying block — do not over-invest', marks: 100, color: '#a78bfa',
    note: 'Reasoning, English, Computer, Quant and Decision Making have sectional floors but no merit value. Build a safe first-pass routine and return to merit questions.',
    topics: qualifyingTopics,
  },
]

export const mains = [
  {
    section: 'Paper I — General English', marks: 100, color: '#10b981',
    note: 'Online descriptive, 3 questions, 90 minutes. Recent themes can combine agriculture, technology, startups and rural transformation.',
    topics: [mainsTopics[0]],
  },
  {
    section: 'Paper II — ESI + ARD', marks: 100, color: '#f472b6',
    note: '50 objective + 50 descriptive. Paper II goes deeper than Phase I: operational scheme details, NABARD-linked themes, reports and policy evaluation.',
    topics: mainsTopics.slice(1),
  },
]
