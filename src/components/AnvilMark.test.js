import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AnvilMark from './AnvilMark.svelte'

describe('AnvilMark', () => {
  test('renders svg with default size and ink tone', () => {
    const { container } = render(AnvilMark)
    const svg = container.querySelector('[data-test="anvil"]')
    expect(svg).not.toBeNull()
    expect(svg.tagName.toLowerCase()).toBe('svg')
    expect(svg.getAttribute('width')).toBe('320')
    expect(svg.classList.contains('anvil--ink')).toBe(true)
  })

  test('renders with custom size only', () => {
    const { container } = render(AnvilMark, { props: { size: 200 } })
    const svg = container.querySelector('[data-test="anvil"]')
    expect(svg.getAttribute('width')).toBe('200')
    expect(svg.classList.contains('anvil--ink')).toBe(true)
  })

  test('renders with custom tone only', () => {
    const { container } = render(AnvilMark, { props: { tone: 'paper' } })
    const svg = container.querySelector('[data-test="anvil"]')
    expect(svg.getAttribute('width')).toBe('320')
    expect(svg.classList.contains('anvil--paper')).toBe(true)
  })

  test('renders with both size and tone customized', () => {
    const { container } = render(AnvilMark, {
      props: { size: 180, tone: 'forge' }
    })
    const svg = container.querySelector('[data-test="anvil"]')
    expect(svg.getAttribute('width')).toBe('180')
    expect(svg.classList.contains('anvil--forge')).toBe(true)
  })

  test('includes accessible title and detail geometry', () => {
    const { container } = render(AnvilMark)
    expect(container.querySelector('title')?.textContent).toBe('Acme anvil')
    expect(container.querySelector('.anvil-detail rect')).not.toBeNull()
    expect(container.querySelector('.anvil-detail line')).not.toBeNull()
  })
})
