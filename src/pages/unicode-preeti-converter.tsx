import React, { useState, useCallback } from "react";
import {
  englishToUnicode,
  unicodeToPreeti,
  preetiToUnicode,
  autoConvert,
} from "@/utils/unicodePreetiConverter";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "@/lib/seoHooks";
import Header from "@/components/unicodePreetiConverter/header";
import { examples } from "@/data/unicodePreetiConverterExamples.data";
import ModeSelectionComponent from "@/components/unicodePreetiConverter/mode-selection";
import ExampleSelectorComponent from "@/components/unicodePreetiConverter/example-selector";
import InputAreaComponent from "@/components/unicodePreetiConverter/input-area";
import UnicodeOutputComponent from "@/components/unicodePreetiConverter/unicode-output";
import PreetiOutputComponent from "@/components/unicodePreetiConverter/preeti-output";
import GuideSectionComponent from "@/components/unicodePreetiConverter/guide-section";
import HistorySectionComponent from "@/components/unicodePreetiConverter/history-section";

export default function UnicodePreetiConverterPage() {
  // SEO Optimization
  useSEO({
    title: "Unicode to Preeti & Preeti to Unicode Converter | Nepali Font Tool",
    description: "Instant and accurate conversion between Preeti (traditional), Unicode (Nepali), and Romanized English. Auto-detects font type. Free for typing Nepali online.",
    imageUrl: "https://lab.ctrlbits.com/og-image.png",
  });

  // Add structured data schemas
  React.useEffect(() => {
    // WebApplication Schema
    const webAppSchema = document.createElement('script');
    webAppSchema.type = 'application/ld+json';
    webAppSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Nepali Unicode & Preeti Converter",
      "url": "https://lab.ctrlbits.com/unicode-preeti-converter",
      "description": "Convert Preeti to Unicode and Unicode to Preeti instantly. A free, offline-capable Nepali font converter tool.",
      "applicationCategory": "UtilityApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "NPR"
      },
      "author": {
        "@type": "Organization",
        "name": "Ctrl Bits"
      },
      "featureList": "Unicode to Preeti conversion, Preeti to Unicode conversion, Romanized Nepali typing"
    });
    document.head.appendChild(webAppSchema);

    // BreadcrumbList Schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lab.ctrlbits.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://lab.ctrlbits.com/tools"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "Nepali Font Converter",
        "item": "https://lab.ctrlbits.com/unicode-preeti-converter"
      }]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      document.head.removeChild(webAppSchema);
      document.head.removeChild(breadcrumbSchema);
    };
  }, []);

  const [mode, setMode] = useState<"english" | "unicode" | "preeti">("english");
  const [inputText, setInputText] = useState("");
  const [unicode, setUnicode] = useState("");
  const [preeti, setPreeti] = useState("");
  const [copiedField, setCopiedField] = useState<"unicode" | "preeti" | null>(
    null
  );
  const [showGuide, setShowGuide] = useState(false);
  const [autoDetect, setAutoDetect] = useState(false);
  const [detectedType, setDetectedType] = useState<string>("");
  const [fontSize, setFontSize] = useState(20);
  const [history, setHistory] = useState<
    Array<{
      input: string;
      unicode: string;
      preeti: string;
      mode: string;
    }>
  >([]);

  // Handle English input change
  const handleEnglishChange = useCallback((text: string) => {
    setInputText(text);
    const unicodeText = englishToUnicode(text);
    setUnicode(unicodeText);
    setPreeti(unicodeToPreeti(unicodeText));
    setDetectedType("english");
  }, []);

  // Handle Unicode input change
  const handleUnicodeChange = useCallback((text: string) => {
    setInputText(text);
    setUnicode(text);
    setPreeti(unicodeToPreeti(text));
    setDetectedType("unicode");
  }, []);

  // Handle Preeti input change
  const handlePreetiChange = useCallback((text: string) => {
    setInputText(text);
    const unicodeText = preetiToUnicode(text);
    setUnicode(unicodeText);
    setPreeti(text);
    setDetectedType("preeti");
  }, []);

  // Handle input change based on mode
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    if (autoDetect) {
      setInputText(text);
      if (text) {
        const result = autoConvert(text);
        setUnicode(result.unicode);
        setPreeti(result.preeti);
        setDetectedType(result.type);
      } else {
        setUnicode("");
        setPreeti("");
        setDetectedType("");
      }
    } else {
      switch (mode) {
        case "english":
          handleEnglishChange(text);
          break;
        case "unicode":
          handleUnicodeChange(text);
          break;
        case "preeti":
          handlePreetiChange(text);
          break;
      }
    }

    // Add to history
    if (text) {
      setHistory((prev) => [
        {
          input: text,
          unicode: unicode,
          preeti: preeti,
          mode: autoDetect ? "auto" : mode,
        },
        ...prev.slice(0, 9),
      ]);
    }
  };

  // Copy to clipboard with feedback
  const copyToClipboard = async (text: string, field: "unicode" | "preeti") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Clear all fields
  const clearAll = () => {
    setInputText("");
    setUnicode("");
    setPreeti("");
    setDetectedType("");
  };

  // Load example text
  const loadExample = (key: keyof typeof examples) => {
    const text = examples[key];
    setInputText(text);
    setMode("english");
    handleEnglishChange(text);
  };

  // Download as file
  const downloadAsFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setInputText(text);
        if (autoDetect) {
          const result = autoConvert(text);
          setUnicode(result.unicode);
          setPreeti(result.preeti);
          setDetectedType(result.type);
        } else {
          handleEnglishChange(text);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Dot Matrix Background */}
      {/* <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div> */}

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white mb-2">
              Nepali Font Converter: Unicode & Preeti
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Nepali • Preeti • Transform
              </p>
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
            </div>
          </motion.div>

          {/* Header Controls */}
          <Header
            fontSize={fontSize}
            setFontSize={setFontSize}
            autoDetect={autoDetect}
            setAutoDetect={setAutoDetect}
            clearAll={clearAll}
            handleFileUpload={handleFileUpload}
            detectedType={detectedType}
            showGuide={showGuide}
            setShowGuide={setShowGuide}
          />

          {/* Mode Selection */}
          <AnimatePresence>
            {!autoDetect && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <ModeSelectionComponent
                  autoDetect={autoDetect}
                  mode={mode}
                  setMode={setMode}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <InputAreaComponent
                mode={mode}
                autoDetect={autoDetect}
                inputText={inputText}
                handleInputChange={handleInputChange}
                fontSize={fontSize}
              />
              <ExampleSelectorComponent loadExample={loadExample} />
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <UnicodeOutputComponent
                unicode={unicode}
                fontSize={fontSize}
                copiedField={copiedField}
                copyToClipboard={copyToClipboard}
                downloadAsFile={downloadAsFile}
              />
              <PreetiOutputComponent
                preeti={preeti}
                fontSize={fontSize}
                copiedField={copiedField}
                copyToClipboard={copyToClipboard}
                downloadAsFile={downloadAsFile}
              />
            </motion.div>
          </div>

          {/* History Section */}
          <AnimatePresence>
            {history.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <HistorySectionComponent
                  history={history}
                  setInputText={setInputText}
                  setUnicode={setUnicode}
                  setPreeti={setPreeti}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guide Section */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <GuideSectionComponent />
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="border-t border-neutral-200 dark:border-neutral-800 pt-12 space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-black dark:text-white mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Common questions about Nepali font conversion
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  How to convert Preeti to Unicode in Excel?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Copy your Preeti text from Excel, paste it into the "Preeti" box above, and copy the Unicode result back to Excel. This tool works instantly in your browser without uploading any files to our servers.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  What is the difference between Unicode and Preeti?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Preeti is a legacy font mapping, while Unicode is the global standard for Nepali text supported by Facebook, Google, and mobile devices. Unicode ensures your Nepali text displays correctly across all platforms.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  Can I convert Unicode back to Preeti?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Yes! Simply select "Unicode" mode, paste your Unicode Nepali text, and get the Preeti version instantly. The converter works both ways for maximum flexibility.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  Is this converter free to use?
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Absolutely! Our Nepali font converter is completely free with no sign-up required. All conversion happens in your browser for maximum privacy and speed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-8"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-16 bg-neutral-200 dark:bg-neutral-800" />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <div className="h-px w-16 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600">
              Bit Labs
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Nothing Phone inspired scrollbar */
        .nothing-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        .nothing-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .nothing-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 0;
        }

        .dark .nothing-scrollbar::-webkit-scrollbar-thumb {
          background: #fff;
        }

        .nothing-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }

        .dark .nothing-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
}
