<script>
  let { onNavigate, page } = $props()

  function go(event, target) {
    event.preventDefault()
    onNavigate({ page: target })
  }
</script>

<nav class="navbar">
  <div class="inner">
    <a class="brand" href="/" onclick={(e) => go(e, 'home')}>Acme AI Consulting</a>
    <div class="links">
      <a href="/" class:active={page === 'home'} onclick={(e) => go(e, 'home')}>Home</a>
      <a href="/services" class:active={page === 'services'} onclick={(e) => go(e, 'services')}>Services</a>
      <a href="/contact" class:active={page === 'contact'} onclick={(e) => go(e, 'contact')}>Contact</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    border-bottom: 1px solid #e5e7eb;
    background: #fff;
  }
  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    font-weight: 600;
    color: #111827;
  }
  .links {
    display: flex;
    gap: 1.25rem;
  }
  .links a.active {
    font-weight: 600;
  }
</style>
