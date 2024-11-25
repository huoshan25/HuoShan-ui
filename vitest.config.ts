import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: ['./vitest.setup.ts']
  },
  resolve: {
    alias: {
      '@huoshan-ui/vue': path.resolve(__dirname, './packages/vue/src'),
      '@huoshan-ui/core': path.resolve(__dirname, './packages/core/src')
    }
  }
})