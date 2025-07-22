/**
 * **isPowerOfTwoUsingBitWise Function**
 *
 * Determines if a given number `n` is a power of two using bitwise operations.
 *
 * ### Logic:
 * - A number that is a power of two has only one bit set in its binary form.
 * - `(n & (n - 1))` will be `0` only when `n` is a power of two.
 *
 * ### Time Complexity: O(1)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `n` (`number`) — The integer to check.
 *
 * ### Returns:
 * - `boolean` — `true` if `n` is a power of two, else `false`.
 *
 * ### Example:
 * ```js
 * isPowerOfTwoUsingBitWise(16); // true
 * isPowerOfTwoUsingBitWise(3);  // false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPowerOfTwoUsingBitWise(n) {
  if (n <= 0) return false;
  n = n & (n - 1);
  return n === 0;
}

/**
 * **isPowerOfTwo Function**
 *
 * Checks if a number `n` is a power of two using division.
 *
 * ### Logic:
 * - Divide `n` by 2 continuously.
 * - If you reach 1 without any remainder in the process, `n` is a power of two.
 *
 * ### Time Complexity: O(log n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `n` (`number`) — The integer to check.
 *
 * ### Returns:
 * - `boolean` — `true` if `n` is a power of two, else `false`.
 *
 * ### Example:
 * ```js
 * isPowerOfTwo(16); // true
 * isPowerOfTwo(3);  // false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n % 2 !== 0) return false;

  while (n > 1) {
    n = n / 2;
  }

  return n === 1 ? true : false;
}

let n = 16;

console.log("isPowerOfTwoUsingBitWise - ", isPowerOfTwoUsingBitWise(n));
console.log("isPowerOfTwo - ", isPowerOfTwo(n));

n = 3;
console.log("isPowerOfTwoUsingBitWise - ", isPowerOfTwoUsingBitWise(n));
console.log("isPowerOfTwo - ", isPowerOfTwo(n));
