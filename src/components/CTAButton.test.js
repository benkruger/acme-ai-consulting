import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/svelte'
import { createRawSnippet } from 'svelte'
import CTAButton from './CTAButton.svelte'

function textSnippet(text) {
  return createRawSnippet(() => ({
    render: () => `<span>${text}</span>`
  }))
}

describe('CTAButton', () => {
  test('renders as anchor when href provided', () => {
    const { container } = render(CTAButton, {
      props: { href: 'https://example.com', children: textSnippet('Book') }
    })
    const anchor = container.querySelector('a[data-test="cta"]')
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('href')).toBe('https://example.com')
    expect(container.textContent).toContain('Book')
  })

  test('renders as button when no href provided and invokes onClick', async () => {
    const onClick = vi.fn()
    const { container } = render(CTAButton, {
      props: { onClick, children: textSnippet('Submit') }
    })
    const button = container.querySelector('button[data-test="cta"]')
    expect(button).not.toBeNull()
    expect(button.getAttribute('type')).toBe('button')
    await fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('applies variant class', () => {
    const { container } = render(CTAButton, {
      props: { variant: 'ghost', children: textSnippet('Ghost') }
    })
    const el = container.querySelector('[data-test="cta"]')
    expect(el.className).toContain('cta--ghost')
  })
})
