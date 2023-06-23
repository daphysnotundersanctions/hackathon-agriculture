import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { URL, fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/scss/vars.scss';",
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
