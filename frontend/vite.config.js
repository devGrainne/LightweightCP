import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: Add backend proxy to point to localhost:8080/api/ 
  server: {
    port: 5173,
    proxy: {
      '/api': {
        //target: 'http://localhost:8080',
        target: 'http://localhost:5280',
        changeOrigin: true
      }
    }
  }
})
