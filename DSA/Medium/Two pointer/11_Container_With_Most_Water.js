/**
 * **maxArea Function**
 *
 * Solves the **Container With Most Water** problem using the **two-pointer** technique.
 * Finds the maximum amount of water that can be trapped between two vertical lines.
 *
 * ### Logic:
 * - Initialize two pointers, `left` at 0 and `right` at the end.
 * - At each step, calculate the area formed by the lines at `left` and `right`.
 * - Update the `max` if the current area is greater.
 * - Move the pointer pointing to the shorter line inward to try finding a taller line.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * @param {number[]} height - Array of positive integers representing vertical line heights.
 *
 * ### Returns:
 * @returns {number} - The maximum water that can be contained.
 *
 * ### Example:
 * ```js
 * maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
 * maxArea([1, 1]); // 1
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function maxArea(height) {
  let right = height.length - 1;
  let left = 0;
  let max = 0;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);

    max = Math.max(max, area);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));

height = [1, 1];
console.log(maxArea(height));
