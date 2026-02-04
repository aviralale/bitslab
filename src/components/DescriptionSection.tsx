/**
 * DescriptionSection Component
 * Renders on-page descriptions for SEO and user clarity
 * Includes H1, intro paragraph, and informational sections with headings and bullets
 */

import { type PageSection } from "@/seo/pageMeta";

interface DescriptionSectionProps {
  h1: string;
  pageIntro: string;
  sections: PageSection[];
}

export function DescriptionSection({
  h1,
  pageIntro,
  sections,
}: DescriptionSectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* H1 Header */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {h1}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {pageIntro}
        </p>
      </header>

      {/* Content Sections */}
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        {sections.map((section, idx) => (
          <article key={idx} className="scroll-mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 leading-relaxed">{section.body}</p>

            {/* Bullet Points */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc list-inside space-y-2 ml-2">
                {section.bullets.map((bullet, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default DescriptionSection;
