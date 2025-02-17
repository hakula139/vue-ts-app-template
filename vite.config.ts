import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    components({
      dts: true,
    }),
  ],
});
