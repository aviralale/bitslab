import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { textFormatterExamples } from "@/data/textFormatterExamples.data";

interface ExampleSelectorProps {
  loadExample: (key: keyof typeof textFormatterExamples) => void;
}

export default function ExampleSelector({ loadExample }: ExampleSelectorProps) {
  const examples = [
    { key: "paragraph" as const, label: "Paragraph" },
    { key: "list" as const, label: "List" },
    { key: "poetry" as const, label: "Poetry" },
    { key: "camelCase" as const, label: "camelCase" },
    { key: "messyText" as const, label: "Messy Text" },
    { key: "specialChars" as const, label: "Special Chars" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-neutral-400" />
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Example Texts
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {examples.map((example) => (
          <Button
            key={example.key}
            size="sm"
            variant="outline"
            onClick={() => loadExample(example.key)}
            className="text-xs bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            {example.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
