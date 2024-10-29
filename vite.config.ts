import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    tsconfigPaths({ loose: true }),
    vue(),
    Components({
      dts: true,
    }),
  ],
});
