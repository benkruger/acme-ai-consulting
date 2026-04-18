import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
    exclude: ['node_modules/**'],
    setupFiles: ['./src/test-setup.js'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,svelte}'],
      exclude: ['src/main.js', 'src/routes/**', 'src/test-setup.js'],
      thresholds: {
        lines: 100,
        statements: 100,
        functions: 100,
        // Svelte compiles attribute interpolations (e.g. class="foo {bar}")
        // into defensive nullish branches that are unreachable from userland,
        // so branch coverage maxes out below 100% even with exhaustive tests.
        branches: 80
      }
    }
  }
})
