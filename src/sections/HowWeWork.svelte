<script>
  import Eyebrow from '../components/Eyebrow.svelte'
  import SectionCTA from '../components/SectionCTA.svelte'

  const assessmentChecks = [
    'Deploy and rollback — can you hit 30 seconds?',
    'Error reporting — lightweight, actionable, trusted? (Most teams have gone nose-blind to theirs. We often recommend starting fresh.)',
    'Test coverage — where are the gaps, and how deep do they go?',
    'Build and test pipeline — fast? parallel? the bottleneck?',
    'Core scripts — bin/lint, bin/format, bin/test, bin/build, dependencies, and the top-level CI entrypoint.'
  ]
</script>

<section id="how-we-work" class="hww" data-test="how-we-work">
  <header class="hww-header">
    <Eyebrow number="05">How we work</Eyebrow>
    <h2 class="hww-title">
      Assessment and coaching.<br />
      <em>One package.</em> Never separate.
    </h2>
    <p class="hww-lede">
      Assessment gives you the map. Coaching gets you moving. Neither works alone — that's why they
      ship together.
    </p>
  </header>

  <div class="hww-phases">
    <article class="phase-block">
      <h3 class="phase-heading">
        <span class="phase-tag">Phase 1</span>
        <span class="phase-name">Assessment &amp; Preparation</span>
      </h3>
      <p class="phase-intro">We come in and evaluate where you actually are.</p>
      <ul class="phase-checks" role="list">
        {#each assessmentChecks as check (check)}
          <li>{check}</li>
        {/each}
      </ul>
      <p class="phase-outcome">
        You walk away with a clear roadmap. If you want help implementing it, we stay.
      </p>
    </article>

    <article class="phase-block">
      <h3 class="phase-heading">
        <span class="phase-tag">Phase 2</span>
        <span class="phase-name">Coaching &amp; Dial Progression</span>
      </h3>
      <p class="phase-intro">
        The foundation is set. Now the real work begins. We sit with your engineers.
      </p>
      <p class="phase-body">
        We help them write better specs. Show them how to decompose work so AI can handle it. Walk
        them through every stage of turning the dial — from reviewing every diff manually, to
        trusting the system to ship overnight.
      </p>
      <p class="phase-body">
        We answer the doubts. We overcome the resistance. We build the muscle memory.
      </p>
    </article>
  </div>

  <p class="hww-why">
    <strong>Why both phases matter.</strong> Email instructions don't change behavior. Slack threads don't
    change behavior. Sitting next to someone and doing the work together does. That's why assessment alone
    isn't enough — and why coaching without the map is guesswork.
  </p>

  <SectionCTA />
</section>

<style>
  .hww {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py) var(--section-px) 0;
    border-top: 1px solid var(--rule);
  }
  .hww-header {
    max-width: 56ch;
  }
  .hww-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .hww-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .hww-lede {
    margin-top: var(--stack-lede);
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 56ch;
  }
  .hww-phases {
    margin-top: var(--stack-header-to-body);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(2rem, 4vw, 3.5rem);
  }
  .phase-block {
    padding-top: 1.5rem;
    border-top: 2px solid var(--ink);
  }
  .phase-tag {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--forge);
    margin-right: 0.75rem;
    vertical-align: 0.2em;
  }
  .phase-heading {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.6vw, 1.55rem);
    font-weight: 550;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }
  .phase-name {
    font-family: var(--font-display);
  }
  .phase-intro {
    margin-top: 0.9rem;
    color: var(--ink);
    font-size: 1rem;
    font-weight: 500;
  }
  .phase-checks {
    margin-top: 1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .phase-checks li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 0.98rem;
    color: var(--ink-soft);
  }
  .phase-checks li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--forge);
    font-family: var(--font-mono);
  }
  .phase-outcome,
  .phase-body {
    margin-top: 1rem;
    font-size: 0.98rem;
    color: var(--ink-soft);
  }
  .hww-why {
    margin-top: var(--stack-body-to-note);
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
    max-width: 60ch;
    font-size: 0.98rem;
    color: var(--iron);
  }
  .hww-why strong {
    color: var(--ink);
    font-weight: 500;
  }
  @media (max-width: 820px) {
    .hww-phases {
      grid-template-columns: 1fr;
    }
  }
</style>
