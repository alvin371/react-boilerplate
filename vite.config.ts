import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import eslintPlugin from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), svgr(), eslintPlugin()],
  server: {
    host: "0.0.0.0",
  },
});
