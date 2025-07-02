/**
 * **isPalindrome Function**
 *
 * Determines if a given string is a **valid palindrome**, ignoring non-alphanumeric characters and case.
 *
 * ### Logic:
 * - Calls `cleanUp()` to remove unwanted characters and convert to lowercase.
 * - Calls `isPal()` to check if the cleaned string is a palindrome.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `s` (`string`) - The input string to check.
 *
 * ### Returns:
 * - `boolean` - `true` if the string is a valid palindrome, `false` otherwise.
 *
 * ### Example:
 * ```js
 * isPalindrome("A man, a plan, a canal: Panama"); // returns true
 * isPalindrome("race a car");                    // returns false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPalindrome(s) {
  return isPal(cleanUp(s));
}

function cleanUp(s) {
  let char = "abcdefghijlkmnopqrstuvwxyz1234567890";
  let str = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    if (char.includes(letter)) {
      str += letter;
    }
  }
  return str;
}

/**
 * **isPal Function**
 *
 * Checks whether a cleaned string is a **palindrome** using the two-pointer technique.
 *
 * ### Logic:
 * - Compares characters from both ends moving toward the center.
 * - Returns `false` if any mismatch is found.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 *
 * ### Params:
 * - `s` (`string`) - A cleaned, lowercase alphanumeric string.
 *
 * ### Returns:
 * - `boolean` - `true` if the string is a palindrome, `false` otherwise.
 *
 * ### Example:
 * ```js
 * isPal("racecar"); // returns true
 * isPal("hello");   // returns false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPal(s) {
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
