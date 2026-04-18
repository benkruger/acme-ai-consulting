import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Dial from './Dial.svelte'

function getIndicatorAngle(container) {
  return Number(container.querySelector('[data-test="dial-indicator"]').getAttribute('data-angle'))
}

describe('Dial', () => {
  test('renders at manual position (-120°) by default', () => {
    const { container } = render(Dial)
    expect(getIndicatorAngle(container)).toBe(-120)
  })

  test('renders at midpoint when position is 0.5', () => {
    const { container } = render(Dial, { props: { position: 0.5 } })
    expect(getIndicatorAngle(container)).toBe(0)
  })

  test('renders at autonomous position (+120°) when position is 1', () => {
    const { container } = render(Dial, { props: { position: 1 } })
    expect(getIndicatorAngle(container)).toBe(120)
  })

  test('clamps negative position to 0', () => {
    const { container } = render(Dial, { props: { position: -0.5 } })
    expect(getIndicatorAngle(container)).toBe(-120)
  })

  test('clamps position above 1 to 1', () => {
    const { container } = render(Dial, { props: { position: 2 } })
    expect(getIndicatorAngle(container)).toBe(120)
  })

  test('renders 11 tick marks with 3 major ticks', () => {
    const { container } = render(Dial)
    const ticks = container.querySelectorAll('.dial-tick')
    const majorTicks = container.querySelectorAll('.dial-tick--major')
    expect(ticks.length).toBe(11)
    expect(majorTicks.length).toBe(3)
  })

  test('shows labels by default', () => {
    const { container } = render(Dial)
    expect(container.querySelector('.dial-labels')).not.toBeNull()
    expect(container.textContent).toContain('Manual')
    expect(container.textContent).toContain('Autonomous')
  })

  test('hides labels when showLabels is false', () => {
    const { container } = render(Dial, { props: { showLabels: false } })
    expect(container.querySelector('.dial-labels')).toBeNull()
  })

  test('applies size prop to svg', () => {
    const { container } = render(Dial, { props: { size: 240 } })
    const svg = container.querySelector('svg.dial')
    expect(svg.getAttribute('width')).toBe('240')
    expect(svg.getAttribute('height')).toBe('240')
  })
})
