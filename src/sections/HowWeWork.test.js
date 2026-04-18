import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import HowWeWork from './HowWeWork.svelte'

describe('HowWeWork', () => {
  test('renders section with anchor id', () => {
    const { container } = render(HowWeWork)
    expect(container.querySelector('section#how-we-work')).not.toBeNull()
    expect(container.querySelector('[data-test="how-we-work"]')).not.toBeNull()
  })

  test('renders both phases with the full assessment checklist', () => {
    const { container } = render(HowWeWork)
    const phases = container.querySelectorAll('.phase-block')
    expect(phases.length).toBe(2)
    const checks = container.querySelectorAll('.phase-checks li')
    expect(checks.length).toBe(5)
    expect(container.textContent).toContain('bin/lint')
    expect(container.textContent).toContain('Coaching & Dial Progression')
  })

  test('includes the post-section CTA', () => {
    const { container } = render(HowWeWork)
    expect(container.querySelector('[data-test="section-cta"]')).not.toBeNull()
  })
})
