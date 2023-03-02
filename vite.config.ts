import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'


export default defineConfig({
  base: '/', // https://cn.vitejs.dev/config/shared-options.html#base
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    Unocss()
  ]
})
