/**
 * Page Metadata Configuration
 * Single source of truth for all page SEO + content
 * Each page has: title, description, keywords, h1, intro, and sections
 */

export interface PageSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface PageMeta {
  /** SEO title (≤60 chars, includes "BitsLab") */
  title: string;
  /** Meta description (150–160 chars, intent-focused) */
  description: string;
  /** Keywords: 12–20 semantic cluster, not spammy */
  keywords: string[];
  /** OG image URL */
  ogImage?: string;
  /** Page H1 (keyword-aligned, clear) */
  h1: string;
  /** 2–3 line intro under H1 */
  pageIntro: string;
  /** 2–4 informational sections */
  sections: PageSection[];
}

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: "BitsLab – Free Online Tools for Creators & Developers",
    description:
      "Discover powerful free online tools: text formatters, QR codes, Nepali font converters, invoice generators. Built for creators, developers, and everyday users.",
    keywords: [
      "online tools",
      "free tools",
      "text formatter",
      "QR code generator",
      "Nepali font converter",
      "invoice maker",
      "productivity tools",
      "web utilities",
      "no signup",
      "free utilities",
      "instant tools",
      "converter tools",
    ],
    h1: "BitsLab: Your Free Online Toolkit for Everyday Tasks",
    pageIntro:
      "Access powerful, free online tools in seconds. No signup, no ads, no limits. Convert text, generate QR codes, transform Nepali fonts, and more—all in your browser.",
    sections: [
      {
        heading: "What is BitsLab?",
        body: "BitsLab is a free, open-source collection of web-based tools designed for creators, developers, and everyday users. Our mission is to provide instant, privacy-first solutions for common digital tasks—no software installation, no subscriptions, no data collection.",
        bullets: [
          "100% free and open source",
          "Works on any device with a browser",
          "No signup or login required",
          "Privacy-first: data stays on your device",
          "Actively maintained and constantly improving",
        ],
      },
      {
        heading: "Popular Tools",
        body: "Choose from our growing suite of specialized utilities. Each tool is optimized for speed, simplicity, and accuracy.",
        bullets: [
          "Unicode ⟷ Preeti Nepali Font Converter: Transform between Unicode and legacy Preeti fonts instantly",
          "Text Formatter: Change case, spacing, encoding, and more in seconds",
          "QR & Barcode Generator: Create trackable codes for links, products, and inventory",
          "Invoice Generator: Build professional invoices with automatic calculations",
        ],
      },
      {
        heading: "Why Choose BitsLab?",
        body: "We believe digital tools should be simple, fast, and respectful of your privacy. BitsLab is built by developers for developers—and for anyone who needs reliable online utilities.",
        bullets: [
          "Instant results: No waiting, no loading",
          "Completely free: No hidden costs or premium versions",
          "Privacy guaranteed: Your data never leaves your device",
          "Open source: See our code, audit our practices",
        ],
      },
    ],
  },

  tools: {
    title: "Explore All Tools – BitsLab",
    description:
      "Browse all BitsLab tools: text conversion, QR generation, Nepali font transformation, invoicing, and more. Find the perfect tool for your task.",
    keywords: [
      "tools directory",
      "tool explorer",
      "online tools",
      "free tools",
      "utility tools",
      "conversion tools",
      "generator tools",
      "formatting tools",
      "all tools",
      "tools collection",
      "web tools",
      "browser tools",
    ],
    h1: "Explore All BitsLab Tools",
    pageIntro:
      "Discover our complete collection of free online utilities. Each tool is designed for speed, simplicity, and instant results—no signup required.",
    sections: [
      {
        heading: "Text & Language Tools",
        body: "Transform and manipulate text with powerful, easy-to-use converters and formatters.",
        bullets: [
          "Text Formatter: Case conversion, spacing, encoding, and style transformations",
          "Unicode ⟷ Preeti Converter: Bridge between modern Unicode and legacy Preeti Nepali fonts",
        ],
      },
      {
        heading: "Code & Barcode Generators",
        body: "Create scannable codes instantly for tracking, sharing, and inventory management.",
        bullets: [
          "QR & Barcode Generator: Fast, customizable code generation with multiple formats",
        ],
      },
      {
        heading: "Business Tools",
        body: "Streamline common business tasks with our productivity-focused utilities.",
        bullets: [
          "Invoice Generator: Professional invoicing with automatic calculations and PDF export",
        ],
      },
    ],
  },

  about: {
    title: "About BitsLab – Our Mission & Values",
    description:
      "Learn about BitsLab: a free, open-source toolkit built by developers for creators and everyday users. Discover our mission, values, and vision.",
    keywords: [
      "about BitsLab",
      "open source",
      "mission",
      "values",
      "team",
      "transparency",
      "free tools",
      "developer tools",
      "privacy focused",
      "community",
      "history",
      "vision",
    ],
    h1: "About BitsLab: Simplifying Digital Tools",
    pageIntro:
      "BitsLab is a passion project built by developers who believe digital tools should be simple, free, and respectful of your privacy. Learn about our journey and values.",
    sections: [
      {
        heading: "Our Mission",
        body: "We're on a mission to provide the world with free, instant, privacy-first online tools. No sign-ups. No ads. No data collection. Just pure utility.",
        bullets: [
          "Simplify: Make complex tasks straightforward and instant",
          "Democratize: Free tools for everyone, everywhere",
          "Protect privacy: Your data stays on your device",
          "Stay open: Transparent code, transparent practices",
        ],
      },
      {
        heading: "Our Values",
        body: "Everything we build reflects our core values: simplicity, privacy, transparency, and community.",
        bullets: [
          "Simplicity: One-click solutions to everyday problems",
          "Privacy: Your data is your own—we don't collect it",
          "Transparency: Open source code for anyone to audit",
          "Community: Built by developers for the global community",
        ],
      },
      {
        heading: "Built by Developers, For Everyone",
        body: "BitsLab started as a collection of tools we wanted to exist. Now, we're excited to share them with millions of creators, developers, and everyday users worldwide.",
        bullets: [
          "Continuously improving based on user feedback",
          "Regular updates and new tool releases",
          "Active open-source development on GitHub",
          "Always free and always will be",
        ],
      },
    ],
  },

  contact: {
    title: "Contact BitsLab – Get in Touch",
    description:
      "Have questions, feedback, or bug reports? Contact the BitsLab team. We respond to all inquiries quickly.",
    keywords: [
      "contact",
      "support",
      "feedback",
      "bug report",
      "get in touch",
      "email",
      "help",
      "customer support",
      "contact form",
      "reach out",
      "message",
      "inquiry",
    ],
    h1: "Contact BitsLab",
    pageIntro:
      "Have a question, suggestion, or found a bug? We'd love to hear from you. Reach out and let's improve BitsLab together.",
    sections: [
      {
        heading: "How to Reach Us",
        body: "We're responsive and care about your feedback. Get in touch through any of these channels:",
        bullets: [
          "Email: hi@ctrlbits.com",
          "GitHub: github.com/aviralale/bitslab",
          "Social: Follow us on social media for updates",
        ],
      },
      {
        heading: "We Value Your Feedback",
        body: "Whether it's a bug report, feature request, or just a friendly hello—we want to hear from you. Your input helps us improve BitsLab.",
        bullets: [
          "Found a bug? Tell us how to reproduce it",
          "Have an idea? Describe the feature you'd love",
          "Want to contribute? Check out our open-source repository",
        ],
      },
    ],
  },

  roadmap: {
    title: "BitsLab Roadmap – What's Coming Next",
    description:
      "See what we're working on. Explore upcoming BitsLab features, tools, and improvements planned for 2026 and beyond.",
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
      "what's next",
      "coming soon",
    ],
    h1: "BitsLab Roadmap: What's Next",
    pageIntro:
      "We're committed to transparency. Here's what we're building next. Have a feature request? Let us know!",
    sections: [
      {
        heading: "Near-Term (Next 3 Months)",
        body: "We're actively developing these features to enhance your experience:",
        bullets: [
          "Advanced Text Formatter: Add regex support and custom transformations",
          "Batch Code Generator: Generate multiple QR/barcodes at once",
          "Mobile App: Bring BitsLab tools to iOS and Android",
          "Keyboard Shortcuts: Speed up workflows with hotkeys",
        ],
      },
      {
        heading: "Mid-Term (6–12 Months)",
        body: "Ambitious features in development for the next several months:",
        bullets: [
          "Image Optimization Tool: Compress and convert images instantly",
          "PDF Converter: Convert between formats, extract text, split/merge",
          "Video Compression: Reduce file size while maintaining quality",
          "Color Palette Generator: Create harmonious color schemes",
        ],
      },
      {
        heading: "Long-Term Vision",
        body: "Our vision for BitsLab's future goes beyond individual tools:",
        bullets: [
          "API Access: Let developers integrate BitsLab tools into their apps",
          "Cloud Sync: Save and organize your results across devices",
          "Offline Support: Progressive Web App (PWA) for offline usage",
          "Team Collaboration: Share tools and results with team members",
        ],
      },
    ],
  },

  privacy: {
    title: "Privacy Policy – BitsLab",
    description:
      "Learn how BitsLab protects your privacy. Transparent explanation of data collection, storage, and usage practices.",
    keywords: [
      "privacy policy",
      "data protection",
      "privacy",
      "GDPR",
      "privacy statement",
      "legal",
      "data usage",
      "user privacy",
      "confidentiality",
      "security",
      "terms",
      "compliance",
    ],
    h1: "Privacy Policy",
    pageIntro:
      "Your privacy matters to us. BitsLab is built with privacy as a core principle. Here's exactly how we handle your data.",
    sections: [
      {
        heading: "We Don't Collect Personal Data",
        body: "BitsLab operates on a simple principle: your data is yours. We don't collect, store, or transmit any personal information.",
        bullets: [
          "No login or signup required",
          "No cookies for tracking",
          "No data sent to external servers",
          "No analytics on user behavior",
          "All processing happens on your device",
        ],
      },
      {
        heading: "How Your Data Stays Safe",
        body: "All computation happens in your browser. Your data never leaves your device.",
        bullets: [
          "End-to-end privacy: Everything runs locally",
          "No server storage: Results aren't saved anywhere",
          "HTTPS encryption: Your connection is always secure",
          "Open source: Audit our code anytime",
        ],
      },
      {
        heading: "Third-Party Services",
        body: "We use minimal third-party services, and none of them collect personal data:",
        bullets: [
          "Hosting: Secure, privacy-respecting cloud hosting",
          "Analytics: Privacy-first analytics (no personal data)",
          "CDN: Content delivery for fast performance",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service – BitsLab",
    description:
      "Read BitsLab's terms of service. Understand our policies, disclaimers, and user rights.",
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
      "terms and conditions",
      "TOS",
    ],
    h1: "Terms of Service",
    pageIntro:
      "By using BitsLab, you agree to these terms. They're designed to be fair and straightforward.",
    sections: [
      {
        heading: "Free and Open Source",
        body: "BitsLab is provided free of charge. Here's what that means for you:",
        bullets: [
          "No cost: BitsLab will always be free",
          "Open source: Code is publicly available under an open license",
          "No warranty: Provided 'as-is' without guarantees",
          "Community-driven: We welcome contributions and feedback",
        ],
      },
      {
        heading: "Acceptable Use",
        body: "Please use BitsLab responsibly and ethically:",
        bullets: [
          "Don't use tools for illegal or harmful purposes",
          "Don't attempt to break, hack, or overload the service",
          "Don't create automated bots or scrapers",
          "Respect others' rights and privacy",
        ],
      },
      {
        heading: "Limitations of Liability",
        body: "We do our best to keep BitsLab running smoothly, but we can't guarantee perfection:",
        bullets: [
          "We're not liable for data loss or errors",
          "We're not liable for service interruptions",
          "We're not liable for third-party services",
          "You use BitsLab at your own risk",
        ],
      },
    ],
  },

  cookies: {
    title: "Cookie Policy – BitsLab",
    description:
      "Understand how BitsLab uses cookies. Learn about your choices and how to manage preferences.",
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
      "tracking pixels",
      "web storage",
    ],
    h1: "Cookie Policy",
    pageIntro:
      "BitsLab uses minimal cookies, and we're transparent about it. Here's what you need to know.",
    sections: [
      {
        heading: "What Cookies Do We Use?",
        body: "We use only essential cookies to improve your experience:",
        bullets: [
          "Theme preference: Remembers your dark/light mode setting",
          "Session data: Keeps you logged in (if you use accounts)",
          "Analytics cookies: Help us understand usage patterns",
          "No advertising cookies: We don't track for ads",
        ],
      },
      {
        heading: "How You Can Control Cookies",
        body: "You have full control over cookies in your browser:",
        bullets: [
          "Browser settings: Disable cookies in Chrome, Firefox, Safari, etc.",
          "Cookie consent: Accept or reject non-essential cookies",
          "Clear cookies: Delete stored cookies anytime",
          "Incognito mode: Browse without storing cookies",
        ],
      },
      {
        heading: "Third-Party Cookies",
        body: "Some cookies may come from third-party services we use:",
        bullets: [
          "Google Analytics: Helps us understand traffic patterns",
          "CDN services: Speeds up content delivery",
          "Hosting providers: Infrastructure for the site",
        ],
      },
    ],
  },

  "unicode-preeti": {
    title: "Unicode ⟷ Preeti Converter – Transform Nepali Text Instantly",
    description:
      "Convert between Unicode and Preeti Nepali fonts in seconds. No download, no signup. Perfect for transliteration, text migration, and legacy document conversion.",
    keywords: [
      "unicode converter",
      "preeti converter",
      "nepali font",
      "unicode to preeti",
      "preeti to unicode",
      "nepali text",
      "font converter",
      "transliteration",
      "legacy fonts",
      "nepali tools",
      "text converter",
      "free converter",
    ],
    h1: "Unicode ⟷ Preeti Nepali Font Converter",
    pageIntro:
      "Transform Nepali text between modern Unicode and legacy Preeti fonts instantly. Copy-paste, convert, download—no signup, completely free.",
    sections: [
      {
        heading: "What It Does",
        body: "This tool converts Nepali text between Unicode (modern) and Preeti (legacy) fonts. Useful for document migration, data preservation, and text sharing.",
        bullets: [
          "Unicode → Preeti: Convert modern Nepali text to old Preeti font format",
          "Preeti → Unicode: Convert legacy Preeti text to modern Unicode",
          "Instant conversion: Results appear as you type",
          "Batch support: Convert multiple documents",
        ],
      },
      {
        heading: "When Do You Need It?",
        body: "This converter solves real problems for Nepali users:",
        bullets: [
          "Migrating documents from old systems to modern Unicode",
          "Preserving text in legacy formats before systems upgrade",
          "Working with old Nepali documents and archives",
          "Sharing text across different font ecosystems",
          "Backing up text in multiple formats",
        ],
      },
      {
        heading: "How to Use It",
        body: "The process is simple and instant:",
        bullets: [
          "Paste your Nepali text (Unicode or Preeti)",
          "Select the conversion direction (Unicode → Preeti or vice versa)",
          "See results instantly as you type",
          "Copy or download your converted text",
        ],
      },
    ],
  },

  "text-formatter": {
    title: "Text Formatter – Transform Text & Case Converter Tool",
    description:
      "Transform text instantly: change case, remove spacing, encode/decode, reverse text. Fast, free, no signup. Perfect for writers, developers, and content creators.",
    keywords: [
      "text formatter",
      "case converter",
      "text transformer",
      "uppercase converter",
      "lowercase converter",
      "text case changer",
      "text tool",
      "formatting tool",
      "text manipulation",
      "encoding tool",
      "free text tool",
      "online formatter",
    ],
    h1: "Text Formatter: Transform & Convert Text Instantly",
    pageIntro:
      "Format, transform, and manipulate text in seconds. Change case, remove spacing, encode/decode, reverse text. No signup, completely free.",
    sections: [
      {
        heading: "What It Does",
        body: "The Text Formatter is a Swiss Army knife for text manipulation. Perfect for writers, developers, and content creators.",
        bullets: [
          "Case conversion: UPPERCASE, lowercase, Title Case, rAnDoM cAsE",
          "Spacing control: Remove extra spaces, add line breaks, trim text",
          "Encoding: URL encode/decode, Base64, and more",
          "Text reversal: Reverse text for creative effects",
          "Word & character counting: Instant statistics",
        ],
      },
      {
        heading: "Use Cases",
        body: "Writers, developers, and creators use this tool daily for:",
        bullets: [
          "Blog posts: Convert titles to proper case",
          "Coding: Transform variable names and constants",
          "Social media: Format captions and posts",
          "Data cleaning: Normalize text and spacing",
          "Content creation: Fix formatting issues quickly",
        ],
      },
      {
        heading: "Why This Tool?",
        body: "Simple, fast, and powerful—exactly what you need.",
        bullets: [
          "Instant results: See changes as you type",
          "Multiple formats: Convert between different text styles",
          "Copy easily: One-click copy to clipboard",
          "No signup: Just paste and go",
        ],
      },
    ],
  },

  "qr-barcode": {
    title: "QR & Barcode Generator – Create Codes Instantly & Free",
    description:
      "Generate QR codes and barcodes instantly. Customizable, downloadable, no ads. Perfect for tracking, sharing, and inventory management.",
    keywords: [
      "QR code generator",
      "barcode generator",
      "QR maker",
      "barcode maker",
      "free QR code",
      "QR code tool",
      "barcode tool",
      "code generator",
      "tracking codes",
      "inventory tool",
      "QR scanner",
      "free barcode",
    ],
    h1: "QR & Barcode Generator: Create Codes Instantly",
    pageIntro:
      "Generate professional QR codes and barcodes in seconds. Fully customizable, downloadable, and completely free. No ads, no limits.",
    sections: [
      {
        heading: "What It Does",
        body: "Create scannable QR codes and barcodes for any purpose—URLs, text, contact info, and more.",
        bullets: [
          "QR code generation: Create codes from URLs, text, and data",
          "Barcode generation: Support for multiple barcode formats",
          "Customization: Adjust size, color, and format",
          "Instant download: Download as PNG, SVG, or PDF",
          "No file uploads: Everything runs in your browser",
        ],
      },
      {
        heading: "Popular Uses",
        body: "QR codes and barcodes solve real-world problems:",
        bullets: [
          "Marketing: Add QR codes to print ads and campaigns",
          "Inventory: Track products and stock with barcodes",
          "Networking: Share contact info with QR codes",
          "Event management: Generate tickets with unique codes",
          "Retail: Create price tags and product labels",
        ],
      },
      {
        heading: "How to Use It",
        body: "Creating codes is quick and simple:",
        bullets: [
          "Enter your data (URL, text, contact info, etc.)",
          "Choose code type (QR code or barcode format)",
          "Customize appearance (size, colors, style)",
          "Download your code as PNG, SVG, or PDF",
        ],
      },
    ],
  },

  "invoice-generator": {
    title: "Invoice Generator – Create Professional Invoices Instantly & Free",
    description:
      "Generate professional invoices in seconds. Customizable templates, auto-calculations, PDF download. Free, no signup, completely secure.",
    keywords: [
      "invoice generator",
      "invoice maker",
      "billing software",
      "invoice template",
      "invoice tool",
      "freelance invoice",
      "receipt generator",
      "PDF invoice",
      "business invoice",
      "free invoice maker",
      "online invoicing",
      "invoice creator",
    ],
    h1: "Invoice Generator: Create Professional Invoices Instantly",
    pageIntro:
      "Create professional invoices in seconds. Automatic calculations, customizable templates, instant PDF download. Free, secure, no signup.",
    sections: [
      {
        heading: "What It Does",
        body: "Generate invoices that look professional and work for any business—freelancers, agencies, and small businesses alike.",
        bullets: [
          "Quick invoice creation: Fill out a form, generate PDF",
          "Auto-calculations: Subtotal, tax, and total are automatic",
          "Customizable templates: Match your brand and style",
          "Client database: Save and reuse client information",
          "Instant PDF export: Download ready-to-send invoices",
        ],
      },
      {
        heading: "Who Needs It?",
        body: "Invoice Generator is perfect for anyone who bills clients:",
        bullets: [
          "Freelancers: Create invoices for projects and services",
          "Small businesses: Professional billing without accounting software",
          "Contractors: Track work and payment quickly",
          "Consultants: Bill hourly or project-based work",
          "Service providers: Generate receipts and invoices",
        ],
      },
      {
        heading: "Why Use This Generator?",
        body: "Simple, fast, and professional—no accounting background required.",
        bullets: [
          "No signup or software to install",
          "All calculations are automatic and accurate",
          "Mobile-friendly: Create invoices on any device",
          "Privacy-first: Your data stays on your device",
          "Completely free: No hidden fees or premium versions",
        ],
      },
    ],
  },
};

/**
 * Get page metadata by route
 */
export function getPageMeta(route: string): PageMeta {
  // Map routes to meta keys
  const metaMap: Record<string, keyof typeof PAGE_META> = {
    "/": "home",
    "/tools": "tools",
    "/about": "about",
    "/contact": "contact",
    "/roadmap": "roadmap",
    "/privacy-policy": "privacy",
    "/terms-of-service": "terms",
    "/cookie-policy": "cookies",
    "/unicode-preeti-converter": "unicode-preeti",
    "/text-formatter": "text-formatter",
    "/qr-barcode-generator": "qr-barcode",
    "/invoice-generator": "invoice-generator",
  };

  const key = metaMap[route];
  return key ? PAGE_META[key] : PAGE_META.home;
}

/**
 * Get all routes for sitemap generation
 */
export function getAllRoutes(): string[] {
  return Object.keys({
    "/": true,
    "/tools": true,
    "/about": true,
    "/contact": true,
    "/roadmap": true,
    "/privacy-policy": true,
    "/terms-of-service": true,
    "/cookie-policy": true,
    "/unicode-preeti-converter": true,
    "/text-formatter": true,
    "/qr-barcode-generator": true,
    "/invoice-generator": true,
  });
}
