/**
 * Schema.org JSON-LD Helpers
 * Production-ready structured data generators for common schema types
 * Follows schema.org specifications and Google's guidelines
 */

const SITE_URL = "https://lab.ctrlbits.com";
const SITE_NAME = "BitsLab";

/**
 * Generate Organization schema
 * Used on homepage and in main metadata
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Free online utility toolkit for text conversion, QR generation, and productivity tools",
    sameAs: ["https://github.com/aviralale/bitslab"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: `${SITE_URL}/contact`,
      email: "hello@ctrlbits.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Kathmandu",
    },
  };
}

/**
 * Generate WebSite schema with SearchAction
 * Enables sitelinks search box in Google
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Free online utility toolkit with text formatters, QR codes, converters, and productivity tools",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/tools?search={search_term_string}`,
      },
      query: "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList schema
 * Used for nested pages to improve SERP appearance
 * @param breadcrumbs - Array of {name, url} objects
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.url}`,
    })),
  };
}

/**
 * Generate SoftwareApplication schema
 * Used for tool pages
 */
export function generateSoftwareApplicationSchema(config: {
  name: string;
  description: string;
  url: string;
  image?: string;
  ratingValue?: number;
  ratingCount?: number;
  category?: string;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: config.name,
    description: config.description,
    url: `${SITE_URL}${config.url}`,
    applicationCategory: config.category || "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  if (config.image) {
    schema.image = config.image;
  }

  if (config.ratingValue && config.ratingCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: config.ratingValue,
      ratingCount: config.ratingCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

/**
 * Generate FAQPage schema
 * Rich snippet for frequently asked questions
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article schema
 * Used for blog posts or detailed guides
 */
export function generateArticleSchema(config: {
  title: string;
  description: string;
  image?: string;
  author?: string;
  publishedDate: Date | string;
  modifiedDate?: Date | string;
  url: string;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.title,
    description: config.description,
    datePublished:
      typeof config.publishedDate === "string"
        ? config.publishedDate
        : config.publishedDate.toISOString(),
    url: `${SITE_URL}${config.url}`,
  };

  if (config.image) {
    schema.image = config.image;
  }

  if (config.modifiedDate) {
    schema.dateModified =
      typeof config.modifiedDate === "string"
        ? config.modifiedDate
        : config.modifiedDate.toISOString();
  }

  if (config.author) {
    schema.author = {
      "@type": "Person",
      name: config.author,
    };
  }

  schema.publisher = {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  };

  return schema;
}

/**
 * Generate LocalBusiness schema
 * For businesses with physical locations (optional for BitsLab)
 */
export function generateLocalBusinessSchema(config: {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.name,
    description: config.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address,
    },
    telephone: config.phone,
    email: config.email,
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.latitude,
      longitude: config.longitude,
    },
    ...(config.image && { image: config.image }),
  };
}

/**
 * Generate ImageObject schema
 * Improves image visibility in image search results
 */
export function generateImageObjectSchema(config: {
  url: string;
  caption: string;
  name?: string;
  width?: number;
  height?: number;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: config.url,
    caption: config.caption,
  };

  if (config.name) schema.name = config.name;
  if (config.width) schema.width = config.width;
  if (config.height) schema.height = config.height;

  return schema;
}

/**
 * Generate HowTo schema
 * For tutorial/guide pages
 */
export function generateHowToSchema(config: {
  name: string;
  description: string;
  image?: string;
  steps: Array<{ name: string; description: string; image?: string }>;
  totalTime?: string;
}) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: config.name,
    description: config.description,
    step: config.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.description,
      ...(step.image && { image: step.image }),
    })),
  };

  if (config.image) schema.image = config.image;
  if (config.totalTime) schema.totalTime = config.totalTime;

  return schema;
}

/**
 * Validate schema structure
 * Basic validation to catch common errors
 */
export function validateSchema(schema: Record<string, any>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!schema["@context"] || schema["@context"] !== "https://schema.org") {
    errors.push("Missing or invalid @context");
  }

  if (!schema["@type"]) {
    errors.push("Missing @type property");
  }

  if (Object.keys(schema).length < 3) {
    errors.push("Schema is too minimal (fewer than 3 properties)");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Get all schemas for a page (useful for debug/logging)
 */
export function getAllSchemas(): Record<string, any> {
  return {
    organization: generateOrganizationSchema(),
    website: generateWebsiteSchema(),
  };
}
