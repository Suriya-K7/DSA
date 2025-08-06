/**
 * **search Function**
 *
 * Searches for a target in a rotated sorted array using binary search.
 * Returns the index of the target if found, otherwise -1.
 *
 * ### Logic:
 * - Perform binary search while adjusting for rotation.
 * - Check if the right half is sorted:
 *   - If `target` lies within this sorted half, move `left` forward.
 *   - Else, move `right` backward.
 * - Else, the left half is sorted:
 *   - If `target` lies within this sorted half, move `right` backward.
 *   - Else, move `left` forward.
 *
 * ### Time Complexity: O(log n)
 * - Efficient binary search in rotated array.
 *
 * ### Space Complexity: O(1)
 * - Constant extra space used.
 *
 * ### Params:
 * - `nums` (`number[]`) — Rotated sorted array.
 * - `target` (`number`) — Element to search for.
 *
 * ### Returns:
 * - `number` — Index of `target` if found; otherwise, `-1`.
 *
 * ### Example:
 * ```js
 * search([4,5,6,7,0,1,2], 0); // Output: 4
 * search([4,5,6,7,0,1,2], 3); // Output: -1
 * search([3,5,1], 3);         // Output: 0
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;

    if (nums[right] > nums[mid]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

console.log(search(nums, target));

nums = [4, 5, 6, 7, 0, 1, 2];
target = 3;
console.log(search(nums, target));
console.log(search([3, 5, 1], 3));
