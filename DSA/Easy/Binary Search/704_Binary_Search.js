/**
 * **search Function**
 *
 * Performs **binary search** on a **sorted array** to find the index of a target value.
 * Assumes the input array is sorted in **ascending order**.
 *
 * ### Logic:
 * - Use two pointers: `left` and `right` to define the search window.
 * - Calculate the `mid` index each iteration.
 * - If the middle element equals the `target`, return `mid`.
 * - If `target` is smaller than `mid`, search the **left half**.
 * - If `target` is larger, search the **right half**.
 * - If no match is found, return `-1`.
 *
 * ### Time Complexity: O(log n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — A sorted array of integers (ascending).
 * - `target` (`number`) — The value to search for.
 *
 * ### Returns:
 * - `number` — The index of the target if found; otherwise `-1`.
 *
 * ### Example:
 * ```js
 * search([-1, 0, 3, 5, 9, 12], 9);  // 4
 * search([-1, 0, 3, 5, 9, 12], 2);  // -1
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function search(nums, target) {
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
  return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(search(nums, target));

nums = [-1, 0, 3, 5, 9, 12];
target = 2;

console.log(search(nums, target));
