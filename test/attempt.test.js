import test from 'node:test'
import assert from 'node:assert/strict'
import { ATTEMPT_SIZES, DEFAULT_ATTEMPT_SIZE, isAttemptSize } from '../src/attempt.js'

test('attempt sizes offer short through full practice sessions', () => {
  assert.deepEqual(ATTEMPT_SIZES, [10, 20, 30, 50])
  assert.equal(DEFAULT_ATTEMPT_SIZE, 50)
})

test('only supported attempt sizes restore from session storage', () => {
  for (const size of ATTEMPT_SIZES) assert.equal(isAttemptSize(size), true)
  for (const size of [0, 15, 49, 51, 300]) assert.equal(isAttemptSize(size), false)
})
