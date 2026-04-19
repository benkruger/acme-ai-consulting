<script>
  import Dial from '../components/Dial.svelte'
  import CTAButton from '../components/CTAButton.svelte'
  import Eyebrow from '../components/Eyebrow.svelte'

  let { calendarUrl = 'https://cal.com/acme-ai-consultating' } = $props()
</script>

<section class="hero" data-test="hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <Eyebrow number="00">AI software dev & process consulting</Eyebrow>
      <h1 class="headline">
        Meet your team<br />
        where they are.<br />
        <em>Ratchet up the dial</em><br />
        to fully autonomous.
      </h1>

      <p class="lede">
        One engineer ships ten pull requests a day. A small team ships the output of a much bigger
        one.
      </p>
      <p class="lede">
        We come in, map where you stand, and coach every engineer through the transition.
      </p>

      <div class="hero-cta">
        <CTAButton href={calendarUrl}>Book a consultation</CTAButton>
        <span class="hero-cta-note">Bring a real problem from this week.</span>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <Dial position={0} size={300} animated />
    </div>
  </div>
</section>

<style>
  .hero {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: clamp(1rem, 2vw, 1.75rem) var(--section-px) var(--section-py);
  }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 3vw, 3rem);
    align-items: start;
  }
  .headline {
    margin-top: 1.2rem;
    font-weight: 550;
    font-size: clamp(2.5rem, 6.5vw, 5.25rem);
    line-height: 0.98;
    letter-spacing: -0.02em;
  }
  .headline em {
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
    color: var(--forge);
    font-weight: 500;
  }
  .lede {
    margin-top: 1.25rem;
    font-size: 1.02rem;
    color: var(--ink-soft);
    max-width: 80ch;
  }
  .lede + .lede {
    margin-top: 0.85rem;
  }
  .hero-cta {
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .hero-cta-note {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--iron);
  }
  .hero-visual {
    display: flex;
    justify-content: center;
    --dial-size: clamp(220px, 26vw, 300px);
  }
  /* Tablet/mobile portrait: stack, dial as a poster above the copy. */
  @media (max-width: 820px) and (orientation: portrait) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .hero-visual {
      order: -1;
      justify-content: flex-start;
      --dial-size: clamp(160px, 42vw, 220px);
    }
  }
  /* Narrow desktops and tablets that landed in landscape — keep
     the fallback stack but still allow the new size. */
  @media (max-width: 820px) and (orientation: landscape) and (min-height: 501px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .hero-visual {
      order: -1;
      justify-content: flex-start;
      --dial-size: clamp(180px, 30vw, 240px);
    }
  }
  @media (max-width: 640px) {
    .headline {
      font-size: clamp(2rem, 8.5vw, 3rem);
      line-height: 1;
    }
    .lede {
      font-size: 0.98rem;
    }
  }
  /* Mobile landscape: short viewport, two-column so the dial and
     copy sit side-by-side — otherwise the dial alone fills the screen. */
  @media (max-height: 500px) and (orientation: landscape) {
    .hero {
      padding-top: 0.5rem;
    }
    .hero-grid {
      grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
      gap: 1.25rem;
      align-items: center;
    }
    .hero-visual {
      order: 0;
      justify-content: center;
      --dial-size: clamp(120px, 32vh, 170px);
    }
    .hero-visual :global(.dial-labels) {
      display: none;
    }
    .headline {
      margin-top: 0.4rem;
      font-size: clamp(1.5rem, 4.5vw, 2.5rem);
      line-height: 1;
    }
    .lede {
      margin-top: 0.65rem;
      font-size: 0.9rem;
    }
    .lede + .lede {
      margin-top: 0.5rem;
    }
    .hero-cta {
      margin-top: 1rem;
      gap: 0.75rem;
    }
  }
</style>
