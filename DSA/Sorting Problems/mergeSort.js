/**
 * **mergeSortArray Function**
 *
 * Sorts an array of numbers in **ascending order** using the **Merge Sort** algorithm (Divide and Conquer).
 *
 * ### Logic:
 * - Recursively splits the input array into halves until each subarray has one element.
 * - Merges sorted halves using the `merge()` helper function.
 * - Time Complexity: O(n log n)
 * - Space Complexity: O(n) — due to array slicing and new arrays created during merge.
 *
 * ### Params:
 * - `arr` (`number[]`) - The input array to sort.
 *
 * ### Returns:
 * - `number[]` - A new sorted array in ascending order.
 *
 * ### Example:
 * ```js
 * mergeSortArray([3, 6, 2, 7, 0, 8, 9, 1, 5, 4]);
 * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 *
 * @note Merge Sort is stable and efficient for large data sets, unlike Bubble Sort or Insertion Sort.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function mergeSortArray(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSortArray(arr.slice(0, mid));
  let right = mergeSortArray(arr.slice(mid));

  return merge(left, right);
}

/**
 * **merge Function**
 *
 * Merges two **sorted arrays** into a single sorted array.
 *
 * ### Logic:
 * - Compares the first element of each array.
 * - Pushes the smaller into the result and removes it from the source array using `shift()`.
 * - After one array is exhausted, concatenates the remainder of the other.
 * - Time Complexity: O(n), where n = left.length + right.length
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `left` (`number[]`) - Left sorted subarray.
 * - `right` (`number[]`) - Right sorted subarray.
 *
 * ### Returns:
 * - `number[]` - Merged and sorted array from `left` and `right`.
 *
 * ### Example:
 * ```js
 * merge([1, 4, 7], [2, 3, 6]); // returns [1, 2, 3, 4, 6, 7]
 * ```
 *
 * @note Using `shift()` is simple but not optimal for large arrays (O(n) per shift). Use index pointers for optimization.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

console.log(mergeSortArray(arr));
