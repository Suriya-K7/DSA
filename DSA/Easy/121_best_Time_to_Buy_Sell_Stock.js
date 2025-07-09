/**
 * **maxProfit Function**
 *
 * Calculates the **maximum profit** achievable from a single buy-sell transaction
 * given an array of daily stock prices. The buy must occur before the sell.
 *
 * ### Logic:
 * - Tracks the **minimum price** seen so far (`curMinProfit`).
 * - At each iteration, computes potential **profit** if sold at the current price.
 * - Updates the **maximum profit** (`curMaxProfit`) accordingly.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 *
 * ### Params:
 * - `prices` (`number[]`) - An array where each element represents the stock price on a given day.
 *
 * ### Returns:
 * - `number` - The **maximum profit** possible. Returns `0` if no profit can be made.
 *
 * ### Example:
 * ```js
 * maxProfit([7, 1, 5, 3, 6, 4]); // returns 5 (Buy at 1, Sell at 6)
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function maxProfit(prices) {
  let curMinProfit = prices[0];
  let curMaxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - curMinProfit;
    curMinProfit = Math.min(curMinProfit, prices[i]);
    curMaxProfit = Math.max(curMaxProfit, profit);
  }
  return curMaxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
