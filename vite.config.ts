import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 9527, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true,
    proxy: {},
  }
})
