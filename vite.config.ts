import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the build works at any path — including /laos-travel/ inside the portfolio.
export default defineConfig({
  base: './',
  plugins: [react()],
})
