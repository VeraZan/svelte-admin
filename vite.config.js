import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  server: {
    hostname: '127.0.0.1',
    port: 3016,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    proxy: {
      // '/api': {
      // 	target: 'https://api.pingping6.com/tools/baidutop/',
      // 	changeOrigin: true,
      // 	rewrite: path => path.replace(/^\/api/, '')
      // }
    }
  }
})