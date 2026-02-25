import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to './' for Cloudflare Pages / Amplify subdirectory deploys
  // Change to '/' if deploying to the root of your domain
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for easier debugging (remove in strict production)
    sourcemap: false,
  },
})
