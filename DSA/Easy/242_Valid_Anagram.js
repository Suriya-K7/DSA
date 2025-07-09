/**
 * **isAnagram Function**
 *
 * Determines whether two strings `s` and `t` are **anagrams** of each other using character frequency mapping.
 *
 * ### Logic:
 * - First, checks if the lengths of `s` and `t` are the same. If not, they can't be anagrams.
 * - Builds a frequency map (`hashed`) for characters in `s`.
 * - Iterates through `t` and decrements the frequency.
 * - If any character in `t` doesn't match frequency in `hashed`, return `false`.
 * - Returns `true` only if all character counts match.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1) (bounded by character set)
 *
 * ### Params:
 * - `s` (`string`) - First input string.
 * - `t` (`string`) - Second input string.
 *
 * ### Returns:
 * - `boolean` - `true` if `s` and `t` are anagrams, `false` otherwise.
 *
 * ### Example:
 * ```js
 * isAnagram("anagram", "nagaram"); // returns true
 * isAnagram("rat", "car");         // returns false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let hashed = s.split("").reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  for (let i = 0; i < t.length; i++) {
    if (hashed[t[i]]) {
      hashed[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * **isAnagramBruteForce Function**
 *
 * Checks if two strings `s` and `t` are **anagrams** using a **brute-force sort and compare** method.
 *
 * ### Logic:
 * - First, compares the lengths of the strings.
 * - Sorts both strings alphabetically.
 * - Compares the sorted strings for equality.
 * - Time Complexity: O(n log n) due to sorting
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `s` (`string`) - First input string.
 * - `t` (`string`) - Second input string.
 *
 * ### Returns:
 * - `boolean` - `true` if both strings are anagrams, `false` otherwise.
 *
 * ### Example:
 * ```js
 * isAnagramBruteForce("listen", "silent"); // returns true
 * isAnagramBruteForce("hello", "world");   // returns false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isAnagramBruteForce(s, t) {
  if (s.length !== t.length) return false;
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
}

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));
console.log(isAnagramBruteForce(s, t));
