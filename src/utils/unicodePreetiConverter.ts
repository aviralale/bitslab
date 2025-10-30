// ============================================================================
// ROMANIZED → UNICODE MAPPINGS
// ============================================================================

// Independent Vowels
const INDEPENDENT_VOWELS: Record<string, string> = {
  a: "अ",
  aa: "आ",
  A: "आ",
  i: "इ",
  ii: "ई",
  I: "ई",
  ee: "ई",
  u: "उ",
  uu: "ऊ",
  U: "ऊ",
  oo: "ऊ",
  e: "ए",
  ai: "ऐ",
  o: "ओ",
  au: "औ",
  ou: "औ",
  ri: "ऋ",
  Ri: "ऋ",
  am: "अं",
  aM: "अं",
  ah: "अः",
  aH: "अः",
  om: "ॐ",
  Om: "ॐ",
  OM: "ॐ",
};

// Vowel Signs (Matras)
const VOWEL_SIGNS: Record<string, string> = {
  a: "",
  aa: "ा",
  A: "ा",
  i: "ि",
  ii: "ी",
  I: "ी",
  ee: "ी",
  u: "ु",
  uu: "ू",
  U: "ू",
  oo: "ू",
  e: "े",
  ai: "ै",
  o: "ो",
  au: "ौ",
  ou: "ौ",
  ri: "ृ",
  Ri: "ृ",
  M: "ं",
  H: "ः",
};

// Consonants
const CONSONANTS: Record<string, string> = {
  // Velars
  k: "क",
  K: "क",
  kh: "ख",
  Kh: "ख",
  kH: "ख",
  KH: "ख",
  g: "ग",
  G: "ग",
  gh: "घ",
  Gh: "घ",
  gH: "घ",
  GH: "घ",
  ng: "ङ",
  Ng: "ङ",
  NG: "ङ",

  // Palatals
  ch: "च",
  Ch: "च",
  chh: "छ",
  Chh: "छ",
  cH: "छ",
  CH: "छ",
  j: "ज",
  J: "ज",
  jh: "झ",
  Jh: "झ",
  jH: "झ",
  JH: "झ",
  ny: "ञ",
  Ny: "ञ",
  NY: "ञ",
  yn: "ञ",

  // Retroflex (capitals)
  T: "ट",
  Th: "ठ",
  TH: "ठ",
  D: "ड",
  Dh: "ढ",
  DH: "ढ",
  N: "ण",

  // Dentals (lowercase)
  t: "त",
  th: "थ",
  d: "द",
  dh: "ध",
  n: "न",

  // Labials
  p: "प",
  P: "प",
  ph: "फ",
  Ph: "फ",
  pH: "फ",
  PH: "फ",
  f: "फ",
  F: "फ",
  b: "ब",
  B: "ब",
  bh: "भ",
  Bh: "भ",
  bH: "भ",
  BH: "भ",
  m: "म",
  M: "म",

  // Semi-vowels
  y: "य",
  Y: "य",
  r: "र",
  R: "र",
  l: "ल",
  L: "ल",
  v: "व",
  V: "व",
  w: "व",
  W: "व",

  // Sibilants
  sh: "श",
  Sh: "श",
  SH: "श",
  shh: "ष",
  Shh: "ष",
  SHH: "ष",
  sH: "ष",
  s: "स",
  S: "स",

  // Aspirate
  h: "ह",
  H: "ह",
};

// Special Combinations - Extended for better accuracy
const SPECIAL_COMBINATIONS: Record<string, string> = {
  // Complex conjuncts with specific forms
  rakshya: "रक्ष्य",
  raksha: "रक्ष",
  ksha: "क्ष",
  Ksha: "क्ष",
  ksh: "क्ष",
  x: "क्ष",
  X: "क्ष",
  tra: "त्र",
  Tra: "त्र",
  tr: "त्र",
  gya: "ज्ञ",
  Gya: "ज्ञ",
  gyā: "ज्ञ",
  gny: "ज्ञ",
  shra: "श्र",
  Shra: "श्र",
  shr: "श्र",
  shree: "श्री",
  Shree: "श्री",
  shri: "श्री",
  sri: "श्री",
  kri: "कृ",
  dra: "द्र",
  pra: "प्र",
  bra: "ब्र",
  gra: "ग्र",
  hra: "ह्र",
  // Double consonants
  kka: "क्क",
  tta: "त्त",
  dda: "द्द",
  nna: "न्न",
  ppa: "प्प",
  lla: "ल्ल",
  // More conjuncts
  kta: "क्त",
  kna: "क्न",
  kva: "क्व",
  kla: "क्ल",
  gna: "ग्न",
  gla: "ग्ल",
  nga: "ङ्ग",
  ngha: "ङ्घ",
  ccha: "च्च",
  jja: "ज्ज",
  jva: "ज्व",
  ncha: "ञ्च",
  nja: "ञ्ज",
  tna: "त्न",
  tva: "त्व",
  dva: "द्व",
  dya: "द्य",
  dhna: "ध्न",
  dhya: "ध्य",
  dhva: "ध्व",
  nta: "न्त",
  nda: "न्द",
  ndha: "न्ध",
  nva: "न्व",
  pna: "प्न",
  pta: "प्त",
  psa: "प्स",
  bja: "ब्ज",
  bda: "ब्द",
  mna: "म्न",
  mpa: "म्प",
  mba: "म्ब",
  mma: "म्म",
  mla: "म्ल",
  yna: "य्न",
  rka: "र्क",
  rga: "र्ग",
  rgha: "र्घ",
  rcha: "र्च",
  rja: "र्ज",
  rNa: "र्ण",
  rta: "र्त",
  rtha: "र्थ",
  rda: "र्द",
  rdha: "र्ध",
  rna: "र्न",
  rpa: "र्प",
  rpha: "र्फ",
  rba: "र्ब",
  rbha: "र्भ",
  rma: "र्म",
  rya: "र्य",
  rla: "र्ल",
  rva: "र्व",
  rsha: "र्श",
  rsa: "र्स",
  lka: "ल्क",
  lga: "ल्ग",
  lva: "ल्व",
  vna: "व्न",
  vya: "व्य",
  shka: "श्क",
  shta: "श्त",
  shna: "श्न",
  shma: "श्म",
  shya: "श्य",
  shla: "श्ल",
  shva: "श्व",
  ska: "स्क",
  skha: "स्ख",
  sta: "स्त",
  stha: "स्थ",
  sna: "स्न",
  spa: "स्प",
  spha: "स्फ",
  sma: "स्म",
  sya: "स्य",
  sra: "स्र",
  sva: "स्व",
  hna: "ह्न",
  hma: "ह्म",
  hya: "ह्य",
  hla: "ह्ल",
  hva: "ह्व",
};

// Comprehensive Exception Dictionary
const EXCEPTIONS: Record<string, string> = {
  // Cities and Places
  kathmandu: "काठमाडौं",
  Kathmandu: "काठमाडौं",
  kathmandumaa: "काठमाडौंमा",
  kathmandumai: "काठमाडौंमै",
  nepal: "नेपाल",
  Nepal: "नेपाल",
  pokhara: "पोखरा",
  Pokhara: "पोखरा",
  bhaktapur: "भक्तपुर",
  lalitpur: "ललितपुर",
  dhulikhel: "धुलिखेल",
  chitwan: "चितवन",
  mustang: "मुस्ताङ",
  manang: "मनाङ",
  janakpur: "जनकपुर",
  biratnagar: "विराटनगर",
  birgunj: "वीरगञ्ज",
  hetauda: "हेटौंडा",
  dharan: "धरान",
  butwal: "बुटवल",
  nepalgunj: "नेपालगञ्ज",

  // Greetings & Common Words
  namaste: "नमस्ते",
  namaskar: "नमस्कार",
  dhanyabad: "धन्यवाद",
  dhanyabaad: "धन्यवाद",
  swagatam: "स्वागतम्",
  swagat: "स्वागत",
  maaf: "माफ",
  kripaya: "कृपया",
  pheri: "फेरि",

  // Common words with special forms
  rakshya: "रक्षा",
  raksha: "रक्षा",
  lakshya: "लक्ष्य",
  lakshmi: "लक्ष्मी",
  bishnu: "विष्णु",
  krishna: "कृष्ण",

  // Names
  aviral: "अविरल",
  ram: "राम",
  sita: "सीता",
  shiva: "शिव",
  vishnu: "विष्णु",
  buddha: "बुद्ध",
  guru: "गुरु",
  ganesh: "गणेश",
  saraswati: "सरस्वती",
  parvati: "पार्वती",
  hanuman: "हनुमान",
  durga: "दुर्गा",
};

const HALANT = "्";
const ANUSVARA = "ं";
const VISARGA = "ः";

// ============================================================================
// IMPROVED UNICODE → PREETI MAPPINGS
// ============================================================================

// More accurate Preeti mappings based on actual font behavior
const UNICODE_TO_PREETI_MAP: Record<string, string> = {
  // Special symbols
  ॐ: "å",

  // Independent vowels
  अ: "c",
  आ: "cf",
  इ: "O",
  ई: "O{",
  उ: "p",
  ऊ: "pm",
  ऋ: "C",
  ॠ: "C{",
  ए: "P",
  ऐ: "P]",
  ओ: "cf]",
  औ: "cf}",

  // Consonants - FIXED: Ensure single consonants are checked AFTER conjuncts
  क: "s",
  ख: "v",
  ग: "u",
  घ: "3",
  ङ: "ª",

  च: "r",
  छ: "5",
  ज: "h",
  झ: "em",
  ञ: "`",

  ट: "6",
  ठ: "7",
  ड: "8", // This should be used for standalone ड
  ढ: "9",
  ण: "0",

  त: "t",
  थ: "y",
  द: "b",
  ध: "w",
  न: "g",

  प: "k",
  फ: "km",
  ब: "a",
  भ: "e",
  म: "d",

  य: "o",
  र: "/",
  ल: "n",
  व: "j",

  श: "z",
  ष: "if",
  स: ";",
  ह: "x",

  // Complex Conjuncts with specific Preeti forms - These should be checked BEFORE single consonants
  रक्ष्य: "/\\Ifo",
  रक्ष: "/\\If",
  क्ष: "If",
  त्र: "q",
  ज्ञ: "1",
  श्र: ">",
  द्ध: "4",
  त्त: "Q",
  द्य: "B",
  द्व: "2",
  ट्ट: "§",
  ड्ड: "•",
  ड्ढ: "ž",
  ठ्ठ: "¶",
  द्द: "›",
  द्म: "°",

  // More conjuncts
  क्त: "Qm",
  क्र: "qm",
  क्ल: "Sn",
  क्व: "Sj",
  ख्र: "v|",
  ग्र: "u|",
  ग्ल: "Un",
  घ्र: "3|",
  च्च: "Rr",
  ज्ज: "Hh",
  ज्व: "Hj",
  ञ्च: "`r",
  ञ्ज: "`h",
  ट्र: "^",
  ठ्र: "&",
  ड्र: "*", // This is for ड्र conjunct only
  त्न: "Tg",
  त्व: "Tj",
  द्भ: "›e",
  ध्न: "Wg",
  ध्व: "Wj",
  न्त: "Gt",
  न्द: "Gb",
  न्ध: "Gw",
  न्न: "Gg",
  प्त: "Kt",
  प्न: "Kg",
  प्र: "k|",
  फ्र: "km|",
  ब्र: "a|",
  भ्र: "e|",
  म्न: "Dg",
  म्र: "d|",
  ल्ल: "Nn",
  व्र: "j|",
  श्न: "Zg",
  श्व: "Zj",
  ष्ट: "i6",
  ष्ठ: "i7",
  स्त: ":t",
  स्न: ":g",
  स्र: ";|",
  ह्न: "Xg",
  ह्म: "Xd",
  ह्र: "x|",

  // Matras
  "ा": "f",
  "ि": "l",
  "ी": "L",
  "ु": "'",
  "ू": '"',
  "ृ": "[",
  "े": "]",
  "ै": "}",
  "ो": "f]",
  "ौ": "f}",

  // Special marks
  "ं": "+",
  "ः": "M",
  "्": "\\",
  "ँ": "F",
  "़": "`",

  // Numbers
  "०": ")",
  "१": "!",
  "२": "@",
  "३": "#",
  "४": "$",
  "५": "%",
  "६": "^",
  "७": "&",
  "८": "*",
  "९": "(",

  // Punctuation
  "।": ".",
  "॥": "..",
};

// Half-consonant mappings for Preeti
const HALF_CONSONANT_MAP: Record<string, string> = {
  क्: "Qm",
  ख्: "V",
  ग्: "U",
  घ्: "#",
  ङ्: "ª\\",
  च्: "Rm",
  छ्: "%",
  ज्: "H",
  झ्: "Ö",
  ञ्: "`\\",
  ट्: "6\\",
  ठ्: "7\\",
  ड्: "8\\", // Generic half-ड (but specific conjuncts like ड्र take precedence)
  ढ्: "9\\",
  ण्: "0\\",
  त्: "Tm",
  थ्: "Y",
  द्: "B",
  ध्: "W",
  न्: "G",
  प्: "Km",
  फ्: "K",
  ब्: "A",
  भ्: "E",
  म्: "D",
  य्: "O",
  र्: "{",
  ल्: "N",
  व्: "J",
  श्: "Z",
  ष्: "I",
  स्: ":",
  ह्: "X",
};

// Build reverse mapping with priority for longer sequences
const PREETI_TO_UNICODE_MAP: Record<string, string> = {};
// First add all single character mappings
Object.entries(UNICODE_TO_PREETI_MAP).forEach(([unicode, preeti]) => {
  if (unicode.length === 1) {
    PREETI_TO_UNICODE_MAP[preeti] = unicode;
  }
});
// Then override with longer sequences
Object.entries(UNICODE_TO_PREETI_MAP).forEach(([unicode, preeti]) => {
  if (unicode.length > 1) {
    PREETI_TO_UNICODE_MAP[preeti] = unicode;
  }
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function isVowel(char: string): boolean {
  return /[aeiouAEIOU]/i.test(char);
}

function isUnicode(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}

function isPreeti(text: string): boolean {
  const preetiChars = /[sfnltudvxyzabekgh\[\]{}\\|]/;
  return preetiChars.test(text) && !isUnicode(text);
}

function isConsonant(char: string): boolean {
  return "कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह".includes(char);
}

// ============================================================================
// MAIN CONVERSION FUNCTIONS
// ============================================================================

/**
 * Convert English/Romanized text to Unicode
 */
export function englishToUnicode(text: string): string {
  if (!text) return "";
  if (isUnicode(text)) return text;

  // Split by word boundaries
  const words = text.split(/(\s+|\n+|[,;:.!?।॥])/);

  const converted = words.map((word) => {
    // Keep whitespace and punctuation
    if (/^[\s,;:.!?।॥]+$/.test(word)) return word;

    // Check exceptions first
    const lowerWord = word.toLowerCase();
    if (EXCEPTIONS[word] || EXCEPTIONS[lowerWord]) {
      return EXCEPTIONS[word] || EXCEPTIONS[lowerWord];
    }

    return convertWordToUnicode(word);
  });

  let result = converted.join("");

  // Convert numbers
  result = result.replace(
    /[0-9]/g,
    (match) =>
      ({
        "0": "०",
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
      }[match] || match)
  );

  // Convert punctuation
  result = result.replace(/\./g, "।");
  result = result.replace(/\।\।/g, "॥");

  return result;
}

/**
 * Convert a single word to Unicode
 */
function convertWordToUnicode(word: string): string {
  let result = "";
  let i = 0;

  while (i < word.length) {
    let matched = false;

    // Try special combinations first (longest match)
    for (let len = 7; len >= 2; len--) {
      if (i + len <= word.length) {
        const chunk = word.substring(i, i + len);
        const lowerChunk = chunk.toLowerCase();

        // Check special combinations
        if (SPECIAL_COMBINATIONS[chunk] || SPECIAL_COMBINATIONS[lowerChunk]) {
          // Append the special conjunct
          result +=
            SPECIAL_COMBINATIONS[chunk] || SPECIAL_COMBINATIONS[lowerChunk];
          i += len;

          // If a vowel sign follows the conjunct, attach its matra
          for (let vLen = 3; vLen >= 1; vLen--) {
            if (i + vLen <= word.length) {
              const vChunk = word.substring(i, i + vLen);
              if (VOWEL_SIGNS.hasOwnProperty(vChunk)) {
                result += VOWEL_SIGNS[vChunk];
                i += vLen;
                break;
              }
            }
          }

          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // Try consonants (1-3 chars)
    for (let len = 3; len >= 1; len--) {
      if (i + len <= word.length) {
        const chunk = word.substring(i, i + len);
        if (CONSONANTS[chunk]) {
          result += CONSONANTS[chunk];
          i += len;

          // Look for vowel after consonant
          let vowelMatched = false;
          for (let vLen = 3; vLen >= 1; vLen--) {
            if (i + vLen <= word.length) {
              const vChunk = word.substring(i, i + vLen);
              if (VOWEL_SIGNS.hasOwnProperty(vChunk)) {
                result += VOWEL_SIGNS[vChunk];
                i += vLen;
                vowelMatched = true;
                break;
              }
            }
          }

          // If no vowel matched and next is consonant, add halant
          if (!vowelMatched && i < word.length) {
            const nextChar = word[i];
            const next2Chars =
              i + 1 < word.length ? word.substring(i, i + 2) : "";
            const next3Chars =
              i + 2 < word.length ? word.substring(i, i + 3) : "";

            // Check if next is a consonant
            if (
              CONSONANTS[next3Chars] ||
              CONSONANTS[next2Chars] ||
              CONSONANTS[nextChar]
            ) {
              result += HALANT;
            }
          }

          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // Try independent vowels
    for (let len = 3; len >= 1; len--) {
      if (i + len <= word.length) {
        const chunk = word.substring(i, i + len);
        if (INDEPENDENT_VOWELS[chunk]) {
          result += INDEPENDENT_VOWELS[chunk];
          i += len;
          matched = true;
          break;
        }
      }
    }

    // Handle anusvara
    if (!matched && word[i] === "m" && i + 1 < word.length) {
      const next = word[i + 1];
      if (!isVowel(next)) {
        result += ANUSVARA;
        i++;
        matched = true;
      }
    }

    // Special chars
    if (!matched) {
      if (word[i] === "M") {
        result += ANUSVARA;
        i++;
        matched = true;
      } else if (word[i] === "H") {
        result += VISARGA;
        i++;
        matched = true;
      }
    }

    // No match, keep as-is
    if (!matched) {
      result += word[i];
      i++;
    }
  }

  return result;
}

/**
 * Convert Unicode to Preeti with smart reordering
 * FIXED: Check longer conjunct sequences before checking single consonants
 */
export function unicodeToPreeti(text: string): string {
  if (!text) return "";

  let result = "";
  let i = 0;

  while (i < text.length) {
    let matched = false;

    // IMPORTANT: Check for complex conjuncts first (longest match)
    // This ensures ड्र is matched as "*" before ड is checked as "8"
    for (let len = 5; len >= 2; len--) {
      if (i + len <= text.length) {
        const chunk = text.substring(i, i + len);
        if (UNICODE_TO_PREETI_MAP[chunk]) {
          result += UNICODE_TO_PREETI_MAP[chunk];
          i += len;
          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // Handle ref-r (र्) specially
    if (i + 2 < text.length && text[i] === "र" && text[i + 1] === HALANT) {
      const nextChar = text[i + 2];
      if (isConsonant(nextChar)) {
        // Check if there's a specific mapping for र् + consonant
        const refConjunct = "र्" + nextChar;
        if (UNICODE_TO_PREETI_MAP[refConjunct]) {
          result += UNICODE_TO_PREETI_MAP[refConjunct];
          i += 3;
          matched = true;
        } else {
          // Use generic ref-r marker
          result += "{";
          i += 2;
          matched = true;
        }
      }
    }

    if (matched) continue;

    // Handle half-consonants
    if (i + 1 < text.length && text[i + 1] === HALANT) {
      const halfChar = text[i] + HALANT;

      // Check for conjunct with next consonant
      if (i + 2 < text.length) {
        const nextChar = text[i + 2];
        const conjunct = text[i] + HALANT + nextChar;

        // Check for specific conjunct mapping first
        if (UNICODE_TO_PREETI_MAP[conjunct]) {
          result += UNICODE_TO_PREETI_MAP[conjunct];
          i += 3;
          matched = true;
        } else if (HALF_CONSONANT_MAP[halfChar]) {
          // Use half-consonant form
          result += HALF_CONSONANT_MAP[halfChar];
          i += 2;
          matched = true;
        }
      } else if (HALF_CONSONANT_MAP[halfChar]) {
        // Half-consonant at end
        result += HALF_CONSONANT_MAP[halfChar];
        i += 2;
        matched = true;
      }
    }

    if (!matched) {
      // ONLY NOW check single character mapping
      // This ensures standalone ड is converted to "8" and not confused with ड्र
      const char = text[i];
      if (UNICODE_TO_PREETI_MAP[char]) {
        result += UNICODE_TO_PREETI_MAP[char];
        i++;
        matched = true;
      }
    }

    if (!matched) {
      result += text[i];
      i++;
    }
  }

  // Post-process for proper Preeti rendering
  result = reorderForPreeti(result);

  return result;
}

/**
 * Reorder characters for proper Preeti display
 */
function reorderForPreeti(text: string): string {
  // Reorder 'ि' matra (Preeti 'l') to appear before consonant
  text = text.replace(/([sfnltudvxyzabekghj346789\/;:0])l/g, "l$1");

  // Handle ref-r placement - it should come before the consonant cluster
  text = text.replace(/([^{])\{/g, "{$1");

  // Handle multiple ref-r in sequence
  text = text.replace(/\{+/g, "{");

  return text;
}

/**
 * Convert Preeti to Unicode
 */
export function preetiToUnicode(text: string): string {
  if (!text) return "";

  // Pre-process: reorder 'i' matra
  text = text.replace(/l([sfnltudvxyzabekgh346789])/g, "$1l");

  // Pre-process: reorder ref-r
  text = text.replace(/\{([^{])/g, "$1{");

  // Sort mappings by length (longest first) to match complex sequences first
  const sortedKeys = Object.keys(PREETI_TO_UNICODE_MAP).sort(
    (a, b) => b.length - a.length
  );

  let result = "";
  let i = 0;

  while (i < text.length) {
    let matched = false;

    // Try longest match first
    for (const key of sortedKeys) {
      if (text.substring(i, i + key.length) === key) {
        result += PREETI_TO_UNICODE_MAP[key];
        i += key.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      result += text[i];
      i++;
    }
  }

  // Post-process: fix any remaining issues
  // Fix double halants
  result = result.replace(/््+/g, HALANT);

  return result;
}

/**
 * Auto-detect and convert
 */
export function autoConvert(text: string): {
  type: "english" | "unicode" | "preeti" | "mixed";
  unicode: string;
  preeti: string;
} {
  if (!text) {
    return { type: "english", unicode: "", preeti: "" };
  }

  const hasUnicode = isUnicode(text);
  const hasEnglish = /[a-zA-Z]/.test(text);
  const looksLikePreeti = isPreeti(text);

  let type: "english" | "unicode" | "preeti" | "mixed";
  let unicode: string;
  let preeti: string;

  if (looksLikePreeti && !hasUnicode && !hasEnglish) {
    type = "preeti";
    unicode = preetiToUnicode(text);
    preeti = text;
  } else if (hasUnicode && !hasEnglish) {
    type = "unicode";
    unicode = text;
    preeti = unicodeToPreeti(text);
  } else if (hasUnicode && hasEnglish) {
    type = "mixed";
    // Convert English parts to Unicode
    let convertedText = "";
    let currentPart = "";
    let inUnicode = false;

    for (let i = 0; i < text.length; i++) {
      if (isUnicode(text[i])) {
        if (currentPart) {
          convertedText += englishToUnicode(currentPart);
          currentPart = "";
        }
        convertedText += text[i];
        inUnicode = true;
      } else {
        if (inUnicode && /[a-zA-Z]/.test(text[i])) {
          currentPart = text[i];
          inUnicode = false;
        } else if (!inUnicode) {
          currentPart += text[i];
        } else {
          convertedText += text[i];
        }
      }
    }

    if (currentPart) {
      convertedText += englishToUnicode(currentPart);
    }

    unicode = convertedText;
    preeti = unicodeToPreeti(convertedText);
  } else {
    type = "english";
    unicode = englishToUnicode(text);
    preeti = unicodeToPreeti(unicode);
  }

  return { type, unicode, preeti };
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  englishToUnicode,
  unicodeToPreeti,
  preetiToUnicode,
  autoConvert,
  isUnicode,
  isPreeti,
};

// Browser support
if (typeof window !== "undefined") {
  (window as any).NepaliConverter = {
    englishToUnicode,
    unicodeToPreeti,
    preetiToUnicode,
    autoConvert,
  };
}
