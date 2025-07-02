/**
 * **selectionSort Function**
 *
 * Sorts an array of numbers in **ascending order** using the **Selection Sort** algorithm.
 *
 * ### Logic:
 * - Iterates over the array and selects the smallest element from the unsorted portion.
 * - Swaps it with the first element of the unsorted section.
 * - Repeats this process, moving the boundary of the sorted section forward.
 * - Time Complexity: O(n²)
 * - Space Complexity: O(1) — sorting is done in-place.
 *
 * ### Params:
 * - `arr` (`number[]`) - The array of unsorted numbers.
 *
 * ### Returns:
 * - `number[]` - The sorted array in ascending order.
 *
 * ### Example:
 * ```js
 * selectionSort([3, 6, 2, 7, 0, 8, 9, 1, 5, 4]);
 * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @note Selection sort makes the **minimum number of swaps** among simple sorting algorithms, but is inefficient on large lists.
 * @tip Good for small datasets or when swap operations are expensive.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

console.log(selectionSort(arr));
