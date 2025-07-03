/**
 * **validPalindrome Function**
 *
 * Determines whether a given string can be a **palindrome** by removing **at most one character**.
 *
 * ### Logic:
 * - Uses two pointers (`left`, `right`) to compare characters from both ends.
 * - If a mismatch is found, checks if skipping **either the left or right character** makes the rest a palindrome.
 * - Leverages the `isPal()` helper to verify these substrings.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `s` (`string`) — The input string to validate.
 *
 * ### Returns:
 * - `boolean` — `true` if the string can be a palindrome after removing at most one character, else `false`.
 *
 * ### Example:
 * ```js
 * validPalindrome("abca");  // true (remove 'b' or 'c')
 * validPalindrome("racecar");  // true
 * validPalindrome("abac");  // false
 * ```
 *
 * @note This function is useful in problems involving **tolerant palindrome validation** (like Leetcode #680).
 *
 * @see `isPal()` — Helper function that checks if a substring is a palindrome using two-pointer method.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPal(s, left + 1, right) || isPal(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

/**
 * **isPal Function**
 *
 * Checks if a given substring (defined by `left` and `right` pointers) is a **valid palindrome**.
 *
 * ### Params:
 * - `s` (`string`) — The full input string.
 * - `left` (`number`) — Starting index of the substring.
 * - `right` (`number`) — Ending index of the substring.
 *
 * ### Returns:
 * - `boolean` — `true` if the substring `s[left...right]` is a palindrome, else `false`.
 *
 * @internal Used by `validPalindrome()` for substring validation.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPal(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
let s = "abc";
let a = "abac";

console.log(validPalindrome(s));
console.log(validPalindrome(a));
