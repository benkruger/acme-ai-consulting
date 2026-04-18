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

  test('renders section anchor links', () => {
    const onNavigate = vi.fn()
    const { container } = render(Navbar, { props: { onNavigate } })
    const links = container.querySelectorAll('.link')
    expect(links.length).toBe(4)
    expect(Array.from(links).map((l) => l.getAttribute('href'))).toEqual([
      '#problem',
      '#approach',
      '#flow',
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
})
