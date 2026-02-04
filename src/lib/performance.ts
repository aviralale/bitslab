/**
 * Performance & Core Web Vitals Helpers
 * Best practices for image optimization, code splitting, and loading strategies
 *
 * Core Web Vitals targets (2024):
 * - LCP (Largest Contentful Paint): < 2.5s
 * - FID (First Input Delay): < 100ms  [Deprecated in 2024, use INP]
 * - CLS (Cumulative Layout Shift): < 0.1
 * - INP (Interaction to Next Paint): < 200ms [New metric 2024]
 * - TTFB (Time to First Byte): < 0.8s
 */

import React from "react";

/**
 * Responsive image srcset generator
 * Prevents CLS by defining width/height attributes
 * Serves multiple resolutions for faster loading
 */
export function generateImageSrcSet(
  basePath: string,
  formats: "webp" | "all" = "all",
) {
  // Example: '/images/hero.jpg' -> srcset with multiple sizes
  // Usage:
  // <img
  //   src={basePath}
  //   srcSet={generateImageSrcSet('/images/hero.jpg')}
  //   alt="description"
  //   width={1200}
  //   height={630}
  //   loading="lazy"
  // />

  const sizes = [320, 640, 960, 1280, 1920];
  const extension = basePath.split(".").pop()?.toLowerCase();

  if (formats === "webp") {
    return sizes
      .map((size) => {
        const name = basePath.replace(`.${extension}`, "");
        return `${name}-${size}w.webp ${size}w`;
      })
      .join(", ");
  }

  return sizes
    .map((size) => {
      const name = basePath.replace(`.${extension}`, "");
      return `${name}-${size}w.${extension} ${size}w`;
    })
    .join(", ");
}

/**
 * Lazy loading helper with IntersectionObserver
 * Defers offscreen images to improve LCP
 * Usage: <img {...lazyLoadProps} />
 */
export function getLazyLoadProps(src: string, alt: string) {
  return {
    src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
    "data-src": src,
    alt,
    loading: "lazy" as const,
  };
}

/**
 * Detect if WebP is supported
 * Use for progressive image delivery
 */
export async function isWebPSupported(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => resolve(webP.height === 2);
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAAA...";
  });
}

/**
 * Code splitting strategy for route-based lazy loading
 * React Router dynamic imports
 *
 * Usage in App.tsx or routing config:
 * const UnicodePreetiConverter = lazy(() =>
 *   import('./pages/unicode-preeti-converter')
 * );
 *
 * <Suspense fallback={<LoadingSpinner />}>
 *   <Routes>
 *     <Route path="/unicode-preeti-converter" element={<UnicodePreetiConverter />} />
 *   </Routes>
 * </Suspense>
 */
export function createLazyRoute(importFn: () => Promise<any>) {
  return () => ({
    Component: React.lazy(importFn),
  });
}

/**
 * Font loading strategy constants
 * font-display values for optimization:
 * - swap: Flash of unstyled text (FOUT) - fastest
 * - block: Invisible text until font loads (FOIT) - safer
 * - fallback: Balance between FOUT and FOIT
 * - optional: Text only renders if font loads quickly
 */
export const FONT_LOADING_STRATEGIES = {
  // Fast (acceptable FOUT): best for body text
  SWAP: "swap",
  // Balanced (brief invisibility): good for headlines
  FALLBACK: "fallback",
  // Invisible initially (safest): use sparingly
  BLOCK: "block",
  // Only use if font loads fast (experimental)
  OPTIONAL: "optional",
};

/**
 * Recommended preconnect domains for BitsLab
 * Add to index.html <head>
 */
export const CRITICAL_DOMAINS = [
  {
    url: "https://fonts.googleapis.com",
    crossOrigin: true,
    description: "Google Fonts API",
  },
  {
    url: "https://fonts.gstatic.com",
    crossOrigin: true,
    description: "Google Fonts CDN",
  },
  {
    url: "https://www.googletagmanager.com",
    crossOrigin: false,
    description: "Google Analytics",
  },
  {
    url: "https://www.google-analytics.com",
    crossOrigin: false,
    description: "Google Analytics collection",
  },
];

/**
 * CLS prevention checklist
 * Common sources of Cumulative Layout Shift:
 *
 * 1. Images without dimensions
 *    ✓ Always set width & height attributes
 *    ✓ Use aspect-ratio CSS for responsive images
 *
 * 2. Ads/embeds without reserved space
 *    ✓ Use containers with fixed dimensions
 *    ✓ Reserve space in layout before load
 *
 * 3. Dynamically injected content
 *    ✓ Pre-allocate space in DOM
 *    ✓ Use transform for animations (GPU-accelerated)
 *
 * 4. Web fonts
 *    ✓ Use font-display: swap
 *    ✓ Preload critical fonts
 *    ✓ Keep font sizes consistent with fallbacks
 */
export const CLS_PREVENTION = {
  imageTemplate: `
    {/* Always include explicit width & height */}
    <img
      src="/image.jpg"
      alt="description"
      width={1200}
      height={630}
      loading="lazy"
      style={{ aspectRatio: '16/9' }}
    />
  `,

  containerTemplate: `
    {/* Reserve space for dynamic content */}
    <div style={{ width: '100%', aspectRatio: '16/9' }}>
      {/* Content loads here without shifting layout */}
    </div>
  `,
};

/**
 * Bundle analysis recommendations
 * Run: npm install -D rollup-plugin-visualizer
 * Then add to vite.config.ts:
 *
 * import { visualizer } from 'rollup-plugin-visualizer';
 *
 * plugins: [
 *   visualizer({
 *     open: true,
 *     gzipSize: true,
 *     brotliSize: true,
 *   }),
 * ]
 */
export const BUNDLE_OPTIMIZATION = {
  tips: [
    "Code split route pages with React.lazy()",
    "Remove unused dependencies (check package.json)",
    "Use tree-shaking: ensure ESM exports",
    "Compress images: WebP format, 80-90% quality",
    "Minify and gzip CSS/JS (Vite does this by default)",
    "Defer non-critical JavaScript (async/defer attrs)",
  ],
};

/**
 * Performance budget constants (in KB, gzipped)
 */
export const PERFORMANCE_BUDGET = {
  MAIN_BUNDLE: 100, // Main JS bundle
  VENDOR_BUNDLE: 200, // node_modules
  CSS_BUNDLE: 30, // CSS
  ROUTE_CHUNK: 50, // Individual route chunks
  IMAGE_TOTAL: 300, // Total images on page
};

/**
 * Monitor Core Web Vitals programmatically
 * Usage:
 * import { getCoreWebVitals } from './performance';
 * getCoreWebVitals((metrics) => console.log(metrics));
 */
export function getCoreWebVitals(callback: (metrics: any) => void) {
  if ("web-vital" in window) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = require("web-vitals");

    getCLS(callback);
    getFID(callback);
    getFCP(callback);
    getLCP(callback);
    getTTFB(callback);
  }
}

/**
 * Recommend optimizations based on route size
 */
export function analyzeRouteSize(
  routeName: string,
  sizeInKB: number,
): string[] {
  const recommendations: string[] = [];

  if (sizeInKB > PERFORMANCE_BUDGET.ROUTE_CHUNK) {
    recommendations.push(
      `Route "${routeName}" exceeds budget (${sizeInKB}KB > ${PERFORMANCE_BUDGET.ROUTE_CHUNK}KB)`,
    );
    recommendations.push(
      "Consider splitting heavy components with React.lazy()",
    );
    recommendations.push(
      "Review dependencies: use dynamic imports where possible",
    );
  }

  return recommendations;
}
