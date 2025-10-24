import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000,
  },
  base: './',
  // Add this to handle asset imports properly
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp', '**/*.pdf'],
})