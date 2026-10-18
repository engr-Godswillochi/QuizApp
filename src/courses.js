import { cos412QuestionBank, cos412Topics } from './cos412Questions.js'
import { questionBank as cos438QuestionBank, topics as cos438Topics } from './questions.js'

export const courses = [
  {
    id: 'cos438',
    slug: 'cos438',
    code: 'COS 438',
    shortTitle: 'AI II',
    title: 'Artificial Intelligence II',
    description: 'Logic, intelligent agents, machine learning, NLP, theorem proving, and probabilistic reasoning.',
    sourceLabel: 'AI course notes and Intelligent Agents reading',
    searchPlaceholder: 'Try Bayes, inference, recall...',
    signalLabels: ['LOGIC', 'LEARNING', 'LANGUAGE', 'PROBABILITY'],
    questionBank: cos438QuestionBank,
    topics: cos438Topics,
    accent: 'cyan',
  },
  {
    id: 'cos412',
    slug: 'cos412',
    code: 'COS 412',
    shortTitle: 'Formal Methods',
    title: 'Formal Methods',
    description: 'Formal specification, propositional and predicate logic, sets, proof, testing, and Z notation.',
    sourceLabel: 'COS 412 lecture note and formal-methods study guides',
    searchPlaceholder: 'Try quantifiers, contradiction, Z schema...',
    signalLabels: ['FORMAL LOGIC', 'PREDICATES', 'PROOF', 'Z SCHEMAS'],
    questionBank: cos412QuestionBank,
    topics: cos412Topics,
    accent: 'violet',
  },
]

export const courseBySlug = new Map(courses.map((course) => [course.slug, course]))
export const courseById = new Map(courses.map((course) => [course.id, course]))

export const coursePath = (course, page = '') => `/${course.slug}${page ? `/${page}` : ''}`

export const parseCourseRoute = (pathname) => {
  const [slug, page = 'start'] = pathname.split('/').filter(Boolean)
  const course = courseBySlug.get(slug)
  return course ? { course, page } : { course: null, page: 'courses' }
}
