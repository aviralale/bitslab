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
  Clock,
  Target,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEO from "@/seo/SEO";
import { getPageMeta } from "@/seo/pageMeta";
import { DescriptionSection } from "@/components/DescriptionSection";

export default function RoadmapPage() {
  const navigate = useNavigate();
  const meta = getPageMeta("/roadmap");
  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation",
      status: "completed" as const,
      quarter: "Q4 2025",
      description:
        "Building the core infrastructure and launching essential tools",
      tools: [
        {
          icon: <Type className="w-5 h-5" />,
          title: "Nepali Font Converter",
          description: "Convert between English, Unicode, and Preeti fonts",
          status: "completed" as const,
        },
      ],
    },
    {
      phase: "Phase 2: Text & Language",
      status: "in-progress" as const,
      quarter: "Q4 2025",
      description:
        "Expanding text processing and language conversion capabilities",
      tools: [
        {
          icon: <Type className="w-5 h-5" />,
          title: "Text Formatter",
          description: "Clean up text, remove duplicates, and format with ease",
          status: "completed" as const,
        },
        {
          icon: <Hash className="w-5 h-5" />,
          title: "Nepali Number Converter",
          description: "Convert between English and Nepali numerals",
          status: "in-progress" as const,
        },
        {
          icon: <MessageSquare className="w-5 h-5" />,
          title: "Text to Speech",
          description: "Convert text to natural-sounding speech",
          status: "planned" as const,
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Markdown Editor",
          description: "Write and preview Markdown with syntax highlighting",
          status: "planned" as const,
        },
      ],
    },
    {
      phase: "Phase 3: Image Tools",
      status: "planned" as const,
      quarter: "Q1 2026",
      description: "Comprehensive image processing and optimization suite",
      tools: [
        {
          icon: <Image className="w-5 h-5" />,
          title: "Image Compressor",
          description: "Reduce file size while maintaining quality",
          status: "planned" as const,
        },
        {
          icon: <Image className="w-5 h-5" />,
          title: "Image Resizer",
          description: "Resize images to exact dimensions or percentages",
          status: "planned" as const,
        },
        {
          icon: <FileImage className="w-5 h-5" />,
          title: "Image to Text (OCR)",
          description: "Extract text from images with OCR",
          status: "planned" as const,
        },
      ],
    },
    {
      phase: "Phase 4: PDF Tools",
      status: "planned" as const,
      quarter: "Q2 2026",
      description: "Complete PDF manipulation and management toolkit",
      tools: [
        {
          icon: <FileText className="w-5 h-5" />,
          title: "PDF Merger",
          description: "Combine multiple PDF files into one document",
          status: "planned" as const,
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "PDF Splitter",
          description: "Extract specific pages or split PDFs",
          status: "planned" as const,
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "PDF Compressor",
          description: "Reduce PDF file size without losing quality",
          status: "planned" as const,
        },
      ],
    },
    {
      phase: "Phase 5: Generators & Business",
      status: "planned" as const,
      quarter: "Q3 2026",
      description: "Essential tools for business and content generation",
      tools: [
        {
          icon: <QrCode className="w-5 h-5" />,
          title: "QR & Barcode Generator",
          description:
            "Create custom QR codes and barcodes for URLs, text, products, and more.",
          status: "completed" as const,
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Invoice Generator",
          description: "Create professional invoices and bills",
          status: "completed" as const,
        },
      ],
    },
    {
      phase: "Phase 6: Utilities & Design",
      status: "planned" as const,
      quarter: "Q4 2026",
      description: "Utility and design tools for everyday tasks",
      tools: [
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "Unit Converter",
          description: "Convert between units of length, weight, and more",
          status: "planned" as const,
        },
        {
          icon: <Palette className="w-5 h-5" />,
          title: "Color Picker",
          description: "Pick colors and generate palettes instantly",
          status: "planned" as const,
        },
      ],
    },
  ];

  const stats = {
    completed: roadmapPhases.reduce(
      (acc, phase) =>
        acc + phase.tools.filter((t) => t.status === "completed").length,
      0,
    ),
    inProgress: roadmapPhases.reduce(
      (acc, phase) =>
        acc + phase.tools.filter((t) => t.status === "in-progress").length,
      0,
    ),
    planned: roadmapPhases.reduce(
      (acc, phase) =>
        acc + phase.tools.filter((t) => t.status === "planned").length,
      0,
    ),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical="https://lab.ctrlbits.com/roadmap"
        ogImage="https://lab.ctrlbits.com/og-roadmap.jpg"
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
          className="space-y-8 mb-16"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Product Roadmap
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black dark:text-white">
              Building the Future
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Track our progress as we build a comprehensive suite of free
              online tools. Here's what we've launched, what we're working on,
              and what's coming next.
            </p>
          </div>

          {/* Progress Stats */}
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Completed
                </span>
              </div>
              <p className="text-3xl font-medium text-black dark:text-white">
                {stats.completed}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  In Progress
                </span>
              </div>
              <p className="text-3xl font-medium text-black dark:text-white">
                {stats.inProgress}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-black dark:text-white" />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Planned
                </span>
              </div>
              <p className="text-3xl font-medium text-black dark:text-white">
                {stats.planned}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {roadmapPhases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {phaseIndex !== roadmapPhases.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="shrink-0 pt-1">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center",
                      phase.status === "completed"
                        ? "bg-black dark:bg-white border-black dark:border-white"
                        : phase.status === "in-progress"
                          ? "bg-white dark:bg-black border-black dark:border-white"
                          : "bg-white dark:bg-black border-neutral-200 dark:border-neutral-800",
                    )}
                  >
                    {phase.status === "completed" ? (
                      <CheckCircle2 className="w-6 h-6 text-white dark:text-black" />
                    ) : phase.status === "in-progress" ? (
                      <Zap className="w-6 h-6 text-black dark:text-white" />
                    ) : (
                      <Clock className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                    )}
                  </div>
                </div>

                {/* Phase Content */}
                <div className="flex-1 space-y-6 pb-12">
                  {/* Phase Header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-medium text-black dark:text-white">
                        {phase.phase}
                      </h2>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium",
                          phase.status === "completed"
                            ? "bg-black dark:bg-white text-white dark:text-black"
                            : phase.status === "in-progress"
                              ? "bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white border border-neutral-200 dark:border-neutral-800"
                              : "bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800",
                        )}
                      >
                        {phase.status === "completed"
                          ? "Completed"
                          : phase.status === "in-progress"
                            ? "In Progress"
                            : "Planned"}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-500">
                        {phase.quarter}
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {phase.description}
                    </p>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {phase.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: phaseIndex * 0.1 + toolIndex * 0.05,
                        }}
                        className={cn(
                          "bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 space-y-3",
                          tool.status === "completed"
                            ? "opacity-100"
                            : "opacity-60",
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "shrink-0 w-10 h-10 rounded-full border flex items-center justify-center",
                                tool.status === "completed"
                                  ? "border-neutral-200 dark:border-neutral-800 text-black dark:text-white"
                                  : "border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600",
                              )}
                            >
                              {tool.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-black dark:text-white">
                                {tool.title}
                              </h3>
                            </div>
                          </div>
                          {tool.status === "completed" && (
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-black dark:text-white" />
                          )}
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {tool.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center space-y-6 border-t border-neutral-200 dark:border-neutral-800 pt-20"
        >
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-black dark:text-white">
            Shape Our Roadmap
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Your feedback helps us prioritize what to build next. Have a tool
            request or suggestion? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
              onClick={() => navigate("/contact")}
            >
              Request a Feature
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              onClick={() => navigate("/tools")}
            >
              View All Tools
            </Button>
          </div>
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
