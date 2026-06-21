import type { APIRoute } from "astro";
import { site } from "../config/site";

// Generato dinamicamente così la URL della sitemap segue sempre il dominio
// configurato (Astro `site` = site.url): cambiando dominio non resta hard-coded.
export const GET: APIRoute = ({ site: astroSite }) => {
  const base = astroSite?.href ?? site.url;
  const sitemapUrl = new URL("sitemap-index.xml", base).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
