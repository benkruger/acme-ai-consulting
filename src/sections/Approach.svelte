<script>
  import Eyebrow from '../components/Eyebrow.svelte'
  import SectionCTA from '../components/SectionCTA.svelte'
</script>

<section id="approach" class="approach" data-test="approach">
  <header class="approach-header">
    <Eyebrow number="02">The solution</Eyebrow>
    <h2 class="approach-title">
      Meet you where you are.<br />
      <em>Guide you forward.</em>
    </h2>
  </header>

  <div class="approach-grid">
    <div class="approach-body">
      <p>
        Today's AI-assisted development lets one engineer ship ten pull requests a day. Sometimes
        more — the real ceilings are hardware and tokens, not headcount. This isn't hypothetical.
        It's what modern development looks like, right now, on the tools available today.
      </p>
      <p>
        Your existing engineers, shipping the output of a much bigger team. You build the thing
        you've been pushing off, or you ship faster, or you carve out room to actually think.
      </p>
    </div>

    <aside class="approach-fit">
      <div class="fit-block">
        <h3 class="fit-label">Who this is for</h3>
        <p>
          Teams under twenty engineers with real revenue and real problems. One founder-engineer
          counts.
        </p>
      </div>
      <div class="fit-block">
        <h3 class="fit-label">Who this is not for</h3>
        <p>
          Mid-size and enterprise orgs. I'm one consultant — I work best with lean teams, and this
          methodology is optimized for them. Larger orgs have different constraints that deserve
          different solutions.
        </p>
      </div>
    </aside>
  </div>

  <SectionCTA />
</section>

<style>
  .approach {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py) var(--section-px) 0;
    border-top: 1px solid var(--rule);
  }
  .approach-header {
    max-width: none;
  }
  .approach-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .approach-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .approach-grid {
    margin-top: var(--stack-header-to-body);
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
  }
  .approach-body p {
    font-size: 1.05rem;
    color: var(--ink-soft);
    max-width: 80ch;
  }
  .approach-body p + p {
    margin-top: 1.25rem;
  }
  .approach-fit {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0.5rem 0 0.5rem clamp(1rem, 2vw, 2rem);
    border-left: 1px solid var(--rule);
  }
  .fit-label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--forge);
    margin-bottom: 0.55rem;
  }
  .fit-block p {
    color: var(--ink-soft);
    font-size: 0.98rem;
    max-width: 80ch;
  }
  @media (max-width: 820px) {
    .approach-grid {
      grid-template-columns: 1fr;
    }
    .approach-fit {
      padding-left: 0;
      border-left: none;
      border-top: 1px solid var(--rule);
      padding-top: 1.75rem;
    }
  }
</style>
