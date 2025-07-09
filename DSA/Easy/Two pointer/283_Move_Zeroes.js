/**
 * **moveZeroes Function**
 *
 * Moves all `0`s in an array to the **end**, while maintaining the relative order of the non-zero elements.
 *
 * ### Logic:
 * - Uses two pointers:
 *   - `right`: scans through the array.
 *   - `left`: marks the position to place the next non-zero number.
 * - When a non-zero is found at `right` and there's a `0` at `left`, they are swapped.
 * - If both `left` and `right` are at non-zero, both move forward.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1) — in-place modification.
 *
 * ### Params:
 * - `nums` (`number[]`) — The input array with numbers, possibly containing zeros.
 *
 * ### Returns:
 * - `number[]` — The modified array with all zeros shifted to the end.
 *
 * ### Example:
 * ```js
 * moveZeroes([0, 1, 0, 3, 12]);
 * // returns [1, 3, 12, 0, 0]
 * ```
 *
 * @note The function modifies the input array in-place and returns the same reference.
 * @tip Avoid unnecessary swaps if `left === right` to slightly improve performance.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function moveZeroes(nums) {
  let left = (right = 0);

  while (right < nums.length) {
    if (nums[right] === 0) {
      right++;
    } else if (nums[right] !== 0 && nums[left] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    } else {
      right++;
      left++;
    }
  }

  return nums;
}

/**
 * **moveZeroesOptimized Function**
 *
 * Moves all `0`s in the array to the **end**, while maintaining the relative order of non-zero elements.
 * This version uses a more optimized approach by **minimizing unnecessary checks and swaps**.
 *
 * ### Logic:
 * - Uses two pointers:
 *   - `right`: traverses all elements.
 *   - `left`: keeps track of the position to move the next non-zero.
 * - If the current element (`nums[right]`) is non-zero, it is swapped with the `left` pointer.
 * - This naturally shifts all non-zero values forward and zeros to the end.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1) — in-place sorting.
 *
 * ### Params:
 * - `nums` (`number[]`) — The array that may contain zeros.
 *
 * ### Returns:
 * - `number[]` — The modified array with all zeros at the end.
 *
 * ### Example:
 * ```js
 * moveZeroesOptimized([0, 1, 0, 3, 12]);
 * // returns [1, 3, 12, 0, 0]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function moveZeroesOptimized(nums) {
  let left = (right = 0);

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }

  return nums;
}

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
console.log(moveZeroesOptimized(nums));
