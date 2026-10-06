# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React with Vite, selected by the user for a lightweight static deployment to Vercel.

## Users

Students preparing for a multiple-choice computer-based examination in COS 438 Artificial Intelligence II.

## Product Purpose

Turn the supplied course PDF into a focused practice environment. Each attempt randomly selects 50 questions from a bank of 200, lets the student answer at their own pace, and provides a clear score and review at the end.

## Positioning

The question bank is grounded directly in the supplied lecturer's course material rather than a generic AI syllabus.

## Operating Context

The app is used for independent exam practice on desktop or mobile. Attempts are untimed. All state and scoring run locally in the browser.

## Capabilities and Constraints

- Maintain a bank of exactly 200 multiple-choice questions.
- Randomly select 50 distinct questions for every new attempt.
- Use four answer options per question with one correct answer.
- Provide navigation, progress, completion, scoring, and answer review.
- Give launch, quiz, submission, results, answer review, and revision their own browser URLs.
- Provide a searchable revision bank containing all 200 questions, correct answers, and explanations.
- Mix core recall with scenario, comparison, application, calculation, and inference questions.
- No backend, accounts, remote database, or server-side state.
- Keep the production bundle small and compatible with static Vercel deployment.

## Evidence on Hand

- `AI_Dr. Ugwuishiwupart.pdf`: a 141-page COS 438 Artificial Intelligence II course document.
- The PDF covers propositional and predicate logic, machine learning, NLP, theorem proving and resolution, monotonic and non-monotonic inference, probability, and Bayes' theorem.
- No existing brand assets, testimonials, or performance claims were supplied.

## Product Principles

- Stay faithful to the supplied course material.
- Keep exam practice fast, focused, and free of distractions.
- Make progress and unanswered questions easy to understand at a glance.
- Give useful feedback after submission without exposing answers during the attempt.
- Work well on modest devices and unreliable connections after the initial load.

## Accessibility & Inclusion

The interface must support keyboard navigation, visible focus, readable contrast, reduced motion, and responsive layouts for mobile and desktop.
