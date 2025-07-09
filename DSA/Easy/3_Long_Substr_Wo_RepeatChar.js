/**
 * **lengthOfLongestSubstring Function**
 *
 * Finds the **length of the longest substring** without repeating characters in a given string.
 *
 * ### Logic:
 * - Uses the **sliding window** technique with two pointers (`left` and `right`).
 * - Maintains a `Set` to track unique characters in the current window.
 * - If the character at `right` is not in the set, it expands the window and updates `longest`.
 * - If a duplicate is found, it shrinks the window from the left until the duplicate is removed.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n) for the `Set`
 *
 * ### Params:
 * - `s` (`string`) - The input string to evaluate.
 *
 * ### Returns:
 * - `number` - The **length** of the longest substring without repeating characters.
 *
 * ### Example:
 * ```js
 * lengthOfLongestSubstring("abcabcbb"); // returns 3 ("abc")
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function lengthOfLongestSubstring(s) {
  let left = (right = longest = 0);
  let str = new Set();

  while (right < s.length) {
    if (!str.has(s[right])) {
      str.add(s[right]);
      right++;
      longest = Math.max(longest, str.size);
    } else {
      str.delete(s[left]);
      left++;
    }
  }

  return longest;
}

let s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
