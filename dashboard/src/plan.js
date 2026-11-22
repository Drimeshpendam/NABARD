// 42-day NABARD Grade A foundation plan — starts Nov 23, 2026.
// Dates are ISO so the dashboard can match the real calendar safely.
export const days = [
  { d: 1, date: '2026-11-23', title: 'Exam pattern, source setup, NABARD orientation, baseline test', sub: 'Overview' },
  { d: 2, date: '2026-11-24', title: 'NABARD functions, rural credit system, cooperatives', sub: 'ARD' },
  { d: 3, date: '2026-11-25', title: 'ESI: national income, GDP, growth vs development', sub: 'ESI' },
  { d: 4, date: '2026-11-26', title: 'ARD: soil types, land degradation, watershed development', sub: 'ARD' },
  { d: 5, date: '2026-11-27', title: 'ESI: poverty, inequality, unemployment', sub: 'ESI' },
  { d: 6, date: '2026-11-28', title: 'ARD: irrigation, micro-irrigation, water efficiency', sub: 'ARD' },
  { d: 7, date: '2026-11-29', title: 'Weekly test #1 + error-log repair', sub: 'Weekly' },
  { d: 8, date: '2026-11-30', title: 'ESI: inflation, monetary policy, RBI functions', sub: 'ESI' },
  { d: 9, date: '2026-12-01', title: 'ARD: major crops, cropping systems, horticulture basics', sub: 'ARD' },
  { d: 10, date: '2026-12-02', title: 'ESI: fiscal policy, Budget, deficit types', sub: 'ESI' },
  { d: 11, date: '2026-12-03', title: 'ARD: seeds, fertilizers, Soil Health Card', sub: 'ARD' },
  { d: 12, date: '2026-12-04', title: 'GA weekly recap + English objective drill', sub: 'GA' },
  { d: 13, date: '2026-12-05', title: 'ARD: animal husbandry, dairy, fisheries, allied income', sub: 'ARD' },
  { d: 14, date: '2026-12-06', title: 'Weekly test #2 + descriptive English set', sub: 'Weekly' },
  { d: 15, date: '2026-12-07', title: 'ARD: agri-marketing, APMC, eNAM, FPOs', sub: 'ARD' },
  { d: 16, date: '2026-12-08', title: 'ESI: banking system, rural credit, priority sector lending', sub: 'ESI' },
  { d: 17, date: '2026-12-09', title: 'ESI: social sector — health, education, gender', sub: 'ESI' },
  { d: 18, date: '2026-12-10', title: 'ARD: PMFBY, crop insurance, agri-risk management', sub: 'ARD' },
  { d: 19, date: '2026-12-11', title: 'Computer + Decision Making safety drill', sub: 'Aptitude' },
  { d: 20, date: '2026-12-12', title: 'ARD: climate-resilient and sustainable agriculture', sub: 'ARD' },
  { d: 21, date: '2026-12-13', title: 'Weekly test #3 + ESI/ARD descriptive answers', sub: 'Weekly' },
  { d: 22, date: '2026-12-14', title: 'ARD: SHGs, JLGs, MFIs, NABARD refinance', sub: 'ARD' },
  { d: 23, date: '2026-12-15', title: 'ESI: employment schemes, MGNREGA, skilling', sub: 'ESI' },
  { d: 24, date: '2026-12-16', title: 'ESI: demographic dividend, migration, urbanization', sub: 'ESI' },
  { d: 25, date: '2026-12-17', title: 'ARD: post-harvest, storage, food processing, value chains', sub: 'ARD' },
  { d: 26, date: '2026-12-18', title: 'ARD: flagship agriculture and rural schemes', sub: 'ARD' },
  { d: 27, date: '2026-12-19', title: 'ESI: Economic Survey + Budget rural-economy points', sub: 'ESI' },
  { d: 28, date: '2026-12-20', title: 'Weekly test #4 + descriptive English timed set', sub: 'Weekly' },
  { d: 29, date: '2026-12-21', title: 'ESI: financial inclusion, Jan Dhan, DBT, digital payments', sub: 'ESI' },
  { d: 30, date: '2026-12-22', title: 'ARD: forestry, agroforestry, natural resources', sub: 'ARD' },
  { d: 31, date: '2026-12-23', title: 'NABARD reports, publications, leadership, initiatives', sub: 'NABARD' },
  { d: 32, date: '2026-12-24', title: 'ARD: current schemes and updates', sub: 'ARD' },
  { d: 33, date: '2026-12-25', title: 'ARD revision: static tables + scheme matrix', sub: 'Revision' },
  { d: 34, date: '2026-12-26', title: 'ESI revision: frameworks + reports', sub: 'Revision' },
  { d: 35, date: '2026-12-27', title: 'Weekly test #5 + full merit-section simulation', sub: 'Weekly' },
  { d: 36, date: '2026-12-28', title: 'Mains English: essay practice + review', sub: 'English' },
  { d: 37, date: '2026-12-29', title: 'Mains English: précis + report/letter practice', sub: 'English' },
  { d: 38, date: '2026-12-30', title: 'Mains ESI descriptive sprint', sub: 'Mains' },
  { d: 39, date: '2026-12-31', title: 'Mains ARD descriptive sprint', sub: 'Mains' },
  { d: 40, date: '2027-01-01', title: 'Full Phase-I mock + complete error analysis', sub: 'Mock' },
  { d: 41, date: '2027-01-02', title: 'Deep-patch weakest 3 topics', sub: 'Revision' },
  { d: 42, date: '2027-01-03', title: 'Foundation reset + next-cycle strategy', sub: 'Milestone' },
]

export const subjectColors = {
  ARD: '#3ddc84', ESI: '#6c9cff', GA: '#f59e0b', Aptitude: '#8b5cf6',
  English: '#10b981', Mains: '#f472b6', NABARD: '#14b8a6', Revision: '#a78bfa',
  Weekly: '#f8ae00', Mock: '#fb7185', Milestone: '#e040fb', Overview: '#94a3b8',
}

export const meritSections = [
  { name: 'GA', marks: 20 },
  { name: 'ESI', marks: 40 },
  { name: 'ARD', marks: 40 },
]

export const qualifyingSections = [
  { name: 'Reasoning', marks: 20 },
  { name: 'English', marks: 30 },
  { name: 'Computer', marks: 20 },
  { name: 'Quant', marks: 20 },
  { name: 'Decision Making', marks: 10 },
]

export const notesForSubject = {
  Overview: '00_Overview/Exam_Pattern.md',
  ARD: '02_Phase1_Merit_ESI_ARD_GA/ARD_Core_Checklist.md',
  ESI: '02_Phase1_Merit_ESI_ARD_GA/ESI_Core_Checklist.md',
  GA: '02_Phase1_Merit_ESI_ARD_GA/GA_Rural_Current_Affairs.md',
  Aptitude: '01_Phase1_Aptitude/Formula_And_Drill_Bank.md',
  English: '03_Mains_English/Descriptive_English_Framework.md',
  Mains: '04_Mains_ESI_ARD/Answer_Writing_Framework.md',
  NABARD: '07_Interview/NABARD_Awareness.md',
  Revision: '00_Overview/Progress_Tracker.md',
  Weekly: '00_Overview/Progress_Tracker.md',
  Mock: '06_Mocks_and_Practice/Error_Log.md',
  Milestone: '00_Overview/Target_Chart.md',
}

export const backRevision = (day) => {
  if (day <= 7) return null
  if (day <= 14) return { sub: 'NABARD + rural credit', path: notesForSubject.ARD }
  if (day <= 21) return { sub: 'Macro + poverty/employment', path: notesForSubject.ESI }
  if (day <= 28) return { sub: 'Agriculture schemes + institutions', path: notesForSubject.ARD }
  if (day <= 35) return { sub: 'GA + reports', path: notesForSubject.GA }
  return { sub: 'Weakest topics from error log', path: '06_Mocks_and_Practice/Error_Log.md' }
}

export const rotationFor = (day) => {
  const cycle = ['Quant + Reasoning', 'English + GA', 'Computer + Decision Making']
  const pick = cycle[(day.d - 1) % cycle.length]
  return { label: pick, detail: '45-minute qualifying-section safety drill' }
}

export const checkpoints = [
  { day: 7, test: 'Weekly test #1', target: 'Set baseline; no pressure' },
  { day: 14, test: 'Weekly test #2', target: 'Merit section ≥ 45/100' },
  { day: 21, test: 'Weekly test #3', target: 'Merit section ≥ 52/100' },
  { day: 28, test: 'Weekly test #4', target: 'Merit section ≥ 58/100' },
  { day: 35, test: 'Weekly test #5', target: 'Merit section ≥ 65/100' },
]
