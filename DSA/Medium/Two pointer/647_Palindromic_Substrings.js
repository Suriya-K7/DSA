/**
 * **countSubstrings Function (Brute Force)**
 *
 * Counts all palindromic substrings in a string using brute-force checking.
 *
 * ### Logic:
 * - Iterate over all possible substrings.
 * - For each substring, check if it is a palindrome.
 * - Use a helper `isPal()` function for palindrome check.
 *
 * ### Time Complexity: O(n³)
 * - Generating all substrings: O(n²)
 * - Checking palindrome: O(n)
 *
 * ### Space Complexity: O(n) for slice operation (temporary substrings)
 *
 * ### Params:
 * - `s` (`string`) — Input string to check.
 *
 * ### Returns:
 * - `number` — Total count of palindromic substrings.
 *
 * ### Example:
 * ```js
 * countSubstrings("abc"); // Output: 3
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPal(s.slice(i, j + 1))) {
        count++;
      }
    }
  }
  return count;
}

/**
 * **countSubstringsOptimistic Function (Expand Around Center)**
 *
 * Counts all palindromic substrings in a string by expanding around centers.
 *
 * ### Logic:
 * - A palindrome mirrors around its center.
 * - There are `2n - 1` centers (odd and even length).
 * - Expand outward from each center and count valid palindromes.
 *
 * ### Time Complexity: O(n²)
 * - Each center expansion may go up to O(n).
 *
 * ### Space Complexity: O(1)
 * - No extra space used except counters.
 *
 * ### Params:
 * - `s` (`string`) — Input string to check.
 *
 * ### Returns:
 * - `number` — Total count of palindromic substrings.
 *
 * ### Example:
 * ```js
 * countSubstringsOptimistic("aaa"); // Output: 6
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function countSubstringsOptimistic(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    isPalCheck(left, right);
    isPalCheck(left, right + 1);
  }

  function isPalCheck(left, right) {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  return count;
}

function isPal(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

let s = "abc";

console.log(countSubstrings(s));
console.log(countSubstringsOptimistic(s));

s = "aaa";

console.log(countSubstrings(s));
console.log(countSubstringsOptimistic(s));
