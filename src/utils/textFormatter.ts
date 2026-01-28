export type FormatterOption =
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "capitalize"
  | "reverse"
  | "removeExtraSpaces"
  | "removeDuplicateLines"
  | "removeSpecialChars"
  | "sortLines"
  | "sortReverseLines"
  | "addLineNumbers"
  | "removeLineNumbers"
  | "trimWhitespace"
  | "camelCase"
  | "snakeCase"
  | "kebabCase"
  | "invertCase"
  | "randomCase";

export interface TextFormatterResult {
  text: string;
  charCount: number;
  wordCount: number;
  lineCount: number;
}

// Convert to uppercase
export const toUppercase = (text: string): string => {
  return text.toUpperCase();
};

// Convert to lowercase
export const toLowercase = (text: string): string => {
  return text.toLowerCase();
};

// Convert to title case
export const toTitleCase = (text: string): string => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Capitalize first letter of each sentence
export const capitalize = (text: string): string => {
  return text
    .split(/([.!?]+\s+)/)
    .map((part, index) => {
      if (index % 2 === 0) {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      }
      return part;
    })
    .join("");
};

// Reverse text
export const reverseText = (text: string): string => {
  return text.split("").reverse().join("");
};

// Remove extra spaces
export const removeExtraSpaces = (text: string): string => {
  return text.trim().replace(/\s+/g, " ");
};

// Remove duplicate lines
export const removeDuplicateLines = (text: string): string => {
  const lines = text.split("\n");
  const uniqueLines = Array.from(new Set(lines));
  return uniqueLines.join("\n");
};

// Remove special characters
export const removeSpecialChars = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9\s\n]/g, "");
};

// Sort lines alphabetically
export const sortLines = (text: string): string => {
  const lines = text.split("\n");
  return lines.sort().join("\n");
};

// Sort lines in reverse alphabetically
export const sortReverseLines = (text: string): string => {
  const lines = text.split("\n");
  return lines.sort().reverse().join("\n");
};

// Add line numbers
export const addLineNumbers = (text: string): string => {
  const lines = text.split("\n");
  return lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
};

// Remove line numbers
export const removeLineNumbers = (text: string): string => {
  return text
    .split("\n")
    .map((line) => line.replace(/^\d+\.\s*/, ""))
    .join("\n");
};

// Trim whitespace from each line
export const trimWhitespace = (text: string): string => {
  return text
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
};

// Convert to camelCase
export const toCamelCase = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .split(/[\s-_]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
};

// Convert to snake_case
export const toSnakeCase = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
};

// Convert to kebab-case
export const toKebabCase = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Invert case (upper to lower, lower to upper)
export const invertCase = (text: string): string => {
  return text
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join("");
};

// Random case
export const randomCase = (text: string): string => {
  return text
    .split("")
    .map((char) => {
      return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    })
    .join("");
};

// Apply formatter
export const applyFormatter = (
  text: string,
  option: FormatterOption,
): string => {
  switch (option) {
    case "uppercase":
      return toUppercase(text);
    case "lowercase":
      return toLowercase(text);
    case "titlecase":
      return toTitleCase(text);
    case "capitalize":
      return capitalize(text);
    case "reverse":
      return reverseText(text);
    case "removeExtraSpaces":
      return removeExtraSpaces(text);
    case "removeDuplicateLines":
      return removeDuplicateLines(text);
    case "removeSpecialChars":
      return removeSpecialChars(text);
    case "sortLines":
      return sortLines(text);
    case "sortReverseLines":
      return sortReverseLines(text);
    case "addLineNumbers":
      return addLineNumbers(text);
    case "removeLineNumbers":
      return removeLineNumbers(text);
    case "trimWhitespace":
      return trimWhitespace(text);
    case "camelCase":
      return toCamelCase(text);
    case "snakeCase":
      return toSnakeCase(text);
    case "kebabCase":
      return toKebabCase(text);
    case "invertCase":
      return invertCase(text);
    case "randomCase":
      return randomCase(text);
    default:
      return text;
  }
};

// Calculate text statistics
export const calculateStats = (
  text: string,
): Omit<TextFormatterResult, "text"> => {
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const lineCount = text === "" ? 0 : text.split("\n").length;

  return { charCount, wordCount, lineCount };
};

// Get formatted result with stats
export const getFormattedResult = (
  text: string,
  option: FormatterOption,
): TextFormatterResult => {
  const formatted = applyFormatter(text, option);
  return {
    text: formatted,
    ...calculateStats(formatted),
  };
};
