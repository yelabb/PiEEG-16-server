import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// Read version from pyproject.toml so the dashboard always knows the build version
const pyprojectPath = resolve(__dirname, "../pyproject.toml");
let APP_VERSION = "0.0.0";
if (existsSync(pyprojectPath)) {
  const pyproject = readFileSync(pyprojectPath, "utf-8");
  const versionMatch = pyproject.match(/^version\s*=\s*"(.+)"/m);
  if (versionMatch) APP_VERSION = versionMatch[1];
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === "https" ? [mkcert()] : [])],
  define: {
    __APP_VERSION__: JSON.stringify(APP_VERSION),
  },
  assetsInclude: ["**/*.obj"],
  server: {
    port: 3000,
    strictPort: true,
    allowedHosts: [".loca.lt"],
    proxy: {
      "/ws": {
        target: mode === "https" ? "wss://localhost:1616" : "ws://localhost:1616",
        ws: true,
        rewriteWsPath: true,
      },
      "/auth": {
        target: mode === "https" ? "https://localhost:1617" : "http://localhost:1617",
        changeOrigin: true,
      },
      "/api": {
        target: mode === "https" ? "https://localhost:1617" : "http://localhost:1617",
        changeOrigin: true,
      },
      "/recordings": {
        target: mode === "https" ? "https://localhost:1617" : "http://localhost:1617",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "../pieeg_server/static/dashboard",
    emptyOutDir: true,
  },
}));
