import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: '127.0.0.1',
    port: 4100,
    strictPort: true,
    allowedHosts: ['acme-ai-consulting.dev', 'www.acme-ai-consulting.dev']
  }
})
