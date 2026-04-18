import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Resources from './Resources.svelte'

describe('Resources', () => {
  test('renders section with anchor id', () => {
    const { container } = render(Resources)
    expect(container.querySelector('section#resources')).not.toBeNull()
    expect(container.querySelector('[data-test="resources"]')).not.toBeNull()
  })

  test('covers the two constraints, three solutions, and zero-cost headline', () => {
    const { container } = render(Resources)
    expect(container.querySelectorAll('.constraint').length).toBe(2)
    expect(container.querySelectorAll('.solution').length).toBe(3)
    expect(container.textContent).toContain('Small Language Models')
    expect(container.textContent).toContain('Local inference')
    expect(container.textContent).toContain('10x productivity at near-zero incremental cost')
  })
})
