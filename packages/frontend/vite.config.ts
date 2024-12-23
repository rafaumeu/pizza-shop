/* eslint-disable prettier/prettier */
import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, InlineConfig, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
} as UserConfig & {
  test: InlineConfig
});
