---
name: Prep50 Neural Signal Lab
description: A midnight learning instrument for source-aligned COS 438 exam practice.
colors:
  laboratory-night: "#060b1f"
  rail-night: "#080e25"
  panel-deep: "#0d1532"
  panel-raised: "#111c40"
  text-bright: "#f5f7ff"
  text-muted: "#9aa9ca"
  signal-line: "#27355e"
  signal-cyan: "#35d6ff"
  signal-cyan-hover: "#75e5ff"
  connection-violet: "#8466ff"
  current-pink: "#ff5daf"
  correct-green: "#28d8a1"
  incorrect-red: "#ff6575"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(3.6rem, 7vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1.28
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 760
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  signal-label: "5px"
  index: "8px"
  mark: "10px"
  field: "11px"
  control: "12px"
  option: "13px"
  plate: "18px"
  stage: "24px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  4xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.laboratory-night}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.signal-cyan-hover}"
    textColor: "{colors.laboratory-night}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.panel-raised}"
    textColor: "#eaf0ff"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  answer-option:
    backgroundColor: "#0a122c"
    textColor: "#dce4f8"
    typography: "{typography.body}"
    rounded: "{rounded.option}"
    padding: "11px 16px 11px 11px"
    height: "66px"
  answer-option-selected:
    backgroundColor: "#0a203b"
    textColor: "#dce4f8"
    rounded: "{rounded.option}"
  question-plate:
    backgroundColor: "{colors.panel-deep}"
    textColor: "#eef2ff"
    rounded: "{rounded.plate}"
    padding: "clamp(26px, 4.6vw, 54px)"
  index-button:
    backgroundColor: "{colors.panel-deep}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.index}"
  revision-field:
    backgroundColor: "{colors.panel-deep}"
    textColor: "#eef2ff"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "46px"
  answer-toggle:
    backgroundColor: "#101b3d"
    textColor: "{colors.signal-cyan}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "46px"
  difficulty-tag:
    backgroundColor: "#122144"
    textColor: "{colors.signal-cyan}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 7px"
---

# Design System: Prep50 Neural Signal Lab

## Overview

**Creative North Star: "The Neural Signal Lab"**

Prep50 is a midnight learning instrument: a quiet near-black laboratory where the student's progress appears as a network of live signals. The interface is compact, technical, and legible without becoming clinical; it turns repeated practice into the visible strengthening of connections across eight AI course areas.

The world stays flat and high-contrast wherever sustained reading happens, then spends glow selectively on active signals, focus, and state change. Manrope gives every role one coherent geometric voice, while cyan, violet, and pink separate comprehension, connection, and attention without competing for dominance.

**Key Characteristics:**

- Midnight laboratory surfaces with crisp, cool text.
- Cyan-led action and progress signals.
- Violet connections and pink current-record emphasis.
- Flat reading plates with restrained, state-driven glow.
- Compact geometric typography, tabular numeric data, and route-stable study states.

## Colors

The palette behaves like instrumentation on a dark bench: neutral surfaces disappear, while a small set of luminous signals communicates meaning.

### Primary

- **Signal Cyan:** Marks available action, answered progress, active topic cues, focus, and the primary completion path.

### Secondary

- **Connection Violet:** Describes relationships and connective progress, especially network lines, gradients, and scroll affordances.

### Tertiary

- **Current Pink:** Identifies the current record and rare moments requiring immediate visual attention.
- **Correct Green:** Appears in explicit answer-reveal contexts after submission or in revision, and in genuine ready/success status.
- **Incorrect Red:** Appears only after submission to identify an incorrect response.

### Neutral

- **Laboratory Night:** The surrounding canvas and the darkest text-on-signal color.
- **Rail Night:** A subtly differentiated navigation and course-information rail.
- **Deep Panel:** The primary reading surface for questions, confirmation, and index cells.
- **Raised Panel:** The secondary-control surface and a stronger nested layer.
- **Bright Text:** The high-contrast reading and heading color.
- **Muted Text:** Supporting copy, metadata, counts, and secondary explanation.
- **Signal Line:** Dividers, dormant controls, outlines, and quiet network structure.

### Named Rules

**The Semantic Signal Rule.** Cyan means comprehension or available action, violet means connection, pink means current attention, and green or red must not expose correctness during an active attempt; revision may use green only while answers are intentionally shown.

**The Rarity Makes It Bright Rule.** Keep luminous color on a minority of each screen so every signal remains meaningful against the laboratory night.

## Typography

**Display Font:** Manrope Variable (with sans-serif fallback)  
**Body Font:** Manrope Variable (with sans-serif fallback)  
**Label Font:** Manrope Variable (with sans-serif fallback)

**Character:** One variable grotesk carries the entire product with compact, legible geometry. Scale, weight, spacing, and numeric alignment create hierarchy; ornamental type changes do not.

### Hierarchy

- **Display:** Tight, heavy launch and score statements use the fluid display role and intentionally compressed leading.
- **Headline:** Questions and major state messages use the fluid headline role, limited to a readable measure of about 29 characters on the quiz plate.
- **Body:** Answers and supporting explanations use the body role; long introductory and explanatory copy opens to roughly 57 characters with more generous leading.
- **Label:** Metadata, topic labels, index counts, and status text use the compact label role; tracked uppercase is reserved for short network labels.
- **Numeric Data:** Scores, progress, stats, and question numbers use tabular figures so state changes do not cause visual jitter.

### Named Rules

**The One Instrument Rule.** Use Manrope for every interface and reading role; hierarchy comes from variable weight, scale, and spacing rather than introducing another family.

**The Tight-Loud, Open-Quiet Rule.** Large statements use compressed leading and tracking, while body copy uses relaxed leading for sustained reading.

## Layout

The launch screen uses a compact 178px course rail beside a flexible main stage. Its hero is capped at 1160px and balances a slightly narrower copy column against the neural network. A compact four-option control lets the student choose 10, 20, 30, or 50 questions; its cyan selected state updates the rail, attempt fact, and primary action copy immediately. The quiz uses a 1120px container with a flexible reading column and a 250px sticky question index; reading surfaces keep their own internal rhythm rather than inheriting dashboard density. The revision bank also uses a 1120px container, but replaces the quiz split with a full-width, filterable reading ledger.

At 900px, the rail compresses to 112px, the hero becomes an even two-column split, and the question index moves into normal flow with ten columns. At 680px, the rail becomes a 66px course bar, the hero stacks copy before network, the attempt-size control spans the copy width with 42px touch targets, the quiz index returns to five columns inside a bounded 228px scroll region, and submission remains in document flow. Touch actions become full-width where the content sequence benefits from an unambiguous next step.

Spacing follows a compact 4px-derived rhythm, with 8–16px used inside controls, 24–32px between local groups, and 48–64px for major regions. Containers preserve at least 12px of mobile edge clearance and 20–24px on wider quiz views.

### Routed Experience

- **`/`:** Launch, product orientation, and entry points for a new attempt or the complete revision bank.
- **`/quiz`:** The active 10-, 20-, 30-, or 50-question attempt with question navigation and progress state.
- **`/submit`:** The explicit answered/open-record checkpoint before scoring.
- **`/results`:** The submitted score, topic ledger, and onward actions.
- **`/review`:** The submitted attempt replay with correct, incorrect, and explanation states exposed.
- **`/revision`:** The independent, searchable 300-question bank with topic filtering and answer disclosure.

An active attempt persists for the browser tab session: its randomized question IDs, selected answers, and submitted status survive reloads and route changes without implying an account or cross-device history. Results and review are gated by submitted state; when an in-progress attempt tries to open either route, the interface replaces it with `/quiz`. Starting a fresh attempt from a protected result state also replaces that stale history entry so Back does not reopen obsolete results.

### Revision Layout

The revision surface places a 70px translucent navigation bar above a large introduction and live result count. A second sticky tool row sits directly below it with a flexible search field, narrower topic selector, and answer-visibility toggle. Each record is a flat two-column ledger row—72px number rail plus content—with two-column answer choices and an optional green explanation panel. Off-screen records use content visibility containment so the full 300-question page stays light to scroll.

At 680px, the revision header compresses to 62px and hides the centered wordmark, the introduction and count stack, and the tool row becomes a two-column grid with search spanning both columns. Record number and content stack into one column; answer options and the revealed explanation also become single-column reading flows.

**The Reading Before Dashboard Rule.** Give the current question the flexible column and strongest surface; the index supports navigation but never competes with the reading task.

**The Uncovered Controls Rule.** Mobile index and submission controls remain independently reachable in normal document flow, with no fixed overlay covering focus targets.

**The Route Keeps Its Promise Rule.** Keep launch, attempt, submission, results, review, and revision at their established URLs; redirect only when protected result content lacks the submitted state required to make it truthful.

## Elevation & Depth

The system is flat by default and uses tonal layering, one-pixel cool borders, and sparse shadow rather than stacked cards. Large feature stages and reading plates receive deep ambient shadows; luminous signals receive local colored glow; sticky headers use restrained translucency and blur to preserve context while scrolling.

### Shadow Vocabulary

- **Primary Action Lift** (`0 9px 28px rgba(53,214,255,.2)`): Gives the main action a low cyan halo at rest.
- **Primary Action Hover** (`0 13px 34px rgba(53,214,255,.28)`): Increases the same halo as the control rises by 1px.
- **Reading Plate** (`0 24px 64px rgba(0,0,0,.24)`): Separates a long-form question surface from the night canvas.
- **Feature Stage** (`0 32px 80px rgba(0,0,0,.28)`): Grounds the launch network without making it look like a floating card.
- **Current Record Ring** (`0 0 0 2px var(--night), 0 0 0 4px var(--pink)`): Keeps the current question visible around any answered-state fill.

### Named Rules

**The Glow Follows State Rule.** Glow belongs to live nodes, focus, the current record, and primary action—not to every border or container.

**The Flat Reading Rule.** Question and explanation surfaces use contrast and thin rules first; reserve elevation for separating an entire reading plate from the surrounding canvas.

## Shapes

The form language is gently engineered: compact controls use 8–13px radii, reading plates use 18–20px radii, and the large network stage uses a 24px radius. Squares and circles are functional signals—the Q mark, option letters, index cells, node points, and status lights—rather than decoration. Borders stay one pixel and cool-toned; clipping is reserved for progress tracks, network stages, and bounded mobile scrolling.

**The Radius Has Rank Rule.** Small controls stay tighter than reading plates, and reading plates stay tighter than the signature network stage.

## Components

### Buttons

Buttons feel direct and instrument-like, with enough softness for touch use and a short physical response.

- **Shape:** Gently rounded rectangle (12px radius), at least 52px high, with 22px horizontal padding.
- **Primary:** Signal Cyan with Laboratory Night text and a restrained cyan lift.
- **Hover / Focus:** Brighten the cyan, translate upward by 1px, and strengthen the halo over 160ms; keyboard focus uses a 3px translucent cyan outline offset by 3px.
- **Secondary:** Raised Panel with Bright Text and an inset Signal Line border; hover lightens only the surface.
- **Text Action:** Transparent, compact, and left-aligned with an icon; reserve it for exit or subordinate navigation.

### Cards / Containers

Reading containers feel like stable work plates, not collectible cards.

- **Corner Style:** 18px for question plates, 20px for confirmation, and 24px for the network stage.
- **Background:** Deep Panel for reading and confirmation; a darker dedicated stage surface for the network.
- **Shadow Strategy:** Use the Reading Plate or Feature Stage shadow only at the outer container level.
- **Border:** Signal Line appears when a plate needs a firm boundary; the question plate relies primarily on tonal separation.
- **Internal Padding:** Fluid padding from 26px to 54px on desktop; 16–24px on narrow screens.

### Inputs / Fields

Attempt answer rows behave as large radio fields rather than generic form inputs. Revision controls use the same dark surfaces and cyan focus language at a denser, browsing-oriented scale.

- **Style:** Each row is at least 66px high with a 13px radius, one-pixel Signal Line border, dark answer surface, 42px option marker, and a three-column label layout.
- **Hover:** Shift 2px right while brightening both surface and border over 140ms.
- **Selected:** Signal Cyan border and marker, with a deeper cyan-tinted surface.
- **Focus:** The hidden radio transfers a visible 3px focus outline to the option marker.
- **Review:** Correct uses green border, surface, marker, and check; the chosen incorrect answer uses the equivalent red treatment.
- **Revision Search:** A 46px-high search field with an 11px radius, Deep Panel fill, Signal Line border, and contextual placeholder; focus changes the border to cyan and adds a low cyan ring.
- **Topic Select:** Matches the search field exactly and filters to one of the twelve course areas or all topics.
- **Answer Toggle:** A 46px-high outlined control with cyan text and `aria-pressed`; it changes between “Show answers” and “Hide answers” for the complete filtered list.

### Chips

Difficulty is compact metadata, not a scoring color scale. **Core**, **Applied**, and **Challenge** all use the same full pill shape, cyan text, and dark-blue fill so the label communicates level without competing with correctness colors.

### Navigation

The sticky quiz header is a quiet 70px translucent band with exit at the leading edge, centered identity, and answered count at the trailing edge. The question index uses five compact square cells per row on desktop, expands to ten columns in the intermediate single-column layout, then returns to five within the bounded mobile scroller. Cyan fill means answered, the pink outer ring means current, and review replaces cyan with green or red.

The revision header uses the same three-part band with Home, centered identity, and a compact Start practice action. On mobile the identity drops out, leaving the two destination actions clear. Browser history is part of the navigation model: route changes reset scroll to the top, while Back and Forward restore the matching surface.

### Revision Records

Revision records are separated by Signal Line rules rather than individual card shells. Each record shows a zero-padded bank ID, topic, difficulty pill, question, four lettered options, and—when answers are visible—a green correct option plus an explanation panel labeled with the answer letter. Search covers question text, explanations, and option text; the live shown-count and polite list updates make filtering legible. A no-results state asks the student to clear the search or choose another course area.

### Neural Network Stage

The launch signature is a 24px-radius, 520px-tall instrument panel containing fine cool connection lines, softly pulsing cyan/violet/pink nodes, sparse topic labels, and a translucent coverage readout. The network breathes gently on lightweight SVG and CSS; reduced-motion preference collapses animation to an effectively static frame.

## Do's and Don'ts

### Do:

- **Do** keep the current question visually dominant and the index subordinate.
- **Do** use semantic signal colors consistently across nodes, progress, focus, and review.
- **Do** keep reading surfaces flat, crisp, and high-contrast.
- **Do** preserve visible keyboard focus and reduced-motion behavior.
- **Do** use tabular figures for scores, counts, progress, and record numbers.
- **Do** keep revision search, topic filtering, answer visibility, and live result count understandable as one coordinated toolset.

### Don't:

- **Don't** use green or red as decorative accents or expose correctness during an active attempt.
- **Don't** put glow on every card, divider, or label; glow must communicate live state.
- **Don't** introduce a second typeface or a soft editorial aesthetic into the lab instrument.
- **Don't** let a sticky or fixed mobile action cover index controls, content, or focus rings.
- **Don't** turn the question surface into a dense dashboard or shrink answer rows below comfortable touch size.
- **Don't** assign separate decorative colors to Core, Applied, and Challenge; correctness colors retain semantic priority.
