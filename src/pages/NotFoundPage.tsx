import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Search,
  Compass,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      icon: <Home className="w-4 h-4" />,
      label: "Home",
      href: "/",
      description: "Return to homepage",
    },
    {
      icon: <Compass className="w-4 h-4" />,
      label: "Explore Tools",
      href: "/tools",
      description: "Browse all tools",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      label: "Roadmap",
      href: "/roadmap",
      description: "View our plans",
    },
  ];

  const popularTools = [
    {
      title: "Nepali Font Converter",
      href: "/unicode-preeti-converter",
      available: true,
    },
    {
      title: "Image Compressor",
      href: "/tools/image-compressor",
      available: false,
    },
    {
      title: "PDF Merger",
      href: "/tools/pdf-merger",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-24 h-24 border-2 border-neutral-200 dark:border-neutral-800 rounded-full"
          >
            <AlertCircle className="w-12 h-12 text-neutral-400 dark:text-neutral-600" />
          </motion.div>

          {/* 404 Text */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-8xl sm:text-9xl font-medium text-black dark:text-white"
            >
              404
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <h2 className="text-2xl sm:text-3xl font-medium text-black dark:text-white">
                Page Not Found
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Oops! The page you're looking for doesn't exist. It might have
                been moved or deleted, or perhaps you mistyped the URL.
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              className="rounded-full px-8 h-12 text-base bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              variant="ghost"
              className="rounded-full px-8 h-12 text-base border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-12"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 max-w-[100px]" />
                <span className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
                  Quick Links
                </span>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 max-w-[100px]" />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    onClick={() => navigate(link.href)}
                    className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 space-y-3 hover:border-black dark:hover:border-white transition-all group text-left"
                  >
                    <div className="w-10 h-10 border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 dark:text-neutral-600 group-hover:border-black dark:group-hover:border-white group-hover:text-black dark:group-hover:text-white transition-all">
                      {link.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-black dark:text-white">
                        {link.label}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {link.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Popular Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 max-w-[100px]" />
                <span className="text-sm text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
                  Popular Tools
                </span>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 max-w-[100px]" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {popularTools.map((tool, index) => (
                  <motion.button
                    key={tool.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    onClick={() =>
                      tool.available ? navigate(tool.href) : null
                    }
                    disabled={!tool.available}
                    className="px-6 py-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-full text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-neutral-200 disabled:dark:hover:border-neutral-800 disabled:hover:text-neutral-600 disabled:dark:hover:text-neutral-400"
                  >
                    {tool.title}
                    {!tool.available && (
                      <span className="ml-2 text-xs opacity-60">
                        (Coming Soon)
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
              <Search className="w-4 h-4" />
              <span>
                Looking for something specific?{" "}
                <button
                  onClick={() => navigate("/explore")}
                  className="underline hover:text-black dark:hover:text-white transition-colors"
                >
                  Browse all tools
                </button>
              </span>
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="pt-12"
          >
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              If you believe this is an error, please{" "}
              <a
                href="mailto:support@ctrlbits.com"
                className="underline hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                contact support
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
