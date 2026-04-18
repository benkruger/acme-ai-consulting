<script>
  let { number, children } = $props()
</script>

<span class="eyebrow">
  {#if number}
    <span class="eyebrow-number">{number}</span>
    <span class="eyebrow-sep" aria-hidden="true">—</span>
  {/if}
  <span class="eyebrow-text">{@render children()}</span>
</span>

<style>
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .eyebrow-number {
    display: inline-block;
    min-width: 1.5rem;
    color: var(--forge);
    font-variant-numeric: tabular-nums;
  }
  .eyebrow-sep {
    color: var(--iron);
  }
  .eyebrow-text {
    color: var(--iron);
  }
</style>
