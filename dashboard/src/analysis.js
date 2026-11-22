export const researchSources = [
  'C4S 5-year ARD classification: ~190 questions, 2020–2024',
  'Oliveboard ESI cluster analysis: 230 observed questions, 2021–2025',
  'EduTap year-wise ESI/GA weightage and NABARD current-affairs analysis',
  '2025/2024 memory-based papers and exam analyses from C4S, Oliveboard, Adda247, PracticeMock',
  'NABARD official exam pattern and cut-offs; topic counts are memory-based, not official predictions',
]

export const timePlan = [
  { section: 'GA', questions: 20, budget: '7–8 min', avg: '20–24 sec/Q', skip: '>40 sec' },
  { section: 'ESI', questions: 40, budget: '18–20 min', avg: '27–30 sec/Q', skip: '>50 sec' },
  { section: 'ARD', questions: 40, budget: '18–20 min', avg: '27–30 sec/Q', skip: '>50 sec' },
  { section: 'Reasoning', questions: 20, budget: '13–15 min', avg: '40–45 sec/Q', skip: '>75 sec' },
  { section: 'English', questions: 30, budget: '15–17 min', avg: '30–35 sec/Q', skip: '>60 sec' },
  { section: 'Computer', questions: 20, budget: '7–8 min', avg: '20–24 sec/Q', skip: '>35 sec' },
  { section: 'Quant', questions: 20, budget: '14–16 min', avg: '42–48 sec/Q', skip: '>75 sec' },
  { section: 'Decision Making', questions: 10, budget: '5–6 min', avg: '30–36 sec/Q', skip: '>60 sec' },
]

export const formatTargets = [
  { format: 'Direct factual question', example: 'KCC introduced in 1998', target: '20–25 sec' },
  { format: 'Scheme feature / ministry / beneficiary match', example: 'PMFBY premium or implementing ministry', target: '30–40 sec' },
  { format: 'Statement combination', example: 'Which of (i), (ii), (iii) is correct?', target: '40–50 sec' },
  { format: 'Order, rank, or threshold', example: 'Production order / wage-material ratio / seed chain', target: '45–60 sec' },
  { format: 'Numerical or data question', example: 'GDP, premium %, MSME limit, crop estimate', target: '60–75 sec' },
]

export const ardTopics = [
  {
    name: 'ARD Current Affairs & Schemes', expected: '8–10 Qs', share: '24.2%', priority: 'Very high', seconds: '25–35s',
    styles: ['scheme mapping', 'numeric trigger', 'latest update'],
    examples: ['KCC introduced in 1998', 'PMFBY mid-season adversity <50% normal yield', 'Budget-linked rural missions'],
    traps: ['launch vs approval year', 'ministry vs implementing agency', 'premium % vs subsidy %'],
    checklist: [
      { id: 'ard-ca-schemes', label: 'Scheme → ministry → launch/update → component → beneficiary', ask: 'match/list question' },
      { id: 'ard-ca-pmfby', label: 'PMFBY premium rates, mid-season trigger, prevented sowing, threshold yield', ask: 'numeric fact' },
      { id: 'ard-ca-budget', label: 'Budget/Economic Survey agriculture missions, funds and targets', ask: 'year/value question' },
      { id: 'ard-ca-nabard', label: 'NABARD reports, refinance, funds, subsidiaries and initiatives', ask: 'institutional fact' },
      { id: 'ard-ca-data', label: 'Advance estimates, MSP, production leaders, livestock census', ask: 'rank/order/value' },
    ],
  },
  {
    name: 'Soil & Water Conservation', expected: '4–6 Qs', share: '12.1%', priority: 'Very high', seconds: '25–35s',
    styles: ['direct concept', 'cause-effect', 'classification'],
    examples: ['Alluvial soil covers maximum area', 'Contour farming checks runoff', 'Calcium supports membrane/cell-wall structure'],
    traps: ['soil order vs crop suitability', 'erosion type vs control measure', 'nutrient function swaps'],
    checklist: [
      { id: 'ard-soil-types', label: 'Major soils, regions, texture and area coverage', ask: 'direct/static fact' },
      { id: 'ard-soil-erosion', label: 'Sheet, rill, gully and wind erosion + conservation methods', ask: 'cause/method match' },
      { id: 'ard-soil-nutrients', label: 'NPK + Ca/Mg/S functions and deficiency symptoms', ask: 'statement combo' },
      { id: 'ard-soil-watershed', label: 'Watershed, bunding, contouring, strip cropping', ask: 'definition → practice' },
      { id: 'ard-soil-problem', label: 'Saline, alkaline, acidic and degraded soils', ask: 'classification' },
    ],
  },
  {
    name: 'Animal Husbandry & Poultry', expected: '3–5 Qs', share: '11.1%', priority: 'Very high', seconds: '25–35s',
    styles: ['breed/state', 'term definition', 'numeric physiology'],
    examples: ['Murrah is the highest milk-yielding buffalo breed', 'Goat is caprine, not bovine', 'Egg production peaks around 32–35 weeks'],
    traps: ['cattle vs buffalo vs caprine terms', 'viral vs bacterial disease', 'lactation vs yield leader'],
    checklist: [
      { id: 'ard-ah-breeds', label: 'Cattle, buffalo, goat, sheep and poultry breeds + native tracts', ask: 'breed → state/utility' },
      { id: 'ard-ah-terms', label: 'Bovine, caprine, weaning, brooding, candling, wallowing', ask: 'one-term definition' },
      { id: 'ard-ah-nutrition', label: 'Feeds, fodders, concentrates, roughages and mineral mixture', ask: 'classification' },
      { id: 'ard-ah-disease', label: 'FMD, cowpox, lumpy skin and common livestock diseases', ask: 'agent type match' },
      { id: 'ard-ah-poultry', label: 'Incubation, egg curve, layer vs broiler and poultry management', ask: 'numeric/static fact' },
    ],
  },
  {
    name: 'Plantation & Horticulture', expected: '3–5 Qs', share: '10.0%', priority: 'Very high', seconds: '25–35s',
    styles: ['system identification', 'scientific name', 'production order'],
    examples: ['Quincunx has a centre tree in each square', 'Vegetables lead horticulture output', 'MIDH supports horticulture infrastructure'],
    traps: ['square vs rectangular vs quincunx', 'crop family swaps', 'production order changes yearly'],
    checklist: [
      { id: 'ard-hort-systems', label: 'Square, rectangular, hexagonal, contour and quincunx systems', ask: 'layout identification' },
      { id: 'ard-hort-names', label: 'Scientific names/families of major fruits and vegetables', ask: 'direct static fact' },
      { id: 'ard-hort-production', label: 'Latest horticulture advance estimates and top states', ask: 'order/rank' },
      { id: 'ard-hort-schemes', label: 'MIDH, PMKSY, cold storage and post-harvest assistance', ask: 'scheme feature' },
      { id: 'ard-hort-physiology', label: 'Seedlessness, ripening, flowering and propagation', ask: 'concept application' },
    ],
  },
  {
    name: 'Agronomy & Field Crops', expected: '3–5 Qs', share: '~10%', priority: 'High', seconds: '25–40s',
    styles: ['botanical name', 'cropping system', 'seed chain'],
    examples: ['Barley = Hordeum vulgare', 'Nucleus → breeder → foundation → certified seed', 'Aquatic weeds classified by rooting position'],
    traps: ['near botanical names', 'mixed vs intercropping', 'seed certification tag colours'],
    checklist: [
      { id: 'ard-agro-botany', label: 'Scientific names and families of cereals, pulses, oilseeds, fibre crops', ask: 'direct static fact' },
      { id: 'ard-agro-systems', label: 'Mono, inter, mixed, sequence, relay and multistoried cropping', ask: 'definition/application' },
      { id: 'ard-agro-seed', label: 'Seed chain, certification tags, replacement ratio and germination', ask: 'sequence/numeric' },
      { id: 'ard-agro-weeds', label: 'Aquatic, parasitic and field weed classification + control', ask: 'classification' },
      { id: 'ard-agro-nutrients', label: 'Fertilizer schedules, deficiency and nutrient-management practices', ask: 'statement combo' },
    ],
  },
  {
    name: 'Agri Economics & Marketing', expected: '2–4 Qs', share: '~8%', priority: 'High', seconds: '30–45s',
    styles: ['concept definition', 'linkage', 'institution/scheme'],
    examples: ['Break-even = total revenue equals total cost', 'Input supply is backward linkage', 'eNAM is an electronic trading platform'],
    traps: ['marketed surplus vs marketable surplus', 'cooperative benefit reversed', 'forward vs backward linkage'],
    checklist: [
      { id: 'ard-econ-cost', label: 'Fixed/variable cost, break-even, BCR, gross and net returns', ask: 'definition/numerical' },
      { id: 'ard-econ-markets', label: 'APMC, regulated markets, eNAM, grading and market intelligence', ask: 'function match' },
      { id: 'ard-econ-fpo', label: 'FPOs, cooperatives, contract farming and collective bargaining', ask: 'benefit/odd one out' },
      { id: 'ard-econ-value', label: 'Backward/forward linkage, value chain and agribusiness terms', ask: 'concept application' },
    ],
  },
  {
    name: 'Rural Development & Institutions', expected: '2–4 Qs', share: '~7%', priority: 'Very high', seconds: '30–40s',
    styles: ['scheme guideline', 'institution role', 'ratio/threshold'],
    examples: ['MGNREGA district wage-material ratio 60:40', 'PMAY-G eligibility rules', 'Panchayat and cooperative institutions'],
    traps: ['guarantee per household vs person', 'wage vs material share', 'central vs state role'],
    checklist: [
      { id: 'ard-rd-mgnrega', label: 'MGNREGA 100 days, wage-material ratio, works and entitlement', ask: 'numeric guideline' },
      { id: 'ard-rd-housing', label: 'PMAY-G, rural housing, sanitation and drinking-water missions', ask: 'scheme feature' },
      { id: 'ard-rd-institutions', label: 'Panchayats, PACS, DCCBs, SHGs, JLGs and KVKs', ask: 'level/function match' },
      { id: 'ard-rd-livelihood', label: 'NRLM, rural enterprise, skill and livelihood missions', ask: 'beneficiary/component' },
    ],
  },
  {
    name: 'Irrigation & Water Resource', expected: '2–3 Qs', share: '~6%', priority: 'High', seconds: '30–40s',
    styles: ['method match', 'term definition', 'efficiency fact'],
    examples: ['Surge irrigation modifies furrow irrigation', 'Drip and sprinkler improve water-use efficiency', 'Evapotranspiration combines evaporation + transpiration'],
    traps: ['drip vs sprinkler use', 'ET vs percolation', 'basin/border/furrow method'],
    checklist: [
      { id: 'ard-water-methods', label: 'Basin, border, furrow, drip, sprinkler and surge irrigation', ask: 'method identification' },
      { id: 'ard-water-terms', label: 'Evapotranspiration, consumptive use, field capacity and efficiency', ask: 'term definition' },
      { id: 'ard-water-micro', label: 'Micro-irrigation benefits, components and subsidy schemes', ask: 'scheme/concept link' },
      { id: 'ard-water-conservation', label: 'Watershed, rainwater harvesting and groundwater basics', ask: 'practice match' },
    ],
  },
  {
    name: 'Remaining ARD Static Cluster', expected: '4–6 Qs combined', share: '~12%', priority: 'Medium–high', seconds: '25–40s',
    styles: ['one-off static fact', 'classification', 'policy year'],
    examples: ['National Forest Policy 1988', 'KVK and extension questions', 'Farm machinery or meteorology one-marker'],
    traps: ['policy vs Act year', 'fishery terms', 'extension agency vs research body'],
    checklist: [
      { id: 'ard-rest-fisheries', label: 'Fisheries, aquaculture, PMMSY and fish-production facts', ask: 'direct/static + scheme' },
      { id: 'ard-rest-forestry', label: 'Forest policy, agroforestry, social forestry and ISFR', ask: 'policy/year/function' },
      { id: 'ard-rest-engineering', label: 'Farm machinery, primary/secondary tillage and post-harvest equipment', ask: 'tool/function match' },
      { id: 'ard-rest-extension', label: 'KVK, ATMA, extension methods and farmer education', ask: 'institution/function' },
      { id: 'ard-rest-weather', label: 'Meteorology, agro-climatic zones, climate and weather instruments', ask: 'zone/instrument' },
      { id: 'ard-rest-ecology', label: 'Ecology, climate change, emissions and sustainable agriculture', ask: 'concept/current link' },
    ],
  },
]

export const esiTopics = [
  {
    name: 'Financial Inclusion, Banking & Rural Credit', expected: '8–9 Qs', share: '20.4%', priority: 'P1', seconds: '30–40s',
    styles: ['scheme threshold', 'institution role', 'static × current finance'],
    examples: ['KCC introduced in 1998', 'Short-term crop loan interest subvention up to ₹5 lakh', 'RIDF created from PSL shortfall'],
    traps: ['RBI vs NABARD role', 'loan limit updates', 'insurance vs pension scheme'],
    checklist: [
      { id: 'esi-fin-kcc', label: 'KCC year, committee, limit, interest subvention and allied coverage', ask: 'year/numeric' },
      { id: 'esi-fin-psl', label: 'PSL categories, targets, RIDF and rural credit channels', ask: 'static + current' },
      { id: 'esi-fin-institutions', label: 'NABARD, RBI, cooperatives, RRBs, SFBs, MFIs', ask: 'role match' },
      { id: 'esi-fin-shg', label: 'SHG-bank linkage, JLG, NRLM and microfinance models', ask: 'institution/component' },
      { id: 'esi-fin-digital', label: 'DBT, UPI, Jan Dhan, BharatNet and digital public infrastructure', ask: 'scheme/current fact' },
    ],
  },
  {
    name: 'Education, Health, Gender & Demography', expected: '6–7 Qs', share: '17.0%', priority: 'P1', seconds: '30–40s',
    styles: ['scheme feature', 'report/index', 'social-sector static'],
    examples: ['Mission Vatsalya components', 'Gender Gap Index rank', 'NEP/education platform questions'],
    traps: ['scheme vs ministry', 'rank vs score', 'coverage vs eligibility'],
    checklist: [
      { id: 'esi-social-edu', label: 'Education schemes, NEP, DIKSHA/Samagra and literacy initiatives', ask: 'scheme → agency/component' },
      { id: 'esi-social-health', label: 'Health schemes, nutrition, insurance and child welfare', ask: 'component/odd one out' },
      { id: 'esi-social-gender', label: 'Gender indices, women-led development and empowerment schemes', ask: 'report/rank/scheme' },
      { id: 'esi-social-demo', label: 'Demography, dependency ratio, migration and urbanization', ask: 'concept/current data' },
    ],
  },
  {
    name: 'Agriculture Economy, Food Security & Rural Development', expected: '6–7 Qs', share: '17.0%', priority: 'P1', seconds: '30–40s',
    styles: ['policy target', 'scheme architecture', 'rural institution'],
    examples: ['Rural Prosperity and Resilience Programme', 'MGNREGA and rural housing questions', 'Agriculture/rural development PIB releases'],
    traps: ['ARD scheme repeated inside ESI', 'programme target group', 'PDS vs food-security terms'],
    checklist: [
      { id: 'esi-agri-economy', label: 'Agri GDP/share, allied sectors, farmer income and rural economy data', ask: 'dynamic/current fact' },
      { id: 'esi-agri-food', label: 'Food security, PDS, buffer stocks and nutrition missions', ask: 'scheme/concept' },
      { id: 'esi-agri-rd', label: 'Rural development missions, livelihoods, housing and roads', ask: 'scheme feature' },
      { id: 'esi-agri-policy', label: 'Agriculture missions, Budget announcements and resilience programmes', ask: 'target/beneficiary' },
    ],
  },
  {
    name: 'Poverty, Employment, Livelihoods & Social Protection', expected: '5–6 Qs', share: '13.9%', priority: 'P1', seconds: '30–40s',
    styles: ['measurement concept', 'scheme component', 'PLFS/labour data'],
    examples: ['PM-SYM eligibility', 'MGNREGA/employment guarantee', 'poverty or multidimensional index'],
    traps: ['unemployment types', 'household vs individual benefit', 'labour-force terms'],
    checklist: [
      { id: 'esi-poverty-measure', label: 'Poverty lines, multidimensional poverty, inequality and HDI', ask: 'concept/index' },
      { id: 'esi-employment-data', label: 'PLFS, labour-force participation and unemployment measures', ask: 'definition/data' },
      { id: 'esi-social-security', label: 'PM-SYM, APY, insurance, pensions and worker welfare', ask: 'eligibility/feature' },
      { id: 'esi-livelihood', label: 'MGNREGA, NRLM, skilling and rural/urban livelihoods', ask: 'scheme component' },
    ],
  },
  {
    name: 'Governance, Rights, Institutions & Social Justice', expected: '4 Qs', share: '10.4%', priority: 'P2', seconds: '35–45s',
    styles: ['constitutional provision', 'institution role', 'rights/scheme component'],
    examples: ['Panchayat term question', 'Mission Vatsalya non-institutional care', 'land-record/governance updates'],
    traps: ['Article/schedule confusion', 'rights body vs ministry', 'component list'],
    checklist: [
      { id: 'esi-gov-panchayat', label: 'Panchayati Raj, Gram Sabha, local governance and devolution', ask: 'term/function' },
      { id: 'esi-gov-rights', label: 'Constitutional rights, SC/ST/OBC/minority institutions', ask: 'provision/body' },
      { id: 'esi-gov-child', label: 'Mission Vatsalya, child protection and vulnerable-group schemes', ask: 'component list' },
      { id: 'esi-gov-records', label: 'Land records, digital governance and rural administration', ask: 'programme/current fact' },
    ],
  },
  {
    name: 'MSME, Industry, Infrastructure & Entrepreneurship', expected: '3–4 Qs', share: '9.1%', priority: 'P2', seconds: '35–45s',
    styles: ['revised threshold', 'scheme component', 'park/corridor fact'],
    examples: ['Revised medium-enterprise MSME investment limit', 'PM MITRA park states', 'PM Vishwakarma/RAMP-type schemes'],
    traps: ['old vs revised MSME limit', 'sector vs scheme', 'agency vs programme'],
    checklist: [
      { id: 'esi-msme-limits', label: 'MSME micro/small/medium investment and turnover thresholds', ask: 'numeric revision' },
      { id: 'esi-msme-schemes', label: 'PMEGP, RAMP, PM Vishwakarma and entrepreneurship schemes', ask: 'feature/component' },
      { id: 'esi-infra-parks', label: 'PM MITRA, industrial corridors, logistics and infrastructure missions', ask: 'location/feature' },
      { id: 'esi-startup', label: 'Startups, VC funds, innovation and incubation initiatives', ask: 'budget/current fact' },
    ],
  },
  {
    name: 'Macro Economy, Budget & Public Finance', expected: '3–4 Qs', share: '8.7%', priority: 'P3', seconds: '35–60s',
    styles: ['Budget number', 'policy rate/ratio', 'concept combo'],
    examples: ['Budget fund allocations', 'Bank rate/MSF/repo relationships', 'fiscal deficit or inflation terms'],
    traps: ['rate set changes', 'GDP vs GVA', 'fiscal vs primary deficit'],
    checklist: [
      { id: 'esi-macro-budget', label: 'Union Budget allocations, announcements and scheme launches', ask: 'amount/target' },
      { id: 'esi-macro-survey', label: 'Economic Survey growth, inflation, employment and rural trends', ask: 'data/interpretation' },
      { id: 'esi-macro-monetary', label: 'Repo, reverse repo, SDF, MSF, CRR, SLR and OMO', ask: 'rate/relation/function' },
      { id: 'esi-macro-fiscal', label: 'GDP/GVA, inflation, fiscal deficit, tax and expenditure', ask: 'concept/numeric' },
    ],
  },
  {
    name: 'Trade, Globalisation & International Institutions', expected: '1–2 Qs', share: '3.5%', priority: 'P3', seconds: '30–45s',
    styles: ['institution HQ/member', 'export agency', 'agreement/current event'],
    examples: ['APEDA export question', 'ASEAN new member', 'UN convention/member questions'],
    traps: ['member vs observer', 'agency mandate', 'year/country swap'],
    checklist: [
      { id: 'esi-global-orgs', label: 'UN bodies, ASEAN, IMF, World Bank, WTO and development banks', ask: 'HQ/member/function' },
      { id: 'esi-global-trade', label: 'APEDA, agri exports, trade agreements and export targets', ask: 'agency/current fact' },
      { id: 'esi-global-sdg', label: 'SDGs, UN conventions, climate and development commitments', ask: 'theme/year/member' },
    ],
  },
]

export const gaTopics = [
  {
    name: 'Banking & Financial News', expected: '6–7 Qs', share: '30–35%', priority: 'Very high', seconds: '20–30s',
    styles: ['rate/tool', 'financial term', 'regulator/news'],
    examples: ['NAV/AIF/banking term', 'RBI scheme or policy action', 'financial institution in news'],
    traps: ['RBI vs SEBI/NABARD mandate', 'rate vs instrument', 'scheme ownership'],
    checklist: [
      { id: 'ga-bank-rbi', label: 'RBI policy, schemes, reports, penalties and institutional news', ask: 'current + static' },
      { id: 'ga-bank-terms', label: 'NAV, AIF, repo/SDF/MSF, PSL, NPA and payment terms', ask: 'term definition' },
      { id: 'ga-bank-regulators', label: 'RBI, NABARD, SEBI, IRDAI, PFRDA and other regulators', ask: 'role match' },
      { id: 'ga-bank-news', label: 'Banks, mergers, indices, financial reports and appointments', ask: 'current fact' },
    ],
  },
  {
    name: 'Schemes: Rural, Agri & Financial Inclusion', expected: '4 Qs', share: '20%', priority: 'Very high', seconds: '20–30s',
    styles: ['scheme → ministry/feature', 'beneficiary', 'launch/update'],
    examples: ['Rural development scheme', 'agriculture scheme in news', 'financial-inclusion programme'],
    traps: ['ministry swap', 'scheme target group', 'old vs new component'],
    checklist: [
      { id: 'ga-schemes-rural', label: 'Rural employment, housing, livelihood and infrastructure schemes', ask: 'feature/beneficiary' },
      { id: 'ga-schemes-agri', label: 'Agriculture schemes, missions and PM announcements', ask: 'ministry/component' },
      { id: 'ga-schemes-fin', label: 'Jan Dhan, insurance, pension, credit and DBT initiatives', ask: 'scheme feature' },
      { id: 'ga-schemes-social', label: 'Health, education, women, child and social-security schemes', ask: 'component/target' },
    ],
  },
  {
    name: 'National + Static GA', expected: '4–5 Qs', share: '20–25%', priority: 'High', seconds: '20–30s',
    styles: ['place/person/institution', 'polity', 'national fact'],
    examples: ['Bandhavgarh National Park location', 'highest-population city', 'panchayat term'],
    traps: ['state vs district', 'HQ vs establishment year', 'city vs country'],
    checklist: [
      { id: 'ga-static-geo', label: 'National parks, rivers, cities, states, crops and geography in news', ask: 'location fact' },
      { id: 'ga-static-polity', label: 'Constitutional bodies, local government, terms and appointments', ask: 'term/office' },
      { id: 'ga-static-institutions', label: 'HQ, establishment year and roles of major institutions', ask: 'HQ/year/function' },
      { id: 'ga-static-national', label: 'Major national events, committees, missions and ministries', ask: 'person/committee/fact' },
    ],
  },
  {
    name: 'Reports, Indices, Environment & International', expected: '2–3 Qs', share: '10–15%', priority: 'High', seconds: '20–30s',
    styles: ['rank/report', 'member/country', 'convention/theme'],
    examples: ['Gender Gap Index rank', 'Bangladesh joined UN Water Convention', 'IUCN Congress location'],
    traps: ['rank vs index name', 'host vs member', 'publisher mix-up'],
    checklist: [
      { id: 'ga-report-ranks', label: 'Development, gender, poverty, climate and competitiveness indices', ask: 'rank + issuer' },
      { id: 'ga-report-un', label: 'UN conventions, agencies, donor reports and SDG events', ask: 'member/theme' },
      { id: 'ga-report-env', label: 'Environment, conservation, climate and biodiversity updates', ask: 'place/event/fact' },
      { id: 'ga-report-international', label: 'International groupings, new members, summits and agreements', ask: 'member/host/year' },
    ],
  },
  {
    name: 'Sports, Awards, Books, Persons & Days', expected: '4–5 Qs', share: '20–25%', priority: 'Medium–high', seconds: '15–25s',
    styles: ['one-line recall', 'person/award', 'date/theme'],
    examples: ['World Milk Day', 'sports ambassador', 'book and author'],
    traps: ['date vs theme', 'winner vs host', 'author vs title'],
    checklist: [
      { id: 'ga-culture-days', label: 'Important days, themes and observances', ask: 'date/theme' },
      { id: 'ga-culture-awards', label: 'Awards, honours, appointments and obituaries', ask: 'person/field' },
      { id: 'ga-culture-sports', label: 'Tournaments, ambassadors, hosts and winners', ask: 'person/place/year' },
      { id: 'ga-culture-books', label: 'Books, authors and major cultural events', ask: 'title/author' },
      { id: 'ga-culture-persons', label: 'Persons in news linked to economy, institutions and governance', ask: 'person/role' },
    ],
  },
  {
    name: 'Science, Defence & Technology', expected: '1–2 Qs', share: '5–10%', priority: 'Medium', seconds: '20–30s',
    styles: ['institution/event', 'exercise', 'space/tech update'],
    examples: ['ISRO established in 1969', 'Ajeya Warrior exercise', 'Gati Shakti Vishwavidyalaya MoU'],
    traps: ['agency vs institution', 'exercise partner', 'establishment year'],
    checklist: [
      { id: 'ga-sci-space', label: 'ISRO, space missions and science institutions', ask: 'year/mission/agency' },
      { id: 'ga-sci-defence', label: 'Defence exercises, partners and locations', ask: 'exercise/country' },
      { id: 'ga-sci-tech', label: 'AI, digital infrastructure, cyber and technology MoUs', ask: 'institution/project' },
    ],
  },
]

export const qualifyingTopics = [
  {
    name: 'Reasoning', expected: '20 Qs', priority: 'Qualifying', seconds: '40–45s',
    styles: ['2 puzzle sets + singles'], examples: ['Double-row seating 5Q', 'box puzzle 5Q', 'syllogism 3Q'],
    traps: ['do not sink 3+ minutes into one set'],
    checklist: [
      { id: 'q-reason-puzzle', label: 'Seating, box, floor, scheduling and attribute puzzles', ask: 'set of 4–5 Qs' },
      { id: 'q-reason-singles', label: 'Syllogism, inequality, direction, ranking, blood relation', ask: 'one-line logic' },
      { id: 'q-reason-series', label: 'Alphanumeric series, coding and data sufficiency', ask: 'speed question' },
    ],
  },
  {
    name: 'English Language', expected: '30 Qs', priority: 'Qualifying', seconds: '30–35s',
    styles: ['RC + grammar + vocabulary'], examples: ['RC 5–6Q', 'error detection 4–5Q', 'sentence rearrangement 4–5Q'],
    traps: ['answer from passage, not outside knowledge'],
    checklist: [
      { id: 'q-eng-rc', label: 'Reading comprehension and inference', ask: 'passage-based' },
      { id: 'q-eng-error', label: 'Error detection and sentence improvement', ask: 'grammar rule' },
      { id: 'q-eng-vocab', label: 'Fillers, cloze test and vocabulary in context', ask: 'context choice' },
      { id: 'q-eng-order', label: 'Para jumbles and sentence rearrangement', ask: 'sequence logic' },
    ],
  },
  {
    name: 'Computer Knowledge', expected: '20 Qs', priority: 'Qualifying', seconds: '20–25s',
    styles: ['one-line static facts'], examples: ['OS/MS Office', 'internet/security', 'digital payment basics'],
    traps: ['shortcut/function key swaps'],
    checklist: [
      { id: 'q-com-basics', label: 'Hardware, software, OS, files and shortcuts', ask: 'direct fact' },
      { id: 'q-com-office', label: 'Word, Excel, PowerPoint terms and functions', ask: 'function match' },
      { id: 'q-com-net', label: 'Internet, email, network and cloud basics', ask: 'term definition' },
      { id: 'q-com-security', label: 'Cybersecurity, phishing, OTP, digital payments', ask: 'threat/control match' },
    ],
  },
  {
    name: 'Quantitative Aptitude', expected: '20 Qs', priority: 'Qualifying', seconds: '42–48s',
    styles: ['DI + arithmetic + speed sets'], examples: ['line/table DI 4–5Q', 'wrong series 3Q', 'quadratic 3Q'],
    traps: ['attempt speed sets before long DI'],
    checklist: [
      { id: 'q-quant-speed', label: 'Simplification, approximation and number series', ask: 'speed calculation' },
      { id: 'q-quant-compare', label: 'Quadratic comparison and inequalities', ask: 'quick relation' },
      { id: 'q-quant-di', label: 'Table, line, bar, pie and caselet DI', ask: 'data extraction + calculation' },
      { id: 'q-quant-arith', label: 'Percentage, ratio, SI/CI, time-work, speed-distance', ask: 'formula application' },
    ],
  },
  {
    name: 'Decision Making', expected: '10 Qs', priority: 'Qualifying', seconds: '30–36s',
    styles: ['situational judgement'], examples: ['non-program decision', 'job description/specification', 'hedging/creative decision'],
    traps: ['extreme or emotional options are usually wrong'],
    checklist: [
      { id: 'q-dm-situation', label: 'Choose practical, ethical and process-compliant action', ask: 'best option' },
      { id: 'q-dm-management', label: 'Planning, delegation, motivation and control basics', ask: 'management concept' },
      { id: 'q-dm-risk', label: 'Hedging, contingency and non-programmed decisions', ask: 'term/application' },
    ],
  },
]

export const mainsTopics = [
  {
    name: 'General English Descriptive', expected: '3 tasks · 100 marks', priority: 'Final merit', seconds: '30 min/task',
    styles: ['essay', 'précis', 'report/letter'], examples: ['agrovoltaics/startups-style essay'],
    traps: ['unsupported opinion and poor structure'],
    checklist: [
      { id: 'm-eng-essay', label: 'Write structured rural-development essays with examples', ask: 'essay' },
      { id: 'm-eng-precis', label: 'Compress passage to one-third with neutral title', ask: 'précis' },
      { id: 'm-eng-draft', label: 'Formal report/letter with clear purpose and format', ask: 'drafting' },
    ],
  },
  {
    name: 'ESI + ARD Objective', expected: '30 Qs · 50 marks · 30 min', priority: 'Final merit', seconds: '60s/question',
    styles: ['deeper current + scheme + concept'], examples: ['PACS computerisation, NABARD reports, rural policy'],
    traps: ['same topic can be asked at deeper operational level'],
    checklist: [
      { id: 'm-obj-schemes', label: 'Deep scheme architecture and implementation details', ask: 'objective detail' },
      { id: 'm-obj-ard', label: 'ARD static + current integrated questions', ask: 'objective concept' },
      { id: 'm-obj-esi', label: 'ESI reports, economy and social-sector questions', ask: 'objective concept' },
    ],
  },
  {
    name: 'ESI + ARD Descriptive', expected: '4 answers · 50 marks · 90 min', priority: 'Final merit', seconds: '15-mark: ~27 min · 10-mark: ~18 min',
    styles: ['15-mark × 2', '10-mark × 2'], examples: ['scheme evaluation + way forward'],
    traps: ['generic answer with no institution/example'],
    checklist: [
      { id: 'm-desc-15', label: 'Write 250–350 word policy-analysis answers', ask: '2 × 15 marks' },
      { id: 'm-desc-10', label: 'Write 180–250 word direct answers', ask: '2 × 10 marks' },
      { id: 'm-desc-structure', label: 'Use context → dimensions → challenges → way forward', ask: 'answer framework' },
    ],
  },
]

export const interviewTopics = [
  {
    name: 'NABARD + Agriculture Interview', expected: '50 marks', priority: 'Final merit', seconds: '2–3 min/answer',
    styles: ['profile + institution + opinion'], examples: ['Why NABARD? How does refinance help farmers?'],
    traps: ['memorised answers without field-level understanding'],
    checklist: [
      { id: 'i-nabard-role', label: 'NABARD history, ownership, functions, subsidiaries and reports', ask: 'institutional question' },
      { id: 'i-agri-opinion', label: 'Agriculture/rural-development opinion with balanced view', ask: 'opinion question' },
      { id: 'i-profile', label: 'B.Sc. Agriculture projects, field exposure and career motivation', ask: 'profile question' },
      { id: 'i-current', label: 'Latest Budget, schemes, rural finance and NABARD developments', ask: 'current-affairs question' },
    ],
  },
]
