import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import FinalCTA from './FinalCTA.svelte'

describe('FinalCTA', () => {
  test('renders section with contact id for navbar anchor', () => {
    const { container } = render(FinalCTA)
    expect(container.querySelector('section#contact')).not.toBeNull()
    expect(container.querySelector('[data-test="final-cta"]')).not.toBeNull()
  })

  test('renders headline, CTA, dial, and footer Flow link', () => {
    const { container } = render(FinalCTA)
    const cta = container.querySelector('[data-test="cta"]')
    expect(cta.getAttribute('href')).toBe('https://cal.com/benkruger/ai-consultation')
    expect(container.querySelector('[data-test="dial"]')).not.toBeNull()
    const flowLink = container.querySelector('.footer-links a')
    expect(flowLink.getAttribute('href')).toBe('https://github.com/benkruger/flow')
    expect(container.textContent).toContain('Any business. Any domain. Any problem.')
  })

  test('accepts calendarUrl override', () => {
    const { container } = render(FinalCTA, {
      props: { calendarUrl: 'https://cal.com/other/link' }
    })
    expect(container.querySelector('[data-test="cta"]').getAttribute('href')).toBe(
      'https://cal.com/other/link'
    )
  })
})
