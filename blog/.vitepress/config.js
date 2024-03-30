import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ErtixNode",
  description: "Developing&Learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    search: {
      provider: 'local'
    }
  },
  head: [
    ['meta', { name: 'purpleads-verification', content: '916f283445a15c292d0f293d' }]
  ]
})
