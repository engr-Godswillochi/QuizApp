# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React with Vite, selected by the user for a lightweight static deployment to Vercel.

## Users

Students preparing for multiple-choice computer-based examinations in COS 438 Artificial Intelligence II and COS 412 Formal Methods.

## Product Purpose

Turn the supplied course documents into a focused multi-course practice environment. Each attempt randomly selects 10, 20, 30, or 50 questions from the chosen course bank, lets the student answer at their own pace, and provides a clear score and review at the end.

## Positioning

Each question bank is grounded directly in the supplied course material. COS 412 emphasizes practical formalization, logic evaluation, proof strategy, and Z notation rather than definition-only recall.

## Operating Context

The app is used for independent exam practice on desktop or mobile. Attempts are untimed. All state and scoring run locally in the browser.

## Capabilities and Constraints

- Maintain separate banks of 300 COS 438 questions and 300 COS 412 questions.
- Let the student choose 10, 20, 30, or 50 questions, then randomly select that many distinct questions for the attempt.
- Use four answer options per question with one correct answer.
- Provide navigation, progress, completion, scoring, and answer review.
- Give launch, quiz, submission, results, answer review, and revision their own browser URLs.
- Provide a searchable revision bank per course containing every question, correct answer, and explanation.
- Mix core recall with scenario, comparison, application, calculation, and inference questions.
- Give each course its own launch, attempt, submission, results, review, revision, and browser-local session state.
- No backend, accounts, remote database, or server-side state.
- Keep the production bundle small and compatible with static Vercel deployment.

## Evidence on Hand

- `AI_Dr. Ugwuishiwupart.pdf`: a 141-page COS 438 Artificial Intelligence II course document.
- The PDF covers propositional and predicate logic, machine learning, NLP, theorem proving and resolution, monotonic and non-monotonic inference, probability, and Bayes' theorem.
- COS 412 Formal Methods lecture notes and study guides covering the SDLC, propositional and predicate logic, sets, proof, testing, and Z notation.
- No existing brand assets, testimonials, or performance claims were supplied.

## Product Principles

- Stay faithful to the supplied course material.
- Keep exam practice fast, focused, and free of distractions.
- Make progress and unanswered questions easy to understand at a glance.
- Give useful feedback after submission without exposing answers during the attempt.
- Work well on modest devices and unreliable connections after the initial load.

## Accessibility & Inclusion

The interface must support keyboard navigation, visible focus, readable contrast, reduced motion, and responsive layouts for mobile and desktop.
