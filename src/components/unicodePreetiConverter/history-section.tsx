import { motion } from "framer-motion";
import { Clock, Trash2, Download } from "lucide-react";
import HistoryRowComponent, {
  HistoryRowCompact,
  HistoryRowList,
  HistoryRowGrid,
  HistoryRowMinimal,
} from "./history-row";

type HistoryItem = {
  input: string;
  unicode: string;
  preeti: string;
  mode: string;
};

type HistorySectionProps = {
  history: HistoryItem[];
  setInputText: (text: string) => void;
  setUnicode: (text: string) => void;
  setPreeti: (text: string) => void;
  onClear?: () => void;
  onExport?: () => void;
  variant?: "default" | "compact" | "list" | "grid" | "minimal";
};

export default function HistorySectionComponent({
  history,
  setInputText,
  setUnicode,
  setPreeti,
  onClear,
  onExport,
  variant = "default",
}: HistorySectionProps) {
  if (history.length === 0) {
    return null; // Don't show section if no history
  }

  const HistoryComponent = {
    default: HistoryRowComponent,
    compact: HistoryRowCompact,
    list: HistoryRowList,
    grid: HistoryRowGrid,
    minimal: HistoryRowMinimal,
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-3xl overflow-hidden"
    >
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
      <div className="relative border-b border-neutral-200 dark:border-neutral-800 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Conversion History
            </span>
            <span className="ml-2 text-[10px] text-neutral-400 dark:text-neutral-600 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-full">
              {history.length}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {onExport && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onExport}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
                title="Export history"
              >
                <Download className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </motion.button>
            )}

            {onClear && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClear}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
                title="Clear history"
              >
                <Trash2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* History Items */}
      <div className="relative p-4 sm:p-6 max-h-80 overflow-y-auto nothing-scrollbar">
        <HistoryComponent
          history={history}
          setInputText={setInputText}
          setUnicode={setUnicode}
          setPreeti={setPreeti}
        />
      </div>
    </motion.div>
  );
}

// Inline compact variant (no card wrapper)
export function HistorySectionInline({
  history,
  setInputText,
  setUnicode,
  setPreeti,
  onClear,
}: Omit<HistorySectionProps, "variant">) {
  if (history.length === 0) return null;

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
            Recent ({history.length})
          </span>
        </div>

        {onClear && (
          <button
            onClick={onClear}
            className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      <HistoryRowMinimal
        history={history}
        setInputText={setInputText}
        setUnicode={setUnicode}
        setPreeti={setPreeti}
      />
    </div>
  );
}

// Sidebar variant (very compact)
export function HistorySectionSidebar({
  history,
  setInputText,
  setUnicode,
  setPreeti,
}: Omit<HistorySectionProps, "variant" | "onClear" | "onExport">) {
  if (history.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-2">
        <Clock className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
        <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          Recent
        </span>
      </div>

      <div className="space-y-1 max-h-40 overflow-y-auto nothing-scrollbar">
        {history.slice(0, 5).map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInputText(item.input);
              setUnicode(item.unicode);
              setPreeti(item.preeti);
            }}
            className="
              w-full px-2 py-1.5 
              text-left text-xs 
              text-neutral-600 dark:text-neutral-400 
              hover:bg-neutral-100 dark:hover:bg-neutral-900
              rounded-lg
              transition-colors
              truncate
            "
          >
            {item.input.substring(0, 25)}
            {item.input.length > 25 && "..."}
          </button>
        ))}
      </div>
    </div>
  );
}

// Modal/Popover variant (detailed view)
export function HistorySectionModal({
  history,
  setInputText,
  setUnicode,
  setPreeti,
  onClear,
  onClose,
}: HistorySectionProps & { onClose?: () => void }) {
  return (
    <div className="bg-white dark:bg-black rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light text-black dark:text-white mb-1">
            Conversion History
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
            {history.length} {history.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {onClear && (
            <button
              onClick={onClear}
              className="
                px-4 py-2 
                border border-neutral-300 dark:border-neutral-700
                hover:border-black dark:hover:border-white
                hover:bg-black dark:hover:bg-white
                hover:text-white dark:hover:text-black
                rounded-xl
                text-xs font-medium
                transition-all duration-300
              "
            >
              Clear All
            </button>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className="
                p-2 
                hover:bg-neutral-100 dark:hover:bg-neutral-900
                rounded-full
                transition-colors
              "
            >
              <span className="sr-only">Close</span>✕
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto nothing-scrollbar p-6">
        <HistoryRowList
          history={history}
          setInputText={setInputText}
          setUnicode={setUnicode}
          setPreeti={setPreeti}
        />
      </div>
    </div>
  );
}
