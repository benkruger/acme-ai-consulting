<script>
  import Dial from './Dial.svelte'

  let { onNavigate, scrollProgress = 0 } = $props()

  function go(event, target) {
    event.preventDefault()
    onNavigate({ page: target })
  }

  const sections = [
    { id: 'problem', label: 'Problem' },
    { id: 'approach', label: 'Approach' },
    { id: 'tenants', label: 'Tenants' },
    { id: 'flow', label: 'Flow' },
    { id: 'how-we-work', label: 'Work' },
    { id: 'resources', label: 'Resources' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Book' }
  ]

  function handleAnchor(event, id) {
    const el = document.getElementById(id)
    if (el) {
      event.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
</script>

<nav class="navbar" data-test="navbar">
  <div class="inner">
    <a class="brand" href="/" onclick={(e) => go(e, 'home')}>
      <span class="brand-mark" aria-hidden="true">●</span>
      <span class="brand-name">Acme AI Consulting</span>
    </a>

    <div class="links" aria-label="Section navigation">
      {#each sections as section (section.id)}
        <a class="link" href="#{section.id}" onclick={(e) => handleAnchor(e, section.id)}>
          {section.label}
        </a>
      {/each}
    </div>

    <div class="progress" aria-hidden="true" data-test="navbar-dial">
      <Dial position={scrollProgress} size={48} showLabels={false} />
      <span class="progress-label">
        {scrollProgress < 0.33 ? 'Manual' : scrollProgress < 0.66 ? 'Assisted' : 'Autonomous'}
      </span>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    background: rgba(244, 240, 234, 0.82);
    border-bottom: 1px solid var(--rule-soft);
  }
  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0.85rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .brand-mark {
    color: var(--forge);
    font-size: 1rem;
    line-height: 0;
  }
  .links {
    display: flex;
    gap: 1.6rem;
    justify-content: center;
  }
  .link {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--iron);
    transition: color 160ms var(--ease-out);
  }
  .link:hover {
    color: var(--ink);
  }
  .progress {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }
  .progress-label {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--iron);
    min-width: 11ch;
    text-align: right;
  }
  @media (max-width: 820px) {
    .inner {
      grid-template-columns: auto auto;
    }
    .links {
      display: none;
    }
    .progress {
      justify-self: end;
    }
  }
</style>
