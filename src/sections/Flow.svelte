<script>
  import Eyebrow from '../components/Eyebrow.svelte'

  const phases = [
    {
      number: '01',
      title: 'Start',
      subtitle: 'Mechanical setup',
      body: 'Isolated worktrees so N engineers on N machines can work on N features simultaneously. Issue locking. Nobody steps on anyone. Concurrency solved.'
    },
    {
      number: '02',
      title: 'Plan',
      subtitle: 'Spec validation',
      body: 'The AI validates that the spec is suitable and builds a dependency graph before a line of code ships.'
    },
    {
      number: '03',
      title: 'Code',
      subtitle: 'Iterate',
      body: 'Task-at-a-time coding with AI assistance. Test-first, diff-reviewed, committed per task.'
    },
    {
      number: '04',
      title: 'Code Review',
      subtitle: 'Adversarial, multi-lens',
      body: 'Five or six ways of reviewing the same diff — security, performance, design patterns, maintainability. Issues caught before merge.'
    },
    {
      number: '05',
      title: 'Learn',
      subtitle: 'Continuous improvement',
      body: 'Every flow feeds the system. The more teams running Flow, the faster it gets smarter — and the faster the dial can safely climb.'
    },
    {
      number: '06',
      title: 'Complete',
      subtitle: 'Safe merge',
      body: 'Mechanical again. Merge queue handled. Slack notified. Next flow primed.'
    }
  ]
</script>

<section id="flow" class="flow" data-test="flow">
  <header class="flow-header">
    <Eyebrow number="04">Flow</Eyebrow>
    <h2 class="flow-title">
      Flow is <em>the engine.</em>
    </h2>
    <p class="flow-lede">
      Flow is open-source software that solves the concurrency problem of agentic development: <strong
      >
        N developers × N machines × N features, running in parallel, without stepping on each other.</strong
      >
    </p>
    <p class="flow-lede">
      Every engagement runs on Flow. The tenants are the destination. Flow is the vehicle that gets
      you there safely.
    </p>
    <a class="flow-repo" href="https://github.com/benkruger/flow" target="_blank" rel="noreferrer">
      github.com/benkruger/flow →
    </a>
  </header>

  <div class="flow-phases" aria-label="Flow's six phases">
    {#each phases as phase (phase.number)}
      <article class="phase">
        <h3 class="phase-title">
          {phase.title}
          <span class="phase-subtitle">— {phase.subtitle}</span>
        </h3>
        <p class="phase-body">{phase.body}</p>
      </article>
    {/each}
  </div>

  <div class="flow-cycle">
    <span class="cycle-label">Cycle time</span>
    <span class="cycle-value">~90 min <span class="cycle-suffix">end to end</span></span>
  </div>

  <p class="flow-note">
    Ten engineers × ten PRs a day is a hundred PRs hitting <code>main</code>. Sounds terrifying.
    Flow makes it routine — the merge queue and conflict mechanics disappear into the phases. We go
    deep on that in the assessment.
  </p>
</section>

<style>
  .flow {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py-tight) var(--section-px) 0;
    border-top: 1px solid var(--rule);
  }
  .flow-header {
    max-width: 60ch;
  }
  .flow-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .flow-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .flow-lede {
    margin-top: var(--stack-lede);
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 56ch;
  }
  .flow-lede strong {
    color: var(--ink);
    font-weight: 500;
  }
  .flow-repo {
    display: inline-block;
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.88rem;
    letter-spacing: 0.04em;
    color: var(--forge);
    border-bottom: 1px solid currentColor;
  }
  .flow-phases {
    margin-top: var(--stack-header-to-body);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(2rem, 3vw, 3rem) clamp(2.5rem, 4vw, 4.5rem);
  }
  .phase {
    padding-top: 1.25rem;
    border-top: 1px solid var(--ink);
  }
  .phase-title {
    margin-top: 0.25rem;
    font-size: clamp(1.15rem, 1.4vw, 1.4rem);
    font-weight: 500;
    letter-spacing: -0.01em;
  }
  .phase-subtitle {
    font-family: var(--font-body);
    color: var(--iron);
    font-weight: 400;
    font-style: italic;
    font-size: 0.88em;
  }
  .phase-body {
    margin-top: 0.85rem;
    font-size: 0.98rem;
    color: var(--ink-soft);
    max-width: 48ch;
  }
  .flow-cycle {
    margin-top: var(--stack-body-to-note);
    padding: 1.25rem 1.5rem;
    display: inline-flex;
    align-items: baseline;
    gap: 1rem;
    border: 1px solid var(--ink);
    background: var(--ink);
    color: var(--paper);
  }
  .cycle-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    opacity: 0.8;
  }
  .cycle-value {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 500;
  }
  .cycle-suffix {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 400;
    font-style: italic;
    opacity: 0.75;
    margin-left: 0.35rem;
  }
  .flow-note {
    margin-top: var(--stack-body-to-note);
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
    max-width: 60ch;
    font-size: 0.98rem;
    color: var(--iron);
  }
  .flow-note code {
    font-family: var(--font-mono);
    font-size: 0.9em;
    background: var(--paper-cool);
    padding: 0.1rem 0.35rem;
    border: 1px solid var(--rule);
  }
  @media (max-width: 820px) {
    .flow-phases {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 640px) {
    .flow-cycle {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.35rem;
      padding: 1rem 1.25rem;
    }
    .cycle-value {
      font-size: 1.3rem;
    }
    .cycle-suffix {
      display: block;
      margin-left: 0;
      margin-top: 0.15rem;
    }
  }
</style>
