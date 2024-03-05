import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue'],
      dts: './auto-imports.d.ts',
      vueTemplate: true,
      // dirs: ['src/libs/import'],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  
})
