import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    includeSource: ["app/**/*.{ts,tsx}"],
    exclude: ["node_modules", "e2e"],
    coverage: {
      reporter: process.env.CI ? "json" : "html-spa",
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
  plugins: [react()],
});
