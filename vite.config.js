import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable sourcemaps
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000' 
    }
  }
});
