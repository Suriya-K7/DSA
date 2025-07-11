/**
 * **countBits Function**
 *
 * Returns an array representing the number of **1s (set bits)** in the binary representation of each number from `0` to `n`.
 *
 * ### Logic:
 * - Uses **dynamic programming** based on powers of 2.
 * - Initialize:
 *   - `dp[0] = 0`
 *   - `dp[1] = 1` (if applicable)
 * - Let `offset` represent the most recent power of 2 ≤ `i`.
 * - For each `i`:
 *   - If `i` is a power of 2: update `offset = i`, and `dp[i] = 1`.
 *   - Otherwise: `dp[i] = 1 + dp[i - offset]`
 *     - This works because `i - offset` removes the leading `1` bit from `i`.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * ### Params:
 * - `n` (`number`) — The non-negative integer up to which to count bits.
 *
 * ### Returns:
 * - `number[]` — Array where each index `i` contains the number of set bits in binary representation of `i`.
 *
 * ### Example:
 * ```js
 * countBits(5); // [0, 1, 1, 2, 1, 2]
 * // Explanation:
 * // 0 => 0 → 0 set bits
 * // 1 => 1 → 1 set bit
 * // 2 => 10 → 1 set bit
 * // 3 => 11 → 2 set bits
 * // 4 => 100 → 1 set bit
 * // 5 => 101 → 2 set bits
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function countBits(n) {
  let dp = [];
  if (n >= 0) dp.push(0);
  if (n >= 1) dp.push(1);
  let offset = 1;

  for (let i = 2; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i;
      dp.push(dp[offset - i] + 1);
    } else {
      dp.push(dp[i - offset] + 1);
    }
  }

  return dp;
}

console.log(countBits(1));
console.log(countBits(2));
console.log(countBits(3));
console.log(countBits(4));
console.log(countBits(5));
