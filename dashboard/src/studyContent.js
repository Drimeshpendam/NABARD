const PYQ_MAIN = 'https://c4scourses.in/nabard-grade-a/pyq/'
const PYQ_2023_PDF = 'https://static.ixambee.com/miscellaneous-pdf/NABARD_Grade_A_2023_Phase_I_Shift_1.pdf'
const EDUTAP_PYQ = 'https://edutap.in/nabard-grade-a/previous-year-questions/'

const guide = (title, summary, topics) => ({ title, summary, topics })
const topic = (id, title, marks, pace, chunks, practice, resources = []) => ({ id, title, marks, pace, chunks, practice, resources })
const chunk = (title, concept, example, ask, trap) => ({ title, concept, example, ask, trap })
const practice = (q, o, a, x) => ({ q, o, a, x })

const commonPyqs = [
  { name: 'C4S year-wise PYQ repository', url: PYQ_MAIN, note: 'Memory-based questions with answers and tags' },
  { name: 'ixamBee 2023 Phase-I memory paper PDF', url: PYQ_2023_PDF, note: 'Open-source reconstructed paper' },
  { name: 'EduTap PYQ downloads', url: EDUTAP_PYQ, note: 'Year-wise and subject-wise papers' },
]

export const studyGuides = {
  Overview: guide(
    'Exam Strategy Track',
    'Understand what actually decides selection before opening notes. Phase I is one combined paper; GA + ESI + ARD decide the Mains shortlist.',
    [
      topic('overview-formula', 'Phase-I Merit Formula', '100 marks', '27–30 sec/question', [
        chunk('What counts', 'Reasoning, English, Computer, Quant and Decision Making are qualifying gates. GA, ESI and ARD are the only merit sections used for Mains shortlisting.', 'Scoring 15/30 in English is useful only if every section clears its floor; a 60/100 merit score decides the shortlist.', 'Pattern and cutoff questions', 'Treating all 200 marks as equally important for merit'),
        chunk('Exam order', 'Start with the sections you can score quickly: GA → ESI → ARD is usually best because these are factual and decide merit. Then clear qualifying sections without over-investing.', 'GA 8 min + ESI 20 min + ARD 20 min leaves enough time for the remaining 100 questions.', 'Time-allocation strategy', 'Spending 4 minutes on one puzzle before merit sections'),
      ], [
        practice('Which sections decide Phase-I Mains shortlisting?', ['All sections equally', 'GA + ESI + ARD', 'Reasoning + Quant', 'English + Computer', 'Decision Making only'], 1, 'GA 20 + ESI 40 + ARD 40 = the 100-mark merit section.'),
        practice('Phase-I average pace across all 200 questions is approximately:', ['10 sec', '20 sec', '36 sec', '75 sec', '2 min'], 2, '120 minutes / 200 questions = 36 seconds per question on average.'),
      ]),
    ],
  ),
  ARD: guide(
    'ARD Master Track',
    'Study ARD in two layers: static fundamentals that repeat every year, and current/scheme details that carry the largest observed share.',
    [
      topic('ard-schemes', 'ARD Schemes + Current Affairs', '8–10 Qs', '25–35 sec/question', [
        chunk('Scheme architecture', 'Do not memorize only the scheme name. NABARD asks the operating detail: ministry, launch/update, component, beneficiary, threshold and latest number.', 'PMFBY is not just crop insurance: Kharif premium is 2%, Rabi 1.5%, commercial/horticultural 5%; mid-season adversity can trigger when expected yield is below 50% of normal yield.', 'Direct value, component match, statement combination', 'Premium rate vs subsidy rate; launch year vs Cabinet approval year'),
        chunk('Current-linked static', 'A current item often becomes a static question. If KCC is in news, learn the committee/year/limit; if a mission is announced, learn target group and component.', 'KCC was introduced in 1998 and the modified interest subvention limit rose to ₹5 lakh for short-term crop loans.', 'Year, amount, target group, latest revision', 'Outdated value from old notes'),
      ], [
        practice('The Kisan Credit Card scheme was introduced in:', ['1995', '1998', '2001', '2005', '2010'], 1, 'KCC was introduced in 1998 and later extended to allied activities.'),
        practice('Under PMFBY, mid-season adversity support can apply when expected yield is likely to be:', ['Below 75%', 'Below 50%', 'Below 25%', 'Exactly 60%', 'Above 80%'], 1, 'The operational trigger is below 50% of normal yield.'),
      ], commonPyqs),
      topic('ard-soil-water', 'Soil + Water Conservation', '4–6 Qs', '25–35 sec/question', [
        chunk('Soil map first', 'Questions often connect soil type → region → crop. Start with alluvial, black, red, laterite, mountain and desert soils, then learn area coverage and properties.', 'Alluvial soils cover the maximum area and dominate Indo-Gangetic and coastal plains.', 'Direct fact or map association', 'Maximum area vs most fertile soil'),
        chunk('Conservation method', 'Erosion questions ask you to identify the practice from the mechanism. Contour farming follows the contour; bunding creates barriers; strip cropping alternates strips.', 'Ridges and furrows across a slope that slow runoff point to contour farming.', 'Definition → method match', 'Contour vs strip vs terracing'),
        chunk('Nutrient function', 'Nutrient questions are statement combinations. Learn each nutrient by its structural/physiological role.', 'Calcium supports cell-wall/membrane structure; magnesium is central to chlorophyll, so options that assign chlorophyll to calcium are traps.', 'Statement combination', 'Calcium vs magnesium role'),
      ], [
        practice('Which soil covers the maximum area in India?', ['Black', 'Red', 'Alluvial', 'Laterite', 'Desert'], 2, 'Alluvial soils cover the largest area.'),
        practice('Contour farming mainly helps by:', ['Increasing soil salinity', 'Reducing runoff velocity and soil erosion', 'Increasing irrigation depth', 'Removing weeds chemically', 'Adding nitrogen'], 1, 'Contour ridges slow runoff and reduce erosion.'),
      ], commonPyqs),
      topic('ard-animal', 'Animal Husbandry + Poultry', '3–5 Qs', '25–35 sec/question', [
        chunk('Species vocabulary', 'One-term questions are frequent: bovine, caprine, weaning, brooding, candling and wallowing. Learn species + term + example.', 'Goat is caprine; cattle, buffalo, mithun and yak are bovines.', 'Definition or odd-one-out', 'Bovine vs caprine; poultry vs livestock'),
        chunk('Breed + utility', 'Questions connect breed → native tract → milk/egg/work utility. Learn top breeds first.', 'Murrah is the standard high-yield dairy buffalo breed.', 'Breed/utility match', 'Highest average vs highest recorded yield'),
        chunk('Physiology numbers', 'Incubation, lactation, egg curve and disease-agent questions are numeric/static. Keep a one-page table.', 'Egg production rises to a peak around 32–35 weeks in commercial layers.', 'Numeric blank', 'Peak production vs onset of lay'),
      ], [
        practice('The bovine population does NOT include:', ['Cattle', 'Buffalo', 'Mithun', 'Yak', 'Goat'], 4, 'Goat is caprine, not bovine.'),
        practice('Which buffalo breed is a standard high milk yielder?', ['Murrah', 'Deccani', 'Gaddi', 'Pugal', 'Nali'], 0, 'Murrah is the classic high-yield dairy buffalo breed.'),
      ], commonPyqs),
      topic('ard-agro-hort', 'Agronomy + Horticulture', '6–10 Qs combined', '25–40 sec/question', [
        chunk('Botanical identity', 'Scientific-name questions are quick marks if you revise a small list repeatedly.', 'Barley is Hordeum vulgare; wheat is Triticum aestivum; maize is Zea mays.', 'Direct recall', 'Near-name distractors from the same crop group'),
        chunk('Seed chain', 'The seed chain is sequence-based: nucleus → breeder → foundation → certified. Tag colours and progeny are traps.', 'The progeny of breeder seed is foundation seed.', 'Sequence or tag colour', 'Nucleus vs breeder vs certified'),
        chunk('Planting layout', 'Horticulture questions describe a layout and ask the system name.', 'One extra tree in the centre of each square means quincunx.', 'Diagram/word identification', 'Square vs quincunx vs hexagonal'),
      ], [
        practice('The progeny of breeder seed is:', ['Nucleus seed', 'Foundation seed', 'Certified seed', 'Registered seed', 'Truthfully labelled seed'], 1, 'The chain is nucleus → breeder → foundation → certified.'),
        practice('A planting system with one extra tree in the centre of each square is:', ['Rectangular', 'Hexagonal', 'Contour', 'Quincunx', 'Triangular'], 3, 'Quincunx adds one centre tree to each square.'),
      ], commonPyqs),
      topic('ard-market-rd', 'Marketing + Rural Development', '4–8 Qs combined', '30–40 sec/question', [
        chunk('Marketing vocabulary', 'Learn market institutions and value-chain terms by function: APMC/regulation, eNAM/online trading, FPO/collective, cooperative/pooling.', 'Input supply is a backward linkage; processing/marketing is a forward linkage.', 'Function match or benefit/odd one out', 'Backward vs forward linkage'),
        chunk('Rural schemes', 'Rural-development questions test operational guidelines more than names.', 'MGNREGA gives up to 100 days wage employment per rural household and maintains a 60:40 wage-material ratio at district level.', 'Numeric guideline', 'Household vs individual guarantee'),
      ], [
        practice('Break-even point in farm management is where:', ['Fixed cost is zero', 'Total revenue equals total cost', 'Output is maximum', 'Variable cost is zero', 'Subsidy equals investment'], 1, 'At break-even, TR = TC.'),
        practice('The MGNREGA district-level wage-material ratio is:', ['50:50', '60:40', '70:30', '75:25', '80:20'], 1, 'At least 60% must be wage component.'),
      ], commonPyqs),
    ],
  ),
  ESI: guide(
    'ESI Master Track',
    'ESI is not only macroeconomics. Recent papers lean toward schemes, reports, rural credit, social sector and NABARD-linked institutions.',
    [
      topic('esi-rural-credit', 'Financial Inclusion + Rural Credit', '8–9 Qs', '30–40 sec/question', [
        chunk('Credit chain', 'Understand the flow: farmer/SHG → PACS/JLG → cooperative/RRB/commercial bank → NABARD refinance/RBI regulation.', 'RIDF receives bank contributions arising from PSL shortfalls and supports rural infrastructure.', 'Institution role or flow', 'RBI regulator vs NABARD refinance/development role'),
        chunk('Scheme numeric detail', 'Credit schemes are asked through thresholds, interest subvention, beneficiaries and updated limits.', 'Modified Interest Subvention raised the KCC short-term crop-loan limit to ₹5 lakh.', 'Amount/year/feature', '₹3 lakh old value vs ₹5 lakh updated value'),
      ], [
        practice('RIDF was created mainly from contributions linked to:', ['Foreign reserves', 'PSL shortfall', 'Mutual funds', 'Insurance premiums', 'GST refunds'], 1, 'RIDF is funded from bank contributions due to priority-sector shortfalls.'),
        practice('The KCC short-term crop-loan limit under the revised interest-subvention framework is:', ['₹1 lakh', '₹2 lakh', '₹3 lakh', '₹5 lakh', '₹10 lakh'], 3, 'The revised limit is ₹5 lakh.'),
      ], commonPyqs),
      topic('esi-schemes-social', 'Schemes + Social Sector + Reports', '15–20 Qs combined', '30–45 sec/question', [
        chunk('Scheme lens', 'Recent ESI papers heavily reward scheme architecture. For every scheme capture ministry, target group, components, funding and update.', 'Mission Vatsalya questions can ask which components count as non-institutional care.', 'Component list / odd one out', 'Component vs objective; ministry vs implementing agency'),
        chunk('Report lens', 'Reports are usually asked as issuer + India finding/rank/theme. Do not memorize every index; prioritize development, gender, poverty, employment and rural reports.', 'Gender Gap Index questions may ask India’s rank, not the publishing formula.', 'Rank + issuer', 'Rank vs score vs theme'),
      ], [
        practice('For NABARD ESI, the highest-return scheme study unit is:', ['Only scheme name', 'Ministry → objective → beneficiary → components → update', 'Only launch date', 'Only budget speech page', 'Only abbreviation'], 1, 'Recent questions test operational scheme architecture.'),
        practice('A report/index question should normally be revised as:', ['Only the rank', 'Issuer + theme + India finding + year', 'Only publisher HQ', 'Only a PDF cover', 'Only the title'], 1, 'Issuer + theme + India finding is the scoring combination.'),
      ], commonPyqs),
      topic('esi-macro-msme', 'Macro + Budget + MSME', '6–8 Qs combined', '35–60 sec/question', [
        chunk('Macro relationships', 'Questions test relationships more than definitions: repo/MSF/bank rate ordering, GDP/GVA, fiscal deficit, inflation drivers.', 'Bank Rate and MSF were linked in one recent question because both were at the same rate.', 'Statement combination', 'Repo vs reverse repo vs SDF'),
        chunk('Revised numbers', 'MSME and Budget questions often use revised thresholds or allocations, so update values before the exam.', 'Revised medium-enterprise limits are investment up to ₹125 crore and turnover up to ₹500 crore.', 'Numeric revision', 'Old vs revised threshold'),
      ], [
        practice('A medium enterprise’s revised investment limit is:', ['₹1 crore', '₹10 crore', '₹25 crore', '₹50 crore', '₹125 crore'], 4, 'Revised limit: ₹125 crore investment and ₹500 crore turnover.'),
        practice('Budget/Economic Survey preparation should focus on:', ['Every annexure', 'Allocations, announcements, trends and rural/economic themes', 'Only tax slabs', 'Only fiscal deficit', 'Only political speeches'], 1, 'NABARD asks numbers and rural/economic policy relevance.'),
      ], commonPyqs),
    ],
  ),
  GA: guide(
    'GA Master Track',
    'GA is 20 marks and mostly current affairs. For NABARD, prioritize banking/finance, schemes, rural economy, reports and institutions before generic trivia.',
    [
      topic('ga-finance', 'Banking + Finance + Institutions', '6–7 Qs', '20–30 sec/question', [
        chunk('Finance current layer', 'A finance term in news becomes a direct question: NAV, AIF, repo, SDF, MSF, NPA, PSL or a regulator’s action.', 'Questions may ask who regulates a market instrument or which institution launched a scheme.', 'Term definition / role match', 'RBI vs SEBI vs NABARD role'),
        chunk('Institution facts', 'Headquarters, establishment year, chairman, mandate and latest report are high-yield.', 'NABARD questions may test whether it is a regulator, commercial bank or apex development bank.', 'HQ/year/role', 'Establishment year vs amendment year'),
      ], [
        practice('Priority Sector Lending is primarily prescribed by:', ['NABARD', 'RBI', 'SEBI', 'IRDAI', 'PFRDA'], 1, 'RBI prescribes PSL categories and targets for banks.'),
        practice('NABARD is best described as:', ['Central bank', 'Securities regulator', 'Apex development bank for agriculture and rural development', 'Insurance company', 'Commercial bank'], 2, 'NABARD is the apex development bank for agriculture and rural development.'),
      ], commonPyqs),
      topic('ga-current', 'Current Affairs + Reports + Schemes', '10–13 Qs', '15–30 sec/question', [
        chunk('Six-month layer', 'Most GA questions come from recent current affairs, but rural/agri/finance items should be kept for 9–10 months.', 'World Milk Day, Gender Gap Index, APEDA exports, IPCC, ASEAN membership and UN conventions appeared in the 2025 analysis.', 'One-line fact / rank / member', 'Date vs theme; host vs member'),
        chunk('Static-current blend', 'A current item often hides a static fact: national park location, institution establishment, panchayat term or largest city.', 'If a national park is in news, revise state, nearby region and related species.', 'Location/static fact', 'Only reading headline without linked static fact'),
      ], [
        practice('World Milk Day is observed on:', ['1 June', '5 June', '16 October', '26 November', '10 December'], 0, 'World Milk Day is observed on 1 June.'),
        practice('A report/index fact is best revised as:', ['Rank only', 'Issuer + theme + India finding + year', 'Only title', 'Only number of pages', 'Only logo'], 1, 'Issuer + theme + India finding is the complete scoring unit.'),
      ], commonPyqs),
    ],
  ),
  Aptitude: guide(
    'Qualifying-Section Safety Track',
    'These sections do not add merit, but every section has a floor. The goal is safe accuracy, not full completion.',
    [
      topic('apt-speed', 'Quant + Reasoning Safety', '40 Qs combined', '40–48 sec/question', [
        chunk('Attempt order', 'Do speed questions before long sets. In Quant: simplification/series/quadratic first, DI second. In Reasoning: singles first, puzzles second.', 'A wrong-number-series question should take 20–30 seconds; a 5-question puzzle can wait for the second pass.', 'Speed set vs set-based', 'Sinking time into one unsolved arrangement'),
        chunk('Formula bank', 'Maintain one formula sheet for percentage, ratio, SI/CI, time-work, speed-distance and DI ratios.', 'DI often uses percentage/ratio rather than heavy calculation.', 'Formula application', 'Solving every DI item fully when estimation works'),
      ], [
        practice('The best first-pass Quant strategy is:', ['Start with DI', 'Start with speed sets, then DI/arithmetic', 'Attempt all arithmetic first', 'Solve only puzzles', 'Skip the section'], 1, 'Quick marks first protects the sectional floor.'),
        practice('A single reasoning set should be skipped initially if it exceeds:', ['20 sec', '45 sec', '75 sec', '3 sec', 'No limit'], 2, 'Around 75 seconds is a practical first-pass ceiling.'),
      ]),
      topic('apt-language', 'English + Computer + Decision Making', '60 Qs combined', '20–35 sec/question', [
        chunk('English rule', 'RC answers must come from the passage. Grammar questions need process of elimination, not intuition only.', 'In error detection, check subject-verb agreement, tense, article and preposition before choosing.', 'Passage/grammar/context', 'Choosing a true statement not supported by the passage'),
        chunk('Computer + DM', 'Computer is one-line static recall. Decision Making rewards practical, ethical, process-compliant action.', 'For an office problem, the best option usually solves the immediate issue without breaking rules.', 'Direct recall / best option', 'Extreme or emotional response options'),
      ], [
        practice('In Decision Making, the safest answer usually:', ['Breaks rules to save time', 'Solves the issue ethically through proper process', 'Ignores stakeholders', 'Delays every decision', 'Chooses the most extreme action'], 1, 'NABARD rewards practical and ethical process-oriented judgement.'),
        practice('Computer questions should generally be answered within:', ['5 sec', '20–25 sec', '75 sec', '2 min', 'No limit'], 1, 'These are mostly one-line recall questions.'),
      ]),
    ],
  ),
  English: guide(
    'Mains English Track',
    'Paper I is a 100-mark descriptive paper. Practice structure and clarity from Phase-I preparation itself.',
    [
      topic('english-essay', 'Essay Framework', 'High-value task', '~30 min/essay', [
        chunk('Structure', 'Use a predictable structure: introduction → context → 2–3 dimensions → challenges → way forward → conclusion.', 'For agrovoltaics, define the concept, link income/land use/climate, discuss constraints, then suggest policy and implementation steps.', 'Policy/development essay', 'Only listing schemes without an argument'),
        chunk('Evidence', 'Use one relevant scheme, institution or field example per body paragraph. Do not force unrelated data.', 'FPOs can support collective bargaining and reduce marketing risk for smallholders.', 'Example-backed answer', 'Generic “very important” paragraphs'),
      ], [
        practice('A strong NABARD essay should prioritize:', ['Long vocabulary', 'Clear structure + relevant evidence + practical way forward', 'Only criticism', 'Only definitions', 'Unlimited length'], 1, 'Structure, evidence and balance score better than ornamentation.'),
      ]),
      topic('english-precis', 'Précis + Drafting', 'High-value task', '~20–30 min/task', [
        chunk('Précis rule', 'Read once for the central claim, once for argument flow, then compress to roughly one-third length in your own words.', 'Remove examples, repetition and side details; retain the author’s logic.', 'Compression task', 'Copying sentences or adding your opinion'),
      ], [
        practice('A précis should normally be about:', ['Same length', 'Two-thirds', 'One-third', 'Twice the passage', 'One sentence only'], 2, 'A standard précis is around one-third of the passage.'),
      ]),
    ],
  ),
  Mains: guide(
    'Mains Answer-Writing Track',
    'Paper II descriptive answers need structure, evidence and a practical way forward—not just facts.',
    [
      topic('mains-framework', 'ESI + ARD Descriptive Framework', '50 marks', '15M: 27 min · 10M: 18 min', [
        chunk('Answer skeleton', 'Use context → dimensions → challenges → way forward → conclusion. For 15 markers, aim 250–350 words; for 10 markers, 180–250 words.', 'For rural credit, cover access, cost, institutions, last-mile gaps, NABARD/RBI role and reforms.', 'Policy-analysis answer', 'Writing only a definition or only a conclusion'),
        chunk('Evidence layer', 'Add one scheme/report/institution where it genuinely supports the point.', 'PMFBY can support a crop-risk answer, but only if you also discuss claim settlement, awareness and implementation gaps.', 'Scheme-linked answer', 'Name-dropping without connecting it'),
      ], [
        practice('A 15-mark answer should usually be:', ['50 words', '100 words', '250–350 words', '800 words', 'Only bullets'], 2, 'A 15-marker needs a full but controlled structure.'),
      ]),
    ],
  ),
  NABARD: guide(
    'NABARD Awareness Track',
    'Prepare institutional depth for ESI/GA and interview. Know what NABARD does, how rural credit flows and why it exists.',
    [
      topic('nabard-core', 'NABARD Functions + Rural Credit', 'High-yield', '30–40 sec/question', [
        chunk('Role clarity', 'NABARD is the apex development bank for agriculture and rural development. RBI is the central bank/regulator; commercial banks lend; NABARD refinances, supervises and supports rural development.', 'RIDF and refinance questions become easy once institution roles are separated.', 'Role match', 'NABARD vs RBI mandate'),
      ], [
        practice('NABARD’s core role is:', ['Monetary policy', 'Apex development bank for agriculture and rural development', 'Securities regulation', 'Insurance underwriting', 'Tax collection'], 1, 'NABARD is the apex development institution for agriculture and rural development.'),
      ], commonPyqs),
    ],
  ),
  Revision: guide(
    'Revision Track',
    'Use the error log to revise the exact misconception, not the whole chapter again.',
    [
      topic('revision-loop', 'Error-Log Revision', 'Score repair', '3-day retest loop', [
        chunk('Revision method', 'For every wrong question, record the missed fact, the reason, the correct rule and the retest date.', 'If you confuse Kharif and Rabi PMFBY premiums, write the paired table and retest it after three days.', 'Error repair', 'Rereading notes without extracting the missed rule'),
      ], [
        practice('An error is “cleared” only when:', ['You read the note once', 'You get it right twice after review', 'You highlight it', 'You copy it again', 'You guess it correctly'], 1, 'Correct retests prove repair; copying alone does not.'),
      ]),
    ],
  ),
  Weekly: guide(
    'Weekly Test Track',
    'Use tests to diagnose, not to feel prepared. Every test must end with a scored topic map.',
    [
      topic('weekly-analysis', 'Mock Analysis', 'Score repair', 'After every test', [
        chunk('Analyze by cause', 'Classify each miss as knowledge gap, reading error, trap, calculation error or time loss.', 'If a scheme question was missed because ministry and agency were swapped, the fix is a scheme-matrix revision.', 'Mock review', 'Only checking total score'),
      ], [
        practice('The most useful output of a mock is:', ['Percentile only', 'A prioritized error map', 'Only rank', 'Only attempt count', 'Only time taken'], 1, 'The error map decides what to study next.'),
      ]),
    ],
  ),
  Mock: guide(
    'Mock Simulation Track',
    'Simulate the merit-section pacing and sectional-cutoff safety before the exam.',
    [
      topic('mock-merit', 'Merit-Section Simulation', '100 marks', '48–50 min first pass', [
        chunk('Pace simulation', 'Run GA + ESI + ARD as a separate 100-question block. Target 65–70 marks and identify questions that consumed more than 60 seconds.', 'GA 8 min, ESI 20 min, ARD 20 min is the target first-pass rhythm.', 'Timed simulation', 'Spending too long on statement questions'),
      ], [
        practice('The recommended first-pass budget for GA + ESI + ARD is about:', ['20 min', '35 min', '48–50 min', '80 min', '120 min'], 2, 'The merit block gets around 48–50 minutes plus review.'),
      ]),
    ],
  ),
  Milestone: guide(
    'Final Reset Track',
    'Close the loop: target, weak areas, exam order, formulas and last current-affairs layer.',
    [
      topic('final-reset', 'Final Exam-Day Plan', 'Target lock', 'Final week', [
        chunk('Exam-order rule', 'Write the order before exam day: merit sections first, then safe qualifying questions, then return to marked items.', 'Do not enter with the plan of “solve in sequence”.', 'Exam strategy', 'Changing order randomly inside the hall'),
      ], [
        practice('The final target for Phase-I merit should be:', ['30/100', '45/100', '54.5 only', '65–70/100', '100/100 only'], 3, '65–70 gives a safer buffer above the last cutoff.'),
      ]),
    ],
  ),
}

export const subjectGuideKey = (subject) => {
  if (subject === 'Weekly' || subject === 'Mock' || subject === 'Milestone' || subject === 'Revision') return subject
  return studyGuides[subject] ? subject : 'Overview'
}
