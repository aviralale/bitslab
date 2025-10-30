import { examples } from "@/data/unicodePreetiConverterExamples.data";
import { motion } from "framer-motion";

type ExampleSelectorProps = {
  loadExample: (key: keyof typeof examples) => void;
};

// Compact inline version
export function ExampleSelectorCompact({ loadExample }: ExampleSelectorProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
        Examples:
      </span>
      {Object.keys(examples).map((key, idx) => (
        <motion.button
          key={key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => loadExample(key as keyof typeof examples)}
          className="
            px-3 py-1.5 
            border border-neutral-300 dark:border-neutral-700 
            hover:border-black dark:hover:border-white 
            hover:bg-black dark:hover:bg-white 
            hover:text-white dark:hover:text-black 
            rounded-lg
            text-[11px] font-medium uppercase tracking-wider
            transition-all duration-300
          "
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </motion.button>
      ))}
    </div>
  );
}

// Full card version with enhanced visuals
export default function ExampleSelectorComponent({
  loadExample,
}: ExampleSelectorProps) {
  const exampleDescriptions: Record<string, string> = {
    greeting: "नमस्ते",
    sentence: "Basic text",
    paragraph: "Long form",
    // Add more as needed
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-3xl overflow-hidden"
    >
      {/* Dot Matrix Background */}
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

      {/* Content */}
      <div className="relative p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 font-medium">
            Quick Start
          </span>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(examples).map((key, idx) => {
            const description = exampleDescriptions[key] || "Sample text";

            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => loadExample(key as keyof typeof examples)}
                className="
                  relative h-20 p-3
                  border border-neutral-300 dark:border-neutral-700 
                  hover:border-black dark:hover:border-white
                  rounded-2xl
                  transition-all duration-300
                  group
                  overflow-hidden
                "
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col items-start justify-between h-full">
                  <span className="text-xs font-medium uppercase tracking-wider text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                  <span className="text-[10px] text-neutral-400 dark:text-neutral-600 group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors">
                    {description}
                  </span>
                </div>

                {/* Corner Indicator */}
                <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-white dark:group-hover:bg-black transition-colors" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// Minimal list version
export function ExampleSelectorMinimal({ loadExample }: ExampleSelectorProps) {
  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-3 mt-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
          Load Example
        </span>
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 ml-3" />
      </div>
      <div className="flex gap-1">
        {Object.keys(examples).map((key, idx) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => loadExample(key as keyof typeof examples)}
            className="
              flex-1 h-8
              border border-neutral-200 dark:border-neutral-800
              hover:border-black dark:hover:border-white
              hover:bg-black dark:hover:bg-white
              hover:text-white dark:hover:text-black
              rounded-lg
              text-[10px] font-medium uppercase tracking-wider
              transition-all duration-300
            "
          >
            {key.slice(0, 3)}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
