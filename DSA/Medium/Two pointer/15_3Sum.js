/**
 * **threeSum Function**
 *
 * Finds all unique triplets in the array which sum to zero.
 *
 * ### Logic:
 * - First, sort the array to use the two-pointer approach.
 * - Iterate with index `i`, fixing one number and using two pointers `j` and `k` to find valid pairs.
 * - Skip duplicates for `i`, `j`, and `k` to avoid repeated triplets.
 *
 * ### Time Complexity: O(n^2)
 * ### Space Complexity: O(1) (excluding the output array)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array of integers.
 *
 * ### Returns:
 * - `number[][]` — Array of unique triplets `[a, b, c]` such that `a + b + c === 0`.
 *
 * ### Example:
 * ```js
 * threeSum([-1, 0, 1, 2, -1, -4]);
 * // Output: [[-1, -1, 2], [-1, 0, 1]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function threeSum(nums) {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));

nums = [0, 1, 1];
console.log(threeSum(nums));

nums = [0, 0, 0];
console.log(threeSum(nums));
