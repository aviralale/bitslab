#!/usr/bin/env node

/**
 * Build-time Sitemap Generator
 * Generates sitemap.xml from routeMeta.ts configuration
 *
 * Usage: node scripts/generate-sitemap.js
 *
 * This script:
 * 1. Reads all routes from src/config/routeMeta.ts
 * 2. Generates XML sitemap with proper metadata
 * 3. Writes to public/sitemap.xml
 *
 * Can be integrated into build process:
 * "build": "node scripts/generate-sitemap.js && tsc -b && vite build"
 */

const fs = require("fs");
const path = require("path");

const SITE_URL = "https://lab.ctrlbits.com";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

/**
 * Route configuration with SEO metadata
 * This matches src/config/routeMeta.ts
 */
const ROUTES = {
  "/": { changefreq: "weekly", priority: 1.0 },
  "/tools": { changefreq: "weekly", priority: 0.9 },
  "/about": { changefreq: "monthly", priority: 0.8 },
  "/contact": { changefreq: "monthly", priority: 0.7 },
  "/roadmap": { changefreq: "monthly", priority: 0.7 },
  "/privacy-policy": { changefreq: "yearly", priority: 0.5 },
  "/terms-of-service": { changefreq: "yearly", priority: 0.5 },
  "/cookie-policy": { changefreq: "yearly", priority: 0.5 },
  "/unicode-preeti-converter": {
    changefreq: "weekly",
    priority: 0.9,
    mobile: true,
  },
  "/text-formatter": { changefreq: "weekly", priority: 0.9, mobile: true },
  "/qr-barcode-generator": {
    changefreq: "weekly",
    priority: 0.9,
    mobile: true,
  },
  "/invoice-generator": { changefreq: "weekly", priority: 0.8, mobile: true },
};

/**
 * Escape XML special characters
 */
function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generate XML entry for single URL
 */
function generateUrlEntry(pathname, config) {
  const url = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;

  let entry = `  <url>\n`;
  entry += `    <loc>${escapeXml(url)}</loc>\n`;
  entry += `    <lastmod>${TODAY}</lastmod>\n`;
  entry += `    <changefreq>${config.changefreq}</changefreq>\n`;
  entry += `    <priority>${config.priority}</priority>\n`;

  // Add mobile tag if applicable
  if (config.mobile) {
    entry += `    <mobile:mobile/>\n`;
  }

  entry += `  </url>\n`;

  return entry;
}

/**
 * Generate complete sitemap XML
 */
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  <!-- Generated: ${new Date().toISOString()} -->
  <!-- Generator: scripts/generate-sitemap.js -->
  <!-- Source: src/config/routeMeta.ts -->
\n`;

  // Add all routes
  Object.entries(ROUTES).forEach(([pathname, config]) => {
    xml += generateUrlEntry(pathname, config);
  });

  xml += `</urlset>\n`;

  return xml;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
    const xml = generateSitemap();

    fs.writeFileSync(sitemapPath, xml, "utf-8");

    console.log(`✓ Sitemap generated successfully`);
    console.log(`  Path: ${sitemapPath}`);
    console.log(`  Routes: ${Object.keys(ROUTES).length}`);
    console.log(`  Base URL: ${SITE_URL}`);
  } catch (error) {
    console.error("✗ Failed to generate sitemap:", error.message);
    process.exit(1);
  }
}

// Run generator
writeSitemap();
