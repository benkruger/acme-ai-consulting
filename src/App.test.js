import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, fireEvent } from '@testing-library/svelte'
import App from './App.svelte'

describe('App', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('renders navbar and all nine page sections', () => {
    const { container } = render(App)
    expect(container.querySelector('[data-test="navbar"]')).not.toBeNull()
    expect(container.querySelector('[data-test="hero"]')).not.toBeNull()
    expect(container.querySelector('[data-test="problem"]')).not.toBeNull()
    expect(container.querySelector('[data-test="approach"]')).not.toBeNull()
    expect(container.querySelector('[data-test="tenants"]')).not.toBeNull()
    expect(container.querySelector('[data-test="flow"]')).not.toBeNull()
    expect(container.querySelector('[data-test="how-we-work"]')).not.toBeNull()
    expect(container.querySelector('[data-test="resources"]')).not.toBeNull()
    expect(container.querySelector('[data-test="testimonials"]')).not.toBeNull()
    expect(container.querySelector('[data-test="final-cta"]')).not.toBeNull()
  })

  test('restores root URL and clears sessionStorage when spa_redirect_path is present', () => {
    sessionStorage.setItem('spa_redirect_path', '/services')
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState')
    render(App)
    expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '/')
    expect(sessionStorage.getItem('spa_redirect_path')).toBeNull()
  })

  test('does nothing with history when no redirect path stored', () => {
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState')
    render(App)
    expect(replaceStateSpy).not.toHaveBeenCalled()
  })

  test('brand click scrolls to top', async () => {
    const scrollSpy = vi.fn()
    window.scrollTo = scrollSpy
    const { container } = render(App)
    const brand = container.querySelector('.brand')
    await fireEvent.click(brand)
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  test('scroll events recompute progress and update the navbar dial label', async () => {
    const { container } = render(App)
    const dial = container.querySelector('[data-test="navbar-dial"]')
    expect(dial.textContent).toContain('Manual')

    // Simulate having scrolled 60% of the way down
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 600 })
    window.dispatchEvent(new Event('scroll'))
    await Promise.resolve()

    expect(dial.textContent).toContain('Assisted')
  })
})
