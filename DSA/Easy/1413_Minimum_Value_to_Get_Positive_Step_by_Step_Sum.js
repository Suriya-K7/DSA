/**
 * **minStartValue Function**
 *
 * Finds the **minimum positive starting value** such that the cumulative sum of the array `nums`
 * (starting from this value) **never drops below 1** at any point.
 *
 * ### Logic:
 * - Iterate through `nums` while maintaining a running sum (`count`).
 * - Track the **minimum cumulative sum** reached.
 * - If this minimum is already ≥ 1, return 1.
 * - Otherwise, calculate the required starting value as `1 - minSum`.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array of integers representing the change in value at each step.
 *
 * ### Returns:
 * - `number` — The minimum starting value needed to keep the running total ≥ 1 throughout.
 *
 * ### Example:
 * ```js
 * minStartValue([-3, 2, -3, 4, 2]); // 5
 * // Step-by-step: [5,-3] → 2 → -1 → 3 → 7 → always ≥ 1
 *
 * minStartValue([1, 2]); // 1
 * // No negative dips, so start at 1
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function minStartValue(nums) {
  let minSum = 1;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = count + nums[i];
    minSum = Math.min(minSum, count);
  }

  if (minSum > 0) return minSum;
  return -1 * minSum + 1;
}

let nums = [-3, 2, -3, 4, 2];

console.log(minStartValue(nums));

nums = [1, 2];
console.log(minStartValue(nums));
