import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/ws": {
        target: "ws://localhost:1616",
        ws: true,
        rewriteWsPath: true,
      },
      "/auth": {
        target: "http://localhost:1617",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "../pieeg_server/static/dashboard",
    emptyOutDir: true,
  },
});
