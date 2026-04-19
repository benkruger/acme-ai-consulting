<script>
  import Eyebrow from '../components/Eyebrow.svelte'

  const problems = [
    {
      number: '01',
      title: "You don't know how far behind you are.",
      body: "What your team is doing feels modern. Compared to what's actually possible today, it's stone age. You can't close a gap you can't see."
    },
    {
      number: '02',
      title: "You're overwhelmed.",
      body: "New tools, new models, new best practices every week. Staying current is a full-time job. Your team can't keep up."
    },
    {
      number: '03',
      title: "You don't know where to start.",
      body: "Without clarity on your position or a path forward, people tackle AI adoption separately, inconsistently, or in secret. Everyone's improvising."
    }
  ]
</script>

<section id="problem" class="problem" data-test="problem">
  <header class="problem-header">
    <Eyebrow number="01">The problem</Eyebrow>
    <h2 class="problem-title">Three things every small engineering team already feels.</h2>
  </header>

  <ol class="problem-list" role="list">
    {#each problems as problem (problem.number)}
      <li class="problem-item">
        <span class="problem-number" aria-hidden="true">{problem.number}</span>
        <div class="problem-content">
          <h3 class="problem-item-title">{problem.title}</h3>
          <p class="problem-body">{problem.body}</p>
        </div>
      </li>
    {/each}
  </ol>
</section>

<style>
  .problem {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py) var(--section-px);
    border-top: 1px solid var(--rule);
  }
  .problem-header {
    max-width: none;
  }
  .problem-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    font-variation-settings:
      'SOFT' 0,
      'opsz' 144;
    line-height: 1.08;
  }
  .problem-list {
    margin-top: var(--stack-header-to-body);
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.75rem, 3vw, 3rem);
  }
  .problem-item {
    position: relative;
    padding-top: 2rem;
    border-top: 1px solid var(--ink);
  }
  .problem-number {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    color: var(--forge);
    font-variant-numeric: tabular-nums;
  }
  .problem-item-title {
    margin-top: 0.6rem;
    font-size: clamp(1.3rem, 1.8vw, 1.6rem);
    font-weight: 450;
    letter-spacing: -0.01em;
  }
  .problem-body {
    margin-top: 1rem;
    color: var(--ink-soft);
    font-size: 1rem;
    max-width: 80ch;
  }
  @media (max-width: 820px) {
    .problem-list {
      grid-template-columns: 1fr;
    }
  }
</style>
