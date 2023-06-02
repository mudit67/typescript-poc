/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
export default defineConfig({
  // ...
  server: {
    port: 3000,
    host: true,
  },
});
