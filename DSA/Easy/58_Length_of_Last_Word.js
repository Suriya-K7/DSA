/**
 * **lengthOfLastWord Function**
 *
 * Returns the length of the last word in a given string. A word is defined as a maximal
 * substring consisting of non-space characters only.
 *
 * ### Logic:
 * - Traverse from the end of the string.
 * - Skip trailing spaces and start counting characters until a space is encountered again.
 * - Return the character count.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `s` (`string`) — A string containing words and spaces.
 *
 * ### Returns:
 * - `number` — Length of the last word in the string.
 *
 * ### Example:
 * ```js
 * lengthOfLastWord("Hello World"); // 5
 * lengthOfLastWord("   fly me   to   the moon  "); // 4
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function lengthOfLastWord(s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && count > 0) {
      return count;
    } else if (s[i] !== " ") {
      count++;
    }
  }

  return count;
}

/**
 * **lengthOfLastWordBruteForce Function**
 *
 * Brute-force approach to find the length of the last word in a string.
 * Trims trailing spaces and splits the string into words, then returns the length of the last one.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n) — due to string splitting and array storage.
 *
 * ### Params:
 * - `s` (`string`) — A string containing words and spaces.
 *
 * ### Returns:
 * - `number` — Length of the last word in the string.
 *
 * ### Example:
 * ```js
 * lengthOfLastWordBruteForce("Hello World"); // 5
 * lengthOfLastWordBruteForce("   fly me   to   the moon  "); // 4
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function lengthOfLastWordBruteForce(s) {
  let trimmed = s.trim();

  trimmed = trimmed.split(" ");

  return trimmed[trimmed.length - 1].length;
}

let s = "Hello World";

console.log("lengthOfLastWord -", lengthOfLastWord(s));
console.log("lengthOfLastWordBruteForce -", lengthOfLastWordBruteForce(s));

s = "   fly me   to   the moon  ";

console.log("lengthOfLastWord -", lengthOfLastWord(s));
console.log("lengthOfLastWordBruteForce -", lengthOfLastWordBruteForce(s));
