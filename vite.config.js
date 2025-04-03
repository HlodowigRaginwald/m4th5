/* global process, __dirname */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

const isProduction = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: !isProduction,
    rollupOptions: {
      output: {
        // compact: true,
        assetFileNames: "assets/_[hash:10][extname]",
        chunkFileNames: ({ name }) =>
          `assets/🟰-${name.substring(0, 3)}-[hash].js`,
        manualChunks(id) {
          if (id.includes("/node_modules/@firebase/auth")) return "fb-auth";
          if (id.includes("/node_modules/@firebase")) return "fb";
          if (id.includes("/node_modules/@vue")) return "vue";
          if (id.includes("/node_modules/")) return "vendor";

          return undefined;
        },
      },
    },
  },
  css: {
    modules: {
      globalModulePaths: ["./src/styles"],
      generateScopedName: isProduction
        ? "✖➕➖➗[hash:base64:8]"
        : "[folder]_[name]_[local]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  plugins: [vue()],
});
