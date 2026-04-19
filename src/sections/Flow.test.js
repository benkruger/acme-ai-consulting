import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Flow from './Flow.svelte'

describe('Flow', () => {
  test('renders section with anchor id', () => {
    const { container } = render(Flow)
    expect(container.querySelector('section#flow')).not.toBeNull()
    expect(container.querySelector('[data-test="flow"]')).not.toBeNull()
  })

  test('lists six phases in order and links to the repo', () => {
    const { container } = render(Flow)
    const phases = container.querySelectorAll('.phase')
    expect(phases.length).toBe(6)
    const titles = Array.from(container.querySelectorAll('.phase-title')).map((el) =>
      el.textContent.trim().split(' —')[0].trim()
    )
    expect(titles).toEqual(['Start', 'Plan', 'Code', 'Code Review', 'Learn', 'Complete'])
    const repoLink = container.querySelector('.flow-repo')
    expect(repoLink.getAttribute('href')).toBe('https://github.com/benkruger/flow')
    expect(container.textContent).toContain('~90 min')
  })
})
