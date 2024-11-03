import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: "/src/components",
      data: "/src/data",
      helpers: "/src/helpers",
      styles: "/src/styles",
    },
  },
});