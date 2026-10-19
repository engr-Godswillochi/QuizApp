import test from 'node:test'
import assert from 'node:assert/strict'
import { cos412QuestionBank, cos412Topics } from '../src/cos412Questions.js'

test('COS 412 bank contains 300 valid unique questions', () => {
  assert.equal(cos412QuestionBank.length, 300)
  assert.equal(new Set(cos412QuestionBank.map(({ id }) => id)).size, 300)
  assert.equal(new Set(cos412QuestionBank.map(({ question }) => question)).size, 300)

  for (const question of cos412QuestionBank) {
    assert.equal(question.options.length, 4)
    assert.equal(new Set(question.options).size, 4)
    assert.ok(question.answer >= 0 && question.answer < 4)
    assert.ok(question.explanation.length > 20)
  }
})

test('COS 412 covers six balanced areas with substantial practical work', () => {
  assert.equal(cos412Topics.length, 6)
  assert.deepEqual(cos412Topics.map(({ count }) => count), Array(6).fill(50))
  assert.ok(cos412QuestionBank.filter(({ difficulty }) => ['Applied', 'Challenge'].includes(difficulty)).length >= 240)
  assert.equal(cos412QuestionBank.filter(({ question }) => /Which term best|What best describes|A reviewer encounters|Which explanation would be technically correct/i.test(question)).length, 0)
})

test('COS 412 includes formalization, computation, proof, and Z scenarios', () => {
  const allText = cos412QuestionBank.map(({ question, options, explanation }) => `${question} ${options.join(' ')} ${explanation}`).join(' ')
  for (const expected of ['∀x', '∃x', 'P → Q', 'A ∩ B', 'Counterexample', 'Δ BirthdayBook', 'Ξ BirthdayBook']) {
    assert.ok(allText.includes(expected), `Missing practical coverage for ${expected}`)
  }
})
