import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      } 
  })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/scss/vars.scss';
        @import './src/assets/scss/mixins.scss';
        `,
      },
    },
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
});
