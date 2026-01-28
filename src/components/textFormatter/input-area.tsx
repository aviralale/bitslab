import { motion } from "framer-motion";
import { FileUp, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InputAreaProps {
  inputText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearAll: () => void;
  stats: {
    charCount: number;
    wordCount: number;
    lineCount: number;
  };
}

export default function InputArea({
  inputText,
  handleInputChange,
  handleFileUpload,
  clearAll,
  stats,
}: InputAreaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-black dark:text-white">
          Input Text
        </label>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={clearAll}
            className="h-8 gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </Button>
          <label>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              asChild
            >
              <span>
                <FileUp className="w-4 h-4" />
                Upload
              </span>
            </Button>
            <input
              type="file"
              accept=".txt,.md,.text"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste or type your text here..."
          className="w-full min-h-[200px] max-h-[400px] bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white overflow-y-auto nothing-scrollbar resize-none"
        />
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
