// Vite config for Railway - minimal config to prevent build errors
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        standalone: './standalone.html'
      }
    }
  },
  server: {
    port: 3000
  }
})
