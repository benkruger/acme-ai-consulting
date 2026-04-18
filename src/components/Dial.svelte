<script>
  let { position = 0, size = 180, showLabels = true } = $props()

  const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value))
  const pos = $derived(clamp(position, 0, 1))
  const angle = $derived(-120 + pos * 240)

  const ticks = Array.from({ length: 11 }, (_, i) => ({
    t: -120 + i * 24,
    major: i % 5 === 0
  }))

  function point(deg, radius) {
    const rad = (deg * Math.PI) / 180
    return {
      x: 100 + radius * Math.sin(rad),
      y: 100 - radius * Math.cos(rad)
    }
  }
</script>

<div class="dial-wrap" style="--dial-size: {size}px" data-test="dial">
  <svg
    class="dial"
    viewBox="0 0 200 200"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Autonomy dial at {Math.round(pos * 100)} percent"
  >
    <title>Autonomy dial</title>
    <circle class="dial-face" cx="100" cy="100" r="84" />
    <circle class="dial-ring" cx="100" cy="100" r="84" />

    <g class="dial-ticks" data-test="dial-ticks">
      {#each ticks as tick (tick.t)}
        {@const inner = point(tick.t, tick.major ? 64 : 70)}
        {@const outer = point(tick.t, 78)}
        <line
          class="dial-tick"
          class:dial-tick--major={tick.major}
          x1={inner.x}
          y1={inner.y}
          x2={outer.x}
          y2={outer.y}
        />
      {/each}
    </g>

    <g
      class="dial-indicator"
      transform="rotate({angle} 100 100)"
      data-test="dial-indicator"
      data-angle={angle}
    >
      <line x1="100" y1="100" x2="100" y2="36" />
      <circle cx="100" cy="36" r="3" />
    </g>

    <circle class="dial-hub" cx="100" cy="100" r="7" />
    <circle class="dial-hub-dot" cx="100" cy="100" r="2" />
  </svg>

  {#if showLabels}
    <div class="dial-labels" aria-hidden="true">
      <span class="dial-label dial-label--left">Manual</span>
      <span class="dial-label dial-label--right">Autonomous</span>
    </div>
  {/if}
</div>

<style>
  .dial-wrap {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }
  .dial {
    display: block;
  }
  .dial-face {
    fill: var(--paper-cool);
  }
  .dial-ring {
    fill: none;
    stroke: var(--ink);
    stroke-width: 1.5;
  }
  .dial-tick {
    stroke: var(--graphite);
    stroke-width: 1;
    stroke-linecap: round;
  }
  .dial-tick--major {
    stroke: var(--ink);
    stroke-width: 2;
  }
  .dial-indicator line {
    stroke: var(--forge);
    stroke-width: 2.5;
    stroke-linecap: round;
  }
  .dial-indicator circle {
    fill: var(--forge);
  }
  .dial-hub {
    fill: var(--ink);
  }
  .dial-hub-dot {
    fill: var(--paper);
  }
  .dial-labels {
    display: flex;
    justify-content: space-between;
    width: var(--dial-size);
    padding: 0 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--iron);
  }
</style>
