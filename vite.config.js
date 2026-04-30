import { defineConfig } from 'vite';

export default defineConfig({
  root: "./src",
  base: "/Laboratorio-6/",
  publicDir: "../public",
  plugins: [],
  server: { port: 1234 },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
