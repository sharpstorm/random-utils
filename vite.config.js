// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        zlibInflator: resolve(__dirname, 'zlib-inflator/index.html')
      }
    }
  },
  base: './'
}
