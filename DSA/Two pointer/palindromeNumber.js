/**
 * **isPalindrome Function**
 *
 * Checks whether a given **integer** is a **palindrome** (reads the same forward and backward).
 *
 * ### Logic:
 * - Converts the number to a string.
 * - Uses the two-pointer technique to compare characters from both ends moving inward.
 * - Returns `false` on first mismatch; otherwise returns `true` if all match.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n) due to string conversion.
 *
 * ### Params:
 * - `x` (`number`) — The integer to check.
 *
 * ### Returns:
 * - `boolean` — `true` if the number is a palindrome, `false` otherwise.
 *
 * ### Example:
 * ```js
 * isPalindrome(121);   // true
 * isPalindrome(-121);  // false
 * isPalindrome(10);    // false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPalindrome(x) {
  if (x < 0) return false;
  let str = String(x);
  let left = 0;
  let right = str.length - 1;
  while (right > left) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

let num = 121;

console.log(isPalindrome(num));
