// vite.config.js
import { resolve } from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

module.exports = {
  build: {
    rollupOptions: {
      input: {
        brotliInflator: resolve(__dirname, "brotli-inflator/index.html"),
        nfcTerminal: resolve(__dirname, "nfc-terminal/index.html"),
      },
    },
  },
  base: "./",
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: true,
      },
    }),
  ],
};
