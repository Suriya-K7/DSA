/**
 * **isPowerOfThree Function**
 *
 * Determines whether a given integer `n` is a power of 3.
 *
 * ### Logic:
 * - Start with a number `n`.
 * - Continuously divide by 3 while `n` is greater than 1.
 * - If `n` eventually equals 1, then it is a power of 3.
 * - Edge cases: any `n <= 0` or not divisible completely by 3 will return false.
 *
 * ### Time Complexity: O(log₃ n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `n` (`number`) — The integer to check.
 *
 * ### Returns:
 * - `boolean` — `true` if `n` is a power of three, otherwise `false`.
 *
 * ### Example:
 * ```js
 * isPowerOfThree(27); // true
 * isPowerOfThree(0);  // false
 * isPowerOfThree(-1); // false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPowerOfThree(n) {
  if (n <= 0) return false;

  while (n > 1) {
    n = n / 3;
  }

  return n === 1;
}

/**
 * **isPowerOfThreeWithoutRecursion Function**
 *
 * Checks whether a given number is a power of 3 **without using recursion or loops**.
 *
 * ### Logic:
 * - The highest power of 3 that fits within a 32-bit signed integer is 3¹⁹ = 1162261467.
 * - If `n` is a power of 3, then it must divide 1162261467 exactly.
 * - Hence, `n` is a power of 3 **⇔** `1162261467 % n === 0`
 *
 * ### Time Complexity: O(1)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `n` (`number`) — The integer to test.
 *
 * ### Returns:
 * - `boolean` — `true` if `n` is a power of 3, otherwise `false`.
 *
 * ### Example:
 * ```js
 * isPowerOfThreeWithoutRecursion(27);    // true
 * isPowerOfThreeWithoutRecursion(0);     // false
 * isPowerOfThreeWithoutRecursion(45);    // false
 * isPowerOfThreeWithoutRecursion(1);     // true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPowerOfThreeWithooutRecursion(n) {
  return n > 0 && 3 ** 19 % n === 0;
}

let n = 27;
console.log(isPowerOfThree(n));
console.log(isPowerOfThreeWithooutRecursion(n));

n = -1;
console.log(isPowerOfThree(n));
console.log(isPowerOfThreeWithooutRecursion(n));

n = 0;
console.log(isPowerOfThree(n));
console.log(isPowerOfThreeWithooutRecursion(n));
