<script>
  import Navbar from './components/Navbar.svelte'
  import Home from './routes/Home.svelte'

  const redirectedPath = sessionStorage.getItem('spa_redirect_path')
  if (redirectedPath) {
    sessionStorage.removeItem('spa_redirect_path')
    window.history.replaceState({}, '', '/')
  }

  let scrollProgress = $state(0)

  function updateProgress() {
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    scrollProgress = Math.max(0, Math.min(1, window.scrollY / max))
  }

  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
  updateProgress()

  function handleNavigate(event) {
    if (event.page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
</script>

<Navbar onNavigate={handleNavigate} {scrollProgress} />
<main class="app-content">
  <Home />
</main>

<style>
  .app-content {
    min-height: 100vh;
  }
</style>
