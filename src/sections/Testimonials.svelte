<script>
  import Eyebrow from '../components/Eyebrow.svelte'

  const testimonials = [
    {
      company: 'HIPAA Health',
      quote: 'TK — concrete metric quote from the HIPAA Health team.',
      attribution: 'Name, role — HIPAA Health'
    },
    {
      company: 'Full Harvest',
      quote: 'TK — concrete metric quote from the Full Harvest team.',
      attribution: 'Name, role — Full Harvest'
    }
  ]
</script>

<section id="testimonials" class="testimonials" data-test="testimonials">
  <header class="testimonials-header">
    <Eyebrow number="07">From the field</Eyebrow>
    <h2 class="testimonials-title">
      Small teams. <em>Big output.</em>
    </h2>
  </header>

  <div class="testimonial-grid">
    {#each testimonials as testimonial (testimonial.company)}
      <figure class="testimonial">
        <blockquote class="testimonial-quote">
          <p>&ldquo;{testimonial.quote}&rdquo;</p>
        </blockquote>
        <figcaption class="testimonial-attribution">
          — {testimonial.attribution}
        </figcaption>
      </figure>
    {/each}
  </div>

  <p class="testimonials-note">
    Agentic software development is new. A long track record doesn't exist yet — ours grows with
    every engagement. Every new client lands here.
  </p>
</section>

<style>
  .testimonials {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: var(--section-py-open) 1.5rem 0;
    border-top: 1px solid var(--rule);
  }
  .testimonials-header {
    max-width: 46ch;
  }
  .testimonials-title {
    margin-top: var(--stack-title);
    font-weight: 450;
    line-height: 1.05;
  }
  .testimonials-title em {
    color: var(--forge);
    font-style: italic;
    font-variation-settings:
      'SOFT' 100,
      'opsz' 144;
  }
  .testimonial-grid {
    margin-top: var(--stack-header-to-body);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(1.75rem, 3vw, 3rem);
  }
  .testimonial {
    margin: 0;
    padding: clamp(2rem, 3vw, 2.75rem) clamp(1.75rem, 2.5vw, 2.25rem);
    background: var(--paper-cool);
    border-left: 3px solid var(--forge);
  }
  .testimonial-quote p {
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.5vw, 1.4rem);
    font-weight: 400;
    line-height: 1.35;
    color: var(--ink);
    font-variation-settings:
      'SOFT' 30,
      'opsz' 144;
  }
  .testimonial-attribution {
    margin-top: 1.25rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--iron);
  }
  .testimonials-note {
    margin-top: var(--stack-body-to-note);
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
    max-width: 60ch;
    font-size: 0.95rem;
    color: var(--iron);
  }
  @media (max-width: 820px) {
    .testimonial-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
