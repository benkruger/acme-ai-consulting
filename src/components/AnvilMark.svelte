<script>
  let { size = 320, tone = 'ink' } = $props()
</script>

<svg
  class="anvil anvil--{tone}"
  viewBox="0 0 240 144"
  width={size}
  height={size * (144 / 240)}
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Acme anvil — any business, any domain, any problem"
  data-test="anvil"
>
  <title>Acme anvil</title>
  <g class="anvil-body">
    <!-- Horn -->
    <path d="M 6 48 L 72 26 L 72 54 Z" />
    <!-- Face -->
    <path d="M 58 22 L 228 22 L 228 54 L 58 54 Z" />
    <!-- Waist -->
    <path d="M 98 54 L 188 54 L 188 82 L 98 82 Z" />
    <!-- Base with feet -->
    <path d="M 34 82
             L 232 82
             L 232 110
             L 204 110
             L 204 128
             L 178 128
             L 178 110
             L 88 110
             L 88 128
             L 62 128
             L 62 110
             L 34 110 Z" />
  </g>
  <g class="anvil-detail" aria-hidden="true">
    <!-- Face highlight line -->
    <line x1="62" y1="27" x2="222" y2="27" />
    <!-- Hardy hole -->
    <rect x="188" y="32" width="12" height="12" rx="1.5" />
  </g>
</svg>

<style>
  .anvil {
    display: block;
    overflow: visible;
  }
  .anvil-body {
    fill: var(--ink);
  }
  .anvil--paper .anvil-body {
    fill: var(--paper);
  }
  .anvil--forge .anvil-body {
    fill: var(--forge);
  }
  .anvil-detail line {
    stroke: var(--paper);
    stroke-width: 1;
    opacity: 0.35;
  }
  .anvil-detail rect {
    fill: var(--paper);
    opacity: 0.5;
  }
  .anvil--paper .anvil-detail line,
  .anvil--paper .anvil-detail rect {
    stroke: var(--ink);
    fill: var(--ink);
  }
</style>
