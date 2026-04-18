import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Approach from './Approach.svelte'

describe('Approach', () => {
  test('renders section with id and anchor-ready for scroll nav', () => {
    const { container } = render(Approach)
    expect(container.querySelector('section#approach')).not.toBeNull()
    expect(container.querySelector('[data-test="approach"]')).not.toBeNull()
  })

  test('covers the 10x headline promise and who-this-is-for split', () => {
    const { container } = render(Approach)
    expect(container.textContent).toContain('ten pull requests a day')
    expect(container.textContent).toContain('Who this is for')
    expect(container.textContent).toContain('Who this is not for')
    expect(container.textContent).toContain('twenty engineers')
    expect(container.textContent).toContain('one consultant')
  })
})
