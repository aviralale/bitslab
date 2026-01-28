import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  applyFormatter,
  calculateStats,
  type FormatterOption,
} from "@/utils/textFormatter";
import { textFormatterExamples } from "@/data/textFormatterExamples.data";
import { Copy, Zap, HelpCircle } from "lucide-react";
import InputArea from "@/components/textFormatter/input-area";
import OutputBox from "@/components/textFormatter/output-box";
import FormatterGrid from "@/components/textFormatter/formatter-grid";
import ExampleSelector from "@/components/textFormatter/example-selector";
import HistorySection from "@/components/textFormatter/history-section";
import { Button } from "@/components/ui/button";

interface HistoryItem {
  input: string;
  output: string;
  formatter: string;
  timestamp: Date;
}

export default function TextFormatterPage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedFormatter, setSelectedFormatter] =
    useState<FormatterOption | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showGuide, setShowGuide] = useState(false);

  const inputStats = calculateStats(inputText);
  const outputStats = calculateStats(outputText);

  // Handle formatter selection
  const handleFormatterSelect = useCallback(
    (formatter: FormatterOption) => {
      setSelectedFormatter(formatter);
      if (inputText) {
        const result = applyFormatter(inputText, formatter);
        setOutputText(result);

        // Add to history
        const formatterNames: Record<FormatterOption, string> = {
          uppercase: "Uppercase",
          lowercase: "Lowercase",
          titlecase: "Title Case",
          capitalize: "Capitalize",
          reverse: "Reverse",
          removeExtraSpaces: "Remove Extra Spaces",
          removeDuplicateLines: "Remove Duplicates",
          removeSpecialChars: "Remove Special Chars",
          sortLines: "Sort Lines",
          sortReverseLines: "Sort Reverse",
          addLineNumbers: "Add Line Numbers",
          removeLineNumbers: "Remove Line Numbers",
          trimWhitespace: "Trim Whitespace",
          camelCase: "camelCase",
          snakeCase: "snake_case",
          kebabCase: "kebab-case",
          invertCase: "Invert Case",
          randomCase: "Random Case",
        };

        setHistory((prev) => [
          {
            input: inputText,
            output: result,
            formatter: formatterNames[formatter],
            timestamp: new Date(),
          },
          ...prev.slice(0, 19),
        ]);
      }
    },
    [inputText],
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);

    // Auto-apply if formatter is selected
    if (selectedFormatter && text) {
      const result = applyFormatter(text, selectedFormatter);
      setOutputText(result);
    } else {
      setOutputText("");
    }
  };

  // Copy to clipboard
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
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

  // Clear all
  const clearAll = () => {
    setInputText("");
    setOutputText("");
    setSelectedFormatter(null);
  };

  // Load example
  const loadExample = (key: keyof typeof textFormatterExamples) => {
    const text = textFormatterExamples[key];
    setInputText(text);
    setOutputText("");
    setSelectedFormatter(null);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setInputText(text);
        setOutputText("");
        setSelectedFormatter(null);
      };
      reader.readAsText(file);
    }
  };

  // Load from history
  const loadFromHistory = (item: HistoryItem) => {
    setInputText(item.input);
    setOutputText(item.output);
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
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

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-black dark:text-white mb-2">
              Text Formatter
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
                Clean • Format • Transform
              </p>
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
            </div>
          </motion.div>

          {/* Header Controls */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {selectedFormatter
                  ? "Formatter selected"
                  : "Select a formatter to get started"}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowGuide(!showGuide)}
              className="gap-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <HelpCircle className="w-4 h-4" />
              Guide
            </Button>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Input and Examples */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              <InputArea
                inputText={inputText}
                handleInputChange={handleInputChange}
                handleFileUpload={handleFileUpload}
                clearAll={clearAll}
                stats={inputStats}
              />
              <ExampleSelector loadExample={loadExample} />
            </motion.div>

            {/* Middle - Formatters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8 space-y-4">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Choose Formatter
                </h3>
                <FormatterGrid
                  selectedOption={selectedFormatter}
                  onSelect={handleFormatterSelect}
                />
              </div>
            </motion.div>

            {/* Right - Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              {outputText ? (
                <OutputBox
                  label="Formatted Output"
                  content={outputText}
                  copiedField={copiedField}
                  copyToClipboard={copyToClipboard}
                  downloadAsFile={downloadAsFile}
                  stats={outputStats}
                  fieldKey="output"
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-neutral-50 dark:bg-neutral-950 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-8 text-center"
                >
                  <Copy className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                  <p className="text-neutral-500 dark:text-neutral-400 mb-2">
                    Select a formatter and enter text
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-600">
                    Your formatted result will appear here
                  </p>
                </motion.div>
              )}
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
                <HistorySection
                  history={history}
                  onLoadHistory={loadFromHistory}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guide Section */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border-t border-neutral-200 dark:border-neutral-800 pt-8 space-y-4"
              >
                <h3 className="text-lg font-medium text-black dark:text-white">
                  How to Use
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <h4 className="font-medium text-black dark:text-white mb-2">
                      1. Enter Text
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Paste your text or upload a file to get started
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <h4 className="font-medium text-black dark:text-white mb-2">
                      2. Choose Formatter
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Pick from 18+ text formatting options
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <h4 className="font-medium text-black dark:text-white mb-2">
                      3. Get Result
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Formatted text appears instantly in the output area
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <h4 className="font-medium text-black dark:text-white mb-2">
                      4. Download or Copy
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Copy to clipboard or download as a text file
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
