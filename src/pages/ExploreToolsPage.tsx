import { motion } from "framer-motion";
import {
  Type,
  Image,
  FileText,
  QrCode,
  Sparkles,
  Hash,
  MessageSquare,
  FileImage,
  Calculator,
  Palette,
  ArrowRight,
  CheckCircle2,
  Search,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import SEO from "@/seo/SEO";
import { getPageMeta } from "@/seo/pageMeta";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function ExploreToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const meta = getPageMeta("/tools");

  const allTools = [
    {
      icon: <Type className="w-6 h-6" />,
      title: "Nepali Font Converter",
      description:
        "Convert between English, Unicode, and Preeti fonts instantly. Ideal for students, designers, and publishers.",
      category: "Text & Language",
      status: "available" as const,
      href: "/unicode-preeti-converter",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image Compressor",
      description:
        "Reduce file size while maintaining quality. Perfect for web optimization and social media.",
      category: "Image Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "PDF Merger",
      description: "Combine multiple PDF files into one document seamlessly.",
      category: "PDF Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "PDF Splitter",
      description:
        "Extract specific pages or split PDFs into multiple documents.",
      category: "PDF Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "PDF Compressor",
      description:
        "Reduce PDF file size without losing quality or readability.",
      category: "PDF Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "Text Formatter",
      description:
        "Clean up text, remove duplicates, change case, and format with ease.",
      category: "Text & Language",
      status: "available" as const,
      href: "/text-formatter",
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR & Barcode Generator",
      description:
        "Create custom QR codes and barcodes for URLs, text, products, and more. Highly customizable!",
      category: "Generators",
      status: "available" as const,
      href: "/qr-barcode-generator",
    },
    {
      icon: <Hash className="w-6 h-6" />,
      title: "Nepali Number Converter",
      description: "Convert between English and Nepali numerals instantly.",
      category: "Text & Language",
      status: "coming-soon" as const,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Text to Speech",
      description:
        "Convert text to natural-sounding speech in Nepali and English.",
      category: "Text & Language",
      status: "coming-soon" as const,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Invoice Generator",
      description:
        "Create professional invoices and bills with custom branding, multiple currencies, and instant PDF download.",
      category: "Business Tools",
      status: "available" as const,
      href: "/invoice-generator",
    },
    {
      icon: <FileImage className="w-6 h-6" />,
      title: "Image to Text (OCR)",
      description:
        "Extract text from images with optical character recognition.",
      category: "Image Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Unit Converter",
      description:
        "Convert between units of length, weight, temperature, and more.",
      category: "Utilities",
      status: "coming-soon" as const,
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Picker",
      description:
        "Pick colors, generate palettes, and get color codes instantly.",
      category: "Design Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image Resizer",
      description: "Resize images to exact dimensions or percentages quickly.",
      category: "Image Tools",
      status: "coming-soon" as const,
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Markdown Editor",
      description:
        "Write and preview Markdown with syntax highlighting and export options.",
      category: "Text & Language",
      status: "coming-soon" as const,
    },
  ];

  const filteredTools = allTools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const categories = Array.from(new Set(allTools.map((tool) => tool.category)));

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical="https://lab.ctrlbits.com/tools"
        ogImage="https://lab.ctrlbits.com/og-tools.jpg"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 mb-12"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                All Tools
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black dark:text-white">
              Explore Our Toolkit
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Discover all the tools available on BitsLab. From text conversion
              to image processing, we're building a comprehensive suite of free
              online tools for everyday tasks.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 dark:text-neutral-600" />
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black"
            />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
              <span className="text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-black dark:text-white">
                  {allTools.filter((t) => t.status === "available").length}
                </span>{" "}
                Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-black dark:text-white">
                  {allTools.filter((t) => t.status === "coming-soon").length}
                </span>{" "}
                Coming Soon
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-black dark:text-white">
                  {categories.length}
                </span>{" "}
                Categories
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description Section with SEO Content */}
        <DescriptionSection
          h1={meta.h1}
          pageIntro={meta.pageIntro}
          sections={meta.sections}
        />

        {/* Tools by Category */}
        {categories.map((category, categoryIndex) => {
          const categoryTools = filteredTools.filter(
            (tool) => tool.category === category,
          );

          if (categoryTools.length === 0) return null;

          return (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-medium text-black dark:text-white">
                  {category}
                </h2>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                <span className="text-sm text-neutral-400 dark:text-neutral-600">
                  {categoryTools.length} tool{categoryTools.length !== 1 && "s"}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool, toolIndex) => (
                  <ToolCard
                    key={tool.title}
                    tool={tool}
                    delay={toolIndex * 0.05}
                  />
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* No Results */}
        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 border border-neutral-200 dark:border-neutral-800 rounded-full mb-4">
              <Search className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white mb-2">
              No tools found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Try searching with different keywords
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center space-y-6 border-t border-neutral-200 dark:border-neutral-800 pt-20"
        >
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-black dark:text-white">
            Have a tool suggestion?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We're constantly adding new tools based on user feedback. Let us
            know what you'd like to see next!
          </p>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// Tool Card Component
function ToolCard({
  tool,
  delay,
}: {
  tool: {
    icon: React.ReactNode;
    title: string;
    description: string;
    category: string;
    status: "available" | "coming-soon";
    href?: string;
  };
  delay: number;
}) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-4 h-full group",
        tool.status === "available"
          ? "cursor-pointer"
          : "opacity-60 cursor-not-allowed",
      )}
    >
      {/* Status Badge */}
      {tool.status === "available" && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-2 py-1 bg-black dark:bg-white rounded-full">
            <CheckCircle2 className="w-3 h-3 text-white dark:text-black" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white dark:text-black">
              Live
            </span>
          </div>
        </div>
      )}

      {tool.status === "coming-soon" && (
        <div className="absolute top-4 right-4">
          <div className="px-2 py-1 border border-neutral-200 dark:border-neutral-800 rounded-full">
            <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Soon
            </span>
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-600 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-colors">
        {tool.icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-black dark:text-white">
          {tool.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {tool.description}
        </p>
      </div>

      {tool.status === "available" && (
        <div className="flex items-center text-sm text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white transition-colors">
          Try now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </motion.div>
  );

  if (tool.status === "available" && tool.href) {
    return (
      <a href={tool.href} className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
