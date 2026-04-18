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

  test('renders navbar and home page', () => {
    const { container } = render(App)
    expect(container.querySelector('[data-test="navbar"]')).not.toBeNull()
    expect(container.querySelector('[data-test="hero"]')).not.toBeNull()
    expect(container.querySelector('[data-test="problem"]')).not.toBeNull()
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
})
