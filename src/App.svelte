<script>
  import Navbar from './components/Navbar.svelte'
  import Home from './routes/Home.svelte'

  const redirectedPath = sessionStorage.getItem('spa_redirect_path')
  if (redirectedPath) {
    sessionStorage.removeItem('spa_redirect_path')
    window.history.replaceState({}, '', '/')
  }

  function handleNavigate(event) {
    if (event.page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
</script>

<Navbar onNavigate={handleNavigate} />
<main class="app-content">
  <Home />
</main>

<style>
  .app-content {
    min-height: 100vh;
  }
</style>
