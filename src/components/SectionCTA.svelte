<script>
  import CTAButton from './CTAButton.svelte'

  let {
    calendarUrl = 'https://cal.com/acme-ai-consultating',
    label = 'Book a consultation',
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
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .section-cta-note {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--iron);
  }
</style>
