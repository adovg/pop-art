import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern", // or "modern"
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        visualMaterials: resolve(__dirname, "./visualMaterials.html"),
        mainArticle: resolve(__dirname, "./mainArticle.html"),
        mainArticleUa: resolve(__dirname, "./mainArticleUa.html"),        
      },
    },
  },
});
