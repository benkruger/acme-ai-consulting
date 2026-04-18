import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
  { languageOptions: { globals: globals.browser } },
  ...svelte.configs.recommended,
  { ignores: ['dist/', 'coverage/'] }
]
