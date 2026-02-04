/**
 * Route Metadata Configuration
 * Single source of truth for all route-level SEO metadata
 * Used by SEO component to dynamically update page metadata
 */

export interface RouteMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  canonicalPath?: string;
  noIndex?: boolean;
  structuredData?: {
    type: "SoftwareApplication" | "BreadcrumbList" | "FAQPage";
    data: any;
  };
}

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "BitsLab – Simple Tools for Smarter Work",
    description:
      "Free online toolkit with text formatters, QR codes, Nepali converters, invoice builders & more. Fast, secure, no signup required.",
    keywords: [
      "online tools",
      "text formatter",
      "QR code generator",
      "Nepali converter",
      "invoice generator",
      "free utilities",
      "productivity tools",
      "web tools",
      "no signup tools",
      "unicode preeti",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
    ogType: "website",
  },
  "/tools": {
    title: "Explore Tools – BitsLab",
    description:
      "Discover all BitsLab tools: text formatters, QR generators, font converters, barcode makers, invoicing tools. Find the right utility for your needs.",
    keywords: [
      "tools directory",
      "utility tools",
      "online tools",
      "free tools",
      "conversion tools",
      "formatting tools",
      "generator tools",
      "productivity",
      "toolkit",
      "all tools",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/about": {
    title: "About BitsLab – Our Mission & Values",
    description:
      "Learn about BitsLab: a free, open-source toolkit designed for creators, developers, and everyday users in Nepal. Built by Ctrl Bits.",
    keywords: [
      "about BitsLab",
      "mission",
      "open source",
      "Ctrl Bits",
      "free tools",
      "about",
      "team",
      "vision",
      "transparency",
      "community",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/contact": {
    title: "Contact BitsLab – Get in Touch",
    description:
      "Have questions or feedback? Contact BitsLab team. We respond to all inquiries within 48 hours.",
    keywords: [
      "contact",
      "support",
      "feedback",
      "get in touch",
      "email",
      "help",
      "customer support",
      "contact form",
      "reach out",
      "questions",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/roadmap": {
    title: "BitsLab Roadmap – What's Coming Next",
    description:
      "View BitsLab's development roadmap. See upcoming features, tools, and improvements planned for 2026 and beyond.",
    keywords: [
      "roadmap",
      "upcoming features",
      "development",
      "future plans",
      "new tools",
      "improvements",
      "product roadmap",
      "timeline",
      "releases",
      "transparency",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/privacy-policy": {
    title: "Privacy Policy – BitsLab",
    description:
      "Learn how BitsLab protects your privacy. Our privacy policy explains data collection, storage, and usage practices.",
    keywords: [
      "privacy policy",
      "data protection",
      "privacy",
      "GDPR",
      "terms",
      "legal",
      "data usage",
      "user privacy",
      "confidentiality",
      "security",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/terms-of-service": {
    title: "Terms of Service – BitsLab",
    description:
      "Read BitsLab's terms of service. Understand our usage policies, disclaimers, and user rights.",
    keywords: [
      "terms of service",
      "terms",
      "conditions",
      "legal",
      "user agreement",
      "policies",
      "disclaimer",
      "rights",
      "responsibilities",
      "usage",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/cookie-policy": {
    title: "Cookie Policy – BitsLab",
    description:
      "Understand how BitsLab uses cookies. Learn about our cookie practices and how to manage your preferences.",
    keywords: [
      "cookie policy",
      "cookies",
      "analytics",
      "tracking",
      "browser data",
      "preferences",
      "privacy",
      "GDPR",
      "consent",
      "cookie management",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
  },
  "/unicode-preeti-converter": {
    title: "Unicode ⟷ Preeti Font Converter – Instant & Free",
    description:
      "Convert between Unicode and Preeti Nepali fonts instantly. No download, no signup. Perfect for transliteration, text backup, and legacy document conversion.",
    keywords: [
      "unicode converter",
      "preeti converter",
      "nepali font converter",
      "unicode to preeti",
      "preeti to unicode",
      "nepali text",
      "font converter",
      "transliteration",
      "legacy fonts",
      "free converter",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
    structuredData: {
      type: "SoftwareApplication",
      data: {
        name: "Unicode ⟷ Preeti Font Converter",
        description:
          "Convert between Unicode and Preeti Nepali fonts instantly. No download, no signup.",
        url: "https://lab.ctrlbits.com/unicode-preeti-converter",
        applicationCategory: "UtilityApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  },
  "/text-formatter": {
    title: "Text Formatter – Transform Text Instantly",
    description:
      "Transform text with advanced formatting tools: case conversion, spacing, encoding, and more. Fast, free, and no signup required.",
    keywords: [
      "text formatter",
      "text converter",
      "case converter",
      "text tool",
      "formatting tool",
      "text transformation",
      "uppercase converter",
      "text editor",
      "string tool",
      "text utility",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
    structuredData: {
      type: "SoftwareApplication",
      data: {
        name: "Text Formatter",
        description:
          "Transform text with advanced formatting tools: case conversion, spacing, encoding, and more.",
        url: "https://lab.ctrlbits.com/text-formatter",
        applicationCategory: "UtilityApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  },
  "/qr-barcode-generator": {
    title: "QR & Barcode Generator – Create Codes Instantly",
    description:
      "Generate QR codes and barcodes instantly. Customizable, no ads, no file uploads. Perfect for tracking, sharing, and inventory management.",
    keywords: [
      "QR code generator",
      "barcode generator",
      "QR maker",
      "barcode maker",
      "free QR code",
      "QR code tool",
      "barcode tool",
      "code generator",
      "QR scanner",
      "inventory tool",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
    structuredData: {
      type: "SoftwareApplication",
      data: {
        name: "QR & Barcode Generator",
        description:
          "Generate QR codes and barcodes instantly. Customizable, no ads, no file uploads.",
        url: "https://lab.ctrlbits.com/qr-barcode-generator",
        applicationCategory: "UtilityApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  },
  "/invoice-generator": {
    title: "Invoice Generator – Create Professional Invoices",
    description:
      "Generate professional invoices in seconds. Customizable templates, automatic calculations, instant PDF download. Free and secure.",
    keywords: [
      "invoice generator",
      "invoice maker",
      "billing software",
      "invoice template",
      "invoice tool",
      "freelance invoice",
      "receipt maker",
      "PDF invoice",
      "business invoice",
      "free invoice",
    ],
    ogImage: "https://lab.ctrlbits.com/og-image.png",
    structuredData: {
      type: "SoftwareApplication",
      data: {
        name: "Invoice Generator",
        description:
          "Generate professional invoices in seconds. Customizable templates, automatic calculations, instant PDF download.",
        url: "https://lab.ctrlbits.com/invoice-generator",
        applicationCategory: "UtilityApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    },
  },
};

/**
 * Get route metadata with fallback to default
 * @param pathname - The current pathname (e.g., '/tools')
 * @param defaultMeta - Optional default metadata
 * @returns Route metadata
 */
export function getRouteMeta(
  pathname: string,
  defaultMeta?: Partial<RouteMeta>,
): RouteMeta {
  return (
    ROUTE_META[pathname] || {
      title: "BitsLab – Simple Tools for Smarter Work",
      description:
        "Free online toolkit with text formatters, QR codes, Nepali converters, invoice builders & more.",
      keywords: ["BitsLab", "online tools", "free utilities", "productivity"],
      ...defaultMeta,
    }
  );
}

/**
 * Get all route paths for sitemap generation
 */
export function getAllRoutePaths(): string[] {
  return Object.keys(ROUTE_META);
}
