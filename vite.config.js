import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Remove additionalData to avoid duplicate imports and deprecation warnings
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  publicDir: '../public'
})