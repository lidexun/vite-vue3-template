import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Pages({
      importMode: 'async',
      // 路由风格nuxtjs
      routeStyle: 'nuxt',
      // 排除components下的路由
      exclude: ['**/components/*.vue']
    }),
    AutoImport({
      dts: true,
      resolvers: [ArcoResolver()],
      imports: ['vue', 'vue-router', 'pinia']
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    // 是否开启 https
    https: false,
    // 设置服务启动端口号
    port: 9527,
    // 设置服务启动时是否自动打开浏览器
    open: false,
    // 允许跨域
    cors: true,
    // 自定义代理
    proxy: {},
  }
})
