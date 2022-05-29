module.exports = {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts,jsx,tsx}'
  ],
  media: false,
  theme: {
    extend: {
      width: {
        'fit': 'fit-content'
      },
      gridTemplateRows: {
        'auto': 'auto auto',
      },
      gridTemplateCols: {
        'auto': 'auto auto',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}