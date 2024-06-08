import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://king1661.github.io/The_amazing_portfolio/",
  plugins: [react()],
})
