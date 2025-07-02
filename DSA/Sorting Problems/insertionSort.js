/**
 * **insertionSort Function**
 *
 * Sorts an array of numbers in **ascending order** using the **Insertion Sort** algorithm.
 *
 * ### Logic:
 * - Iterates through the array starting from index 1.
 * - For each element, compares it backward with previous elements and shifts larger values forward.
 * - Swaps when the current value is less than its predecessor.
 * - Time Complexity: O(n²) in the worst case, O(n) in best-case (already sorted).
 * - Space Complexity: O(1) — sorting is done in-place.
 *
 * ### Params:
 * - `arr` (`number[]`) - The array of numbers to sort.
 *
 * ### Returns:
 * - `number[]` - A new array sorted in ascending order.
 *
 * ### Example:
 * ```js
 * insertionSort([3, 6, 2, 7, 0, 8, 9, 1, 5, 4]);
 * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @note Efficient for small or nearly sorted datasets. Not ideal for large unsorted arrays.
 *
 * @see Also: `bubbleSort`, `mergeSortArray`, `quickSort`
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

console.log(insertionSort(arr));
