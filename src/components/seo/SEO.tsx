/**
 * SEO Component
 * Production-ready, TypeScript SEO manager for React SPA
 * Handles dynamic title, meta tags, canonical URLs, OG tags, and JSON-LD schemas
 *
 * Usage:
 * <SEO
 *   title="Page Title"
 *   description="Page description"
 *   keywords={['keyword1', 'keyword2']}
 *   canonical="/page-path"
 *   ogImage="https://example.com/image.png"
 * />
 */

import { useEffect } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  /** Page title (will append " | BitsLab" if not already present) */
  title: string;

  /** Meta description (optimal: 150–160 chars) */
  description: string;

  /** SEO keywords array (10–20 recommended, not spammy) */
  keywords?: string[];

  /** Canonical URL path (default: current pathname) */
  canonical?: string;

  /** Open Graph image URL */
  ogImage?: string;

  /** Open Graph image alt text */
  ogImageAlt?: string;

  /** Open Graph type (default: 'website') */
  ogType?: "website" | "article";

  /** Prevent indexing this page (noindex robots meta) */
  noIndex?: boolean;

  /** Twitter handle (optional, for Twitter Card attribution) */
  twitterHandle?: string;

  /** JSON-LD structured data (optional) */
  structuredData?: {
    type: string;
    data: Record<string, any>;
  };

  /** Child elements (optional) - this component doesn't render children, it manages head */
  children?: ReactNode;
}

const DEFAULT_OG_IMAGE = "https://lab.ctrlbits.com/og-image.png";
const SITE_URL = "https://lab.ctrlbits.com";
const SITE_NAME = "BitsLab";

/**
 * Update or create a meta tag in the document head
 */
function updateMetaTag(
  selector: string,
  attribute: "name" | "property",
  content: string,
): void {
  let element = document.querySelector(
    `meta[${attribute}="${selector}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Update or create a link tag in the document head
 */
function updateLinkTag(
  rel: string,
  href: string,
  additionalAttrs?: Record<string, string>,
): void {
  let element = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;

  if (additionalAttrs) {
    Object.entries(additionalAttrs).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
  }
}

/**
 * Update or create JSON-LD script tag
 */
function updateJsonLd(
  dataAttribute: string,
  schema: Record<string, any>,
): void {
  let script = document.querySelector(
    `script[${dataAttribute}]`,
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.setAttribute(dataAttribute, "true");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
}

/**
 * Remove a JSON-LD script tag
 */
function removeJsonLd(dataAttribute: string): void {
  const script = document.querySelector(
    `script[${dataAttribute}]`,
  ) as HTMLScriptElement | null;
  if (script) {
    script.remove();
  }
}

/**
 * SEO Component
 * Call once per page to manage all SEO-related head updates
 */
export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = SITE_NAME,
  ogType = "website",
  noIndex = false,
  twitterHandle,
  structuredData,
}: SEOProps): null {
  const location = useLocation();

  useEffect(() => {
    // 1. Update document title
    const pageTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    document.title = pageTitle;

    // 2. Update meta description
    updateMetaTag("description", "name", description);

    // 3. Update keywords meta tag
    if (keywords.length > 0) {
      updateMetaTag("keywords", "name", keywords.slice(0, 20).join(", "));
    }

    // 4. Update robots meta tag (noindex if specified)
    const robotsContent = noIndex
      ? "noindex,nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
    updateMetaTag("robots", "name", robotsContent);

    // 5. Update canonical URL
    const canonicalUrl = canonical
      ? `${SITE_URL}${canonical}`
      : `${SITE_URL}${location.pathname}`;
    updateLinkTag("canonical", canonicalUrl);

    // 6. Update Open Graph tags
    updateMetaTag("og:title", "property", title);
    updateMetaTag("og:description", "property", description);
    updateMetaTag("og:type", "property", ogType);
    updateMetaTag("og:url", "property", canonicalUrl);
    updateMetaTag("og:image", "property", ogImage);
    updateMetaTag("og:image:alt", "property", ogImageAlt);
    updateMetaTag("og:site_name", "property", SITE_NAME);

    // 7. Update Twitter Card tags
    updateMetaTag("twitter:card", "name", "summary_large_image");
    updateMetaTag("twitter:title", "name", title);
    updateMetaTag("twitter:description", "name", description);
    updateMetaTag("twitter:image", "name", ogImage);
    updateMetaTag("twitter:image:alt", "name", ogImageAlt);

    if (twitterHandle) {
      updateMetaTag("twitter:creator", "name", twitterHandle);
    }

    // 8. Handle JSON-LD structured data
    if (structuredData) {
      const { type, data } = structuredData;
      const dataAttribute = `data-${type.toLowerCase()}-schema`;

      updateJsonLd(dataAttribute, {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
      });

      // Cleanup function: remove when component unmounts or data changes
      return () => {
        removeJsonLd(dataAttribute);
      };
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogImageAlt,
    ogType,
    noIndex,
    twitterHandle,
    structuredData,
    location.pathname,
  ]);

  // Component returns null as it only manages document head
  return null;
}

export default SEO;
