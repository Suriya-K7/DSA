/**
 * **findMin Function**
 *
 * Finds the minimum element in a **rotated sorted array** without duplicates.
 * Uses **binary search** for an efficient O(log n) solution.
 *
 * ### Logic:
 * - If the middle element is greater than the rightmost, the minimum is in the right half.
 * - Otherwise, it's in the left half (including mid).
 * - Continues narrowing down until left == right, which points to the minimum.
 *
 * ### Time Complexity: O(log n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * @param {number[]} nums - A rotated sorted array with no duplicate values.
 *
 * ### Returns:
 * @returns {number} - The minimum element in the array.
 *
 * ### Example:
 * ```js
 * findMin([3, 4, 5, 1, 2]); // 1
 * findMin([4, 5, 6, 7, 0, 1, 2]); // 0
 * findMin([11, 13, 15, 17]); // 11
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[right] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));

nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));

nums = [11, 13, 15, 17];
console.log(findMin(nums));
