import { describe, test, expect, vi, afterEach } from 'vitest'
import { render, fireEvent } from '@testing-library/svelte'
import Navbar from './Navbar.svelte'

describe('Navbar', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  test('brand click invokes onNavigate with home page', async () => {
    const onNavigate = vi.fn()
    const { container } = render(Navbar, { props: { onNavigate } })
    const brand = container.querySelector('.brand')
    await fireEvent.click(brand)
    expect(onNavigate).toHaveBeenCalledWith({ page: 'home' })
  })

  test('renders eight section anchor links targeting on-page sections', () => {
    const onNavigate = vi.fn()
    const { container } = render(Navbar, { props: { onNavigate } })
    const links = container.querySelectorAll('.link')
    expect(links.length).toBe(8)
    expect(Array.from(links).map((l) => l.getAttribute('href'))).toEqual([
      '#problem',
      '#approach',
      '#tenants',
      '#flow',
      '#how-we-work',
      '#resources',
      '#testimonials',
      '#contact'
    ])
  })

  test('anchor click calls scrollIntoView when target exists', async () => {
    const onNavigate = vi.fn()
    const target = document.createElement('div')
    target.id = 'problem'
    const scrollSpy = vi.fn()
    target.scrollIntoView = scrollSpy
    document.body.appendChild(target)

    const { container } = render(Navbar, { props: { onNavigate } })
    const problemLink = container.querySelector('a[href="#problem"]')
    await fireEvent.click(problemLink)

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
  })

  test('anchor click is a no-op when target missing', async () => {
    const onNavigate = vi.fn()
    const { container } = render(Navbar, { props: { onNavigate } })
    const missingLink = container.querySelector('a[href="#approach"]')
    await fireEvent.click(missingLink)
    expect(onNavigate).not.toHaveBeenCalled()
  })

  test('scroll progress dial reflects passed position with Manual label under 0.33', () => {
    const { container } = render(Navbar, { props: { onNavigate: vi.fn(), scrollProgress: 0 } })
    const dial = container.querySelector('[data-test="navbar-dial"]')
    expect(dial).not.toBeNull()
    expect(dial.textContent).toContain('Manual')
  })

  test('progress label reads Assisted in the middle band', () => {
    const { container } = render(Navbar, {
      props: { onNavigate: vi.fn(), scrollProgress: 0.5 }
    })
    const dial = container.querySelector('[data-test="navbar-dial"]')
    expect(dial.textContent).toContain('Assisted')
  })

  test('progress label reads Autonomous near the bottom', () => {
    const { container } = render(Navbar, {
      props: { onNavigate: vi.fn(), scrollProgress: 0.9 }
    })
    const dial = container.querySelector('[data-test="navbar-dial"]')
    expect(dial.textContent).toContain('Autonomous')
  })
})
