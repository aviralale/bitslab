import { Globe, FileText, Type } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModeSelectionProps = {
  autoDetect: boolean;
  mode: "english" | "unicode" | "preeti";
  setMode: (mode: "english" | "unicode" | "preeti") => void;
};

export default function ModeSelectionComponent({
  autoDetect,
  mode,
  setMode,
}: ModeSelectionProps) {
  const modes = [
    {
      id: "english" as const,
      label: "English",
      sublabel: "Romanized",
      icon: <Type className="w-4 h-4" />,
    },
    {
      id: "unicode" as const,
      label: "Unicode",
      sublabel: "देवनागरी",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "preeti" as const,
      label: "Preeti",
      sublabel: "फन्ट",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  if (autoDetect) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
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
        <div className="relative border-b border-neutral-200 dark:border-neutral-800 p-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-black dark:bg-white" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Input Mode
            </span>
          </div>
        </div>

        {/* Mode Buttons */}
        <div className="relative p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {modes.map((modeOption, idx) => (
              <motion.button
                key={modeOption.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode(modeOption.id)}
                className={`
                  relative h-24 sm:h-28 rounded-2xl transition-all duration-300 border-2
                  ${
                    mode === modeOption.id
                      ? "bg-black dark:bg-white border-black dark:border-white"
                      : "bg-transparent border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white"
                  }
                `}
              >
                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full gap-2">
                  {/* Icon */}
                  <div
                    className={`
                      transition-colors
                      ${
                        mode === modeOption.id
                          ? "text-white dark:text-black"
                          : "text-neutral-600 dark:text-neutral-400"
                      }
                    `}
                  >
                    {modeOption.icon}
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <div
                      className={`
                        text-sm font-medium transition-colors
                        ${
                          mode === modeOption.id
                            ? "text-white dark:text-black"
                            : "text-black dark:text-white"
                        }
                      `}
                    >
                      {modeOption.label}
                    </div>
                    <div
                      className={`
                        text-xs mt-1 transition-colors
                        ${
                          mode === modeOption.id
                            ? "text-white/60 dark:text-black/60"
                            : "text-neutral-400 dark:text-neutral-600"
                        }
                      `}
                    >
                      {modeOption.sublabel}
                    </div>
                  </div>
                </div>

                {/* Active Indicator Dot */}
                {mode === modeOption.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white dark:bg-black"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Compact horizontal variant
export function ModeSelectionCompact({
  autoDetect,
  mode,
  setMode,
}: ModeSelectionProps) {
  const modes = [
    {
      id: "english" as const,
      label: "Eng",
      icon: <Type className="w-4 h-4" />,
    },
    {
      id: "unicode" as const,
      label: "Uni",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "preeti" as const,
      label: "Pre",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  if (autoDetect) return null;

  return (
    <div className="flex items-center gap-2 p-2 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 px-2">
        Mode
      </span>
      <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex gap-1">
        {modes.map((modeOption) => (
          <button
            key={modeOption.id}
            onClick={() => setMode(modeOption.id)}
            className={`
              px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300
              flex items-center gap-1.5
              ${
                mode === modeOption.id
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
              }
            `}
          >
            {modeOption.icon}
            {modeOption.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Minimal tab-style variant
export function ModeSelectionTabs({
  autoDetect,
  mode,
  setMode,
}: ModeSelectionProps) {
  const modes = [
    { id: "english" as const, label: "English" },
    { id: "unicode" as const, label: "Unicode" },
    { id: "preeti" as const, label: "Preeti" },
  ];

  if (autoDetect) return null;

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex gap-1 px-4">
        {modes.map((modeOption) => (
          <button
            key={modeOption.id}
            onClick={() => setMode(modeOption.id)}
            className={`
              relative px-4 py-3 text-sm font-medium transition-colors
              ${
                mode === modeOption.id
                  ? "text-black dark:text-white"
                  : "text-neutral-500 dark:text-neutral-500 hover:text-black dark:hover:text-white"
              }
            `}
          >
            {modeOption.label}
            {mode === modeOption.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Segmented control variant
export function ModeSelectionSegmented({
  autoDetect,
  mode,
  setMode,
}: ModeSelectionProps) {
  const modes = [
    {
      id: "english" as const,
      label: "English",
      icon: <Type className="w-4 h-4" />,
    },
    {
      id: "unicode" as const,
      label: "Unicode",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "preeti" as const,
      label: "Preeti",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  if (autoDetect) return null;

  return (
    <div className="inline-flex bg-neutral-100 dark:bg-neutral-900 p-1 rounded-2xl">
      {modes.map((modeOption) => (
        <button
          key={modeOption.id}
          onClick={() => setMode(modeOption.id)}
          className={`
            relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
            flex items-center gap-2
            ${
              mode === modeOption.id
                ? "bg-white dark:bg-black text-black dark:text-white shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            }
          `}
        >
          {modeOption.icon}
          <span className="hidden sm:inline">{modeOption.label}</span>
        </button>
      ))}
    </div>
  );
}

// Vertical sidebar variant
export function ModeSelectionVertical({
  autoDetect,
  mode,
  setMode,
}: ModeSelectionProps) {
  const modes = [
    {
      id: "english" as const,
      label: "English",
      sublabel: "Romanized",
      icon: <Type className="w-5 h-5" />,
    },
    {
      id: "unicode" as const,
      label: "Unicode",
      sublabel: "देवनागरी",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: "preeti" as const,
      label: "Preeti",
      sublabel: "फन्ट",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  if (autoDetect) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-2 mb-3">
        <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          Input Mode
        </span>
      </div>

      {modes.map((modeOption) => (
        <button
          key={modeOption.id}
          onClick={() => setMode(modeOption.id)}
          className={`
            w-full p-3 rounded-2xl transition-all duration-300 border
            text-left flex items-center gap-3
            ${
              mode === modeOption.id
                ? "bg-black dark:bg-white border-black dark:border-white"
                : "bg-transparent border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white"
            }
          `}
        >
          <div
            className={`
              ${
                mode === modeOption.id
                  ? "text-white dark:text-black"
                  : "text-neutral-600 dark:text-neutral-400"
              }
            `}
          >
            {modeOption.icon}
          </div>
          <div className="flex-1">
            <div
              className={`
                text-sm font-medium
                ${
                  mode === modeOption.id
                    ? "text-white dark:text-black"
                    : "text-black dark:text-white"
                }
              `}
            >
              {modeOption.label}
            </div>
            <div
              className={`
                text-xs
                ${
                  mode === modeOption.id
                    ? "text-white/60 dark:text-black/60"
                    : "text-neutral-400 dark:text-neutral-600"
                }
              `}
            >
              {modeOption.sublabel}
            </div>
          </div>
          {mode === modeOption.id && (
            <div className="w-2 h-2 rounded-full bg-white dark:bg-black" />
          )}
        </button>
      ))}
    </div>
  );
}
