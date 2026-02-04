import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Clock,
  FileText,
  UserCheck,
  Globe,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/seo/SEO";
import { getPageMeta } from "@/seo/pageMeta";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function PrivacyPolicyPage() {
  const meta = getPageMeta("/privacy");
  const lastUpdated = "October 30, 2025";

  const sections = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Information We Collect",
      id: "information",
      content: [
        {
          subtitle: "Information You Provide",
          text: "When you use BitsLab tools, we may collect information that you voluntarily provide, such as files you upload for conversion or processing. This information is processed locally in your browser whenever possible and is not stored on our servers unless explicitly stated for a specific tool.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, referring/exit pages, and usage statistics. This data helps us improve our services and understand how users interact with our tools.",
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze site traffic. You can control cookie preferences through your browser settings.",
        },
      ],
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "How We Use Your Information",
      id: "usage",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our tools and services. This includes processing your files, converting formats, and delivering the results you request.",
        },
        {
          subtitle: "Analytics and Improvements",
          text: "We analyze usage patterns and user behavior to understand how our tools are used, identify areas for improvement, and develop new features that better serve our users.",
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to respond to your inquiries, send important service updates, or notify you about new features and tools (only if you've opted in to receive such communications).",
        },
        {
          subtitle: "Security and Fraud Prevention",
          text: "We use collected information to detect, prevent, and respond to fraud, abuse, security risks, and technical issues that could harm BitsLab, our users, or the public.",
        },
      ],
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Storage and Security",
      id: "security",
      content: [
        {
          subtitle: "Client-Side Processing",
          text: "Many of our tools process your files directly in your browser without uploading them to our servers. This means your data never leaves your device, ensuring maximum privacy and security.",
        },
        {
          subtitle: "Temporary Storage",
          text: "For tools that require server-side processing, uploaded files are temporarily stored on our secure servers only for the duration necessary to complete the requested operation. Files are automatically deleted immediately after processing or within 24 hours, whichever comes first.",
        },
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your information, including encryption in transit (HTTPS), secure server configurations, regular security audits, and access controls to limit data access to authorized personnel only.",
        },
        {
          subtitle: "No Permanent Storage",
          text: "We do not permanently store your uploaded files or converted content. Your processed files are available for download immediately after conversion and are not retained on our servers.",
        },
      ],
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Your Rights and Choices",
      id: "rights",
      content: [
        {
          subtitle: "Access and Control",
          text: "You have the right to access, update, or delete any personal information we have collected about you. Since we don't store most data permanently, there's typically minimal personal information to access or delete.",
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can control or delete cookies through your browser settings. Please note that disabling cookies may limit your ability to use certain features of our website.",
        },
        {
          subtitle: "Opt-Out Rights",
          text: "You can opt out of receiving promotional communications from us at any time by following the unsubscribe link in our emails or contacting us directly.",
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to receive a copy of your personal data in a structured, commonly used, and machine-readable format.",
        },
      ],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Data Sharing and Disclosure",
      id: "sharing",
      content: [
        {
          subtitle: "No Sale of Personal Data",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your privacy is paramount to us.",
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users. These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, such as to comply with a subpoena, court order, or other legal process, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal information.",
        },
      ],
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Specific Tool Policies",
      id: "tools",
      content: [
        {
          subtitle: "Nepali Font Converter",
          text: "Text entered for conversion is processed entirely in your browser. No text data is sent to or stored on our servers.",
        },
        {
          subtitle: "Image Tools",
          text: "Images uploaded for compression, resizing, or other processing may be temporarily uploaded to our servers if browser-based processing is not feasible. All images are automatically deleted within 1 hour of upload.",
        },
        {
          subtitle: "PDF Tools",
          text: "PDF files may be temporarily processed on our servers. Files are encrypted during transmission and storage, and are permanently deleted immediately after processing is complete.",
        },
        {
          subtitle: "Future Tools",
          text: "As we introduce new tools, we will update this privacy policy to reflect any changes in data collection or processing practices. We will always maintain our commitment to protecting your privacy.",
        },
      ],
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Third-Party Services",
      id: "third-party",
      content: [
        {
          subtitle: "Analytics Services",
          text: "We may use third-party analytics services (such as Google Analytics) to help us understand how users interact with our website. These services may collect information about your use of our site and other websites.",
        },
        {
          subtitle: "Content Delivery Networks",
          text: "We use content delivery networks (CDNs) to deliver our website content quickly and reliably. These services may process your IP address and other technical information.",
        },
        {
          subtitle: "Third-Party Links",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.",
        },
      ],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Children's Privacy",
      id: "children",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.",
        },
      ],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "International Data Transfers",
      id: "international",
      content: [
        {
          subtitle: "Global Service",
          text: "BitsLab is accessible globally, and your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in compliance with applicable data protection laws.",
        },
      ],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Changes to This Policy",
      id: "changes",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this privacy policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the new privacy policy on this page and updating the 'Last Updated' date.",
        },
        {
          subtitle: "Your Continued Use",
          text: "Your continued use of BitsLab after any changes to this privacy policy constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical="https://lab.ctrlbits.com/privacy"
        noIndex={false}
      />
      {/* Dot Matrix Background */}
      <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Legal
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Your privacy is important to us. This policy explains how BitsLab
              collects, uses, and protects your personal information when you
              use our tools and services.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-3">
            <h2 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
              Quick Navigation
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors py-1"
                >
                  <ArrowRight className="w-3 h-3" />
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
              className="scroll-mt-8"
            >
              <div className="space-y-6">
                {/* Section Header */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                    {section.icon}
                  </div>
                  <div className="flex-1 pt-2">
                    <h2 className="text-2xl font-medium text-black dark:text-white mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="space-y-6 pl-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      {item.subtitle && (
                        <h3 className="text-lg font-medium text-black dark:text-white">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {sectionIndex < sections.length - 1 && (
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 mt-12" />
              )}
            </motion.section>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-12"
        >
          <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
              </div>
              <h2 className="text-2xl font-medium text-black dark:text-white">
                Contact Us
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you have any questions, concerns, or requests regarding this
              privacy policy or our data practices, please don't hesitate to
              contact us. We're here to help and committed to protecting your
              privacy.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-neutral-500 dark:text-neutral-500 min-w-20">
                  Email:
                </span>
                <a
                  href="mailto:privacy@ctrlbits.com"
                  className="text-black dark:text-white hover:underline"
                >
                  privacy@ctrlbits.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-neutral-500 dark:text-neutral-500 min-w-20">
                  Website:
                </span>
                <a
                  href="https://labs.ctrlbits.com"
                  className="text-black dark:text-white hover:underline"
                >
                  labs.ctrlbits.com
                </a>
              </div>
            </div>
            <a href="mailto:hi@ctrlbits.com">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                Contact Support
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            By using BitsLab, you acknowledge that you have read and understood
            this privacy policy.
          </p>
        </motion.div>

        {/* Description Section with SEO Content */}
        <DescriptionSection
          h1={meta.h1}
          pageIntro={meta.pageIntro}
          sections={meta.sections}
        />
      </div>
    </div>
  );
}
