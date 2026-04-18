<script>
  let { href, onClick, variant = 'primary', children } = $props()
</script>

{#if href}
  <a class="cta cta--{variant}" {href} data-test="cta">
    <span class="cta-label">{@render children()}</span>
    <span class="cta-arrow" aria-hidden="true">→</span>
  </a>
{:else}
  <button class="cta cta--{variant}" type="button" onclick={onClick} data-test="cta">
    <span class="cta-label">{@render children()}</span>
    <span class="cta-arrow" aria-hidden="true">→</span>
  </button>
{/if}

<style>
  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.95rem 1.4rem;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    border: none;
    cursor: pointer;
    transition:
      transform 180ms var(--ease-out),
      background-color 180ms var(--ease-out);
  }
  .cta--primary {
    background: var(--ink);
    color: var(--paper);
  }
  .cta--primary:hover {
    background: var(--forge);
    transform: translateY(-1px);
  }
  .cta--ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--rule);
  }
  .cta--ghost:hover {
    border-color: var(--ink);
  }
  .cta-arrow {
    font-family: var(--font-mono);
    transition: transform 180ms var(--ease-out);
  }
  .cta:hover .cta-arrow {
    transform: translateX(4px);
  }
</style>
