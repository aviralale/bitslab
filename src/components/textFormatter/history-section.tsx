import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface HistoryItem {
  input: string;
  output: string;
  formatter: string;
  timestamp: Date;
}

interface HistorySectionProps {
  history: HistoryItem[];
  onLoadHistory: (item: HistoryItem) => void;
}

export default function HistorySection({
  history,
  onLoadHistory,
}: HistorySectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="border-t border-neutral-200 dark:border-neutral-800 pt-8 space-y-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <h3 className="text-lg font-medium text-black dark:text-white">
          Recent Conversions
        </h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="space-y-2">
          {history.length === 0 ? (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Your recent conversions will appear here
            </p>
          ) : (
            history.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => onLoadHistory(item)}
                className="w-full text-left p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-black dark:text-white truncate">
                      {item.formatter}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      {item.input.substring(0, 50)}...
                    </div>
                  </div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-600 shrink-0">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </motion.button>
            ))
          )}
        </div>
      )}
    </motion.div>
  );
}
