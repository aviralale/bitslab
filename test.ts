import {
  englishToUnicode,
  unicodeToPreeti,
} from "./src/utils/unicodePreetiConverter.ts";

// Test cases for ड character
const testCases = [
  "D", // Single character
  "laDkaa", // In a word
  "DaaDaa", // As part of compound
];

testCases.forEach((test) => {
  console.log(`\nTesting "${test}":`);
  const uni = englishToUnicode(test);
  console.log("ENGLISH:", test);
  console.log("UNICODE:", uni);
  console.log("PREETI:", unicodeToPreeti(uni));
});
