/**
 * **twoSum Function**
 *
 * Finds two numbers in a sorted array that add up to the target sum,
 * and returns their **1-based indices**.
 *
 * ### Logic:
 * 1. Initialize two pointers: `left` (start) and `right` (end).
 * 2. While `left < right`:
 *    - If sum equals target → return `[left+1, right+1]`.
 *    - If sum is less than target → move `left` pointer forward to increase sum.
 *    - If sum is greater than target → move `right` pointer backward to decrease sum.
 *
 * ### Time Complexity: O(n)
 * - Each element is visited at most once by either pointer.
 *
 * ### Space Complexity: O(1)
 * - No extra data structures used.
 *
 * ### Params:
 * - `numbers` (`number[]`) — Sorted array of integers.
 * - `target` (`number`) — Target sum.
 *
 * ### Returns:
 * - `number[]` — Indices (1-based) of the two numbers that add to target.
 *
 * ### Example:
 * ```js
 * twoSum([2,7,11,15], 9);
 * // Output: [1, 2]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[right] + numbers[left] < target) {
      left++;
    } else {
      right--;
    }
  }
}

let numbers = [2, 7, 11, 15];
let target = 9;

numbers = [-5, -3, 0, 2, 4, 6, 8];
target = 5;
console.log(twoSum(numbers, target));
