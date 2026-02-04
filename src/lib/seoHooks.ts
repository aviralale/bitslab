import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Hook for managing canonical URLs and meta tags
 * Automatically updates canonical URL based on current route
 * Usage: Call this hook in your page components
 */
export function useSEO(config?: {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}) {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL
    const canonicalUrl = `https://lab.ctrlbits.com${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link') as HTMLLinkElement;
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Update page title
    if (config?.title) {
      document.title = `${config.title} | BitsLab`;
    }

    // Update meta description
    if (config?.description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement('meta') as HTMLMetaElement;
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.description);
    }

    // Update Open Graph tags
    if (config?.title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', config.title);
    }

    if (config?.description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', config.description);
    }

    if (config?.imageUrl) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', config.imageUrl);

      // Also update Twitter image
      let twitterImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
      if (!twitterImage) {
        twitterImage = document.createElement('meta') as HTMLMetaElement;
        twitterImage.name = 'twitter:image';
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute('content', config.imageUrl);
    }

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname, config?.title, config?.description, config?.imageUrl]);
}

/**
 * Structured Data Hook for adding JSON-LD schema markup
 * Usage: useBreadcrumbSchema([{name: 'Home', url: '/'}, {name: 'Tools', url: '/tools'}])
 */
export function useBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://lab.ctrlbits.com${item.url}`,
      })),
    };

    let script = document.querySelector('script[data-breadcrumb-schema]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.setAttribute('data-breadcrumb-schema', 'true');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, [items]);
}

/**
 * FAQ Schema Hook for tool pages
 * Usage: useFAQSchema([{question: 'How to use?', answer: 'Step 1...'}])
 */
export function useFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    let script = document.querySelector('script[data-faq-schema]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.setAttribute('data-faq-schema', 'true');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, [faqs]);
}

/**
 * Software Application Schema Hook
 * Usage: useSoftwareApplicationSchema({name: 'Text Formatter', description: '...', url: '/text-formatter'})
 */
export function useSoftwareApplicationSchema(config: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  ratingValue?: number;
  ratingCount?: number;
}) {
  useEffect(() => {
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: config.name,
      description: config.description,
      url: `https://lab.ctrlbits.com${config.url}`,
      applicationCategory: 'UtilityApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };

    if (config.imageUrl) {
      schema.image = config.imageUrl;
    }

    if (config.ratingValue && config.ratingCount) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: config.ratingValue,
        ratingCount: config.ratingCount,
      };
    }

    let script = document.querySelector('script[data-app-schema]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.setAttribute('data-app-schema', 'true');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, [config]);
}
