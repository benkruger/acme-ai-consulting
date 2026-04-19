import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Approach from './Approach.svelte'

describe('Approach', () => {
  test('renders section with id and anchor-ready for scroll nav', () => {
    const { container } = render(Approach)
    expect(container.querySelector('section#approach')).not.toBeNull()
    expect(container.querySelector('[data-test="approach"]')).not.toBeNull()
  })

  test('states the real ceiling and splits fit vs. not fit', () => {
    const { container } = render(Approach)
    expect(container.textContent).toContain('hardware and tokens')
    expect(container.textContent).toContain('Who this is for')
    expect(container.textContent).toContain('Who this is not for')
    expect(container.textContent).toContain('twenty engineers')
    expect(container.textContent).toContain('one consultant')
  })

  test('labels itself as "The solution" and includes the post-section CTA', () => {
    const { container } = render(Approach)
    expect(container.textContent).toContain('The solution')
    expect(container.querySelector('[data-test="section-cta"]')).not.toBeNull()
  })
})
