import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import { createRawSnippet } from 'svelte'
import Eyebrow from './Eyebrow.svelte'

function textSnippet(text) {
  return createRawSnippet(() => ({
    render: () => `<span>${text}</span>`
  }))
}

describe('Eyebrow', () => {
  test('renders text without number', () => {
    const { container } = render(Eyebrow, {
      props: { children: textSnippet('Section label') }
    })
    expect(container.textContent).toContain('Section label')
    expect(container.querySelector('.eyebrow-number')).toBeNull()
  })

  test('renders number and separator when provided', () => {
    const { container } = render(Eyebrow, {
      props: { number: '03', children: textSnippet('Flow') }
    })
    expect(container.querySelector('.eyebrow-number')?.textContent).toBe('03')
    expect(container.querySelector('.eyebrow-sep')).not.toBeNull()
    expect(container.textContent).toContain('Flow')
  })
})
