import { motion } from "framer-motion";
import { Clock, RotateCcw } from "lucide-react";

type HistoryRowProps = {
  history: Array<{
    input: string;
    unicode: string;
    preeti: string;
    mode: string;
  }>;
  setInputText: (text: string) => void;
  setUnicode: (text: string) => void;
  setPreeti: (text: string) => void;
};

export default function HistoryRowComponent({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: HistoryRowProps) {
  const handleRestore = (item: HistoryRowProps["history"][0]) => {
    setInputText(item.input);
    setUnicode(item.unicode);
    setPreeti(item.preeti);
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-8">
        <Clock className="w-8 h-8 mx-auto mb-3 text-neutral-300 dark:text-neutral-700" />
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
          No History
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {history.map((item, idx) => (
        <motion.button
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => handleRestore(item)}
          className="
            w-full p-3 
            border border-neutral-200 dark:border-neutral-800 
            hover:border-black dark:hover:border-white
            rounded-2xl 
            transition-all duration-300 
            text-left 
            group
            bg-white dark:bg-black
          "
        >
          <div className="flex items-start justify-between gap-3">
            {/* Left: Content */}
            <div className="flex-1 min-w-0">
              {/* Input text */}
              <p className="text-sm font-medium text-black dark:text-white truncate mb-1">
                {item.input.length > 50
                  ? `${item.input.substring(0, 50)}...`
                  : item.input}
              </p>

              {/* Unicode preview */}
              <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
                {item.unicode.length > 40
                  ? `${item.unicode.substring(0, 40)}...`
                  : item.unicode}
              </p>
            </div>

            {/* Right: Mode badge and restore icon */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Mode badge */}
              <span
                className={`
                  px-2 py-1 
                  border border-neutral-300 dark:border-neutral-700
                  rounded-lg 
                  text-[10px] 
                  font-medium 
                  uppercase 
                  tracking-wider 
                  text-neutral-600 dark:text-neutral-400
                `}
              >
                {item.mode}
              </span>

              {/* Restore icon - shows on hover */}
              <RotateCcw className="w-4 h-4 text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom hint - shows on hover */}
          <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Click to restore</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

// Compact variant for minimal space
export function HistoryRowCompact({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: HistoryRowProps) {
  const handleRestore = (item: HistoryRowProps["history"][0]) => {
    setInputText(item.input);
    setUnicode(item.unicode);
    setPreeti(item.preeti);
  };

  return (
    <div className="space-y-1">
      {history.map((item, idx) => (
        <motion.button
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleRestore(item)}
          className="
            w-full px-3 py-2 
            border-l-2 border-neutral-200 dark:border-neutral-800
            hover:border-l-black dark:hover:border-l-white
            hover:bg-neutral-50 dark:hover:bg-neutral-900
            transition-all duration-300 
            text-left
          "
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-black dark:text-white truncate flex-1">
              {item.input.substring(0, 30)}
              {item.input.length > 30 && "..."}
            </span>
            <span className="text-[10px] text-neutral-400 dark:text-neutral-600 shrink-0">
              {item.mode}
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

// List variant with dividers
export function HistoryRowList({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: HistoryRowProps) {
  const handleRestore = (item: HistoryRowProps["history"][0]) => {
    setInputText(item.input);
    setUnicode(item.unicode);
    setPreeti(item.preeti);
  };

  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {history.map((item, idx) => (
        <motion.button
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          onClick={() => handleRestore(item)}
          className="
            w-full p-4 
            hover:bg-neutral-50 dark:hover:bg-neutral-900
            transition-colors duration-300 
            text-left
            group
          "
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
              Entry {history.length - idx}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded">
              {item.mode}
            </span>
          </div>

          <p className="text-sm text-black dark:text-white mb-1 truncate">
            {item.input}
          </p>

          <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
            {item.unicode}
          </p>
        </motion.button>
      ))}
    </div>
  );
}

// Grid variant for desktop
export function HistoryRowGrid({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: HistoryRowProps) {
  const handleRestore = (item: HistoryRowProps["history"][0]) => {
    setInputText(item.input);
    setUnicode(item.unicode);
    setPreeti(item.preeti);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {history.map((item, idx) => (
        <motion.button
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleRestore(item)}
          className="
            p-4 
            border border-neutral-200 dark:border-neutral-800 
            hover:border-black dark:hover:border-white
            rounded-2xl 
            transition-all duration-300 
            text-left
            group
            bg-white dark:bg-black
          "
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
              {item.mode}
            </span>
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
          </div>

          <p className="text-sm text-black dark:text-white mb-2 line-clamp-2">
            {item.input}
          </p>

          <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">
            {item.unicode}
          </p>
        </motion.button>
      ))}
    </div>
  );
}

// Minimal single line variant
export function HistoryRowMinimal({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: HistoryRowProps) {
  const handleRestore = (item: HistoryRowProps["history"][0]) => {
    setInputText(item.input);
    setUnicode(item.unicode);
    setPreeti(item.preeti);
  };

  return (
    <div className="space-y-px">
      {history.map((item, idx) => (
        <button
          key={idx}
          onClick={() => handleRestore(item)}
          className="
            w-full px-3 py-2 
            hover:bg-neutral-100 dark:hover:bg-neutral-900
            transition-colors duration-300 
            text-left
            flex items-center justify-between gap-2
          "
        >
          <span className="text-xs text-neutral-600 dark:text-neutral-400 truncate flex-1">
            {item.input.substring(0, 40)}
            {item.input.length > 40 && "..."}
          </span>
          <span className="text-[10px] text-neutral-400 dark:text-neutral-600 shrink-0">
            {item.mode}
          </span>
        </button>
      ))}
    </div>
  );
}
