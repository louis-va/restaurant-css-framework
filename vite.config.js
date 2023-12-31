import { defineConfig } from "vite"
import { resolve } from "path"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default {
  base: '/restaurant-css-framework/',
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        menu: resolve(root, 'menu', 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        contact: resolve(root, 'contact', 'index.html'),
      }
    }
  }
}