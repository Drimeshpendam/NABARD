// NABARD progress model — weights mirror the sections that matter.
export const papers = [
  {
    id: 'phase1-merit',
    name: 'Phase I — Merit Section',
    gate: 'GA 20 + ESI 40 + ARD 40',
    topics: [
      { name: 'General Awareness', w: 20, pct: 15, last: '2026-11-22', subs: [
        { name: 'NABARD/RBI + rural economy news', exp: 'high', patterns: ['institution facts', 'recent actions'] },
        { name: 'Schemes + reports', exp: 'high', patterns: ['ministry mapping', 'launch/features', 'rank/index'] },
      ]},
      { name: 'Economic & Social Issues', w: 40, pct: 10, last: '2026-11-22', subs: [
        { name: 'Macro + policy', exp: 'high', patterns: ['GDP/inflation', 'monetary/fiscal basics'] },
        { name: 'Social sector', exp: 'high', patterns: ['poverty/employment', 'health/education/gender'] },
      ]},
      { name: 'Agriculture & Rural Development', w: 40, pct: 20, last: '2026-11-22', subs: [
        { name: 'Agri fundamentals', exp: 'high', patterns: ['soil/crops/irrigation', 'animal/fisheries'] },
        { name: 'Rural institutions + schemes', exp: 'very high', patterns: ['NABARD/cooperatives', 'PMFBY/PM-KISAN/FPO'] },
      ]},
    ],
  },
  {
    id: 'phase1-qualifying',
    name: 'Phase I — Qualifying Sections',
    gate: 'clear each sectional cutoff',
    topics: [
      { name: 'Reasoning', w: 20, pct: 10, last: '2026-11-22' },
      { name: 'English Language', w: 30, pct: 10, last: '2026-11-22' },
      { name: 'Computer Knowledge', w: 20, pct: 10, last: '2026-11-22' },
      { name: 'Quantitative Aptitude', w: 20, pct: 10, last: '2026-11-22' },
      { name: 'Decision Making', w: 10, pct: 10, last: '2026-11-22' },
    ],
  },
  {
    id: 'mains',
    name: 'Phase II — Mains',
    gate: 'target 140+/200',
    topics: [
      { name: 'General English descriptive', w: 50, pct: 5, last: null },
      { name: 'ESI + ARD objective', w: 25, pct: 10, last: null },
      { name: 'ESI + ARD descriptive', w: 25, pct: 5, last: null },
    ],
  },
  {
    id: 'interview',
    name: 'Interview',
    gate: 'target 30+/50',
    topics: [
      { name: 'NABARD awareness', w: 40, pct: 10, last: '2026-11-22' },
      { name: 'Agriculture/rural-development opinion', w: 35, pct: 10, last: null },
      { name: 'Mock interview reps', w: 25, pct: 0, last: null },
    ],
  },
]

export const paperPct = (p) => Math.round(p.topics.reduce((s, t) => s + t.pct * t.w, 0) / 100)

export const staleState = (t, now = new Date()) => {
  if (t.pct === 0) return 'none'
  if (!t.last) return 'stale'
  const days = Math.floor((now - new Date(t.last)) / 86400000)
  if (days <= 3) return 'fresh'
  if (days <= 7) return 'soon'
  return 'stale'
}
