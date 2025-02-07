import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./test/setup.js",
  },
  build: {
    outDir: path.resolve(__dirname, "build"),
  },
});
