/**
 * **bubbleSort Function**
 *
 * Sorts an array of numbers in **ascending order** using the **Bubble Sort** algorithm.
 *
 * ### Logic:
 * - Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * - Continues this process until the list is sorted.
 * - Note: This version does not include early-exit optimization.
 * - Time Complexity: O(n²)
 * - Space Complexity: O(1) — sorting is done in-place.
 *
 * ### Params:
 * - `arr` (`number[]`) - The input array of unsorted numbers.
 *
 * ### Returns:
 * - `number[]` - A new array sorted in ascending order.
 *
 * ### Example:
 * ```js
 * bubbleSort([3, 6, 2, 7, 0, 8, 9, 1, 5, 4]);
 * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @note For large datasets, consider more efficient algorithms like Merge Sort or Quick Sort.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

console.log(bubbleSort(arr));
