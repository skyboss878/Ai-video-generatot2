import { defineConfig } from 'vite'

export default defineConfig({
  root: 'public',        // set root to 'public' folder
  build: {
    outDir: '../dist',   // output dist folder relative to root
    emptyOutDir: true,
  },
})
