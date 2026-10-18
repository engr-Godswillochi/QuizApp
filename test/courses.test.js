import test from 'node:test'
import assert from 'node:assert/strict'
import { coursePath, courses, parseCourseRoute } from '../src/courses.js'

test('course catalog keeps each question bank separate', () => {
  assert.deepEqual(courses.map(({ id }) => id), ['cos438', 'cos412'])
  assert.deepEqual(courses.map(({ questionBank }) => questionBank.length), [300, 300])
  assert.notEqual(courses[0].questionBank, courses[1].questionBank)
})

test('course routes resolve launch and nested screens', () => {
  assert.equal(coursePath(courses[1]), '/cos412')
  assert.equal(coursePath(courses[1], 'revision'), '/cos412/revision')
  assert.equal(parseCourseRoute('/cos412/quiz').course.id, 'cos412')
  assert.equal(parseCourseRoute('/cos412/quiz').page, 'quiz')
  assert.equal(parseCourseRoute('/').course, null)
  assert.equal(parseCourseRoute('/unknown').course, null)
})
