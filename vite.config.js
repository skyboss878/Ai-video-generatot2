import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from local network
    port: 3000         // Development server runs at http://localhost:3000
  },
  build: {
    outDir: 'dist',    // Build output folder
    assetsDir: 'assets' // Folder inside dist to store static assets
  }
})
