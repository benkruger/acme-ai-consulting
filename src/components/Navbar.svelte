<script>
  let { onNavigate } = $props()

  function go(event, target) {
    event.preventDefault()
    onNavigate({ page: target })
  }

  const sections = [
    { id: 'problem', label: 'The Problem' },
    { id: 'approach', label: 'Approach' },
    { id: 'flow', label: 'Flow' },
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
        <a
          class="link"
          href="#{section.id}"
          onclick={(e) => handleAnchor(e, section.id)}
        >
          {section.label}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    background: rgba(244, 240, 234, 0.78);
    border-bottom: 1px solid var(--rule-soft);
  }
  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
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
    gap: 1.75rem;
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
  @media (max-width: 640px) {
    .links {
      display: none;
    }
  }
</style>
