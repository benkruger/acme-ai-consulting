import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Problem from './Problem.svelte'

describe('Problem', () => {
  test('renders section with id for anchor navigation', () => {
    const { container } = render(Problem)
    const section = container.querySelector('section#problem')
    expect(section).not.toBeNull()
  })

  test('renders all three problems with numbers and titles', () => {
    const { container } = render(Problem)
    const items = container.querySelectorAll('.problem-item')
    expect(items.length).toBe(3)

    const numbers = Array.from(container.querySelectorAll('.problem-number')).map(
      (el) => el.textContent
    )
    expect(numbers).toEqual(['01', '02', '03'])

    expect(container.textContent).toContain("You don't know how far behind you are.")
    expect(container.textContent).toContain("You're overwhelmed.")
    expect(container.textContent).toContain("You don't know where to start.")
  })
})
