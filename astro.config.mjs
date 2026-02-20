// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Pastikan ini ada (default sudah aktif di Astro 4+)
  experimental: {},
});
