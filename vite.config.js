// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        deflater: resolve(__dirname, 'deflater/index.html')
      }
    }
  }
}
