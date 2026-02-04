import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Instagram } from "lucide-react";
import SEO from "@/seo/SEO";
import { getPageMeta } from "@/seo/pageMeta";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function ContactPage() {
  const meta = getPageMeta("/contact");

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical="https://lab.ctrlbits.com/contact"
        ogImage="https://lab.ctrlbits.com/og-contact.jpg"
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
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-full"
              >
                <MessageSquare className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Get in Touch
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black dark:text-white">
                  Let's Talk
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  Have a question, suggestion, or just want to say hi? We're
                  here to help. Drop us a message and we'll get back to you as
                  soon as possible.
                </p>
              </div>

              {/* Floating Icon Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pt-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full">
                  <Mail className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
              {/* Primary Email Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                        Get in Touch
                      </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                      Send us an email
                    </h2>
                  </div>

                  {/* Highlighted Email Box */}
                  <a
                    href="mailto:hi@ctrlbits.com"
                    className="group block p-8 border-2 border-black dark:border-white rounded-3xl hover:bg-black dark:hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 p-4 bg-black dark:bg-white rounded-2xl group-hover:bg-white dark:group-hover:bg-black transition-colors">
                        <Mail className="w-6 h-6 text-white dark:text-black group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider group-hover:text-neutral-400 dark:group-hover:text-neutral-600 transition-colors">
                          Email Us
                        </p>
                        <p className="text-2xl sm:text-3xl font-medium text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors break-all">
                          hi@ctrlbits.com
                        </p>
                      </div>
                    </div>
                  </a>

                  <p className="text-neutral-600 dark:text-neutral-400">
                    We typically respond within 24 hours. Whether you have a
                    question, suggestion, or just want to collaborate, we'd love
                    to hear from you!
                  </p>
                </div>
              </motion.div>

              {/* Contact Info - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                      Contact Info
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-black dark:text-white">
                    Other Ways to Reach Us
                  </h3>
                </div>

                {/* Social Links */}
                <div className="pt-8 space-y-4">
                  <h4 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    <SocialLink
                      href="https://github.com/ctrlbits"
                      icon={<Github className="w-4 h-4" />}
                      label="GitHub"
                    />
                    <SocialLink
                      href="https://instagram.com/ctrl.bits"
                      icon={<Instagram className="w-4 h-4" />}
                      label="Instagram"
                    />
                    <SocialLink
                      href="https://www.linkedin.com/company/ctrlbits"
                      icon={<Linkedin className="w-4 h-4" />}
                      label="LinkedIn"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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

// Social Link Component
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
    >
      {icon}
    </a>
  );
}
