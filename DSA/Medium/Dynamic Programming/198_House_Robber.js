/**
 * **rob Function**
 *
 * Solves the **House Robber Problem** using **Dynamic Programming**.
 * A robber can't rob two adjacent houses. Find the maximum amount that can be robbed.
 *
 * ### Logic:
 * - Use a DP array `dp[i]` to represent the **maximum amount** robbed from the first `i+1` houses.
 * - At each house `i`, choose between:
 *   - Robbing current house `i` and adding it to `dp[i-2]`.
 *   - Skipping current house and taking `dp[i-1]`.
 * - Base Cases:
 *   - `dp[0] = nums[0]`
 *   - `dp[1] = max(nums[0], nums[1])`
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array representing the amount of money at each house.
 *
 * ### Returns:
 * - `number` — Maximum amount that can be robbed without alerting police.
 *
 * ### Example:
 * ```js
 * rob([1, 2, 3, 1]); // Output: 4 (rob houses 1 and 3)
 * rob([2, 1, 1, 2]); // Output: 4 (rob houses 1 and 4)
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
}

let nums = [1, 2, 3, 1];
console.log(rob(nums));

nums = [2, 1, 1, 2];
console.log(rob(nums));
