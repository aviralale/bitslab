/**
 * SEO Component with react-helmet-async
 * Manages all page head elements: title, meta tags, canonical, OG tags, structured data
 */

import { Helmet } from "react-helmet-async";

interface SEOProps {
  /** Page title */
  title: string;
  /** Meta description (150–160 chars) */
  description: string;
  /** Keywords array (12–20, semantic cluster) */
  keywords?: string[];
  /** Canonical URL path */
  canonical?: string;
  /** OG image URL */
  ogImage?: string;
  /** OG image alt text */
  ogImageAlt?: string;
  /** Prevent indexing (noindex/nofollow) */
  noIndex?: boolean;
  /** JSON-LD structured data */
  structuredData?: Record<string, any>;
}

const SITE_URL = "https://lab.ctrlbits.com";
const DEFAULT_OG_IMAGE = "https://lab.ctrlbits.com/og-image.png";

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "BitsLab",
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes("BitsLab") ? title : `${title} | BitsLab`;
  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical}`
    : typeof window !== "undefined"
      ? window.location.href
      : SITE_URL;

  return (
    <Helmet>
      {/* Title & Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        }
      />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="BitsLab" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
