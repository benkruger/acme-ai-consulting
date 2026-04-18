import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
    exclude: ['node_modules/**'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,svelte}'],
      exclude: ['src/main.js']
    }
  }
})
