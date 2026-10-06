const agentSections = [
  {
    topic: 'Agent foundations',
    facts: [
      ['Agent', 'Anything that perceives its environment through sensors and acts upon that environment through actuators.'],
      ['Sensor', 'A mechanism through which an agent receives information from its environment.'],
      ['Actuator', 'A mechanism through which an agent changes or acts upon its environment.'],
      ['Percept', 'The content of an agent’s sensory input at one particular instant.'],
      ['Percept sequence', 'The complete history of everything an agent has perceived.'],
      ['Agent function', 'An abstract mapping from every possible percept sequence to an action.'],
      ['Agent program', 'The concrete implementation that runs on an agent’s physical architecture.'],
      ['Architecture', 'The computing device with physical sensors and actuators on which an agent program runs.'],
      ['Agent equation', 'The idea that an agent consists of an architecture combined with a program.'],
      ['Vacuum world', 'A simple two-location environment used to illustrate how agents perceive and act.'],
      ['Table-driven agent', 'An agent that looks up an action for the entire percept history in a precomputed table.'],
      ['Agent behavior', 'The actions produced after receiving a sequence of percepts.'],
      ['Environment', 'Everything external to the agent that can be sensed or affected by its actions.'],
      ['Autonomous agent', 'An agent whose behavior is determined substantially by its own experience.'],
      ['Built-in knowledge', 'Prior information supplied by the designer before the agent begins operating.'],
      ['Experience', 'Information gained as the agent perceives results and interacts with its environment.'],
      ['Information gathering', 'Taking actions specifically to obtain percepts that improve later decisions.'],
      ['Exploration', 'Trying actions to discover how an unfamiliar environment behaves.'],
      ['Embodied agent', 'An agent whose sensors and actuators connect its program to a physical environment.'],
      ['Software agent', 'An agent that receives and produces symbolic or digital inputs and outputs.'],
    ],
  },
  {
    topic: 'Rationality & PEAS',
    facts: [
      ['Rational agent', 'An agent that selects the action expected to maximize its performance measure given its evidence and knowledge.'],
      ['Performance measure', 'The criterion used to evaluate the success of an agent’s behavior.'],
      ['Expected performance', 'The predicted value of an action’s outcomes rather than a guarantee of perfect success.'],
      ['Rational action', 'The action expected to do best according to the performance measure and available evidence.'],
      ['Omniscience', 'Knowing the actual outcome of every possible action in advance.'],
      ['Rationality', 'Choosing well from what has been perceived and learned, without requiring perfect foresight.'],
      ['Prior knowledge', 'What the agent already knows about the environment before the current percept sequence.'],
      ['Available actions', 'The set of actions the agent is capable of performing in its environment.'],
      ['Learning', 'Improving future behavior by using information obtained from experience.'],
      ['PEAS', 'A task-environment specification covering performance measure, environment, actuators, and sensors.'],
      ['PEAS performance component', 'The part of a task specification that states what counts as success.'],
      ['PEAS environment component', 'The objects, conditions, and other agents with which the agent interacts.'],
      ['PEAS actuator component', 'The actions and output mechanisms available to the agent.'],
      ['PEAS sensor component', 'The channels through which the agent observes its task environment.'],
      ['Taxi performance measure', 'A combination such as safety, speed, legality, passenger comfort, and profit.'],
      ['Taxi environment', 'Roads, traffic, pedestrians, passengers, weather, and other relevant surroundings.'],
      ['Taxi actuators', 'Controls such as steering, accelerator, brake, signal, horn, and display.'],
      ['Taxi sensors', 'Inputs such as cameras, speedometer, GPS, engine sensors, and passenger controls.'],
      ['Medical diagnosis agent', 'A system that maps patient information and tests to diagnoses, treatments, or referrals.'],
      ['Interactive tutor', 'An agent whose success includes improving a student’s learning while choosing exercises and feedback.'],
    ],
  },
  {
    topic: 'Task environments',
    facts: [
      ['Fully observable environment', 'A setting where sensors provide all state information relevant to choosing an action.'],
      ['Partially observable environment', 'A setting where relevant state information is missing or affected by noisy sensors.'],
      ['Deterministic environment', 'A setting where the next state is completely determined by the current state and the agent’s action.'],
      ['Stochastic environment', 'A setting where outcomes include uncertainty not fixed by the current state and action.'],
      ['Strategic environment', 'A multiagent setting that is deterministic except for the uncertain actions of other agents.'],
      ['Episodic environment', 'A setting where each experience and action can be handled independently of later episodes.'],
      ['Sequential environment', 'A setting where a current decision can affect all future decisions and outcomes.'],
      ['Static environment', 'A setting that does not change while the agent is deciding what to do.'],
      ['Dynamic environment', 'A setting that can change while the agent is deliberating.'],
      ['Semidynamic environment', 'A setting whose world stays fixed while the agent deliberates but whose performance score changes with time.'],
      ['Discrete environment', 'A setting with a finite or countable set of distinct states, percepts, or actions.'],
      ['Continuous environment', 'A setting involving continuously varying states, time, percepts, or actions.'],
      ['Single-agent environment', 'A setting in which only one agent’s actions need to be considered.'],
      ['Multiagent environment', 'A setting containing other agents whose behavior affects outcomes.'],
      ['Competitive environment', 'A multiagent setting where one agent’s improved outcome can conflict with another’s.'],
      ['Cooperative environment', 'A multiagent setting where agents can work together toward compatible outcomes.'],
      ['Known environment', 'A setting whose action outcomes or governing rules are already understood by the agent.'],
      ['Unknown environment', 'A setting where the agent must learn how actions affect the world.'],
      ['Task-environment dimension', 'One of the properties used to classify a problem and guide agent design.'],
      ['Hardest task class', 'A partially observable, multiagent, stochastic, sequential, dynamic, continuous, and unknown environment.'],
    ],
  },
  {
    topic: 'Agent architectures',
    facts: [
      ['Simple reflex agent', 'An agent that selects actions from the current percept using condition-action rules.'],
      ['Condition-action rule', 'A rule of the form “if a condition is recognized, then perform an action.”'],
      ['Model-based reflex agent', 'An agent that maintains internal state to track aspects of the world it cannot currently observe.'],
      ['Internal state', 'Stored information about unobserved parts of the current world derived from percept history.'],
      ['Transition model', 'Knowledge of how the world changes on its own and in response to the agent’s actions.'],
      ['Sensor model', 'Knowledge of how states of the world generate the percepts received by the agent.'],
      ['Goal-based agent', 'An agent that considers desired states when choosing among possible actions.'],
      ['Goal', 'A description of a state of affairs the agent is trying to achieve.'],
      ['Search', 'Examining possible action sequences to find one that reaches a goal.'],
      ['Planning', 'Reasoning about future action sequences using a model of their consequences.'],
      ['Utility-based agent', 'An agent that compares states by desirability and chooses to maximize expected utility.'],
      ['Utility function', 'A mapping from a state or outcome to a number representing its desirability.'],
      ['Expected utility', 'The probability-weighted desirability of the possible outcomes of an action.'],
      ['Learning agent', 'An agent that improves its performance through experience.'],
      ['Performance element', 'The learning-agent component that selects external actions.'],
      ['Learning element', 'The component that changes the performance element to improve future behavior.'],
      ['Critic', 'The component that evaluates behavior against a fixed performance standard and supplies feedback.'],
      ['Problem generator', 'The component that proposes exploratory actions likely to produce informative experience.'],
      ['Atomic representation', 'A representation that treats each world state as indivisible, with no internal structure.'],
      ['Factored representation', 'A representation that describes a state using a set of variables and their values.'],
    ],
  },
]

const rotate = (items, amount) => {
  const offset = amount % items.length
  return [...items.slice(offset), ...items.slice(0, offset)]
}

const makeStem = (variant, term, definition) => {
  const termStems = [
    `An AI designer describes “${definition}” Which concept belongs in the design notes?`,
    `Identify the agent concept illustrated here: ${definition}`,
    `A system specification includes this line: “${definition}” What is it defining?`,
    `Which label makes this statement technically precise? “${definition}”`,
  ]
  const definitionStems = [
    `Which statement captures the role of ${term}?`,
    `During an agent-design review, what would ${term} mean?`,
    `Choose the most accurate account of ${term}.`,
    `How should a student distinguish ${term} in an exam scenario?`,
  ]
  return variant % 2 === 0 ? termStems[variant / 2] : definitionStems[(variant - 1) / 2]
}

const coreAgentQuestions = agentSections.flatMap((section, sectionIndex) =>
  section.facts.map(([term, definition], factIndex) => {
    const id = 201 + sectionIndex * 20 + factIndex
    const variant = factIndex % 8
    const asksForTerm = variant % 2 === 0
    const distractorFacts = [3, 8, 13].map((step) => section.facts[(factIndex + step) % section.facts.length])
    const correct = asksForTerm ? term : definition
    const options = rotate(
      [correct, ...distractorFacts.map((fact) => (asksForTerm ? fact[0] : fact[1]))],
      id % 4,
    )

    return {
      id,
      topic: section.topic,
      difficulty: factIndex % 4 === 3 ? 'Applied' : 'Core',
      question: makeStem(variant, term, definition),
      options,
      answer: options.indexOf(correct),
      explanation: `${term}: ${definition}`,
    }
  }),
)

const challengeAgentQuestions = [
  ['Agent foundations', 'A delivery robot has received camera frames P1, P2, and P3. Its agent function may base the next action on:', ['Only P3', 'Only its last action', 'The complete sequence P1, P2, P3', 'The robot’s actuators but not its sensors'], 2, 'An agent function maps the complete percept sequence, not merely the latest percept, to an action.'],
  ['Agent foundations', 'Two robots run identical programs, but one has wheels and the other has legs. What differs most directly?', ['Their architecture', 'Their percept sequence by definition', 'Their performance measure', 'The meaning of rationality'], 0, 'Architecture includes the physical computing platform, sensors, and actuators on which the program runs.'],
  ['Agent foundations', 'Why is a giant table of actions for every possible percept history usually impractical?', ['Agent functions cannot be mathematical', 'The table grows explosively with percept-sequence length', 'Sensors never repeat a percept', 'Tables can represent only random behavior'], 1, 'The number of possible percept histories grows extremely quickly, making an explicit lookup table infeasible.'],
  ['Agent foundations', 'A robot deliberately enters an unfamiliar corridor to learn where it leads. This action is best described as:', ['Exploration', 'Omniscience', 'A sensor model', 'A performance measure'], 0, 'Exploration sacrifices some immediate certainty to gain useful experience about the environment.'],
  ['Agent foundations', 'A spam-filter agent processes email headers and moves messages between folders. In agent terms, the folders it changes are part of:', ['Only its percept sequence', 'Its environment', 'Its agent function', 'Its prior knowledge only'], 1, 'The environment is the external world the agent senses and affects, including the mail store in this software setting.'],

  ['Rationality & PEAS', 'A rational delivery drone chooses the safest route using current weather data, but an unforeseen gust causes failure. Was the choice necessarily irrational?', ['Yes, rational agents always succeed', 'Yes, failure proves the performance measure was absent', 'No, rationality maximizes expected performance from available evidence', 'No, because outcomes never matter'], 2, 'Rationality concerns the expected result given available evidence, not hindsight or guaranteed success.'],
  ['Rationality & PEAS', 'Which item belongs under E rather than S in a PEAS description of an autonomous taxi?', ['Cameras', 'GPS receiver', 'Pedestrians and roads', 'Speedometer'], 2, 'Pedestrians and roads are part of the environment; the other options are sensors.'],
  ['Rationality & PEAS', 'A cleaning robot is rewarded only for collecting dust, so it repeatedly scatters dust and collects it again. What is the primary design mistake?', ['Its sensors are too accurate', 'Its performance measure rewards the wrong behavior', 'It has too many actuators', 'Its environment is fully observable'], 1, 'A badly chosen performance measure can make undesirable behavior look successful to the agent.'],
  ['Rationality & PEAS', 'Why should a performance measure usually evaluate outcomes rather than prescribe exact actions?', ['Outcome measures leave the agent free to discover better strategies', 'Actions cannot be sensed', 'Prescribed actions make an environment deterministic', 'Outcome measures guarantee omniscience'], 0, 'Judging results allows the agent to choose or learn effective behavior rather than merely imitate a fixed method.'],
  ['Rationality & PEAS', 'An agent begins with little prior knowledge but improves until experience largely determines its behavior. Which quality has increased?', ['Omniscience', 'Autonomy', 'Observability', 'Discreteness'], 1, 'Autonomy grows as behavior depends more on the agent’s own experience and less on built-in knowledge.'],

  ['Task environments', 'A chess clock keeps running while a player thinks, although the board itself does not change. This environment is best classified as:', ['Static', 'Dynamic', 'Semidynamic', 'Episodic'], 2, 'The world state is stable during deliberation, but the performance measure changes with time, so it is semidynamic.'],
  ['Task environments', 'Why is taxi driving sequential rather than episodic?', ['Roads contain continuous values', 'Each driving choice affects later states and choices', 'The taxi has more than one sensor', 'Passengers provide a performance measure'], 1, 'In a sequential environment, current actions influence future situations and decisions.'],
  ['Task environments', 'A medical image classifier judges each scan independently and receives the complete image. Which pair best fits?', ['Sequential and partially observable', 'Episodic and fully observable', 'Dynamic and strategic', 'Unknown and multiagent'], 1, 'Each scan can be classified independently, and the complete relevant image is available.'],
  ['Task environments', 'A robot knows every rule of a new game but cannot see the opponent’s hidden cards. The environment is:', ['Unknown because it is partially observable', 'Known but partially observable', 'Fully observable but unknown', 'Deterministic and single-agent'], 1, 'Known/unknown concerns knowledge of the rules or action outcomes; observability concerns access to the current state.'],
  ['Task environments', 'In a two-player game, the world changes mainly because the opponent chooses actions strategically. This is most precisely:', ['Semidynamic', 'Episodic', 'Strategic', 'Single-agent'], 2, 'The strategic label captures uncertainty produced by another rational agent’s choices.'],

  ['Agent architectures', 'A vacuum agent reacts only to “dirty” or “clean” and cannot remember where it has been. Which architecture is sufficient?', ['Simple reflex', 'Goal-based with planning', 'Utility-based learning', 'Model-based with internal state'], 0, 'A simple reflex agent can map the current percept directly to an action when the needed state is observable.'],
  ['Agent architectures', 'A robot cannot see behind itself but remembers what was there and updates that memory after moving. Which addition makes this possible?', ['A fixed utility value only', 'An internal state and transition model', 'A larger condition-action table with no memory', 'A performance measure used as a sensor'], 1, 'A model-based agent updates internal state using how the world changes and how its actions affect it.'],
  ['Agent architectures', 'Two routes both reach the goal, but one is safer and shorter. What lets an agent express and compare that preference?', ['A utility function', 'A percept sequence alone', 'A condition-action rule only', 'A sensor model'], 0, 'A utility function represents degrees of desirability, allowing tradeoffs among goal-achieving outcomes.'],
  ['Agent architectures', 'In a learning agent, which component judges recent behavior using the external performance standard?', ['Performance element', 'Critic', 'Problem generator', 'Actuator'], 1, 'The critic evaluates how well the agent is doing and supplies feedback to the learning element.'],
  ['Agent architectures', 'Why might a problem generator recommend an action that is not currently believed to be best?', ['To force the environment to become deterministic', 'To obtain informative experience that may improve future decisions', 'To replace all sensors', 'To keep the utility function constant'], 1, 'The problem generator encourages exploration that can yield useful new knowledge.'],
].map(([topic, question, options, answer, explanation], index) => ({
  id: 281 + index,
  topic,
  difficulty: 'Challenge',
  question,
  options,
  answer,
  explanation,
}))

export const agentQuestions = [...coreAgentQuestions, ...challengeAgentQuestions]

if (agentQuestions.length !== 100) {
  throw new Error(`Expected 100 intelligent-agent questions, received ${agentQuestions.length}.`)
}
