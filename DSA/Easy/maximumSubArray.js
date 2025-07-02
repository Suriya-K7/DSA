/**
 * **maxSubArray Function**
 *
 * Implements **Kadane's Algorithm** to find the **maximum sum of a contiguous subarray**
 * within a given integer array.
 *
 * ### Logic:
 * - Uses two variables:
 *   - `curMax`: Tracks the current maximum subarray sum ending at the current index.
 *   - `updatedMax`: Tracks the overall maximum subarray sum found so far.
 * - At each step:
 *   - Either start a new subarray from the current number or extend the previous subarray.
 *   - Update the global max accordingly.
 * - Time Complexity: O(n)
 * - Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) - An array of integers, both positive and negative.
 *
 * ### Returns:
 * - `number` - The **maximum sum** of any contiguous subarray.
 *
 * ### Example:
 * ```js
 * maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // returns 6
 * // Subarray: [4, -1, 2, 1]
 *
 * maxSubArray([1]); // returns 1
 *
 * maxSubArray([5,4,-1,7,8]); // returns 23
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function maxSubArray(nums) {
  let curMax = nums[0];
  let updatedMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    updatedMax = Math.max(curMax, updatedMax);
  }

  return updatedMax;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
