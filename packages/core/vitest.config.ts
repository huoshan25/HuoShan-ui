import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@/core': resolve(__dirname, './src')  // 添加路径别名
    }
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node'
  }
})