/**
 * **longestPalindrome Function**
 *
 * Finds the **longest palindromic substring** within the given string.
 *
 * ### Logic:
 * - Iterates through each character in the string, treating each index as the center of a potential palindrome.
 * - Expands around the center for both:
 *   - **Odd-length palindromes** (centered at one character)
 *   - **Even-length palindromes** (centered between two characters)
 * - Uses a helper function `isPalindrome` to expand around the center.
 * - Updates the `longest` palindrome found if a longer one is discovered.
 * - Time Complexity: O(n²)
 * - Space Complexity: O(1) (excluding the result substring)
 *
 * ### Params:
 * - `s` (`string`) - The input string to search within.
 *
 * ### Returns:
 * - `string` - The **longest palindromic substring** found in `s`.
 *
 * ### Example:
 * ```js
 * longestPalindrome("babad"); // returns "bab" or "aba"
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function longestPalindrome(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let odd = isPalindrome(s, i, i);
    let even = isPalindrome(s, i, i + 1);

    let longestPal = odd.length > even.length ? odd : even;

    if (longestPal.length > longest.length) longest = longestPal;
  }

  return longest;
}

/**
 * **isPalindrome Helper Function**
 *
 * Expands around a given center and returns the **longest palindromic substring**.
 *
 * ### Logic:
 * - Starts with two pointers (`left` and `right`) and expands outward as long as characters match.
 * - Stops when characters differ or boundaries are exceeded.
 *
 * ### Params:
 * - `s` (`string`) - The full string to search within.
 * - `left` (`number`) - Starting left index for expansion.
 * - `right` (`number`) - Starting right index for expansion.
 *
 * ### Returns:
 * - `string` - The palindromic substring found between `left` and `right`.
 *
 * ### Example:
 * ```js
 * isPalindrome("babad", 1, 1); // returns "aba"
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPalindrome(s, left, right) {
  while (s[left] === s[right] && left >= 0 && right < s.length) {
    right++;
    left--;
  }

  return s.slice(left + 1, right);
}

let s = "babad";

console.log(longestPalindrome(s));
