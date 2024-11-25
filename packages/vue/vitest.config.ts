import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/vue': resolve(__dirname, './src')  // 添加路径别名
    }
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'jsdom'
  }
})