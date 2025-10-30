import { AnimatePresence, motion } from "framer-motion";
import { Type, Globe, FileText, Sparkles } from "lucide-react";

type InputAreaProps = {
  mode: "english" | "unicode" | "preeti";
  autoDetect: boolean;
  inputText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fontSize: number;
};

export default function InputAreaComponent({
  mode,
  autoDetect,
  inputText,
  handleInputChange,
  fontSize,
}: InputAreaProps) {
  const charCount = inputText.length;
  const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
  const hasContent = charCount > 0;

  const getModeIcon = () => {
    if (autoDetect) return <Sparkles className="w-4 h-4" />;
    switch (mode) {
      case "english":
        return <Type className="w-4 h-4" />;
      case "unicode":
        return <Globe className="w-4 h-4" />;
      case "preeti":
        return <FileText className="w-4 h-4" />;
    }
  };

  const getPlaceholder = () => {
    if (autoDetect) return "Start typing...";
    switch (mode) {
      case "english":
        return "namaste, nepal, T=ट, t=त...";
      case "unicode":
        return "नेपाली युनिकोड...";
      case "preeti":
        return "प्रीति फन्ट...";
    }
  };

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
              {getModeIcon()}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              {autoDetect
                ? "Auto-Detect Input"
                : `${mode.charAt(0).toUpperCase() + mode.slice(1)} Input`}
            </span>
          </div>

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
        </div>
      </div>

      {/* Text Area */}
      <div className="relative p-4 sm:p-6">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={getPlaceholder()}
          className={`
            w-full h-64 sm:h-80
            bg-transparent
            resize-none
            focus:outline-none
            text-black dark:text-white
            placeholder:text-neutral-300 dark:placeholder:text-neutral-700
            nothing-scrollbar
            ${mode === "preeti" && !autoDetect ? "font-[Preeti,monospace]" : ""}
          `}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: 1.8,
          }}
        />

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
                  {getModeIcon()}
                </div>
              </motion.div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-700">
                Start Typing
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Compact variant for mobile/tight spaces
export function InputAreaCompact({
  mode,
  autoDetect,
  inputText,
  handleInputChange,
  fontSize,
}: InputAreaProps) {
  const charCount = inputText.length;

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
      {/* Minimal header */}
      <div className="flex items-center justify-between p-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          {autoDetect ? "Auto" : mode}
        </span>
        {charCount > 0 && (
          <span className="text-[10px] text-neutral-400 dark:text-neutral-600">
            {charCount}
          </span>
        )}
      </div>

      {/* Text area */}
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
        className="
          w-full h-48 p-4
          bg-transparent
          resize-none
          focus:outline-none
          text-black dark:text-white
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600
          nothing-scrollbar
        "
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
      />
    </div>
  );
}

// Minimal variant - no border
export function InputAreaMinimal({
  mode,
  autoDetect,
  inputText,
  handleInputChange,
  fontSize,
}: InputAreaProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          {autoDetect ? "Auto Input" : `${mode} Input`}
        </span>
      </div>

      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Start typing..."
        className="
          w-full h-64 p-4
          border border-neutral-200 dark:border-neutral-800
          focus:border-black dark:focus:border-white
          rounded-2xl
          bg-transparent
          resize-none
          focus:outline-none
          text-black dark:text-white
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600
          transition-colors
          nothing-scrollbar
        "
        style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
      />
    </div>
  );
}

// Split view variant with live preview
export function InputAreaSplit({
  mode,
  autoDetect,
  inputText,
  handleInputChange,
  fontSize,
}: InputAreaProps) {
  const charCount = inputText.length;
  const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 p-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
          {autoDetect ? "Auto-Detect" : mode}
        </span>
        <div className="flex items-center gap-3 text-[10px] text-neutral-400 dark:text-neutral-600">
          <span>{charCount} chars</span>
          <span>•</span>
          <span>{wordCount} words</span>
        </div>
      </div>

      {/* Split content */}
      <div className="grid md:grid-cols-2">
        {/* Edit side */}
        <div className="p-4 border-r border-neutral-200 dark:border-neutral-800">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
            Edit
          </div>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="
              w-full h-64
              bg-transparent
              resize-none
              focus:outline-none
              text-black dark:text-white
              placeholder:text-neutral-400 dark:placeholder:text-neutral-600
              nothing-scrollbar
            "
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
          />
        </div>

        {/* Preview side */}
        <div className="p-4 bg-neutral-50 dark:bg-neutral-900">
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mb-2">
            Preview
          </div>
          <div
            className="h-64 overflow-auto nothing-scrollbar text-black dark:text-white whitespace-pre-wrap"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
          >
            {inputText || (
              <span className="text-neutral-400 dark:text-neutral-600">
                Preview appears here...
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
