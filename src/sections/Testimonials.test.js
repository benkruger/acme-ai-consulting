import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Testimonials from './Testimonials.svelte'

describe('Testimonials', () => {
  test('renders section with anchor id', () => {
    const { container } = render(Testimonials)
    expect(container.querySelector('section#testimonials')).not.toBeNull()
    expect(container.querySelector('[data-test="testimonials"]')).not.toBeNull()
  })

  test('renders two TK testimonial placeholders', () => {
    const { container } = render(Testimonials)
    const quotes = container.querySelectorAll('.testimonial')
    expect(quotes.length).toBe(2)
    expect(container.textContent).toContain('HIPAA Health')
    expect(container.textContent).toContain('Full Harvest')
    expect(container.textContent).toMatch(/TK.*HIPAA Health/s)
  })
})
