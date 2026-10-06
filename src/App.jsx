import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { canOpenRoute, isProtectedResultRoute } from './navigation.js'
import { questionBank, topics } from './questions.js'

const EXAM_SIZE = 50

const Icon = ({ name, size = 18 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    back: <><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    refresh: <><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M6.1 9a7 7 0 0 1 11.4-2.4L20 9M4 15l2.5 2.4A7 7 0 0 0 17.9 15"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
    flag: <><path d="M5 21V4"/><path d="M5 5h11l-2 4 2 4H5"/></>,
  }
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const secureRandom = (max) => {
  const bucket = new Uint32Array(1)
  crypto.getRandomValues(bucket)
  return bucket[0] % max
}

const makeAttempt = () => {
  const pool = [...questionBank]
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = secureRandom(index + 1)
    ;[pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]]
  }
  return pool.slice(0, EXAM_SIZE)
}

function StartScreen({ onStart, onRevision }) {
  return (
    <main className="neural-shell">
      <aside className="lab-rail">
        <div className="lab-brand"><span className="lab-mark">Q</span><strong>Prep50</strong></div>
        <div className="rail-course"><span>COS 438</span><strong>AI II</strong></div>
        <div className="rail-stats" aria-label="Course bank details">
          <div><span>Questions</span><strong>{questionBank.length}</strong></div>
          <div><span>Topics</span><strong>{String(topics.length).padStart(2, '0')}</strong></div>
          <div><span>Attempt</span><strong>50</strong></div>
        </div>
        <span className="rail-note">Source-aligned practice</span>
      </aside>

      <section className="lab-main">
        <header className="lab-topbar">
          <div><span>COS 438</span><strong>Artificial Intelligence II</strong></div>
          <span className="ready-signal"><i /> System ready</span>
        </header>

        <div className="lab-hero">
          <div className="lab-copy">
            <h1>Train the<br />connections.</h1>
            <p>Practice directly from your course material. Each attempt builds a fresh path through logic, intelligent agents, machine learning, NLP, theorem proving, and probabilistic reasoning.</p>
            <div className="lab-facts">
              <div><strong>50</strong><span>random questions</span></div>
              <div><strong>∞</strong><span>time to think</span></div>
            </div>
            <div className="launch-actions">
              <button className="primary-button" onClick={onStart}>Begin practice <Icon name="arrow" /></button>
              <button className="text-link" onClick={onRevision}>Browse all questions <Icon name="book" /></button>
            </div>
          </div>

          <div className="network-stage" aria-hidden="true">
            <svg viewBox="0 0 600 560" role="presentation">
              <g className="network-lines">
                <path d="M58 348 144 266 222 326 303 210 391 273 492 158 548 245" />
                <path d="M90 142 144 266 246 116 303 210 368 84 492 158 518 368" />
                <path d="M58 348 164 444 222 326 334 416 391 273 518 368 548 245" />
                <path d="M90 142 246 116 222 326 368 84 391 273 334 416 518 368" />
                <path d="M164 444 334 416 518 368" />
              </g>
              <g className="network-nodes">
                {[[58,348],[90,142],[144,266],[164,444],[222,326],[246,116],[303,210],[334,416],[368,84],[391,273],[492,158],[518,368],[548,245]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index % 4 === 0 ? 9 : 5} />)}
              </g>
            </svg>
            <span className="node-label logic">LOGIC</span>
            <span className="node-label learning">LEARNING</span>
            <span className="node-label language">LANGUAGE</span>
            <span className="node-label probability">PROBABILITY</span>
            <div className="signal-card"><span>Course coverage</span><strong>8 connected areas</strong><i><b /></i></div>
          </div>
        </div>

        <footer className="lab-footer">
          <div><Icon name="book" size={17} /><span>Built from AI — Dr. Ugwuishiwu</span></div>
          <span>Answers are revealed after submission</span>
        </footer>
      </section>
    </main>
  )
}

function QuestionIndex({ questions, current, answers, results, onSelect }) {
  return (
    <aside className="question-index" aria-label="Question index">
      <div className="index-heading"><span>Question index</span><strong>{Object.keys(answers).length}/{questions.length}</strong></div>
      <div className="index-grid">
        {questions.map((question, index) => {
          const answered = answers[index] !== undefined
          const correct = results && answers[index] === question.answer
          const className = ['index-button', index === current ? 'current' : '', answered ? 'answered' : '', results ? (correct ? 'correct' : 'incorrect') : ''].filter(Boolean).join(' ')
          return <button key={question.id} className={className} onClick={() => onSelect(index)} aria-label={`Question ${index + 1}${answered ? ', answered' : ', unanswered'}`} aria-current={index === current ? 'step' : undefined}>{index + 1}</button>
        })}
      </div>
      <div className="index-key">
        <span><i className="key-current" /> Current</span>
        <span><i className="key-answered" /> {results ? 'Correct' : 'Answered'}</span>
        {results && <span><i className="key-wrong" /> Incorrect</span>}
      </div>
    </aside>
  )
}

function QuizHeader({ answered, onExit }) {
  return (
    <header className="quiz-header">
      <button className="text-button" onClick={onExit}><Icon name="back" /> Exit attempt</button>
      <div className="quiz-brand"><span className="wordmark-mark">Q</span><span>Prep50</span></div>
      <div className="answered-count"><span>{answered}</span> of {EXAM_SIZE} answered</div>
    </header>
  )
}

function QuestionPlate({ question, number, selected, onAnswer, results }) {
  return (
    <article className="question-plate">
      <div className="question-meta"><span>{question.topic}</span><span>Record {String(number).padStart(2, '0')}</span></div>
      <h2>{question.question}</h2>
      <fieldset disabled={Boolean(results)}>
        <legend className="sr-only">Select one answer</legend>
        {question.options.map((option, optionIndex) => {
          const chosen = selected === optionIndex
          const isCorrect = results && optionIndex === question.answer
          const isWrong = results && chosen && !isCorrect
          return (
            <label className={`answer-option ${chosen ? 'selected' : ''} ${isCorrect ? 'is-correct' : ''} ${isWrong ? 'is-wrong' : ''}`} key={option}>
              <input type="radio" name={`question-${question.id}`} checked={chosen} onChange={() => onAnswer(optionIndex)} />
              <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
              <span className="option-copy">{option}</span>
              {isCorrect && <span className="answer-mark"><Icon name="check" /></span>}
            </label>
          )
        })}
      </fieldset>
      {results && <div className="explanation"><strong>Course note</strong><p>{question.explanation}</p></div>}
    </article>
  )
}

function ConfirmScreen({ answers, onReturn, onSubmit }) {
  const unanswered = EXAM_SIZE - Object.keys(answers).length
  return (
    <main className="confirm-shell">
      <div className="confirmation-plate">
        <span className="confirmation-mark"><Icon name="flag" size={28} /></span>
        <h1>{unanswered ? 'Your attempt has open records.' : 'Your attempt is ready.'}</h1>
        <p>{unanswered ? `${unanswered} ${unanswered === 1 ? 'question is' : 'questions are'} still unanswered. You can submit now or return to complete them.` : 'All 50 questions have an answer. Submit when you are ready to see your score and review.'}</p>
        <div className="confirmation-stat"><strong>{Object.keys(answers).length}</strong><span>answered</span><strong>{unanswered}</strong><span>open</span></div>
        <div className="confirmation-actions">
          <button className="secondary-button" onClick={onReturn}><Icon name="back" /> Return to attempt</button>
          <button className="primary-button" onClick={onSubmit}>Submit answers <Icon name="check" /></button>
        </div>
      </div>
    </main>
  )
}

function ResultsScreen({ questions, answers, onReview, onRestart, onRevision }) {
  const correct = questions.filter((question, index) => answers[index] === question.answer).length
  const percentage = Math.round((correct / questions.length) * 100)
  const message = percentage >= 80 ? 'Strong command of the material.' : percentage >= 60 ? 'A solid attempt. Review the weak sections.' : 'Use the review to rebuild the foundations.'
  const topicScores = Object.values(questions.reduce((totals, question, index) => {
    totals[question.topic] ??= { topic: question.topic, total: 0, correct: 0 }
    totals[question.topic].total += 1
    if (answers[index] === question.answer) totals[question.topic].correct += 1
    return totals
  }, {}))

  return (
    <main className="results-shell">
      <header className="results-head"><div className="quiz-brand"><span className="wordmark-mark">Q</span><span>Prep50</span></div><span>Attempt complete</span></header>
      <section className="score-section">
        <div className="score-number"><strong>{percentage}</strong><span>%</span></div>
        <div><h1>{message}</h1><p>You answered {correct} of {questions.length} questions correctly.</p></div>
      </section>
      <section className="section-ledger" aria-label="Performance by topic">
        <div className="ledger-heading"><h2>Section ledger</h2><span>Correct / selected</span></div>
        {topicScores.map((item) => {
          const width = `${(item.correct / item.total) * 100}%`
          return <div className="ledger-row" key={item.topic}><span>{item.topic}</span><div className="ledger-track"><i style={{ width }} /></div><strong>{item.correct}/{item.total}</strong></div>
        })}
      </section>
      <div className="results-actions">
        <button className="primary-button" onClick={onReview}>Review answers <Icon name="arrow" /></button>
        <button className="secondary-button" onClick={onRestart}><Icon name="refresh" /> New random attempt</button>
        <button className="secondary-button" onClick={onRevision}><Icon name="book" /> Open revision bank</button>
      </div>
    </main>
  )
}

function RevisionScreen({ onHome, onStart }) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('All topics')
  const [showAnswers, setShowAnswers] = useState(true)
  const deferredQuery = useDeferredValue(query.trim().toLowerCase())
  const visibleQuestions = useMemo(() => questionBank.filter((question) => {
    const matchesTopic = topic === 'All topics' || question.topic === topic
    const haystack = `${question.question} ${question.explanation} ${question.options.join(' ')}`.toLowerCase()
    return matchesTopic && (!deferredQuery || haystack.includes(deferredQuery))
  }), [deferredQuery, topic])

  return (
    <div className="revision-shell">
      <header className="revision-nav">
        <button className="text-button" onClick={onHome}><Icon name="back" /> Home</button>
        <div className="quiz-brand"><span className="wordmark-mark">Q</span><span>Prep50</span></div>
        <button className="nav-practice" onClick={onStart}>Start practice</button>
      </header>
      <main className="revision-main">
        <section className="revision-intro">
          <div>
            <h1>Know the whole bank.</h1>
            <p>Search all {questionBank.length} questions, inspect the correct answers, and revise one course area at a time.</p>
          </div>
          <div className="revision-count"><strong>{visibleQuestions.length}</strong><span>questions shown</span></div>
        </section>

        <section className="revision-tools" aria-label="Revision filters">
          <label className="search-field"><span>Search questions</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Bayes, inference, recall..." /></label>
          <label className="select-field"><span>Course area</span><select value={topic} onChange={(event) => setTopic(event.target.value)}><option>All topics</option>{topics.map((item) => <option key={item.topic}>{item.topic}</option>)}</select></label>
          <button className="answer-toggle" aria-pressed={showAnswers} onClick={() => setShowAnswers((value) => !value)}>{showAnswers ? 'Hide answers' : 'Show answers'}</button>
        </section>

        {visibleQuestions.length ? (
          <section className="revision-list" aria-live="polite">
            {visibleQuestions.map((question, index) => (
              <article className="revision-item" key={question.id}>
                <div className="revision-number">{String(question.id).padStart(3, '0')}</div>
                <div className="revision-content">
                  <div className="revision-meta"><span>{question.topic}</span><strong>{question.difficulty}</strong></div>
                  <h2>{question.question}</h2>
                  <ol className="revision-options" type="A">{question.options.map((option, optionIndex) => <li className={showAnswers && optionIndex === question.answer ? 'correct-option' : ''} key={option}>{option}</li>)}</ol>
                  {showAnswers ? <div className="revision-answer"><span>Answer {String.fromCharCode(65 + question.answer)}</span><p>{question.explanation}</p></div> : null}
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="revision-empty"><strong>No matching questions.</strong><p>Clear the search or choose another course area.</p></div>
        )}
      </main>
    </div>
  )
}

const sessionKey = 'prep50-attempt-v1'
const questionById = new Map(questionBank.map((question) => [question.id, question]))

const readAttempt = () => {
  try {
    const stored = JSON.parse(sessionStorage.getItem(sessionKey))
    const questions = stored?.questionIds?.map((id) => questionById.get(id)).filter(Boolean) ?? []
    return questions.length === EXAM_SIZE
      ? { questions, answers: stored.answers ?? {}, submitted: stored.submitted === true }
      : null
  } catch {
    return null
  }
}

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)
  const [savedAttempt] = useState(readAttempt)
  const [questions, setQuestions] = useState(savedAttempt?.questions ?? [])
  const [answers, setAnswers] = useState(savedAttempt?.answers ?? {})
  const [submitted, setSubmitted] = useState(savedAttempt?.submitted ?? false)
  const [current, setCurrent] = useState(0)

  const answeredCount = Object.keys(answers).length
  const results = submitted && route === '/review'
  const currentQuestion = questions[current]

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (!questions.length) return
    sessionStorage.setItem(sessionKey, JSON.stringify({ questionIds: questions.map(({ id }) => id), answers, submitted }))
  }, [questions, answers, submitted])

  useEffect(() => {
    if (questions.length && !canOpenRoute(route, submitted)) {
      window.history.replaceState({}, '', '/quiz')
      setRoute('/quiz')
    }
  }, [questions.length, route, submitted])

  const navigate = (path, replace = false) => {
    window.history[replace ? 'replaceState' : 'pushState']({}, '', path)
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const startAttempt = () => {
    setQuestions(makeAttempt())
    setAnswers({})
    setSubmitted(false)
    setCurrent(0)
    navigate('/quiz', isProtectedResultRoute(route))
  }

  const answer = (option) => setAnswers((previous) => ({ ...previous, [current]: option }))
  const setQuestion = (index) => { setCurrent(index); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const nextUnanswered = useMemo(() => questions.findIndex((_, index) => answers[index] === undefined), [questions, answers])

  if (route === '/') return <StartScreen onStart={startAttempt} onRevision={() => navigate('/revision')} />
  if (route === '/revision') return <RevisionScreen onHome={() => navigate('/')} onStart={startAttempt} />
  if (!questions.length) return <StartScreen onStart={startAttempt} onRevision={() => navigate('/revision')} />
  if (route === '/submit') return <ConfirmScreen answers={answers} onReturn={() => navigate('/quiz')} onSubmit={() => { setSubmitted(true); navigate('/results') }} />
  if (submitted && route === '/results') return <ResultsScreen questions={questions} answers={answers} onReview={() => { setCurrent(0); navigate('/review') }} onRestart={startAttempt} onRevision={() => navigate('/revision')} />

  return (
    <div className="quiz-shell">
      <QuizHeader answered={answeredCount} onExit={() => navigate('/')} />
      <div className="quiz-layout">
        <main>
          <QuestionPlate question={currentQuestion} number={current + 1} selected={answers[current]} onAnswer={answer} results={results} />
          <nav className="question-nav" aria-label="Question navigation">
            <button className="secondary-button" disabled={current === 0} onClick={() => setQuestion(current - 1)}><Icon name="back" /> Previous</button>
            <span>{current + 1} / {questions.length}</span>
            {results ? (
              current < questions.length - 1 ? <button className="primary-button" onClick={() => setQuestion(current + 1)}>Next answer <Icon name="arrow" /></button> : <button className="primary-button" onClick={() => navigate('/results')}>Back to results <Icon name="arrow" /></button>
            ) : current < questions.length - 1 ? (
              <button className="primary-button" onClick={() => setQuestion(current + 1)}>Next question <Icon name="arrow" /></button>
            ) : (
              <button className="primary-button" onClick={() => navigate('/submit')}>Review & submit <Icon name="flag" /></button>
            )}
          </nav>
          {!results && current === questions.length - 1 && nextUnanswered >= 0 && <button className="open-record" onClick={() => setQuestion(nextUnanswered)}>Go to first unanswered question</button>}
        </main>
        <QuestionIndex questions={questions} current={current} answers={answers} results={results} onSelect={setQuestion} />
      </div>
      {!results && <button className="mobile-submit" onClick={() => navigate('/submit')}>Review & submit · {answeredCount}/{EXAM_SIZE}</button>}
    </div>
  )
}
