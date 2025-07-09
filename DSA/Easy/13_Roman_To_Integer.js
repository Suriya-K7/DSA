let romanSymbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * **romanToInt Function**
 *
 * Converts a Roman numeral string into its corresponding **integer** value.
 *
 * ### Roman Numerals Rules:
 * - If a symbol is **followed by a larger value**, it is subtracted (e.g., IV = 4).
 * - Otherwise, it's added (e.g., VI = 6).
 *
 * ### Logic:
 * - Create a mapping of Roman characters to their integer values.
 * - Iterate through the string:
 *   - If current symbol < next symbol, subtract current from total.
 *   - Otherwise, add current to total.
 *
 * ### Time Complexity: O(n) — `n` is the length of the input string.
 * ### Space Complexity: O(1) — constant extra space for the symbol map.
 *
 * ### Params:
 * - `s` (`string`) — Roman numeral string composed of characters: I, V, X, L, C, D, M.
 *
 * ### Returns:
 * - `number` — Integer equivalent of the given Roman numeral.
 *
 * ### Example:
 * ```js
 * romanToInt("III");      // 3
 * romanToInt("LVIII");    // 58  (L=50, V=5, III=3)
 * romanToInt("MCMXCIV");  // 1994 (M=1000, CM=900, XC=90, IV=4)
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function romanToInt(s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanSymbol[s[i]] < romanSymbol[s[i + 1]]) {
      total -= romanSymbol[s[i]];
    } else {
      total += romanSymbol[s[i]];
    }
  }

  return total;
}

/**
 * **romanToIntOptimized Function**
 *
 * Converts a Roman numeral string to its corresponding **integer** value using an optimized approach.
 *
 * ### Optimization:
 * - Handles **subtractive notation** (e.g., IV = 4) by combining two-character pairs at once.
 * - If the current symbol is smaller than the next, add the difference and **skip the next character**.
 * - Otherwise, add the current symbol value as usual.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `s` (`string`) — A valid Roman numeral string (e.g., "IX", "MCMXCIV").
 *
 * ### Returns:
 * - `number` — Integer equivalent of the Roman numeral.
 *
 * ### Example:
 * ```js
 * romanToIntOptimized("III");      // 3
 * romanToIntOptimized("LVIII");    // 58
 * romanToIntOptimized("MCMXCIV");  // 1994
 * ```
 *
 * @note This version reduces unnecessary additions and subtractions by resolving compound numerals in a single step.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function romanToIntOptimized(s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanSymbol[s[i]] < romanSymbol[s[i + 1]]) {
      total += romanSymbol[s[i + 1]] - romanSymbol[s[i]];
      i++;
    } else {
      total += romanSymbol[s[i]];
    }
  }

  return total;
}

let s = "III";

console.log("romanToInt -", romanToInt(s));
console.log("romanToIntOptimized -", romanToIntOptimized(s));

s = "LVIII";

console.log("romanToInt -", romanToInt(s));
console.log("romanToIntOptimized -", romanToIntOptimized(s));

s = "MCMXCIV";

console.log("romanToInt -", romanToInt(s));
console.log("romanToIntOptimized -", romanToIntOptimized(s));
