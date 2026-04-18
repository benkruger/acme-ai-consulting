<script>
  import CTAButton from './CTAButton.svelte'

  let {
    calendarUrl = 'https://cal.com/benkruger/ai-consultation',
    label = 'Book an AI consultation',
    note = '30 minutes. No slide decks.'
  } = $props()
</script>

<div class="section-cta" data-test="section-cta">
  <CTAButton href={calendarUrl}>{label}</CTAButton>
  {#if note}
    <span class="section-cta-note">{note}</span>
  {/if}
</div>

<style>
  .section-cta {
    margin-top: clamp(2rem, 4vw, 3rem);
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }
  .section-cta-note {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--iron);
  }
</style>
