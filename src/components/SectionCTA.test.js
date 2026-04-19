import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SectionCTA from './SectionCTA.svelte'

describe('SectionCTA', () => {
  test('renders with default label, calendar URL, and note', () => {
    const { container } = render(SectionCTA)
    const wrap = container.querySelector('[data-test="section-cta"]')
    expect(wrap).not.toBeNull()
    const anchor = container.querySelector('[data-test="cta"]')
    expect(anchor.getAttribute('href')).toBe('https://cal.com/benkruger/ai-consultation')
    expect(container.textContent).toContain('Book a consultation')
    expect(container.textContent).toContain('30 minutes. No slide decks.')
  })

  test('accepts overrides for label, calendarUrl, note', () => {
    const { container } = render(SectionCTA, {
      props: {
        calendarUrl: 'https://cal.com/other/link',
        label: 'Reach out',
        note: 'Custom note'
      }
    })
    const anchor = container.querySelector('[data-test="cta"]')
    expect(anchor.getAttribute('href')).toBe('https://cal.com/other/link')
    expect(container.textContent).toContain('Reach out')
    expect(container.textContent).toContain('Custom note')
  })

  test('hides note when note is empty string', () => {
    const { container } = render(SectionCTA, { props: { note: '' } })
    expect(container.querySelector('.section-cta-note')).toBeNull()
  })
})
