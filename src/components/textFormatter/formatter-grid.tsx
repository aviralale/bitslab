import { motion } from "framer-motion";
import { type FormatterOption } from "@/utils/textFormatter";

interface FormatterGridProps {
  selectedOption: FormatterOption | null;
  onSelect: (option: FormatterOption) => void;
}

const formatters: Array<{
  id: FormatterOption;
  name: string;
  description: string;
  category: string;
}> = [
  {
    id: "uppercase",
    name: "Uppercase",
    description: "Convert to UPPERCASE",
    category: "case",
  },
  {
    id: "lowercase",
    name: "Lowercase",
    description: "Convert to lowercase",
    category: "case",
  },
  {
    id: "titlecase",
    name: "Title Case",
    description: "Convert To Title Case",
    category: "case",
  },
  {
    id: "capitalize",
    name: "Capitalize",
    description: "Capitalize first letter of sentences",
    category: "case",
  },
  {
    id: "invertCase",
    name: "Invert Case",
    description: "Invert cAsE oF tExT",
    category: "case",
  },
  {
    id: "randomCase",
    name: "Random Case",
    description: "RaNdOm CaSe FoRmAt",
    category: "case",
  },
  {
    id: "camelCase",
    name: "camelCase",
    description: "Convert to camelCase",
    category: "naming",
  },
  {
    id: "snakeCase",
    name: "snake_case",
    description: "Convert to snake_case",
    category: "naming",
  },
  {
    id: "kebabCase",
    name: "kebab-case",
    description: "Convert to kebab-case",
    category: "naming",
  },
  {
    id: "removeExtraSpaces",
    name: "Remove Extra Spaces",
    description: "Clean up multiple spaces",
    category: "cleanup",
  },
  {
    id: "trimWhitespace",
    name: "Trim Whitespace",
    description: "Trim spaces from each line",
    category: "cleanup",
  },
  {
    id: "removeSpecialChars",
    name: "Remove Special Chars",
    description: "Remove @#$%^ symbols",
    category: "cleanup",
  },
  {
    id: "reverse",
    name: "Reverse Text",
    description: "Txet esreveR",
    category: "transform",
  },
  {
    id: "removeDuplicateLines",
    name: "Remove Duplicates",
    description: "Remove duplicate lines",
    category: "lines",
  },
  {
    id: "sortLines",
    name: "Sort Lines",
    description: "Sort lines alphabetically",
    category: "lines",
  },
  {
    id: "sortReverseLines",
    name: "Sort Reverse",
    description: "Sort lines in reverse order",
    category: "lines",
  },
  {
    id: "addLineNumbers",
    name: "Add Line Numbers",
    description: "Add numbers to each line",
    category: "lines",
  },
  {
    id: "removeLineNumbers",
    name: "Remove Line Numbers",
    description: "Remove line numbers",
    category: "lines",
  },
];

const categories = ["case", "naming", "cleanup", "transform", "lines"];

export default function FormatterGrid({
  selectedOption,
  onSelect,
}: FormatterGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="space-y-6"
    >
      {categories.map((category) => {
        const categoryFormatters = formatters.filter(
          (f) => f.category === category,
        );
        const categoryName = {
          case: "Case Conversion",
          naming: "Naming Conventions",
          cleanup: "Cleanup",
          transform: "Transform",
          lines: "Line Operations",
        }[category];

        return (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
              {categoryName}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categoryFormatters.map((formatter, index) => (
                <motion.button
                  key={formatter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onSelect(formatter.id)}
                  className={`text-left p-3 rounded-xl border-2 transition-all ${
                    selectedOption === formatter.id
                      ? "border-black dark:border-white bg-black dark:bg-white"
                      : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <h2
                    className={`text-sm font-medium ${
                      selectedOption === formatter.id
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {formatter.name}
                  </h2>
                  <div
                    className={`text-xs mt-1 ${
                      selectedOption === formatter.id
                        ? "text-neutral-200 dark:text-neutral-700"
                        : "text-neutral-500 dark:text-neutral-500"
                    }`}
                  >
                    {formatter.description}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
