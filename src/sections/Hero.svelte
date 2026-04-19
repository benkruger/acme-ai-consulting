<script>
  import { onMount } from 'svelte'
  import Dial from '../components/Dial.svelte'
  import CTAButton from '../components/CTAButton.svelte'
  import Eyebrow from '../components/Eyebrow.svelte'

  let { calendarUrl = 'https://cal.com/acme-ai-consultating' } = $props()

  let dialSize = $state(300)

  onMount(() => {
    const mm = window.matchMedia('(max-width: 640px)')
    const update = () => {
      dialSize = mm.matches ? 210 : 300
    }
    update()
    mm.addEventListener('change', update)
    return () => mm.removeEventListener('change', update)
  })
</script>

<section class="hero" data-test="hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <Eyebrow number="00">Agentic SDLC consulting</Eyebrow>
      <h1 class="headline">
        Meet your team<br />
        where they are.<br />
        <em>Ratchet up the dial</em><br />
        to fully autonomous.
      </h1>

      <p class="lede">
        Agentic development: one engineer ships ten pull requests a day. A small team ships the
        output of a much bigger one.
      </p>
      <p class="lede">
        We come in, map where you stand, and coach every engineer through the transition — at a pace
        your organization can absorb.
      </p>

      <div class="hero-cta">
        <CTAButton href={calendarUrl}>Book a consultation</CTAButton>
        <span class="hero-cta-note">30 minutes. No slide decks.</span>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <Dial position={0} size={dialSize} animated />
    </div>
  </div>

  <div class="hero-meta" aria-hidden="true">
    <span>ACME/AI-CONSULTING</span>
    <span class="hero-meta-rule"></span>
    <span>EST. 2026 · SMALL TEAMS · BIG OUTPUT</span>
  </div>
</section>

<style>
  .hero {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: clamp(1rem, 2vw, 1.75rem) var(--section-px) 0;
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
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
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
  }
  .hero-meta {
    margin-top: clamp(1.25rem, 2.5vw, 2rem);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    color: var(--iron);
    text-transform: uppercase;
  }
  .hero-meta-rule {
    flex: 1;
    height: 1px;
    background: var(--rule);
  }
  @media (max-width: 820px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .hero-visual {
      order: -1;
      justify-content: flex-start;
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
    .hero-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      margin-top: clamp(1.25rem, 4vw, 2rem);
    }
    .hero-meta-rule {
      display: none;
    }
  }
</style>
