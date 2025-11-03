import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/frontend_communitrade/', // 👈 add this line
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

