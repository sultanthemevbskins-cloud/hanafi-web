import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ctos/ui':     resolve(__dirname, '../../packages/ui/src'),
      '@ctos/tokens': resolve(__dirname, '../../packages/tokens'),
    },
  },
})
