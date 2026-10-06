import test from 'node:test'
import assert from 'node:assert/strict'
import { questionBank, topics } from '../src/questions.js'

test('question bank contains 200 valid unique questions', () => {
  assert.equal(questionBank.length, 200)
  assert.equal(new Set(questionBank.map(({ id }) => id)).size, 200)
  for (const question of questionBank) {
    assert.equal(question.options.length, 4)
    assert.equal(new Set(question.options).size, 4)
    assert.ok(question.answer >= 0 && question.answer < 4)
    assert.ok(question.explanation.length > 10)
  }
})

test('every course area contributes an equal mix', () => {
  assert.equal(topics.length, 8)
  assert.deepEqual(topics.map(({ count }) => count), Array(8).fill(25))
  assert.equal(questionBank.filter(({ difficulty }) => difficulty === 'Challenge').length, 40)
})

test('stems are varied and the old repetitive format is gone', () => {
  const openingPhrases = new Set(questionBank.map(({ question }) => question.split(/[:?]/, 1)[0]))
  assert.ok(openingPhrases.size >= 40)
  assert.equal(questionBank.filter(({ question }) => question.startsWith('Which term best matches')).length, 0)
  assert.equal(questionBank.filter(({ question }) => question.startsWith('What best describes')).length, 0)
})
