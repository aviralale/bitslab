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
    title: "Unicode to Preeti & Preeti to Unicode Converter | Nepali Font Tool",
    description:
      "Instant and accurate conversion between Preeti (traditional), Unicode (Nepali), and Romanized English. Auto-detects font type. Free for typing Nepali online.",
    keywords: [
      "nepali font converter",
      "preeti to unicode",
      "unicode to preeti",
      "nepali unicode",
      "preeti font",
      "romanized nepali typing",
      "nepali text converter",
      "unicode converter",
      "preeti converter",
      "nepali typing tool",
      "legacy nepali fonts",
      "free nepali converter",
    ],
    h1: "Nepali Font Converter: Unicode & Preeti",
    pageIntro:
      "Instantly convert between Preeti (traditional), Unicode Nepali, and Romanized English. Auto-detects font type for accurate Nepali typing in your browser.",
    sections: [
      {
        heading: "How to convert Preeti to Unicode in Excel?",
        body: "Copy your Preeti text from Excel, paste it into the \"Preeti\" box above, and copy the Unicode result back to Excel. The conversion happens instantly in your browser without uploading files.",
      },
      {
        heading: "What is the difference between Unicode and Preeti?",
        body: "Preeti is a legacy font mapping, while Unicode is the global standard for Nepali text supported by Facebook, Google, and mobile devices. Unicode ensures your Nepali text displays correctly across platforms.",
      },
      {
        heading: "When should you use this tool?",
        body: "Use this converter to migrate old documents, share Nepali text across devices, or type Nepali online without font issues. It supports Unicode ↔ Preeti and Romanized English for quick drafting.",
        bullets: [
          "Convert legacy Preeti documents to modern Unicode",
          "Prepare Nepali text for websites and social media",
          "Type in Romanized English and get Nepali output",
          "Auto-detect font type for faster conversion",
        ],
      },
    ],
  },

  "text-formatter": {
    title: "Online Text Formatter - Remove Duplicates, Sort & Change Case",
    description:
      "Clean your text instantly. Features: Remove duplicate lines, fix spacing, sort lists, and convert case (upper/lower/camel). Secure client-side processing.",
    keywords: [
      "remove duplicate lines",
      "text cleaner online",
      "text formatter",
      "sort lines",
      "case converter",
      "camel case converter",
      "uppercase converter",
      "lowercase converter",
      "text cleaning tool",
      "whitespace remover",
      "free text formatter",
      "online formatter",
    ],
    h1: "Online Text Formatter: Remove Duplicates, Sort & Change Case",
    pageIntro:
      "Clean and format text in seconds. Remove duplicate lines, fix spacing, sort lists, and convert case (upper/lower/camel) securely in your browser.",
    sections: [
      {
        heading: "Core Features",
        body: "Use the Text Formatter as a Swiss Army knife for quick text cleanup and transformation:",
        bullets: [
          "Remove Duplicate Lines to clean lists",
          "Sort Lines alphabetically for order",
          "Change Case: upper, lower, title, camel",
          "Whitespace fixes: trim and remove extra spaces",
          "Line tools: add or remove line numbers",
        ],
      },
      {
        heading: "Who Uses This Tool?",
        body: "Writers, developers, and data teams rely on this tool for daily formatting tasks:",
        bullets: [
          "Writers: clean drafts and headings",
          "Developers: format variables and constants",
          "Analysts: normalize CSV or list data",
          "Marketers: tidy captions and descriptions",
        ],
      },
      {
        heading: "Private & Secure",
        body: "All formatting runs locally in your browser. Your text never leaves your device, making it safe for sensitive content.",
      },
    ],
  },

  "qr-barcode": {
    title: "Free QR Code & Barcode Generator (No Sign-up) | WiFi, vCard & URL",
    description:
      "Create custom QR codes for WiFi, Links, and vCards. Generate bulk barcodes (UPC, EAN, Code128). High-resolution PNG download with no watermarks.",
    keywords: [
      "free qr code generator no signup",
      "bulk barcode generator",
      "no watermark qr code",
      "qr code generator",
      "barcode generator",
      "wifi qr",
      "vcard qr",
      "upc barcode",
      "ean barcode",
      "code128 barcode",
      "qr code tool",
      "free barcode",
    ],
    h1: "Free QR Code & Barcode Generator",
    pageIntro:
      "Create QR codes and barcodes instantly with no watermarks and no sign-up required. Generate high-resolution PNG codes for WiFi, links, vCards, and products.",
    sections: [
      {
        heading: "Supported Barcode Formats",
        body: "We support Code128 (Logistics), UPC-A (Retail), and EAN-13 (International Products).",
        bullets: [
          "Code128 (Logistics)",
          "UPC-A (Retail)",
          "EAN-13 (International Products)",
        ],
      },
      {
        heading: "No Watermark, No Sign-up",
        body: "Generate unlimited QR codes and barcodes without watermarks or account creation. Everything runs in your browser, so your data stays private and you can download clean, high-resolution PNG files instantly.",
      },
      {
        heading: "How to Use This Generator",
        body: "Start by selecting QR code or barcode mode, then enter your data (URL, WiFi credentials, vCard, or product code). Customize size, color, and error correction for QR codes or choose a barcode format like Code128, UPC-A, or EAN-13. The preview updates instantly. When you are ready, download your high-resolution PNG with a single click. This tool is built for fast creation of scannable codes, whether you are printing labels, sharing payment links, or creating event check-ins—all with no sign-up and no watermark.",
      },
    ],
  },

  "invoice-generator": {
    title: "Free Invoice Generator | Create PDF Invoices Online (GST/VAT Support)",
    description:
      "Create professional PDF invoices instantly. Customizable currency, tax rates, and logo. Download simple invoices for freelancers and small businesses.",
    keywords: [
      "free invoice generator pdf",
      "online bill maker",
      "gst invoice",
      "vat invoice",
      "invoice generator",
      "invoice maker",
      "pdf invoice",
      "freelancer invoice",
      "small business invoice",
      "invoice template",
      "tax calculation",
      "invoice creator",
    ],
    h1: "Free Invoice Generator",
    pageIntro:
      "Create professional PDF invoices instantly with customizable currency, tax rates, and logo. Perfect for freelancers and small businesses.",
    sections: [
      {
        heading: "How to Create a PDF Invoice Online",
        body: "Enter your business and client details, add line items with quantities and rates, and set your tax or discount percentages. The invoice total is calculated automatically. Customize currency, add a logo, and download a professional PDF in seconds. This tool is built for freelancers and small businesses who need fast invoicing without complex accounting software. Everything runs in your browser, so your data stays private while you generate clean, accurate invoices ready to send.",
      },
      {
        heading: "Key Features",
        body: "Create invoices with the essentials that matter:",
        bullets: [
          "PDF export with professional layout",
          "GST/VAT-ready tax calculations",
          "Custom currency and branding options",
          "Discount management and totals summary",
        ],
      },
      {
        heading: "Related Tools",
        body: "Need a QR code for your payment link? Use our QR Generator to create scannable payment codes and add them to invoices.",
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
