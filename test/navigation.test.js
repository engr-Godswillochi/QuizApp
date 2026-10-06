import test from 'node:test'
import assert from 'node:assert/strict'
import { canOpenRoute, isProtectedResultRoute } from '../src/navigation.js'

test('results and review stay locked until an attempt is submitted', () => {
  for (const path of ['/results', '/review']) {
    assert.equal(isProtectedResultRoute(path), true)
    assert.equal(canOpenRoute(path, false), false)
    assert.equal(canOpenRoute(path, true), true)
  }
})

test('normal routes remain available during an attempt', () => {
  for (const path of ['/', '/quiz', '/submit', '/revision']) {
    assert.equal(isProtectedResultRoute(path), false)
    assert.equal(canOpenRoute(path, false), true)
  }
})
