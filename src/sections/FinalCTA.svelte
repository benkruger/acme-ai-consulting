<script>
  import Dial from '../components/Dial.svelte'
  import CTAButton from '../components/CTAButton.svelte'

  let { calendarUrl = 'https://cal.com/benkruger/ai-consultation' } = $props()
</script>

<section id="contact" class="final" data-test="final-cta">
  <div class="final-inner">
    <div class="final-copy">
      <h2 class="final-title">
        Ratchet up <em>the dial.</em>
      </h2>
      <p class="final-body">
        Thirty minutes. Your questions. A clear read on where you stand and what the first three
        moves look like. No slide decks.
      </p>
      <div class="final-cta">
        <CTAButton href={calendarUrl}>Book an AI consultation</CTAButton>
        <span class="final-note">Small teams only. Real revenue, real problems.</span>
      </div>
    </div>
    <div class="final-dial" aria-hidden="true">
      <Dial position={1} size={200} />
    </div>
  </div>

  <footer class="footer">
    <div class="footer-brand">
      <span class="footer-mark" aria-hidden="true">●</span>
      <span>Acme AI Consulting</span>
    </div>
    <nav class="footer-links" aria-label="Footer">
      <a href="https://github.com/benkruger/flow" target="_blank" rel="noreferrer">
        Flow on GitHub →
      </a>
    </nav>
    <div class="footer-colophon">© Acme AI Consulting · Any business. Any domain. Any problem.</div>
  </footer>
</section>

<style>
  .final {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py-open) 1.5rem clamp(2rem, 4vw, 3rem);
    border-top: 1px solid var(--rule);
  }
  .final-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    align-items: center;
    gap: clamp(2rem, 5vw, 5rem);
  }
  .final-title {
    font-weight: 450;
    font-size: clamp(2.25rem, 5vw, 4rem);
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .final-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .final-body {
    margin-top: 1.5rem;
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 48ch;
  }
  .final-cta {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
  }
  .final-note {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--iron);
  }
  .final-dial {
    display: flex;
    justify-content: center;
  }
  .footer {
    margin-top: clamp(4rem, 6vw, 6rem);
    padding-top: 1.75rem;
    border-top: 1px solid var(--rule);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    color: var(--iron);
    text-transform: uppercase;
  }
  .footer-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--ink);
    font-weight: 500;
  }
  .footer-mark {
    color: var(--forge);
  }
  .footer-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }
  .footer-links a {
    color: var(--iron);
    transition: color 160ms var(--ease-out);
  }
  .footer-links a:hover {
    color: var(--ink);
  }
  .footer-colophon {
    text-align: right;
    color: var(--iron);
    text-transform: none;
    letter-spacing: 0.02em;
    font-family: var(--font-body);
    font-size: 0.82rem;
  }
  @media (max-width: 820px) {
    .final-inner {
      grid-template-columns: 1fr;
    }
    .footer {
      grid-template-columns: 1fr;
      text-align: left;
    }
    .footer-links {
      justify-content: flex-start;
    }
    .footer-colophon {
      text-align: left;
    }
  }
</style>
