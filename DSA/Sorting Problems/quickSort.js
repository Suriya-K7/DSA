/**
 * **quickSort Function**
 *
 * Sorts an array of numbers in **ascending order** using the **Quick Sort** algorithm (Divide and Conquer).
 *
 * ### Logic:
 * - Selects the first element as the **pivot**.
 * - Partitions the array into:
 *   - `left`: elements less than the pivot.
 *   - `right`: elements greater than or equal to the pivot.
 * - Recursively sorts both `left` and `right`, then combines them with the pivot in the middle.
 * - Time Complexity:
 *   - Average case: O(n log n)
 *   - Worst case: O(n²) (when input is already sorted or pivot choice is poor)
 * - Space Complexity: O(n) due to new array creation in each recursion.
 *
 * ### Params:
 * - `arr` (`number[]`) - The array of unsorted numbers.
 *
 * ### Returns:
 * - `number[]` - A new array sorted in ascending order.
 *
 * ### Example:
 * ```js
 * quickSort([3, 6, 2, 7, 0, 8, 9, 1, 5, 4]);
 * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 * @author [Suriya](https://github.com/suriya-k7)
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let start = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < start) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), start, ...quickSort(right)];
}

let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

console.log(quickSort(arr));
