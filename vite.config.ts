import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    silent: true,
    setupFiles: './setupTests.ts',
  },
  build: {
    rollupOptions: {
      input: {
        // the default entry point
        app: './index.html',
        'sw': './sw.js'
      },
      output: {
        entryFileNames: assetInfo => {
          return assetInfo.name === 'sw' ? '[name].js' : 'assets/js/[name]-[hash].js'
        }
      },
    },
  }
})
