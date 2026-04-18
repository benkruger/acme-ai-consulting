<script>
  import AnvilMark from '../components/AnvilMark.svelte'
  import Dial from '../components/Dial.svelte'
  import CTAButton from '../components/CTAButton.svelte'
  import Eyebrow from '../components/Eyebrow.svelte'

  let { calendarUrl = 'https://cal.com/benkruger/ai-consultation' } = $props()
</script>

<section class="hero" data-test="hero">
  <div class="hero-grid">
    <div class="hero-copy">
      <Eyebrow number="00">Agentic SDLC consulting</Eyebrow>
      <h1 class="headline">
        Meet your team<br />
        <span class="headline-accent">where they are.</span><br />
        <em>Ratchet up the dial</em><br />
        to fully autonomous.
      </h1>

      <p class="lede">
        One engineer, ten pull requests a day. A small team shipping the output of a large one.
        We come in, map where you stand, and coach every engineer through the transition — at the pace
        your organization can absorb.
      </p>

      <div class="hero-cta">
        <CTAButton href={calendarUrl}>
          Book an AI consultation
        </CTAButton>
        <span class="hero-cta-note">30 minutes. No slide decks.</span>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="hero-anvil">
        <AnvilMark size={420} />
      </div>
      <div class="hero-dial">
        <Dial position={0} size={170} />
      </div>
      <div class="hero-ticker">
        <span>MANUAL</span>
        <span class="hero-ticker-arrow">▸▸▸▸▸</span>
        <span>AUTONOMOUS</span>
      </div>
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
    padding: clamp(3rem, 8vw, 7rem) 1.5rem clamp(4rem, 8vw, 8rem);
  }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
  }
  .headline {
    margin-top: 1.2rem;
    font-weight: 400;
    font-size: clamp(2.5rem, 6.5vw, 5.25rem);
    line-height: 0.98;
    letter-spacing: -0.02em;
  }
  .headline em {
    font-style: italic;
    font-variation-settings: 'SOFT' 100, 'opsz' 144;
    color: var(--forge);
    font-weight: 400;
  }
  .headline-accent {
    color: var(--iron);
    font-weight: 400;
  }
  .lede {
    margin-top: 1.6rem;
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 48ch;
  }
  .hero-cta {
    margin-top: 2rem;
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .hero-anvil {
    display: block;
    color: var(--ink);
  }
  .hero-dial {
    margin-top: -2.5rem;
    padding: 0.75rem;
    background: var(--paper);
    border: 1px solid var(--rule);
    border-radius: 50%;
    box-shadow: 0 10px 40px -12px rgba(15, 16, 18, 0.25);
  }
  .hero-ticker {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0.9rem;
    border: 1px solid var(--rule);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    color: var(--iron);
  }
  .hero-ticker-arrow {
    color: var(--forge);
    letter-spacing: 0;
  }
  .hero-meta {
    margin-top: clamp(3rem, 6vw, 5rem);
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
    }
    .hero-visual {
      order: -1;
    }
  }
</style>
