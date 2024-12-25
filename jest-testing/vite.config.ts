import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { InlineConfig } from "vitest/node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
} as UserConfig & { test: InlineConfig });
