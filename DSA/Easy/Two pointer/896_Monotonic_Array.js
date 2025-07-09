/**
 * **isMonotonic Function**
 *
 * Checks whether a given array is **monotonic**, meaning it is either entirely **non-increasing** or **non-decreasing**.
 *
 * ### Logic:
 * - Initializes two flags: `increasing` and `decreasing` as `true`.
 * - Iterates through the array and invalidates either flag based on violations of increasing or decreasing order.
 * - If either flag remains true at the end, the array is monotonic.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — The input array of numbers.
 *
 * ### Returns:
 * - `boolean` — `true` if the array is monotonic, otherwise `false`.
 *
 * ### Example:
 * ```js
 * isMonotonic([1, 2, 2, 3]);    // true
 * isMonotonic([6, 5, 4, 4]);    // true
 * isMonotonic([1, 3, 2]);       // false
 * ```
 *
 * @see `isMonotonic2Way()` for an alternative modular approach using helper functions.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isMonotonic(nums) {
  let increasing = (decreasing = true);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      increasing = false;
    } else if (nums[i] < nums[i + 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

/**
 * **isMonotonic2Way Function**
 *
 * Checks if a given array is **monotonic** using helper functions for increased readability and modularity.
 *
 * ### Logic:
 * - Calls `isIncreasing()` and `isDecreasing()` helpers to determine if the array is sorted in either direction.
 * - Returns `true` if either returns true.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array of numbers to evaluate.
 *
 * ### Returns:
 * - `boolean` — `true` if the array is monotonic, else `false`.
 *
 * ### Example:
 * ```js
 * isMonotonic2Way([1, 2, 3]);  // true
 * isMonotonic2Way([3, 2, 1]);  // true
 * isMonotonic2Way([1, 3, 2]);  // false
 * ```
 *
 * @see `isIncreasing()` and `isDecreasing()` for helper logic.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isMonotonic2Way(nums) {
  return isIncreasing(nums) || isDecreasing(nums);
}

/**
 * **isIncreasing Helper**
 *
 * Returns true if the array is sorted in non-decreasing order.
 *
 * @param {number[]} nums — Input array
 * @returns {boolean}
 */
function isIncreasing(nums) {
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] > nums[right]) {
      return false;
    }
    left++;
    right++;
  }
  return true;
}

/**
 * **isDecreasing Helper**
 *
 * Returns true if the array is sorted in non-increasing order.
 *
 * @param {number[]} nums — Input array
 * @returns {boolean}
 */
function isDecreasing(nums) {
  let left = 0;
  let right = 1;
  while (right < nums.length) {
    if (nums[left] < nums[right]) {
      return false;
    }
    left++;
    right++;
  }
  return true;
}

let nums = [1, 2, 2, 3];

console.log("isMonotonic - ", isMonotonic(nums));
console.log("isMonotonic2Way - ", isMonotonic2Way(nums));

nums = [1, 3, 2];

console.log("isMonotonic - ", isMonotonic(nums));
console.log("isMonotonic2Way - ", isMonotonic2Way(nums));
