import { cos412AdvancedQuestions } from './cos412AdvancedQuestions.js'

const sections = [
  {
    topic: 'Formal methods & SDLC',
    facts: [
      ['Formal method', 'A mathematically based technique for specifying, developing, and verifying software systems.'],
      ['Ambiguity', 'A requirement defect in which a statement permits more than one reasonable interpretation.'],
      ['Design-stage formalization', 'Translating agreed requirements into a precise specification before implementation begins.'],
      ['Formal specification', 'A mathematical description of required system behavior, data, assumptions, and constraints.'],
      ['Formal proof', 'A rule-governed sequence of logical steps showing that a stated property follows from assumptions.'],
      ['Model checking', 'Systematically exploring a model’s possible states to determine whether required properties hold.'],
      ['Abstraction', 'Representing the essential properties of a system while omitting irrelevant implementation detail.'],
      ['Business-critical system', 'A system where accurate data and process integrity are essential to the organization.'],
      ['Mission-critical system', 'A system whose continuous operation is essential to completing its mission.'],
      ['Safety-critical system', 'A system whose failure could cause injury, loss of life, or serious environmental harm.'],
    ],
  },
  {
    topic: 'Propositional logic',
    facts: [
      ['Proposition', 'A declarative statement with a fixed truth value: either true or false.'],
      ['Negation', 'The connective ¬P, which reverses the truth value of P.'],
      ['Conjunction', 'The connective P ∧ Q, true only when both operands are true.'],
      ['Disjunction', 'The inclusive connective P ∨ Q, true when at least one operand is true.'],
      ['Implication', 'The connective P → Q, false only when P is true and Q is false.'],
      ['Biconditional', 'The connective P ↔ Q, true when P and Q have the same truth value.'],
      ['Exclusive disjunction', 'The connective P ⊕ Q, true when exactly one operand is true.'],
      ['Tautology', 'A formula that is true under every possible truth assignment.'],
      ['Contradiction', 'A formula that is false under every possible truth assignment.'],
      ['Contingency', 'A formula that is true under some assignments and false under others.'],
    ],
  },
  {
    topic: 'Predicate logic',
    facts: [
      ['Predicate', 'An expression containing variables that becomes true or false when values are supplied.'],
      ['Domain of discourse', 'The set of objects over which quantified variables range.'],
      ['Existential quantifier', 'The symbol ∃, asserting that at least one object satisfies a condition.'],
      ['Universal quantifier', 'The symbol ∀, asserting that every object in the domain satisfies a condition.'],
      ['Free variable', 'A variable occurrence that is not governed by any quantifier.'],
      ['Bound variable', 'A variable occurrence governed by a quantifier in its scope.'],
      ['Quantifier negation', 'The rule that ¬∀x P(x) is equivalent to ∃x ¬P(x), and vice versa.'],
      ['Universal instantiation', 'Inferring P(a) for a particular object a from ∀x P(x).'],
      ['Existential witness', 'A specific object introduced to represent something asserted to exist.'],
      ['Quantifier order', 'The sequence of nested quantifiers, which can change the meaning of a formula.'],
    ],
  },
  {
    topic: 'Sets, relations & sequences',
    facts: [
      ['Subset', 'A set A such that every element of A is also an element of another set B.'],
      ['Union', 'The set A ∪ B containing elements that occur in A, in B, or in both.'],
      ['Intersection', 'The set A ∩ B containing only elements common to both A and B.'],
      ['Set difference', 'The set A \\ B containing elements of A that are not elements of B.'],
      ['Power set', 'The set P(A) containing every subset of A, including ∅ and A itself.'],
      ['Cartesian product', 'The set A × B of all ordered pairs whose first component is in A and second is in B.'],
      ['Relation', 'A set of ordered pairs connecting elements of one or more sets.'],
      ['Function', 'A relation that maps each element in its domain to exactly one element in its range.'],
      ['Arithmetic sequence', 'A sequence with a constant difference between consecutive terms.'],
      ['Geometric sequence', 'A sequence with a constant nonzero ratio between consecutive terms.'],
    ],
  },
  {
    topic: 'Proof, testing & verification',
    facts: [
      ['Direct proof', 'A proof that starts from accepted premises and derives the required conclusion step by step.'],
      ['Proof by contradiction', 'A proof that assumes the claim is false and derives an impossibility.'],
      ['Counterexample', 'A single valid case that disproves a universal statement.'],
      ['Mathematical induction', 'A proof method using a base case and an inductive step for statements indexed by natural numbers.'],
      ['Verification', 'Checking that a system satisfies its specification: building the product right.'],
      ['Validation', 'Checking that the delivered system solves the user’s real problem: building the right product.'],
      ['Test plan', 'A document defining test scope, strategy, resources, schedule, and responsibilities.'],
      ['Test case', 'A specific set of inputs, preconditions, actions, and expected results.'],
      ['Black-box testing', 'Testing externally visible behavior without relying on internal implementation details.'],
      ['White-box testing', 'Testing paths, branches, and structures using knowledge of the implementation.'],
    ],
  },
  {
    topic: 'Z notation & schemas',
    facts: [
      ['Schema', 'A named Z structure containing declarations above a line and predicates below it.'],
      ['Signature', 'The declaration section of a schema, listing variables and their types.'],
      ['Schema predicate', 'A constraint in the lower section of a schema that must hold for valid states.'],
      ['State invariant', 'A property that must remain true in every reachable state and after every valid operation.'],
      ['Delta schema Δ', 'A schema decoration indicating that an operation may change the included state.'],
      ['Xi schema Ξ', 'A schema decoration indicating observation without changing the included state.'],
      ['Input decoration ?', 'The Z suffix marking a value supplied to an operation.'],
      ['Output decoration !', 'The Z suffix marking a value produced by an operation.'],
      ['Precondition', 'A condition that must hold before an operation is permitted to execute.'],
      ['Post-state decoration ′', 'The Z suffix marking the value of a state component after an operation.'],
    ],
  },
]

const rotate = (items, amount) => {
  const offset = amount % items.length
  return [...items.slice(offset), ...items.slice(0, offset)]
}

const coreQuestions = sections.flatMap((section, sectionIndex) =>
  section.facts.map(([term, definition], factIndex) => {
    const id = sectionIndex * 10 + factIndex + 1
    const asksForTerm = factIndex % 2 === 0
    const nearby = [2, 5, 8].map((step) => section.facts[(factIndex + step) % section.facts.length])
    const correct = asksForTerm ? term : definition
    const options = rotate([correct, ...nearby.map((fact) => (asksForTerm ? fact[0] : fact[1]))], id % 4)
    const question = asksForTerm
      ? `A reviewer encounters this in a system specification: “${definition}” Which formal-method concept should they record?`
      : `Which explanation would be technically correct if a COS 412 solution uses ${term}?`

    return {
      id,
      topic: section.topic,
      difficulty: factIndex < 5 ? 'Core' : 'Applied',
      question,
      options,
      answer: options.indexOf(correct),
      explanation: `${term}: ${definition}`,
    }
  }),
)

const challenges = [
  ['Formal methods & SDLC', 'A requirement says, “The alarm should activate quickly when smoke is high.” What should the analyst do first?', ['Implement the alarm and measure later', 'Replace “quickly” and “high” with measurable thresholds', 'Move the sentence directly into a test report', 'Treat the sentence as a complete formal proof'], 1, 'The requirement is ambiguous because “quickly” and “high” have no precise, testable meaning.'],
  ['Formal methods & SDLC', 'A bank cannot tolerate an incorrect account balance even if service must pause briefly. Which criticality is primary?', ['Mission-critical', 'Business-critical', 'Entertainment-critical', 'Only safety-critical'], 1, 'The dominant concern is the accuracy and integrity of business data.'],
  ['Formal methods & SDLC', 'An emergency dispatch platform must remain available continuously during a crisis. Which concern most strongly justifies formal analysis?', ['Mission continuity', 'Font consistency', 'Source-code formatting', 'User-interface animation'], 0, 'A mission-critical system prioritizes continuous operation because downtime prevents the mission from being completed.'],
  ['Formal methods & SDLC', 'A radiation-control defect could expose workers to harm. Which system classification applies most directly?', ['Business-critical', 'Mission-critical only', 'Safety-critical', 'Non-critical'], 2, 'Potential injury or loss of life makes the system safety-critical.'],
  ['Formal methods & SDLC', 'A team has a finite-state controller and wants to exhaustively check whether “the door is never unlocked while moving” holds. Which technique fits?', ['Model checking', 'Informal interview', 'Code beautification', 'Data conversion'], 0, 'Model checking explores reachable states to test a temporal or safety property.'],
  ['Formal methods & SDLC', 'Where does formalization prevent the most expensive rework?', ['After deployment only', 'During analysis and design, before defects propagate', 'Only during user training', 'Only after maintenance begins'], 1, 'Clarifying and checking requirements early prevents specification defects from flowing into code and tests.'],
  ['Formal methods & SDLC', 'A team proves every listed requirement but later discovers that password recovery was never specified. What does this show?', ['Proof guarantees completeness', 'Formal methods can expose inconsistencies but cannot guarantee no requirement was omitted', 'The system is automatically safe', 'Model checking creates missing requirements'], 1, 'Formal precision does not automatically make an incomplete set of requirements complete.'],
  ['Formal methods & SDLC', 'A low-risk address-book app needs a proportionate first formal-method step. Which is most reasonable?', ['Build a full physical simulation', 'Begin with a formal specification of key operations', 'Prove every CPU instruction', 'Skip requirements entirely'], 1, 'For lower integrity needs, a focused formal specification gives precision at a proportionate cost.'],
  ['Formal methods & SDLC', 'A specification has been formalized. The team now wants a rule-by-rule argument that an algorithm meets its goal. What comes next?', ['Formal proof', 'Marketing review', 'Data entry', 'Interface theming'], 0, 'Formal proof derives the required goal from the formalized assumptions using valid rules.'],
  ['Formal methods & SDLC', 'Why can discovering a contradiction during design be valuable?', ['It proves the code is already complete', 'It reveals incompatible requirements before implementation', 'It makes testing unnecessary', 'It converts a safety system into a business system'], 1, 'A contradiction exposes requirements that cannot all be satisfied at once.'],

  ['Propositional logic', 'Let P mean “payment succeeds” and R mean “a receipt is issued.” Which formula captures “If payment succeeds, then a receipt is issued”?', ['P ∧ R', 'P → R', 'R → P', 'P ⊕ R'], 1, 'The antecedent is payment success and the consequent is receipt issuance, so the formula is P → R.'],
  ['Propositional logic', 'A login rule says, “Access is granted only if the password is valid and the account is active.” With P and A, which condition is required?', ['P ∨ A', 'P ∧ A', 'P → ¬A', 'P ⊕ A'], 1, 'Both conditions must hold, so conjunction is the correct connective.'],
  ['Propositional logic', 'P is true and Q is false. What is the value of (P → Q) ∨ Q?', ['True', 'False', 'Both true and false', 'Undefined'], 1, 'P → Q is false for true-to-false, and false ∨ false is false.'],
  ['Propositional logic', 'Which formula is equivalent to “It is not the case that both the sensor and alarm are active”?', ['¬S ∧ ¬A', '¬S ∨ ¬A', 'S ∨ A', 'S → A'], 1, 'De Morgan’s law gives ¬(S ∧ A) ≡ ¬S ∨ ¬A.'],
  ['Propositional logic', 'A feature is enabled when exactly one of AdminMode and GuestMode is active. Which connective models this?', ['Conjunction', 'Inclusive OR', 'Exclusive OR', 'Implication'], 2, 'Exclusive OR is true exactly when one operand, but not both, is true.'],
  ['Propositional logic', 'What classification applies to (P → Q) ∨ (Q → P)?', ['Contradiction', 'Tautology', 'Contingency', 'Open formula'], 1, 'For every assignment, at least one of the two implications is true.'],
  ['Propositional logic', 'Which formula correctly expands P ↔ Q?', ['(P → Q) ∧ (Q → P)', '(P → Q) ∨ (Q → P)', 'P ∧ ¬Q', '¬P ∧ Q'], 0, 'A biconditional requires implication in both directions.'],
  ['Propositional logic', 'A server starts only when power is available. Let S mean “server starts” and P mean “power is available.” Which formula captures “S only if P”?', ['P → S', 'S → P', 'S ∧ ¬P', 'P ↔ S'], 1, '“S only if P” makes P a necessary condition for S, so S → P.'],
  ['Propositional logic', 'Which assignment makes P ∧ (P → ¬Q) ∧ Q true?', ['P=true, Q=true', 'P=true, Q=false', 'P=false, Q=true', 'No assignment'], 3, 'The conjunction requires P and Q true, but then P → ¬Q is false; therefore the formula is unsatisfiable.'],
  ['Propositional logic', 'A requirement says “The door is locked if and only if the lock indicator is on.” What must be checked?', ['Only indicator → locked', 'Only locked → indicator', 'Both directions', 'Neither direction'], 2, '“If and only if” requires both implications.'],

  ['Predicate logic', 'Let Student(x) and Registered(x) describe people. Which formula means “Every student is registered”?', ['∀x(Student(x) → Registered(x))', '∃x(Student(x) ∧ Registered(x))', '∀x(Student(x) ∧ Registered(x))', '∃x(Student(x) → Registered(x))'], 0, 'The conditional restricts the universal claim to objects that are students.'],
  ['Predicate logic', 'Which formula means “Some registered user is not an administrator”?', ['∀x(Registered(x) → ¬Admin(x))', '∃x(Registered(x) ∧ ¬Admin(x))', '¬∃x Registered(x)', '∃x(Admin(x) ∧ ¬Registered(x))'], 1, 'The existential witness must satisfy both registration and non-administrator status.'],
  ['Predicate logic', 'Negate ∀x(Valid(x) → Accepted(x)).', ['∀x(Valid(x) ∧ ¬Accepted(x))', '∃x(Valid(x) ∧ ¬Accepted(x))', '∃x(¬Valid(x) ∧ Accepted(x))', '∀x(Valid(x) → ¬Accepted(x))'], 1, 'A universal conditional fails exactly when some valid object is not accepted.'],
  ['Predicate logic', 'Let Owns(x,y) mean x owns y. Which formula says “Every customer owns at least one card”?', ['∀x(Customer(x) → ∃y(Card(y) ∧ Owns(x,y)))', '∃y(Card(y) → ∀x Owns(x,y))', '∀x∀y Owns(x,y)', '∃x(Customer(x) ∧ ∀y Owns(x,y))'], 0, 'Each customer may have a different card, so the existential quantifier is inside the universal one.'],
  ['Predicate logic', 'Why are ∀x∃y Reviews(x,y) and ∃y∀x Reviews(x,y) not equivalent?', ['The second formula has no variables', 'The first permits a different y for each x; the second requires one y for all x', 'Universal and existential quantifiers commute', 'The first is propositional logic'], 1, 'Quantifier order determines whether the witness may depend on the universally quantified object.'],
  ['Predicate logic', 'The domain contains all files. Which formula means “No encrypted file is public”?', ['∀x(Encrypted(x) → ¬Public(x))', '∃x(Encrypted(x) ∧ Public(x))', '∀x(Encrypted(x) ∧ Public(x))', '¬∀x Encrypted(x)'], 0, 'The formula rules out public status for every encrypted file.'],
  ['Predicate logic', 'In ∀x(Account(x) → Active(x,y)), which variable is free?', ['x only', 'y only', 'Both x and y', 'Neither x nor y'], 1, 'The universal quantifier binds x, while y lies outside any quantifier.'],
  ['Predicate logic', 'From ∀x Secure(x), which conclusion follows for a named server s?', ['¬Secure(s)', 'Secure(s)', '∃x ¬Secure(x)', 'No conclusion about s'], 1, 'Universal instantiation permits replacing x with the named object s.'],
  ['Predicate logic', 'Which English sentence matches ∃x∀y Faster(x,y) over bicycles?', ['Every bicycle is faster than itself only', 'There is a bicycle faster than every bicycle', 'Every bicycle is faster than some bicycle', 'No bicycle is faster than another'], 1, 'The existential bicycle x is chosen once and must be faster than every y.'],
  ['Predicate logic', 'Which formula states “Not every test passed”?', ['∀x(Test(x) → ¬Passed(x))', '∃x(Test(x) ∧ ¬Passed(x))', '¬∃x Test(x)', '∃x(Test(x) ∧ Passed(x))'], 1, 'Negating “every test passed” yields at least one test that did not pass.'],

  ['Sets, relations & sequences', 'Let A={1,2,3,4} and B={3,4,5}. What is A ∩ B?', ['{1,2}', '{3,4}', '{1,2,5}', '{1,2,3,4,5}'], 1, 'Intersection keeps only elements present in both sets.'],
  ['Sets, relations & sequences', 'Let A={1,2,3} and B={3,4}. What is A ∪ B?', ['{3}', '{1,2,4}', '{1,2,3,4}', '{1,2}'], 2, 'Union contains every distinct element that appears in either set.'],
  ['Sets, relations & sequences', 'Let A={a,b,c} and B={b,d}. What is A \\ B?', ['{b}', '{a,c}', '{a,c,d}', '{d}'], 1, 'Set difference removes from A every element also found in B.'],
  ['Sets, relations & sequences', 'How many elements are in P({a,b,c})?', ['3', '6', '8', '9'], 2, 'A three-element set has 2³ = 8 subsets.'],
  ['Sets, relations & sequences', 'If A={1,2} and B={x,y,z}, how many ordered pairs are in A × B?', ['5', '6', '8', '9'], 1, 'The Cartesian product has |A||B| = 2×3 = 6 pairs.'],
  ['Sets, relations & sequences', 'Which relation from {1,2} to {a,b} is a function?', ['{(1,a),(1,b)}', '{(1,a),(2,b)}', '{(1,a)} when the domain is {1,2}', '{(1,a),(2,a),(2,b)}'], 1, 'Each domain element appears exactly once as a first component.'],
  ['Sets, relations & sequences', 'The sequence 4, 7, 10, 13, ... has which next term?', ['15', '16', '17', '19'], 1, 'The common difference is 3, so the next term is 16.'],
  ['Sets, relations & sequences', 'The sequence 3, 6, 12, 24, ... follows which rule?', ['Add 3', 'Multiply by 2', 'Add consecutive odd numbers', 'Square each term'], 1, 'Each term is twice the previous term, so the sequence is geometric with ratio 2.'],
  ['Sets, relations & sequences', 'A database relation assigns each employee ID exactly one department, while departments may have many employees. What kind of mapping is this?', ['Not a function', 'A function from employee IDs to departments', 'A power set', 'A Cartesian product only'], 1, 'Each employee ID has exactly one image, which satisfies the function condition.'],
  ['Sets, relations & sequences', 'Given U={1,2,3,4,5} and A={2,4}, what is the complement of A relative to U?', ['{2,4}', '{1,3,5}', '{1,2,3,4,5}', '∅'], 1, 'The relative complement contains the universe elements not in A.'],

  ['Proof, testing & verification', 'To disprove “Every input preserves the invariant,” what is sufficient?', ['One valid counterexample', 'A thousand passing examples only', 'A restatement of the claim', 'A longer test plan'], 0, 'A universal claim is false if one valid case violates it.'],
  ['Proof, testing & verification', 'A proof assumes no largest prime exists and derives a contradiction. Which method is used?', ['Direct proof', 'Proof by contradiction', 'Black-box testing', 'Model animation'], 1, 'The proof temporarily assumes the negation of the claim and derives impossibility.'],
  ['Proof, testing & verification', 'To prove a property for every natural number n, which pair is essential?', ['Input and output', 'Base case and inductive step', 'Union and intersection', 'Verification and validation'], 1, 'Mathematical induction establishes the first case and then proves n implies n+1.'],
  ['Proof, testing & verification', 'A test checks login behavior using only usernames, passwords, and visible messages. Which approach is this?', ['White-box testing', 'Black-box testing', 'Proof by induction', 'Static typing'], 1, 'The tester exercises observable behavior without using internal code structure.'],
  ['Proof, testing & verification', 'A tester deliberately executes both outcomes of every decision in the source code. Which approach is this?', ['Validation interview', 'White-box branch testing', 'Black-box equivalence partitioning', 'Requirements elicitation'], 1, 'Branch coverage depends on knowledge of the implementation structure.'],
  ['Proof, testing & verification', 'A system passes its written specification but users cannot complete the intended task. Which activity failed?', ['Verification', 'Validation', 'Syntax checking', 'Set construction'], 1, 'The product was built according to its specification but was not the right product for the real need.'],
  ['Proof, testing & verification', 'Which is the strongest test case for a withdrawal limit of 1 to 500 inclusive?', ['Only 250', '0, 1, 500, and 501', 'Only 1 and 500', 'A random positive number'], 1, 'Boundary-value tests cover just below, at, and just above the permitted limits.'],
  ['Proof, testing & verification', 'A requirement says balance must never be negative. Which test most directly targets the invariant?', ['Deposit into an empty account', 'Attempt a withdrawal larger than the current balance', 'Change the account holder’s name', 'Print a monthly statement'], 1, 'An excessive withdrawal is the operation most likely to violate the nonnegative-balance invariant.'],
  ['Proof, testing & verification', 'What is missing from “Enter 5 and check it works” as a test case?', ['An expected result and precise preconditions', 'A programming language', 'A mathematical induction proof', 'A second test team'], 0, 'A reproducible test case needs context, actions or inputs, and an explicit expected outcome.'],
  ['Proof, testing & verification', 'A proof checker confirms that an implementation preserves every stated invariant. What question is it answering?', ['Does the system satisfy the formal specification?', 'Do users like the interface?', 'Was every requirement elicited?', 'Is the project profitable?'], 0, 'Invariant preservation is a verification question about conformance to the formal model.'],

  ['Z notation & schemas', 'In a Z operation, `name? : NAME` indicates that name is:', ['A post-state variable', 'An input', 'An output', 'An invariant'], 1, 'The question-mark decoration identifies input supplied to the operation.'],
  ['Z notation & schemas', 'In a search operation, `date! : DATE` indicates that date is:', ['An input', 'An unchanged state', 'An output', 'A precondition'], 2, 'The exclamation-mark decoration identifies a produced output.'],
  ['Z notation & schemas', 'An operation only reads the BirthdayBook and must not change it. Which decoration is appropriate?', ['Δ BirthdayBook', 'Ξ BirthdayBook', 'BirthdayBook?', 'BirthdayBook!'], 1, 'Ξ includes the state while asserting that its components remain unchanged.'],
  ['Z notation & schemas', 'An AddBirthday operation changes the birthday mapping. Which decoration is appropriate?', ['Ξ BirthdayBook', 'Δ BirthdayBook', '¬BirthdayBook', '∀BirthdayBook'], 1, 'Δ indicates that the operation may produce a new state.'],
  ['Z notation & schemas', 'Why is `name? ∉ known` a sensible precondition for AddBirthday?', ['It prevents duplicate names in the mapping', 'It requires the name to be deleted first', 'It turns the operation into a query', 'It makes every date unique'], 0, 'Adding a name already in the domain would conflict with the intended new-entry operation.'],
  ['Z notation & schemas', 'Why is `name? ∈ known` required before SearchBirthday?', ['The lookup must be defined for the supplied name', 'The operation must add a new person', 'The state must change', 'Every known person must share one date'], 0, 'Function application birthday(name?) requires the name to lie in the function’s domain.'],
  ['Z notation & schemas', 'Given `birthday = {Ada ↦ 5/6, Tobi ↦ 9/2}`, what is `dom birthday`?', ['{5/6, 9/2}', '{Ada, Tobi}', '{Ada, 5/6}', '{Tobi, 9/2}'], 1, 'The domain of the mapping is the set of names on the left of each maplet.'],
  ['Z notation & schemas', 'After adding `Mina ↦ 12/8`, which post-state equation is appropriate?', ['birthday′ = birthday ∪ {Mina ↦ 12/8}', 'birthday′ = birthday \\ {Mina ↦ 12/8}', 'birthday = ∅', 'known′ = known \\ {Mina}'], 0, 'The post-state extends the existing mapping with the new maplet.'],
  ['Z notation & schemas', 'A state schema declares `known : ℙ NAME` and `birthday : NAME ↛ DATE`. Which invariant connects them?', ['known = ran birthday', 'known = dom birthday', 'known = ∅ always', 'birthday = dom known'], 1, 'The set of known names is exactly the domain of the birthday mapping.'],
  ['Z notation & schemas', 'The RemindBirthday operation returns all names whose birthday equals today?. Which set comprehension fits?', ['{n : known | birthday(n) = today?}', '{d : DATE | d = known}', '{n : known | birthday(n) ≠ today?}', 'dom today?'], 0, 'The comprehension filters known names by the predicate that their mapped date equals the input date.'],
]

const challengeQuestions = challenges.map(([topic, question, options, answer, explanation], index) => ({
  id: sections.length * 10 + index + 1,
  topic,
  difficulty: 'Challenge',
  question,
  options,
  answer,
  explanation,
}))

const advancedQuestions = cos412AdvancedQuestions.map((question, index) => ({
  ...question,
  id: coreQuestions.length + challengeQuestions.length + index + 1,
}))

export const cos412QuestionBank = [...coreQuestions, ...challengeQuestions, ...advancedQuestions]

export const cos412Topics = sections.map(({ topic }) => ({
  topic,
  count: cos412QuestionBank.filter((question) => question.topic === topic).length,
}))

if (cos412QuestionBank.length !== 300) {
  throw new Error(`Expected 300 COS 412 questions, received ${cos412QuestionBank.length}.`)
}
