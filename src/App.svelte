<script>
  import Navbar from './components/Navbar.svelte'
  import Home from './routes/Home.svelte'
  import Services from './routes/Services.svelte'
  import Contact from './routes/Contact.svelte'

  const redirectedPath = sessionStorage.getItem('spa_redirect_path')
  if (redirectedPath) {
    sessionStorage.removeItem('spa_redirect_path')
    window.history.replaceState({}, '', redirectedPath)
  }

  function parseRoute(pathname) {
    if (pathname === '/services') return { page: 'services' }
    if (pathname === '/contact') return { page: 'contact' }
    return { page: 'home' }
  }

  function urlForPage(pageName) {
    if (pageName === 'services') return '/services'
    if (pageName === 'contact') return '/contact'
    return '/'
  }

  const initialRoute = parseRoute(window.location.pathname)

  let page = $state(initialRoute.page)
  let skipNextPush = false

  function handleNavigate(event) {
    page = event.page

    if (!skipNextPush) {
      const url = urlForPage(event.page)
      if (window.location.pathname !== url) {
        window.history.pushState({ page: event.page }, '', url)
      }
    }
  }

  function handlePopState() {
    const route = parseRoute(window.location.pathname)
    skipNextPush = true
    handleNavigate(route)
    skipNextPush = false
  }

  window.addEventListener('popstate', handlePopState)
</script>

<Navbar onNavigate={handleNavigate} {page} />
<main class="app-content">
  {#if page === 'home'}
    <Home onNavigate={handleNavigate} />
  {:else if page === 'services'}
    <Services onNavigate={handleNavigate} />
  {:else if page === 'contact'}
    <Contact onNavigate={handleNavigate} />
  {/if}
</main>

<style>
  .app-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem 2rem;
  }
</style>
