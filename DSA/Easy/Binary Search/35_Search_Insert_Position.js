/**
 * **searchInsert Function**
 *
 * Given a sorted array and a target value, returns the index if the target is found.
 * If not, returns the **index where it would be inserted** in order.
 *
 * ### Logic:
 * - Implements **binary search** to efficiently find the target or insert position.
 * - If target is found at `mid`, return `mid`.
 * - If target is less than `mid`, discard the right half.
 * - If greater, discard the left half.
 * - If not found, `left` will be pointing to the correct insert index.
 *
 * ### Time Complexity: O(log n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — A sorted array of distinct integers.
 * - `target` (`number`) — The value to search or insert.
 *
 * ### Returns:
 * - `number` — Index of the target if found; otherwise, the insert position.
 *
 * ### Example:
 * ```js
 * searchInsert([1, 3, 5, 6], 5); // 2
 * searchInsert([1, 3, 5, 6], 2); // 1
 * searchInsert([1, 3, 5, 6], 7); // 4
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

let nums = [1, 3, 5, 6];
let target = 5;

console.log(searchInsert(nums, target));

nums = [1, 3, 5, 6];
target = 2;

console.log(searchInsert(nums, target));

nums = [1, 3, 5, 6];
target = 7;

console.log(searchInsert(nums, target));
