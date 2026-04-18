import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Tenants from './Tenants.svelte'

describe('Tenants', () => {
  test('renders the section with anchor id', () => {
    const { container } = render(Tenants)
    expect(container.querySelector('section#tenants')).not.toBeNull()
    expect(container.querySelector('[data-test="tenants"]')).not.toBeNull()
  })

  test('renders three tenant cards in order', () => {
    const { container } = render(Tenants)
    const cards = container.querySelectorAll('.tenant-card')
    expect(cards.length).toBe(3)
    const numbers = Array.from(container.querySelectorAll('.tenant-number')).map(
      (el) => el.textContent
    )
    expect(numbers).toEqual(['01', '02', '03'])
    expect(container.textContent).toContain('30-second rollback')
    expect(container.textContent).toContain('Zero errors')
    expect(container.textContent).toContain('100% deep test coverage')
  })

  test('includes the post-tenants CTA', () => {
    const { container } = render(Tenants)
    expect(container.querySelector('[data-test="section-cta"]')).not.toBeNull()
  })
})
