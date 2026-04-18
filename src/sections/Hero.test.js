import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Hero from './Hero.svelte'

describe('Hero', () => {
  test('renders headline, lede, CTA, and visuals', () => {
    const { container } = render(Hero)
    const section = container.querySelector('[data-test="hero"]')
    expect(section).not.toBeNull()
    expect(container.textContent).toContain('Meet your team')
    expect(container.textContent).toContain('where they are.')
    expect(container.textContent).toContain('Ratchet up the dial')
    expect(container.querySelector('[data-test="cta"]')).not.toBeNull()
    expect(container.querySelector('[data-test="anvil"]')).not.toBeNull()
    expect(container.querySelector('[data-test="dial"]')).not.toBeNull()
  })

  test('uses default calendarUrl for CTA', () => {
    const { container } = render(Hero)
    const cta = container.querySelector('[data-test="cta"]')
    expect(cta.getAttribute('href')).toBe('https://cal.com/benkruger/ai-consultation')
  })

  test('respects calendarUrl override', () => {
    const { container } = render(Hero, {
      props: { calendarUrl: 'https://cal.com/other/link' }
    })
    const cta = container.querySelector('[data-test="cta"]')
    expect(cta.getAttribute('href')).toBe('https://cal.com/other/link')
  })
})
