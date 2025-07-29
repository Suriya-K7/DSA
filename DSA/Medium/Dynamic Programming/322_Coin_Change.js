/**
 * **coinChange**
 *
 * Solves the **Minimum Coin Change** problem using **Bottom-Up Dynamic Programming**.
 *
 * ### Logic:
 * - Initialize a `dp` array of size `amount + 1` with `Infinity`.
 * - Set `dp[0] = 0` (base case: 0 coins to make amount 0).
 * - For each amount `i` from `1` to `amount`, iterate through all coin denominations:
 *   - If `i - coin >= 0`, update `dp[i] = min(dp[i], 1 + dp[i - coin])`
 * - Finally, return `dp[amount]` if it's not `Infinity`, otherwise return `-1`.
 *
 * ### Time Complexity: O(amount × coins.length)
 * ### Space Complexity: O(amount)
 *
 * ### Params:
 * - `coins` (`number[]`) — List of coin denominations.
 * - `amount` (`number`) — Target amount to make using the coins.
 *
 * ### Returns:
 * - `number` — Minimum number of coins needed to make up the amount or `-1` if not possible.
 *
 * ### Example:
 * ```js
 * coinChange([1, 2, 5], 11); // Output: 3 (5 + 5 + 1)
 * coinChange([2], 3);        // Output: -1
 * coinChange([1], 0);        // Output: 0
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));

coins = [2];
amount = 3;
console.log(coinChange(coins, amount));

coins = [1];
amount = 0;
console.log(coinChange(coins, amount));
