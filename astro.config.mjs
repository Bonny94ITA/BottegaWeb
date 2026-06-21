// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  // Cambia con il dominio definitivo: usato per sitemap, canonical e OpenGraph.
  site: site.url,
  integrations: [sitemap()],
  vite: {
    // cast: il plugin Tailwind v4 e Astro includono versioni di Vite con tipi
    // leggermente diversi; a runtime è corretto, evitiamo solo il falso errore TS.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
