import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  worker: {
    plugins: () => [
      wasm(),
      topLevelAwait()
    ]
  },
  build: {
    target: 'esnext'
  },
  // this only affects `dev` builds
  optimizeDeps: {
    exclude: ['lumina-node']
  }
})
