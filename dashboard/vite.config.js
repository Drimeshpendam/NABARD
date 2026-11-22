import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nabard-dashboard/',
  plugins: [react()],
  server: {
    fs: { allow: ['..'] },
    port: 5174
  }
})
