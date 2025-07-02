/**
 * **containsDuplicate Function**
 *
 * Checks whether the input array contains **any duplicate elements** using a `Set`.
 *
 * ### Logic:
 * - Iterates through the array.
 * - Uses a `Set` to track seen values.
 * - If a value is already present in the `Set`, a duplicate is found.
 * - Returns early for better performance on large inputs.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `nums` (`number[]`) - The array of numbers to check for duplicates.
 *
 * ### Returns:
 * - `boolean` - `true` if a duplicate exists, `false` otherwise.
 *
 * ### Example:
 * ```js
 * containsDuplicate([1, 2, 3, 1]); // returns true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function containsDuplicate(nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
}

/**
 * **containsDuplicateUsingSet Function**
 *
 * Alternative approach to check for duplicates by comparing the size of a `Set`
 * created from the input array with the original array length.
 *
 * ### Logic:
 * - Creates a `Set` from the array (automatically removes duplicates).
 * - If the size of the set is less than the array length, duplicates exist.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `nums` (`number[]`) - The array of numbers to check for duplicates.
 *
 * ### Returns:
 * - `boolean` - `true` if a duplicate exists, `false` otherwise.
 *
 * ### Example:
 * ```js
 * containsDuplicateUsingSet([1, 2, 3, 1]); // returns true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function containsDuplicateUsingSet(nums) {
  let set = new Set([...nums]);

  return set.size !== nums.length;
}

let nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));

console.log(containsDuplicateUsingSet(nums));
