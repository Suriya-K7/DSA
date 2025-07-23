/**
 * **isPowerOfFour Function**
 *
 * Determines whether a given integer `n` is a power of 4 using recursion.
 *
 * ### Logic:
 * - Any number `n` that is a power of 4 can be written as `4^k` for some integer `k ≥ 0`.
 * - The function recursively divides `n` by 4 and checks if the result eventually becomes 1.
 * - Base cases:
 *   - If `n === 1`, return `true` (4^0).
 *   - If `n <= 0` or not divisible by 4, return `false`.
 *
 * ### Time Complexity: O(log₄ n)
 * ### Space Complexity: O(log₄ n) — due to recursion stack
 *
 * ### Params:
 * - `n` (`number`) — The number to check.
 *
 * ### Returns:
 * - `boolean` — Returns `true` if `n` is a power of 4, otherwise `false`.
 *
 * ### Example:
 * ```js
 * isPowerOfFour(16); // true
 * isPowerOfFour(5);  // false
 * isPowerOfFour(1);  // true
 * isPowerOfFour(64); // true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isPowerOfFour(n) {
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % 4 !== 0) return false;

  return isPowerOfFour(n / 4);
}

let n = 16;

console.log(isPowerOfFour(n));

n = 5;

console.log(isPowerOfFour(n));
