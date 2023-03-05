import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  envDir: "env",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@public", replacement: path.resolve(__dirname, "./public") },
    ],
  },
  // build: {
  //   minify: false,
  // },
});
