import { ardTopics, esiTopics, gaTopics, interviewTopics, mainsTopics, qualifyingTopics } from './analysis.js'

const firstNumber = (value) => Number(String(value || '').match(/\d+(?:\.\d+)?/)?.[0] || 0)
const withWeight = (topic, sectionMultiplier) => ({
  ...topic,
  w: Number((firstNumber(topic.share || topic.expected) * sectionMultiplier).toFixed(1)),
})

const qualifyingWeights = { Reasoning: 20, 'English Language': 30, 'Computer Knowledge': 20, 'Quantitative Aptitude': 20, 'Decision Making': 10 }
const mainsWeights = { 'General English Descriptive': 50, 'ESI + ARD Objective': 25, 'ESI + ARD Descriptive': 25 }

export const papers = [
  {
    id: 'phase1-merit',
    name: 'Phase I — Merit Section',
    gate: 'GA 20 + ESI 40 + ARD 40 · target 65–70/100',
    topics: [
      ...ardTopics.map((topic) => withWeight(topic, 0.4)),
      ...esiTopics.map((topic) => withWeight(topic, 0.4)),
      ...gaTopics.map((topic) => withWeight(topic, 0.2)),
    ],
  },
  {
    id: 'phase1-qualifying',
    name: 'Phase I — Qualifying Sections',
    gate: 'Clear every sectional floor; do not spend merit-section time here',
    topics: qualifyingTopics.map((topic) => ({ ...topic, w: qualifyingWeights[topic.name] || 0 })),
  },
  {
    id: 'mains',
    name: 'Phase II — Mains',
    gate: 'Target 140–150+/200',
    topics: mainsTopics.map((topic) => ({ ...topic, w: mainsWeights[topic.name] || 0 })),
  },
  {
    id: 'interview',
    name: 'Interview + Psychometric Readiness',
    gate: 'Interview target 30+/50 · psychometric qualifying',
    topics: interviewTopics.map((topic) => ({ ...topic, w: 100 })),
  },
]

export const topicCompletion = (topic, completed) => {
  const total = topic.checklist?.length || 1
  const done = (topic.checklist || []).filter((item) => completed[item.id]).length
  return { done, total, pct: Math.round(done / total * 100) }
}

export const paperPct = (paper, completed) => Math.round(
  paper.topics.reduce((sum, topic) => sum + topicCompletion(topic, completed).pct * topic.w, 0) / 100,
)

export const topicLastStudied = (topic, completed) => {
  const dates = (topic.checklist || []).map((item) => completed[item.id]).filter(Boolean).sort()
  return dates[dates.length - 1] || null
}

export const staleState = (last, now = new Date()) => {
  if (!last) return 'none'
  const days = Math.floor((now - new Date(last)) / 86400000)
  if (days <= 3) return 'fresh'
  if (days <= 7) return 'soon'
  return 'stale'
}
