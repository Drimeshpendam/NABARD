// 23-day NABARD Grade A crash plan — Sat Nov 28 to Sun Dec 20, 2026.
// Dates are ISO so the dashboard can match the real calendar safely.
export const days = [
  { d: 1, date: '2026-11-28', title: 'Exam pattern, PYQ strategy, source setup + baseline merit test', sub: 'Overview' },
  { d: 2, date: '2026-11-29', title: 'ARD: schemes, current affairs, PMFBY, KCC, Budget-linked agriculture', sub: 'ARD' },
  { d: 3, date: '2026-11-30', title: 'ARD: soil types, nutrients, erosion and water conservation', sub: 'ARD' },
  { d: 4, date: '2026-12-01', title: 'ARD: animal husbandry, poultry, breeds, terms and diseases', sub: 'ARD' },
  { d: 5, date: '2026-12-02', title: 'ARD: horticulture, plantation systems and production statistics', sub: 'ARD' },
  { d: 6, date: '2026-12-03', title: 'ARD: agronomy, crops, seed chain, weeds and fertilizers', sub: 'ARD' },
  { d: 7, date: '2026-12-04', title: 'Weekly test #1 + error-log repair + qualifying-section sprint', sub: 'Weekly' },
  { d: 8, date: '2026-12-05', title: 'ESI: financial inclusion, KCC, PSL, RIDF, SHGs and rural credit', sub: 'ESI' },
  { d: 9, date: '2026-12-06', title: 'ESI: schemes, reports, social sector and vulnerable groups', sub: 'ESI' },
  { d: 10, date: '2026-12-07', title: 'GA: banking, finance, NABARD/RBI news, reports and indices', sub: 'GA' },
  { d: 11, date: '2026-12-08', title: 'ARD: marketing, FPOs, eNAM, cooperatives and agri economics', sub: 'ARD' },
  { d: 12, date: '2026-12-09', title: 'ARD: irrigation, fisheries, forestry, engineering, extension and climate', sub: 'ARD' },
  { d: 13, date: '2026-12-10', title: 'ESI: Budget, Economic Survey, GDP, inflation, monetary and fiscal policy', sub: 'ESI' },
  { d: 14, date: '2026-12-11', title: 'Weekly test #2 + full merit-section simulation + descriptive start', sub: 'Weekly' },
  { d: 15, date: '2026-12-12', title: 'GA: schemes, national/static GA, days, awards, persons and international', sub: 'GA' },
  { d: 16, date: '2026-12-13', title: 'ARD: rural development, MGNREGA, PMAY-G, Panchayats and institutions', sub: 'ARD' },
  { d: 17, date: '2026-12-14', title: 'ESI: poverty, employment, governance, MSME and social protection', sub: 'ESI' },
  { d: 18, date: '2026-12-15', title: 'Mains English: essay + précis frameworks with timed writing', sub: 'English' },
  { d: 19, date: '2026-12-16', title: 'Mains ESI/ARD: 10-mark and 15-mark answer-writing sprint', sub: 'Mains' },
  { d: 20, date: '2026-12-17', title: 'PYQ-pattern test + merit-section speed repair', sub: 'Mock' },
  { d: 21, date: '2026-12-18', title: 'Qualifying-section speed sprint: Quant, Reasoning, English, Computer, DM', sub: 'Aptitude' },
  { d: 22, date: '2026-12-19', title: 'Final revision: weakest high-yield topics + one more mock', sub: 'Revision' },
  { d: 23, date: '2026-12-20', title: 'Final reset: formula sheet, error log, exam-order plan and cutoff check', sub: 'Milestone' },
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
  Overview: '00_Overview/Exam_Cracking_Strategy.md',
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
  if (day <= 14) return { sub: 'ARD high-weightage topics + schemes', path: notesForSubject.ARD }
  if (day <= 20) return { sub: 'ESI schemes/reports + GA finance', path: notesForSubject.ESI }
  return { sub: 'Weak topics from error log', path: '06_Mocks_and_Practice/Error_Log.md' }
}

export const rotationFor = (day) => {
  const cycle = ['Quant + Reasoning', 'English + GA', 'Computer + Decision Making']
  const pick = cycle[(day.d - 1) % cycle.length]
  return { label: pick, detail: '35-minute qualifying-section safety drill' }
}

export const checkpoints = [
  { day: 7, test: 'Weekly test #1', target: 'Set baseline; identify weak topics' },
  { day: 14, test: 'Weekly test #2', target: 'Merit section ≥ 55/100' },
  { day: 20, test: 'PYQ-pattern test', target: 'Merit section ≥ 65/100' },
  { day: 23, test: 'Final reset', target: 'Exam-order plan locked' },
]
