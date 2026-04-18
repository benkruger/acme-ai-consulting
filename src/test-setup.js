// jsdom does not implement window.matchMedia. Stub it so components that
// use matchMedia for responsive behaviour (e.g. Hero and FinalCTA mobile
// dial sizing) can run under vitest.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  })
}
