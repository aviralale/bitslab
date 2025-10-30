import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Download, FileText } from "lucide-react";
import { Button } from "../ui/button";

type PreetiOutputProps = {
  preeti: string;
  fontSize: number;
  copiedField: "unicode" | "preeti" | null;
  downloadAsFile: (content: string, filename: string) => void;
  copyToClipboard: (content: string, field: "unicode" | "preeti") => void;
};

export default function PreetiOutputComponent({
  preeti,
  fontSize,
  copiedField,
  downloadAsFile,
  copyToClipboard,
}: PreetiOutputProps) {
  const charCount = preeti.length;
  const wordCount = preeti.trim().split(/\s+/).filter(Boolean).length;
  const hasContent = charCount > 0;

  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-3xl overflow-hidden">
      {/* Dot Matrix Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative border-b border-neutral-200 dark:border-neutral-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-neutral-400 dark:text-neutral-600">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Preeti Output
            </span>
          </div>

          {/* Actions & Stats */}
          <div className="flex items-center gap-3">
            {/* Character/Word Count */}
            <AnimatePresence>
              {hasContent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600"
                >
                  <div className="flex items-center gap-1">
                    <span className="font-mono">{charCount}</span>
                    <span>chars</span>
                  </div>
                  <div className="w-px h-3 bg-neutral-300 dark:bg-neutral-700" />
                  <div className="flex items-center gap-1">
                    <span className="font-mono">{wordCount}</span>
                    <span>words</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              <Button
                onClick={() => downloadAsFile(preeti, "preeti_output.txt")}
                disabled={!preeti}
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 disabled:opacity-30"
              >
                <Download className="w-3.5 h-3.5" />
              </Button>
              <Button
                onClick={() => copyToClipboard(preeti, "preeti")}
                disabled={!preeti}
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 disabled:opacity-30"
              >
                <AnimatePresence mode="wait">
                  {copiedField === "preeti" ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Output Area */}
      <div className="relative p-4 sm:p-6">
        <div
          className="w-full min-h-64 sm:min-h-80 text-black dark:text-white font-[Preeti,monospace] whitespace-pre-wrap nothing-scrollbar overflow-auto"
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: 1.8,
          }}
        >
          {preeti || (
            <span className="text-neutral-300 dark:text-neutral-700">
              k|LtL kmG6sf] cfp6k'6 oxfF b]lvg]5===
            </span>
          )}
        </div>

        {/* Empty State */}
        {!hasContent && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-3"
              >
                <div className="w-12 h-12 mx-auto border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </motion.div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-700">
                Output Appears Here
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Compact variant
export function PreetiOutputCompact({
  preeti,
  fontSize,
  copiedField,
  downloadAsFile,
  copyToClipboard,
}: PreetiOutputProps) {
  const charCount = preeti.length;

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
      {/* Minimal header */}
      <div className="flex items-center justify-between p-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          Preeti
        </span>
        <div className="flex items-center gap-1">
          {charCount > 0 && (
            <span className="text-[10px] text-neutral-400 dark:text-neutral-600 mr-2">
              {charCount}
            </span>
          )}
          <Button
            onClick={() => downloadAsFile(preeti, "preeti_output.txt")}
            disabled={!preeti}
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full"
          >
            <Download className="w-3 h-3" />
          </Button>
          <Button
            onClick={() => copyToClipboard(preeti, "preeti")}
            disabled={!preeti}
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full"
          >
            {copiedField === "preeti" ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </Button>
        </div>
      </div>

      {/* Output area */}
      <div
        className="w-full h-48 p-4 bg-transparent text-black dark:text-white font-[Preeti,monospace] whitespace-pre-wrap nothing-scrollbar overflow-auto"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
      >
        {preeti || (
          <span className="text-neutral-400 dark:text-neutral-600">
            Output here...
          </span>
        )}
      </div>
    </div>
  );
}

// Minimal variant
export function PreetiOutputMinimal({
  preeti,
  fontSize,
  copiedField,
  downloadAsFile,
  copyToClipboard,
}: PreetiOutputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
            Preeti Output
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            onClick={() => downloadAsFile(preeti, "preeti_output.txt")}
            disabled={!preeti}
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full"
          >
            <Download className="w-3 h-3" />
          </Button>
          <Button
            onClick={() => copyToClipboard(preeti, "preeti")}
            disabled={!preeti}
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-full"
          >
            {copiedField === "preeti" ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </Button>
        </div>
      </div>

      <div
        className="w-full min-h-64 p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-transparent text-black dark:text-white font-[Preeti,monospace] whitespace-pre-wrap nothing-scrollbar overflow-auto"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
      >
        {preeti || (
          <span className="text-neutral-400 dark:text-neutral-600">
            Output appears here...
          </span>
        )}
      </div>
    </div>
  );
}
