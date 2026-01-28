import { motion } from "framer-motion";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OutputBoxProps {
  label: string;
  content: string;
  copiedField: string | null;
  copyToClipboard: (text: string, field: string) => void;
  downloadAsFile: (content: string, filename: string) => void;
  stats: {
    charCount: number;
    wordCount: number;
    lineCount: number;
  };
  fieldKey: string;
}

export default function OutputBox({
  label,
  content,
  copiedField,
  copyToClipboard,
  downloadAsFile,
  stats,
  fieldKey,
}: OutputBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-black dark:text-white">
          {label}
        </label>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => copyToClipboard(content, fieldKey)}
            className="h-8 w-8 p-0 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            title="Copy to clipboard"
          >
            <Copy
              className={`w-4 h-4 transition-colors ${
                copiedField === fieldKey ? "text-green-500" : "text-neutral-500"
              }`}
            />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => downloadAsFile(content, `${label}.txt`)}
            className="h-8 w-8 p-0 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            title="Download as file"
          >
            <Download className="w-4 h-4 text-neutral-500" />
          </Button>
        </div>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4">
        <div className="w-full min-h-[200px] max-h-[400px] bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-sm text-black dark:text-white overflow-y-auto nothing-scrollbar whitespace-pre-wrap wrap-break-word">
          {content || "Output will appear here..."}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-center">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Characters
          </div>
          <div className="text-lg font-semibold text-black dark:text-white">
            {stats.charCount}
          </div>
        </div>
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-center">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Words
          </div>
          <div className="text-lg font-semibold text-black dark:text-white">
            {stats.wordCount}
          </div>
        </div>
        <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-center">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Lines
          </div>
          <div className="text-lg font-semibold text-black dark:text-white">
            {stats.lineCount}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
