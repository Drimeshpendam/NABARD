// NABARD Grade A pattern matrix — latest completed 2025–26 structure.
export const phase1 = [
  {
    section: 'Merit sections — decide Mains shortlist', color: '#3ddc84',
    note: 'GA + ESI + ARD = 100 marks. This is where Phase-I preparation time belongs.',
    topics: [
      { name: 'General Awareness', qs: 20, tag: 'recall speed', patterns: [
        ['Scheme mapping', 'Scheme → ministry → objective → beneficiary → launch/update'],
        ['NABARD + RBI news', 'Institutional functions, reports, leadership, recent actions'],
        ['Reports/indices', 'Always learn rank + publisher + theme'],
        ['Rural current affairs', 'Agriculture, rural finance, food security, inclusion'],
      ]},
      { name: 'Economic & Social Issues', qs: 40, tag: 'concept + current link', patterns: [
        ['Macro basics', 'GDP, inflation, fiscal/monetary policy, unemployment'],
        ['Financial system', 'Banking, PSL, financial inclusion, regulators'],
        ['Social development', 'Poverty, inequality, health, education, gender, migration'],
        ['Scheme/report data', 'Budget, Economic Survey, ministry programs, development indices'],
      ]},
      { name: 'Agriculture & Rural Development', qs: 40, tag: 'your strongest zone', patterns: [
        ['Agri fundamentals', 'Soil, crops, irrigation, horticulture, animal husbandry, fisheries'],
        ['Institutions', 'NABARD, cooperatives, RRBs, SHGs, FPOs, MFIs'],
        ['Schemes', 'PM-KISAN, KCC, PMFBY, eNAM, PMFME, AIF, rural missions'],
        ['Rural economy', 'Credit, marketing, post-harvest, livelihood, infrastructure'],
      ]},
    ],
  },
  {
    section: 'Qualifying sections — clear every floor', color: '#6c9cff',
    note: 'These sections have individual cutoffs but do not count toward the merit total.',
    topics: [
      { name: 'Reasoning', qs: 20, tag: 'puzzles + singles', patterns: [
        ['Puzzle sets', 'Seating, floor, box, scheduling, attribute matching'],
        ['Singles', 'Syllogism, blood relation, direction, ranking, inequality'],
      ]},
      { name: 'English + Computer + Decision Making', qs: 60, tag: 'avoid elimination', patterns: [
        ['English', 'RC, errors, fillers, jumbles, vocab'],
        ['Computer', 'OS, MS Office, internet, security, digital payments'],
        ['Decision Making', 'Choose practical, ethical, institutional action'],
      ]},
      { name: 'Quantitative Aptitude', qs: 20, tag: 'safe clearance', patterns: [
        ['Speed sets', 'Approximation, series, quadratic comparison'],
        ['DI + arithmetic', 'Table/caselet DI, %, ratio, SI/CI, TSD, T&W'],
      ]},
    ],
  },
]

export const mains = [
  {
    section: 'Paper I — General English', marks: 100, color: '#10b981',
    note: 'Online descriptive, 3 questions, 90 minutes.',
    topics: [
      { name: 'Essay', qs: 'major task', tag: 'structure + examples', patterns: [
        ['Intro-body-conclusion', 'Define issue → dimensions → challenges → way forward'],
        ['NABARD themes', 'Rural finance, FPOs, climate risk, agri-marketing, inclusion'],
      ]},
      { name: 'Précis / drafting', qs: 'major task', tag: 'compression', patterns: [
        ['Précis', 'One-third length, neutral title, own words'],
        ['Report/letter', 'Formal structure, concise, purposeful'],
      ]},
    ],
  },
  {
    section: 'Paper II — ESI + ARD', marks: 100, color: '#f472b6',
    note: '50 objective + 50 descriptive; descriptive is the real separator.',
    topics: [
      { name: 'Objective', qs: '30 Qs · 50 marks', tag: '30 minutes', patterns: [
        ['Static × current', 'Concepts asked through schemes, reports, rural data'],
        ['ARD depth', 'Agri/rural institutions and program features'],
      ]},
      { name: 'Descriptive', qs: '6 asked · attempt 4', tag: '50 marks · 90 min', patterns: [
        ['15-mark answers', '250–350 words with dimensions, example, way forward'],
        ['10-mark answers', '180–250 words; direct, organized, no padding'],
      ]},
    ],
  },
]
