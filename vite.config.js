import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
