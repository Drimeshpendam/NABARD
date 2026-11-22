// Loads every .md in the NABARD folder (outside dashboard root — allowed via vite fs.allow)
const raw = import.meta.glob(['../../**/*.md', '!../../dashboard/**'], { query: '?raw', import: 'default', eager: true })

const docs = Object.entries(raw).map(([path, text]) => {
  const rel = path.replace(/^\.\.\/\.\.\//, '')
  const parts = rel.split('/')
  const file = parts[parts.length - 1].replace('.md', '')
  const parent = parts.length > 1 ? parts[parts.length - 2] : ''
  const generic = ['notes', 'index', 'readme'].includes(file.toLowerCase())
  return {
    path: rel,
    folder: parts[0],
    sub: parts.slice(1, -1).join('/'),
    name: (generic && parent ? parent : file).replace(/_/g, ' '),
    text,
  }
}).filter((d) => !d.path.split('/').pop().startsWith('_'))

export const folderLabels = {
  '00_Overview': 'Overview & Plan',
  '01_Phase1_Aptitude': 'Phase 1 — Qualifying Sections',
  '02_Phase1_Merit_ESI_ARD_GA': 'Phase 1 — Merit Sections',
  '03_Mains_English': 'Mains — English Descriptive',
  '04_Mains_ESI_ARD': 'Mains — ESI + ARD',
  '05_PYQs': 'PYQs & Patterns',
  '06_Mocks_and_Practice': 'Mocks & Error Log',
  '07_Interview': 'Interview',
  '08_Resources': 'Resources',
}

const subLabel = (s) => s.split('/').map((p) => p.replace(/_/g, ' ')).join(' › ')

export const docTree = Object.keys(folderLabels)
  .map((folder) => {
    const fdocs = docs.filter((d) => d.folder === folder).sort((a, b) => a.path.localeCompare(b.path))
    const subs = [...new Set(fdocs.map((d) => d.sub))].sort((a, b) => (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b)))
    return {
      folder,
      label: folderLabels[folder],
      docs: fdocs,
      groups: subs.map((s) => ({ sub: s, label: s ? subLabel(s) : '', docs: fdocs.filter((d) => d.sub === s) })),
    }
  })
  .filter((g) => g.docs.length > 0)

export const allDocs = docs
export const getDoc = (path) => docs.find((d) => d.path === path)
