import { Button } from "@/components/ui/button";
import { Info, RefreshCw, Sparkles, Upload } from "lucide-react";
import { Slider } from "../ui/slider";
import { motion } from "framer-motion";

type HeaderProps = {
  fontSize: number;
  setFontSize: (size: number) => void;
  autoDetect: boolean;
  setAutoDetect: (value: boolean) => void;
  clearAll: () => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  detectedType: string | null;
  showGuide: boolean;
  setShowGuide: (value: boolean) => void;
};

export default function Header({
  fontSize,
  setFontSize,
  autoDetect,
  setAutoDetect,
  clearAll,
  handleFileUpload,
  detectedType,
  showGuide,
  setShowGuide,
}: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-3xl overflow-hidden"
    >
      {/* Dot Matrix Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative p-4 sm:p-6">
        {/* Top Row - Guide Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Decorative Dot Indicator */}
            <div className="flex gap-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-red-500"
              />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </div>
          </div>

          {/* Guide Toggle */}
          <Button
            onClick={() => setShowGuide(!showGuide)}
            variant="ghost"
            size="icon"
            className={`
              relative rounded-full h-10 w-10 border transition-all duration-300
              ${
                showGuide
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                  : "bg-transparent border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white"
              }
            `}
          >
            <Info className="w-4 h-4" />
          </Button>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {/* Clear All */}
          <Button
            onClick={clearAll}
            variant="outline"
            className="h-12 border-neutral-300 dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 rounded-2xl font-normal group"
          >
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Clear All
          </Button>

          {/* Auto-Detect Toggle */}
          <Button
            onClick={() => setAutoDetect(!autoDetect)}
            className={`
              h-12 rounded-2xl font-normal transition-all duration-300 border
              ${
                autoDetect
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                  : "bg-white dark:bg-black text-black dark:text-white border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white"
              }
            `}
          >
            <Sparkles
              className={`w-4 h-4 mr-2 ${autoDetect ? "fill-current" : ""}`}
            />
            Auto-Detect
            <span
              className={`
              ml-2 px-2 py-0.5 rounded-full text-xs font-medium
              ${
                autoDetect
                  ? "bg-white/20 dark:bg-black/20"
                  : "bg-neutral-100 dark:bg-neutral-800"
              }
            `}
            >
              {autoDetect ? "ON" : "OFF"}
            </span>
          </Button>

          {/* Upload File */}
          <label className="h-12 px-4 border border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-2xl cursor-pointer flex items-center justify-center gap-2 font-normal group">
            <Upload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Upload File
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          {/* Detected Type Display */}
          <div
            className={`
            h-12 px-4 border rounded-2xl flex items-center justify-center gap-2 transition-all duration-300
            ${
              detectedType && autoDetect
                ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                : "border-neutral-200 dark:border-neutral-800 opacity-50"
            }
          `}
          >
            {detectedType && autoDetect ? (
              <>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  {detectedType}
                </span>
              </>
            ) : (
              <span className="text-sm text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
                No Input
              </span>
            )}
          </div>
        </div>

        {/* Font Size Control */}
        <div className="space-y-3">
          {/* Label with value */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-medium">
              Font Size
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 dark:text-neutral-600">
                16
              </span>
              <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
              <span className="font-mono text-sm font-bold text-black dark:text-white">
                {fontSize}
              </span>
              <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
              <span className="text-xs text-neutral-400 dark:text-neutral-600">
                28
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Background track dots */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <div className="w-full flex justify-between px-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                      fontSize >= 16 + i * 2
                        ? "bg-black dark:bg-white"
                        : "bg-neutral-300 dark:bg-neutral-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Slider
              min={16}
              max={28}
              step={2}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              className="relative z-10 **:[[role=slider]]:h-5 **:[[role=slider]]:w-5 **:[[role=slider]]:border-2 **:[[role=slider]]:border-black dark:**:[[role=slider]]:border-white **:[[role=slider]]:bg-white dark:**:[[role=slider]]:bg-black **:[[role=slider]]:shadow-lg"
            />
          </div>

          {/* Size indicators */}
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-linear-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
    </motion.div>
  );
}
