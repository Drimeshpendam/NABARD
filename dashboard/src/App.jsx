import React, { useMemo, useState } from 'react'
import { marked } from 'marked'
import { docTree, getDoc } from './content.js'
import { backRevision, checkpoints, days, meritSections, notesForSubject, qualifyingSections, rotationFor, subjectColors } from './plan.js'
import { mains, phase1 } from './patterns.js'
import { papers, staleState } from './progress.js'
import { practiceLinks } from './links.js'
import { quizzes } from './quiz.js'

const LS_DONE = 'nabard-done-v1'
const LS_PROGRESS = 'nabard-progress-v1'
const LS_QUIZ = 'nabard-quiz-v1'

const todayISO = () => new Date().toISOString().slice(0, 10)
const fmtDate = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
const pctColor = (pct) => pct >= 75 ? '#3ddc84' : pct >= 40 ? '#f8ae00' : '#fb7185'
const readJSON = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}
const saveJSON = (key, value) => localStorage.setItem(key, JSON.stringify(value))

function NavButton({ active, children, onClick }) {
  return <button className={`nav-btn ${active ? 'active' : ''}`} onClick={onClick}>{children}</button>
}

function Sidebar({ view, setView, docs, progress }) {
  const [search, setSearch] = useState('')
  const term = search.trim().toLowerCase()
  const filtered = term
    ? docTree.map((group) => ({
        ...group,
        docs: group.docs.filter((doc) => `${doc.name} ${doc.path}`.toLowerCase().includes(term)),
      })).filter((group) => group.docs.length)
    : docTree

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">N</div>
        <div>
          <div className="brand-title">NABARD Grade A</div>
          <div className="brand-sub">RDBS General Workspace</div>
        </div>
      </div>

      <nav className="nav-stack">
        <NavButton active={view.type === 'home'} onClick={() => setView({ type: 'home' })}>Today / Home</NavButton>
        <NavButton active={view.type === 'plan'} onClick={() => setView({ type: 'plan' })}>42-Day Study Plan</NavButton>
        <NavButton active={view.type === 'patterns'} onClick={() => setView({ type: 'patterns' })}>Exam Pattern</NavButton>
        <NavButton active={view.type === 'targets'} onClick={() => setView({ type: 'targets' })}>Score Targets</NavButton>
        <NavButton active={view.type === 'quiz'} onClick={() => setView({ type: 'quiz' })}>Take a Test</NavButton>
        <NavButton active={view.type === 'progress'} onClick={() => setView({ type: 'progress' })}>Progress Board</NavButton>
        <NavButton active={view.type === 'links'} onClick={() => setView({ type: 'links' })}>Official Sources</NavButton>
      </nav>

      <div className="sidebar-section">
        <div className="sidebar-label">Quick progress</div>
        {papers.map((paper) => (
          <div className="mini-progress" key={paper.id}>
            <span>{paper.name.replace('Phase I — ', 'P1 ').replace('Phase II — ', 'P2 ')}</span>
            <b>{progress[paper.id]}%</b>
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Search notes</div>
        <input className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find ARD, ESI, pattern..." />
      </div>

      <div className="doc-menu">
        {filtered.map((group) => (
          <details key={group.folder} open={!!term || view.type === 'doc'}>
            <summary>{group.label}</summary>
            {group.docs.map((doc) => (
              <button
                key={doc.path}
                className={`doc-link ${view.type === 'doc' && view.path === doc.path ? 'active' : ''}`}
                onClick={() => setView({ type: 'doc', path: doc.path })}
              >
                {doc.name}
              </button>
            ))}
          </details>
        ))}
      </div>
    </aside>
  )
}

function StatCard({ label, value, note, tone }) {
  return (
    <div className={`stat-card ${tone || ''}`}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {note && <div className="stat-note">{note}</div>}
    </div>
  )
}

function MeritMeter() {
  return (
    <div className="card merit-card">
      <div className="card-kicker">Phase I merit formula</div>
      <h2>GA + ESI + ARD = 100</h2>
      <div className="merit-row">
        {meritSections.map((item) => <span key={item.name}><b>{item.name}</b>{item.marks}</span>)}
      </div>
      <p>
        These are the only marks that decide the Mains shortlist. Reasoning, English, Computer,
        Quant, and Decision Making are mandatory qualifying gates.
      </p>
    </div>
  )
}

function TodayCard({ day, done, toggleDone, openDoc }) {
  const today = todayISO()
  const selected = days.find((item) => item.date === today) || days.find((item) => item.date > today) || days[days.length - 1]
  const current = day || selected
  const rotation = rotationFor(current)
  const revision = backRevision(current.d)
  const isDone = done.includes(`day-${current.d}`)

  return (
    <div className="card today-card">
      <div className="card-kicker">{current.date === today ? 'Today' : 'Next planned day'} · Day {current.d}</div>
      <h1>{current.title}</h1>
      <div className="chip-row">
        <span className="chip" style={{ borderColor: subjectColors[current.sub] }}>{current.sub}</span>
        <span className="chip">{fmtDate(current.date)}</span>
        <span className="chip">Drill: {rotation.label}</span>
      </div>
      <div className="task-grid">
        <div className="task-box">
          <b>Primary block</b>
          <span>{current.sub} concept study + notes</span>
        </div>
        <div className="task-box">
          <b>Safety drill</b>
          <span>{rotation.detail}</span>
        </div>
        <div className="task-box">
          <b>Revision</b>
          <span>{revision ? revision.sub : 'Baseline + source setup'}</span>
        </div>
      </div>
      <div className="action-row">
        <button className={`btn ${isDone ? 'done' : 'primary'}`} onClick={() => toggleDone(`day-${current.d}`)}>
          {isDone ? 'Completed' : 'Mark complete'}
        </button>
        <button className="btn" onClick={() => openDoc(notesForSubject[current.sub] || 'README.md')}>Open linked notes</button>
      </div>
    </div>
  )
}

function Home({ done, toggleDone, openDoc }) {
  const complete = Math.round(done.length / days.length * 100)
  const nextCheckpoint = checkpoints.find((cp) => !done.includes(`day-${cp.day}`)) || checkpoints[checkpoints.length - 1]

  return (
    <div className="page-stack">
      <section className="hero">
        <div>
          <div className="eyebrow">Mission NABARD</div>
          <h1>Grade A · RDBS General</h1>
          <p>For a B.Sc. Agriculture fresher: build ARD depth, clear the qualifying sections safely, and start Mains writing early.</p>
        </div>
        <div className="hero-badge"><b>{complete}%</b><span>plan complete</span></div>
      </section>

      <div className="stats-grid">
        <StatCard label="Phase I merit target" value="65–70" note="/100" tone="green" />
        <StatCard label="Mains target" value="140–150" note="/200" tone="blue" />
        <StatCard label="Final target" value="180+" note="/250" tone="violet" />
        <StatCard label="Next checkpoint" value={`D${nextCheckpoint.day}`} note={nextCheckpoint.target} />
      </div>

      <TodayCard done={done} toggleDone={toggleDone} openDoc={openDoc} />
      <MeritMeter />
    </div>
  )
}

function Plan({ done, toggleDone, openDoc }) {
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">42-day foundation plan</div>
          <h1>Study Plan</h1>
          <p>Merit sections first, qualifying sections daily, descriptive practice from week two.</p>
        </div>
        <StatCard label="Completed" value={`${done.length}/${days.length}`} note={`${Math.round(done.length / days.length * 100)}%`} />
      </header>
      {weeks.map((week, index) => (
        <section className="week-block" key={index}>
          <h2>Week {index + 1}</h2>
          <div className="day-grid">
            {week.map((day) => {
              const id = `day-${day.d}`
              const isDone = done.includes(id)
              return (
                <article className={`day-card ${isDone ? 'done' : ''}`} key={day.d}>
                  <div className="day-top">
                    <span className="day-num">D{day.d}</span>
                    <span className="day-date">{fmtDate(day.date)}</span>
                  </div>
                  <h3>{day.title}</h3>
                  <div className="chip-row">
                    <span className="chip" style={{ borderColor: subjectColors[day.sub] }}>{day.sub}</span>
                    <span className="chip subtle">{rotationFor(day).label}</span>
                  </div>
                  <div className="action-row">
                    <button className="btn small" onClick={() => openDoc(notesForSubject[day.sub] || 'README.md')}>Notes</button>
                    <button className={`btn small ${isDone ? 'done' : ''}`} onClick={() => toggleDone(id)}>{isDone ? 'Done' : 'Mark'}</button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

function PatternBlock({ block }) {
  return (
    <section className="pattern-block" style={{ '--accent': block.color }}>
      <div className="pattern-head">
        <h2>{block.section}</h2>
        {block.marks && <span>{block.marks} marks</span>}
      </div>
      <p>{block.note}</p>
      <div className="pattern-grid">
        {block.topics.map((topic) => (
          <article className="pattern-card" key={topic.name}>
            <div className="pattern-title"><b>{topic.name}</b><span>{topic.qs}</span></div>
            <div className="tag">{topic.tag}</div>
            {topic.patterns.map(([name, detail]) => (
              <div className="pattern-row" key={name}>
                <b>{name}</b>
                <span>{detail}</span>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

function Patterns() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">Latest completed pattern</div>
          <h1>NABARD Grade A Pattern</h1>
          <p>Phase I is one combined paper. Paper I and Paper II belong to Mains.</p>
        </div>
      </header>
      <div className="section-summary">
        <div><b>Phase I</b><span>200 Qs · 200 marks · 120 min</span></div>
        <div><b>Mains</b><span>English 100 + ESI/ARD 100</span></div>
        <div><b>Interview</b><span>50 marks · psychometric qualifying</span></div>
      </div>
      {phase1.map((block) => <PatternBlock key={block.section} block={block} />)}
      {mains.map((block) => <PatternBlock key={block.section} block={block} />)}
    </div>
  )
}

function Targets() {
  const cutoffRows = qualifyingSections.map((section) => ({ ...section, target: { Reasoning: '10–12', English: '15–18', Computer: '10–12', Quant: '8–10', 'Decision Making': '5–6' }[section.name] }))
  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">Score architecture</div>
          <h1>Target Chart</h1>
          <p>Use last cycle as a floor and prepare with a safety buffer.</p>
        </div>
      </header>
      <div className="stats-grid three">
        <StatCard label="Last UR merit cutoff" value="54.50" note="GA+ESI+ARD" />
        <StatCard label="Safe merit target" value="60+" note="minimum buffer" tone="green" />
        <StatCard label="Strong merit target" value="65–70+" note="preferred" tone="violet" />
      </div>
      <div className="card">
        <h2>Qualifying-section floors</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Section</th><th>Marks</th><th>Personal target</th></tr></thead>
            <tbody>{cutoffRows.map((row) => <tr key={row.name}><td>{row.name}</td><td>{row.marks}</td><td><b>{row.target}</b></td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <h2>Final score goal</h2>
        <div className="score-ladder">
          <div><b>Phase I merit</b><span>65–70 / 100</span></div>
          <div><b>Mains</b><span>140–150 / 200</span></div>
          <div><b>Interview</b><span>30–35 / 50</span></div>
          <div><b>Final</b><span>180+ / 250</span></div>
        </div>
      </div>
    </div>
  )
}

function Quiz({ scores, saveScore }) {
  const [quizId, setQuizId] = useState(quizzes[0]?.id)
  const [answers, setAnswers] = useState({})
  const quiz = quizzes.find((item) => item.id === quizId) || quizzes[0]
  const answered = Object.keys(answers).length
  const correct = quiz.questions.reduce((sum, q, index) => answers[index] === q.a ? sum + 1 : sum, 0)
  const saved = scores.some((score) => score.quizId === quiz.id && score.answered === answered && score.correct === correct)

  const choose = (index, option) => {
    if (answers[index] === undefined) setAnswers({ ...answers, [index]: option })
  }
  const selectQuiz = (id) => {
    setQuizId(id)
    setAnswers({})
  }

  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">Instant-feedback test bank</div>
          <h1>Take a Test</h1>
          <p>Click an answer once to check it. Save the score after answering every question.</p>
        </div>
        <StatCard label="Score" value={`${correct}/${quiz.questions.length}`} note={`${answered} answered`} />
      </header>

      <div className="quiz-picker">
        {quizzes.map((item) => {
          const best = scores.filter((score) => score.quizId === item.id).sort((a, b) => b.correct - a.correct)[0]
          return (
            <button key={item.id} className={`quiz-tab ${item.id === quiz.id ? 'active' : ''}`} onClick={() => selectQuiz(item.id)}>
              <b>Day {item.day}</b><span>{item.title}</span>{best && <small>best {best.correct}/{best.total}</small>}
            </button>
          )
        })}
      </div>

      <div className="card quiz-card">
        <div className="card-kicker">{quiz.tag}</div>
        <h2>{quiz.title}</h2>
        {quiz.questions.map((question, index) => {
          const selected = answers[index]
          return (
            <div className="question" key={index}>
              <div className="question-head"><span>Q{index + 1}</span><b>{question.t}</b></div>
              <p>{question.q}</p>
              <div className="options">
                {question.o.map((option, optionIndex) => {
                  const state = selected === undefined ? '' : optionIndex === question.a ? 'correct' : selected === optionIndex ? 'wrong' : 'muted'
                  return <button key={option} className={`option ${state}`} onClick={() => choose(index, optionIndex)}>{option}</button>
                })}
              </div>
              {selected !== undefined && <div className={`explanation ${selected === question.a ? 'good' : 'bad'}`}>{question.x}</div>}
            </div>
          )
        })}
        <div className="action-row sticky-actions">
          <button className="btn primary" disabled={answered !== quiz.questions.length || saved} onClick={() => saveScore({ quizId: quiz.id, title: quiz.title, day: quiz.day, correct, total: quiz.questions.length, answered, date: todayISO() })}>
            {saved ? 'Score saved' : 'Save score'}
          </button>
          <button className="btn" onClick={() => setAnswers({})}>Retry</button>
        </div>
      </div>

      <div className="card">
        <h2>Score history</h2>
        {scores.length === 0 && <p className="muted">No saved scores yet.</p>}
        {scores.slice().reverse().map((score, index) => (
          <div className="score-row" key={`${score.quizId}-${index}`}>
            <span>{score.date}</span><b>{score.title}</b><span>{score.correct}/{score.total}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgressBoard({ progressState, setTopicState }) {
  const getTopic = (topic) => ({ ...topic, ...(progressState[topic.name] || {}) })
  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">Weighted completion</div>
          <h1>Progress Board</h1>
          <p>Update a topic after study; weights reflect its exam importance.</p>
        </div>
      </header>
      {papers.map((paper) => {
        const merged = paper.topics.map(getTopic)
        const paperPctValue = Math.round(merged.reduce((sum, topic) => sum + topic.pct * topic.w, 0) / 100)
        return (
          <section className="card progress-paper" key={paper.id}>
            <div className="progress-head">
              <div><h2>{paper.name}</h2><p>{paper.gate}</p></div>
              <b style={{ color: pctColor(paperPctValue) }}>{paperPctValue}%</b>
            </div>
            {merged.map((topic) => {
              const stale = staleState(topic)
              return (
                <div className="topic-row" key={topic.name}>
                  <div className="topic-main">
                    <div><b>{topic.name}</b><span className={`stale ${stale}`}>{stale}</span></div>
                    <small>weight {topic.w}% · last studied {topic.last || '—'}</small>
                  </div>
                  <input type="range" min="0" max="100" value={topic.pct} onChange={(e) => setTopicState(topic.name, Number(e.target.value))} />
                  <b>{topic.pct}%</b>
                </div>
              )
            })}
          </section>
        )
      })}
    </div>
  )
}

function Links() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <div>
          <div className="eyebrow">Verification-first sources</div>
          <h1>Official Sources</h1>
          <p>Use these for notifications, schemes, reports, and institutional facts.</p>
        </div>
      </header>
      {practiceLinks.map((group) => (
        <section className="card" key={group.group}>
          <h2>{group.group}</h2>
          <div className="link-grid">
            {group.links.map((link) => (
              <a className="link-card" href={link.url} target="_blank" rel="noreferrer" key={link.name}>
                <b>{link.name}</b><span>{link.note}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function DocView({ path, setView }) {
  const doc = getDoc(path)
  if (!doc) {
    return <div className="card"><h1>Document not found</h1><button className="btn" onClick={() => setView({ type: 'home' })}>Back home</button></div>
  }
  return (
    <article className="card doc-view">
      <div className="doc-path">{doc.path}</div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(doc.text) }} />
    </article>
  )
}

export default function App() {
  const [view, setView] = useState({ type: 'home' })
  const [done, setDone] = useState(() => readJSON(LS_DONE, []))
  const [progressState, setProgressState] = useState(() => readJSON(LS_PROGRESS, {}))
  const [scores, setScores] = useState(() => readJSON(LS_QUIZ, []))

  const paperProgress = useMemo(() => Object.fromEntries(papers.map((paper) => {
    const merged = paper.topics.map((topic) => ({ ...topic, ...(progressState[topic.name] || {}) }))
    return [paper.id, Math.round(merged.reduce((sum, topic) => sum + topic.pct * topic.w, 0) / 100)]
  })), [progressState])

  const toggleDone = (id) => {
    const next = done.includes(id) ? done.filter((item) => item !== id) : [...done, id]
    setDone(next)
    saveJSON(LS_DONE, next)
  }
  const setTopicState = (name, pct) => {
    const next = { ...progressState, [name]: { pct, last: todayISO() } }
    setProgressState(next)
    saveJSON(LS_PROGRESS, next)
  }
  const saveScore = (score) => {
    const next = [...scores, score]
    setScores(next)
    saveJSON(LS_QUIZ, next)
  }
  const openDoc = (path) => setView({ type: 'doc', path })

  return (
    <div className="app-shell">
      <Sidebar view={view} setView={setView} progress={paperProgress} />
      <main className="main-content">
        {view.type === 'home' && <Home done={done} toggleDone={toggleDone} openDoc={openDoc} />}
        {view.type === 'plan' && <Plan done={done} toggleDone={toggleDone} openDoc={openDoc} />}
        {view.type === 'patterns' && <Patterns />}
        {view.type === 'targets' && <Targets />}
        {view.type === 'quiz' && <Quiz scores={scores} saveScore={saveScore} />}
        {view.type === 'progress' && <ProgressBoard progressState={progressState} setTopicState={setTopicState} />}
        {view.type === 'links' && <Links />}
        {view.type === 'doc' && <DocView path={view.path} setView={setView} />}
      </main>
    </div>
  )
}
