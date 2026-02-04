import { motion } from "framer-motion";
import {
  Type,
  Image,
  FileText,
  QrCode,
  Sparkles,
  Zap,
  Shield,
  Users,
  ChevronRight,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import SEO from "@/seo/SEO";
import { getPageMeta } from "@/seo/pageMeta";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function Homepage() {
  const navigate = useNavigate();
  const meta = getPageMeta("/");
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical="https://lab.ctrlbits.com"
        ogImage="https://lab.ctrlbits.com/og-home.jpg"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
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
                <Sparkles className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  By Ctrl Bits
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black dark:text-white">
                  BitsLab — Simple Tools.
                  <br />
                  <span className="text-neutral-400 dark:text-neutral-600">
                    Smarter Work.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  Your free online toolkit — built for creators, developers, and
                  everyday users in Nepal. Convert, compress, and create
                  instantly from your browser.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 text-base group"
                  onClick={() => navigate("/tools")}
                >
                  Explore Tools
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  onClick={() => navigate("/about")}
                >
                  About BitsLab
                </Button>
              </motion.div>

              {/* Floating Icon Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pt-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full">
                  <Zap className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Description Section with SEO Content */}
        <DescriptionSection
          h1={meta.h1}
          pageIntro={meta.pageIntro}
          sections={meta.sections}
        />

        {/* Tools Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-16"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Our Tools
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                All-in-One Online Tools
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                BitsLab offers essential productivity tools designed to make
                your daily digital tasks easier. Whether you're working with
                Nepali fonts, PDFs, images, or text — our web apps deliver
                instant results without downloads or logins.
              </p>
            </motion.div>

            {/* Tools Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                icon={<Type className="w-6 h-6" />}
                title="Nepali Font Converter"
                description="Convert between English, Unicode, and Preeti fonts instantly. Ideal for students, designers, and publishers who need accurate Nepali text formatting."
                status="available"
                href="/unicode-preeti-converter"
              />
              <ToolCard
                icon={<Image className="w-6 h-6" />}
                title="Image Compressor"
                description="Reduce file size while keeping image clarity. Upload, compress, and download in seconds — perfect for websites and social media."
                status="coming-soon"
              />
              <ToolCard
                icon={<FileText className="w-6 h-6" />}
                title="PDF Toolkit"
                description="Merge, split, or compress PDFs with ease. Manage your documents online safely and securely."
                status="coming-soon"
              />
              <ToolCard
                icon={<Type className="w-6 h-6" />}
                title="Text Formatter"
                description="Clean up messy text, remove duplicates, or change case with a single click. Fast, reliable, and completely free."
                status="available"
                href="/text-formatter"
              />
              <ToolCard
                icon={<QrCode className="w-6 h-6" />}
                title="QR & Barcode Generator"
                description="Create scannable QR codes or barcodes for menus, business cards, or products — customizable and ready to use."
                status="available"
                href="/qr-barcode-generator"
              />
              <ToolCard
                icon={<FileText className="w-6 h-6" />}
                title="Invoice Generator"
                description="Create professional invoices and bills with custom branding, multiple currencies, and instant PDF download."
                status="available"
                href="/invoice-generator"
              />
              <ToolCard
                icon={<Sparkles className="w-6 h-6" />}
                title="More Tools Coming"
                description="We're constantly adding new tools based on user feedback. Stay tuned for updates!"
                status="coming-soon"
              />
            </div>
          </div>
        </section>

        {/* Why BitsLab Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 mb-16"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  Why BitsLab
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                Built for Speed, Privacy, and Simplicity
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Zap className="w-5 h-5" />}
                title="Fast & Lightweight"
                description="Works directly in your browser. No waiting, no downloads."
              />
              <FeatureCard
                icon={<Users className="w-5 h-5" />}
                title="No Sign-up Required"
                description="Instant access, no friction. Start using immediately."
              />
              <FeatureCard
                icon={<Shield className="w-5 h-5" />}
                title="Safe & Private"
                description="Your data never leaves your device. Complete privacy guaranteed."
              />
              <FeatureCard
                icon={<Globe className="w-5 h-5" />}
                title="Made in Nepal"
                description="Designed with Nepali users and businesses in mind."
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                  The Vision
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                The Vision Behind BitsLab
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                BitsLab is a project by{" "}
                <span className="font-medium text-black dark:text-white">
                  Ctrl Bits
                </span>
                , a Nepali tech company dedicated to building practical,
                user-focused digital products. Our goal is to empower people
                through technology — one smart tool at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                    Coming Soon
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                  What's Next
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <ComingSoonCard title="Nepali Number Converter" />
                <ComingSoonCard
                  title="Text to Speech"
                  subtitle="Nepali + English"
                />
                <ComingSoonCard title="Invoice & Bill Generator" />
                <ComingSoonCard title="Image to Text" subtitle="OCR" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl font-medium text-black dark:text-white">
                Stay Connected
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Follow Ctrl Bits for updates on new tools, features, and
                releases.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://ctrlbits.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="ghost"
                    className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  >
                    Visit ctrlbits.com
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="mailto:hi@ctrlbits.com">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  >
                    hi@ctrlbits.com
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Tool Card Component
function ToolCard({
  icon,
  title,
  description,
  status,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "available" | "coming-soon";
  href?: string;
}) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 space-y-4 h-full group cursor-pointer",
        status === "coming-soon" && "opacity-60",
      )}
    >
      {/* Status Badge */}
      {status === "available" && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-black dark:bg-white rounded-full">
            <CheckCircle2 className="w-3 h-3 text-white dark:text-black" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white dark:text-black">
              Available
            </span>
          </div>
        </div>
      )}

      {status === "coming-soon" && (
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 border border-neutral-200 dark:border-neutral-800 rounded-full">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Soon
            </span>
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-colors">
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>

      {status === "available" && (
        <div className="flex items-center text-sm text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-colors">
          Try now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </motion.div>
  );

  if (status === "available" && href) {
    return (
      <a href={href} className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Coming Soon Card Component
function ComingSoonCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 text-center space-y-2"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-black dark:text-white">
          {title}
        </h4>
        {subtitle && (
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
