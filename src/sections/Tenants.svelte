<script>
  import Eyebrow from '../components/Eyebrow.svelte'

  const tenants = [
    {
      number: '01',
      title: '30-second rollback, both ways.',
      body: "Deploy fast. Roll back faster. Thirty seconds is the number where no one thinks let's try to fix this live. You just revert. Customers feel nothing."
    },
    {
      number: '02',
      title: 'Zero errors, everywhere.',
      body: 'Production, staging, development. When the error count is zero, every new error is signal — the canary that trips the 30-second rollback. Your alerts become trustworthy again.'
    },
    {
      number: '03',
      title: '100% deep test coverage.',
      body: 'Not just lines. Branches, dependencies, design patterns. Parallelized. Fast. Proves the code works, surfaces over-engineering, keeps AI from drifting.'
    }
  ]
</script>

<section id="tenants" class="tenants" data-test="tenants">
  <header class="tenants-header">
    <Eyebrow number="03">The tenants</Eyebrow>
    <h2 class="tenants-title">
      Three capabilities that unlock safe,<br />
      <em>full autonomy.</em>
    </h2>
    <p class="tenants-lede">
      You start turning up the dial on day one. You also build toward these three in parallel.
      They're not gates — they're what lets you safely push past <em>mostly autonomous</em> to
      <em>ship while you sleep.</em>
    </p>
  </header>

  <ol class="tenants-list" role="list">
    {#each tenants as tenant (tenant.number)}
      <li class="tenant-card">
        <span class="tenant-number" aria-hidden="true">{tenant.number}</span>
        <h3 class="tenant-title">{tenant.title}</h3>
        <p class="tenant-body">{tenant.body}</p>
      </li>
    {/each}
  </ol>
</section>

<style>
  .tenants {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py) var(--section-px);
    border-top: 1px solid var(--rule);
  }
  .tenants-header {
    max-width: none;
  }
  .tenants-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .tenants-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .tenants-lede {
    margin-top: var(--stack-lede);
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 80ch;
  }
  .tenants-lede em {
    font-style: italic;
    color: var(--ink);
  }
  .tenants-list {
    margin-top: var(--stack-header-to-body);
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1.75rem, 3vw, 3rem);
  }
  .tenant-card {
    position: relative;
    padding: clamp(1.75rem, 2.5vw, 2.25rem) clamp(1.5rem, 2vw, 1.85rem);
    background: var(--paper-cool);
    border: 1px solid var(--rule);
  }
  .tenant-number {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    color: var(--forge);
  }
  .tenant-title {
    margin-top: 0.6rem;
    font-size: clamp(1.2rem, 1.6vw, 1.5rem);
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.15;
  }
  .tenant-body {
    margin-top: 0.9rem;
    font-size: 0.98rem;
    color: var(--ink-soft);
  }
  @media (max-width: 820px) {
    .tenants-list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 640px) {
    .tenant-card {
      padding: 1.5rem 1.25rem;
    }
    .tenant-title {
      font-size: 1.2rem;
    }
  }
</style>
