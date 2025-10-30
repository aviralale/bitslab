import { motion } from "framer-motion";
import { Type, Hash, Sparkles, Check } from "lucide-react";

export default function GuideSectionComponent() {
  const typingRules = [
    {
      title: "Case Matters",
      items: [
        { label: "Retroflex (Capital)", examples: "T→ट, Th→ठ, D→ड, Dh→ढ, N→ण" },
        { label: "Dental (Lowercase)", examples: "t→त, th→थ, d→द, dh→ध, n→न" },
      ],
    },
    {
      title: "Complex Conjuncts",
      items: [
        { label: "rakshya", examples: "रक्ष्य" },
        { label: "raksha", examples: "रक्ष" },
        { label: "lakshya", examples: "लक्ष्य" },
        { label: "lakshmi", examples: "लक्ष्मी" },
      ],
    },
    {
      title: "Vowels",
      items: [
        { label: "Short", examples: "a, i, u, e, o" },
        { label: "Long", examples: "aa/A, ii/I/ee, uu/U/oo, ai, au/ou" },
      ],
    },
    {
      title: "Special Characters",
      items: [
        { label: "ri→ऋ, M→ं, H→ः", examples: "" },
        { label: "ng→ङ, ny→ञ", examples: "" },
      ],
    },
  ];

  const commonConjuncts = [
    { input: "ksha/x", output: "क्ष", preeti: "If" },
    { input: "tra", output: "त्र", preeti: "q" },
    { input: "gya/gna", output: "ज्ञ", preeti: "1" },
    { input: "shra/shri", output: "श्र/श्री", preeti: ">" },
    { input: "ddha", output: "द्ध", preeti: "4" },
  ];

  const examples = [
    { input: "krishna", output: "कृष्ण", note: "name" },
    { input: "lakshya", output: "लक्ष्य", note: "goal" },
    { input: "Topi", output: "टोपी", note: "hat" },
    { input: "topi", output: "तोपी", note: "cannon" },
  ];

  const commonWords = [
    { input: "namaste", output: "नमस्ते" },
    { input: "dhanyabad", output: "धन्यवाद" },
    { input: "kathmandu", output: "काठमाडौं" },
    { input: "nepal", output: "नेपाल" },
    { input: "vishnu", output: "विष्णु" },
    { input: "ganesh", output: "गणेश" },
  ];

  const features = [
    "Complex conjuncts",
    "Full Devanagari script",
    "Case-sensitive distinction",
    "Ref-r (रेफ) handling",
    "Mixed text support",
    "Auto-detection mode",
    "File upload/download",
    "Conversion history",
    "Custom font size",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
      <div className="relative border-b border-neutral-200 dark:border-neutral-800 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex gap-1">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-black dark:bg-white"
            />
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          </div>
          <h3 className="text-xl sm:text-2xl font-light tracking-tight text-black dark:text-white">
            Conversion Guide
          </h3>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 ml-8">
          Complete Reference
        </p>
      </div>

      <div className="relative p-6 space-y-8">
        {/* Typing Rules Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Typing Rules
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {typingRules.map((rule, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4"
              >
                <h4 className="text-sm font-medium text-black dark:text-white mb-3">
                  {rule.title}
                </h4>
                <div className="space-y-2">
                  {rule.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2 shrink-0" />
                      <div className="flex-1">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400">
                          {item.label}
                        </div>
                        {item.examples && (
                          <div className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-1 font-mono">
                            {item.examples}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Common Conjuncts Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Hash className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Common Conjuncts
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonConjuncts.map((conjunct, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <code className="text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded">
                    {conjunct.input}
                  </code>
                  <div className="h-px flex-1 mx-2 bg-neutral-200 dark:bg-neutral-800" />
                  <span className="text-lg text-black dark:text-white">
                    {conjunct.output}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-600 text-right font-mono">
                  {conjunct.preeti}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Examples Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Examples
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {examples.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <code className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                      {example.input}
                    </code>
                    <div className="text-2xl text-black dark:text-white mt-2">
                      {example.output}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600 mt-2">
                      {example.note}
                    </div>
                  </div>
                  <div className="w-1 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Common Words Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 bg-neutral-400 dark:bg-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Common Words
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {commonWords.map((word, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300"
              >
                <code className="text-[11px] font-mono text-neutral-500 dark:text-neutral-500">
                  {word.input}
                </code>
                <div className="text-lg text-black dark:text-white mt-2">
                  {word.output}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              Features
            </span>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-black dark:bg-white shrink-0" />
                  <span className="text-xs text-neutral-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-2 border-black dark:border-white rounded-2xl p-4"
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 border border-black dark:border-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-xs font-bold text-black dark:text-white">
                !
              </span>
            </div>
            <div>
              <h4 className="text-sm font-medium text-black dark:text-white mb-2">
                Pro Tip
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Enable <strong>Auto-Detect</strong> mode to automatically
                identify your input type. Use <strong>capital letters</strong>{" "}
                (T, D, N) for retroflex consonants and{" "}
                <strong>lowercase</strong> for dental consonants to ensure
                accurate conversion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
