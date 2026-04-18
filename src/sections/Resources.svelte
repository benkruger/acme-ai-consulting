<script>
  import Eyebrow from '../components/Eyebrow.svelte'
</script>

<section id="resources" class="resources" data-test="resources">
  <header class="resources-header">
    <Eyebrow number="06">Resources</Eyebrow>
    <h2 class="resources-title">
      The path to <em>zero-cost</em> autonomy.
    </h2>
    <p class="resources-lede">As you turn up the dial, two hard constraints show up.</p>
  </header>

  <div class="constraints">
    <div class="constraint">
      <span class="constraint-number" aria-hidden="true">01</span>
      <h3 class="constraint-title">Hardware</h3>
      <p>Parallel flows are CPU-bound. Cores and RAM become the throttle.</p>
    </div>
    <div class="constraint">
      <span class="constraint-number" aria-hidden="true">02</span>
      <h3 class="constraint-title">Token budget</h3>
      <p>
        Your API subscription's rolling window — the moment a team of ten runs ten flows apiece,
        you're capped.
      </p>
    </div>
  </div>

  <p class="resources-pivot">Both are solvable, with tools that ship today.</p>

  <ol class="solutions" role="list">
    <li class="solution">
      <h4 class="solution-title">Small Language Models</h4>
      <p>
        Code-specialized SLMs from teams like
        <a class="solution-link" href="https://neurometric.ai" target="_blank" rel="noreferrer"
          >Neurometric.ai</a
        > — faster, cheaper, and shaped to the way engineers actually work.
      </p>
    </li>
    <li class="solution">
      <h4 class="solution-title">Fine-tuned models</h4>
      <p>
        Tuned to your stack, your codebase, your conventions — a model that reads like your team
        wrote it.
      </p>
    </li>
    <li class="solution">
      <h4 class="solution-title">Local inference</h4>
      <p>
        Llama 3 8B and its peers run on hardware you already own. One Mac Studio per seat, shipping
        overnight while you sleep.
      </p>
    </li>
  </ol>

  <div class="resources-closer">
    <p>
      Flow already runs these in production. As they land on your team — and they will — the token
      constraint disappears. The only limits left:
    </p>
    <ul role="list" class="resources-remain">
      <li><strong>Hardware capacity.</strong> A well-specced Mac Studio pays off in weeks.</li>
      <li>
        <strong>Psychological load.</strong> How much autonomy your people can trust at once.
      </li>
    </ul>
    <p class="resources-headline">
      For small teams with real revenue, this is
      <em>10x productivity at near-zero incremental cost.</em>
    </p>
  </div>
</section>

<style>
  .resources {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py) var(--section-px) 0;
    border-top: 1px solid var(--rule);
  }
  .resources-header {
    max-width: 56ch;
  }
  .resources-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .resources-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .resources-lede {
    margin-top: var(--stack-lede);
    font-size: 1.05rem;
    color: var(--ink-soft);
  }
  .constraints {
    margin-top: var(--stack-header-to-body);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(1.5rem, 3vw, 3rem);
  }
  .constraint {
    padding-top: 1.25rem;
    border-top: 1px solid var(--ink);
  }
  .constraint-number {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    color: var(--forge);
  }
  .constraint-title {
    margin-top: 0.5rem;
    font-size: clamp(1.1rem, 1.3vw, 1.3rem);
    font-weight: 500;
  }
  .constraint p {
    margin-top: 0.6rem;
    color: var(--ink-soft);
  }
  .resources-pivot {
    margin-top: var(--stack-body-to-note);
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.6vw, 1.55rem);
    font-weight: 450;
    letter-spacing: -0.01em;
    color: var(--ink);
    max-width: 44ch;
  }
  .solutions {
    margin-top: clamp(1.5rem, 3vw, 2.5rem);
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.5rem, 2.5vw, 2.25rem);
  }
  .solution {
    padding: clamp(1.5rem, 2vw, 1.85rem);
    background: var(--paper-cool);
    border: 1px solid var(--rule);
  }
  .solution-title {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 500;
  }
  .solution p {
    margin-top: 0.55rem;
    color: var(--ink-soft);
    font-size: 0.95rem;
  }
  .solution-link {
    color: var(--forge);
    border-bottom: 1px solid currentColor;
    transition: color 160ms var(--ease-out);
  }
  .solution-link:hover {
    color: var(--forge-hot);
  }
  .resources-closer {
    margin-top: var(--stack-header-to-body);
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
    max-width: 60ch;
  }
  .resources-closer p {
    color: var(--ink-soft);
    font-size: 1rem;
  }
  .resources-remain {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .resources-remain li {
    position: relative;
    padding-left: 1.25rem;
    color: var(--ink-soft);
  }
  .resources-remain li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--forge);
    font-family: var(--font-mono);
  }
  .resources-remain strong {
    color: var(--ink);
    font-weight: 500;
  }
  .resources-headline {
    margin-top: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 1.8vw, 1.75rem);
    font-weight: 450;
    line-height: 1.2;
    color: var(--ink);
  }
  .resources-headline em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  @media (max-width: 820px) {
    .constraints,
    .solutions {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 640px) {
    .solution {
      padding: 1.25rem;
    }
    .resources-headline {
      font-size: clamp(1.2rem, 6vw, 1.5rem);
    }
  }
</style>
