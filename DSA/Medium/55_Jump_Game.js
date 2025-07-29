/**
 * **canJump Function**
 *
 * Determines if you can reach the last index starting from the first index,
 * where each element represents the **maximum jump length** from that position.
 *
 * ### Logic:
 * - Start from the **end** of the array and work backwards.
 * - Set a `target` as the last index.
 * - If `i + nums[i] >= target`, then we can reach `target` from index `i`.
 *   So update `target = i`.
 * - If we can eventually move `target` to `0`, it means we can jump to the end from the start.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array where each element represents max jump length at that position.
 *
 * ### Returns:
 * - `boolean` — `true` if you can reach the last index, otherwise `false`.
 *
 * ### Example:
 * ```js
 * canJump([2,3,1,1,4]); // Output: true
 * canJump([3,2,1,0,4]); // Output: false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function canJump(nums) {
  let target = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }

  return target === 0;
}

let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));

nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
