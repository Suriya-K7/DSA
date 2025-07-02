/**
 * **twoSumBruteForce Function**
 *
 * Solves the Two Sum problem using a **brute-force nested loop** approach.
 *
 * ### Logic:
 * - Iterates over all possible pairs in the array.
 * - Returns the indices of the first pair whose sum equals the target.
 * - Time Complexity: O(n²)
 * - Space Complexity: O(1)
 *
 * ### Params:
 * - `arr` (`number[]`) - The input array of integers.
 * - `target` (`number`) - The target sum to find.
 *
 * ### Returns:
 * - `[number, number]` - Indices of the two numbers that add up to the target.
 *
 * ### Example:
 * ```js
 * twoSumBruteForce([2, 7, 11, 15], 9); // returns [0, 1]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
 * **twoSumUsingObj Function**
 *
 * Solves the Two Sum problem using an **object-based hash map** for faster lookup.
 *
 * ### Logic:
 * - Iterates through the array, calculating the `remainder` needed for the target sum.
 * - Checks if the complement exists in the object.
 * - Returns indices if a match is found.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `arr` (`number[]`) - The input array of integers.
 * - `target` (`number`) - The target sum to find.
 *
 * ### Returns:
 * - `[number, number]` - Indices of the two numbers that add up to the target.
 *
 * ### Example:
 * ```js
 * twoSumUsingObj([2, 7, 11, 15], 9); // returns [0, 1]
 * ```
 *
 * @note May fail in edge cases where `0` is involved due to truthy checks.
 * Use `hasOwnProperty` or a `Map` for full reliability.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function twoSumUsingObj(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let reminder = target - arr[i];

    if (arr[obj[reminder]] === reminder) {
      return [obj[reminder], i];
    } else {
      obj[arr[i]] = i;
    }
  }
}

/**
 * **twoSumUsingMap Function**
 *
 * Solves the Two Sum problem using a **Map** for consistent and efficient key-value access.
 *
 * ### Logic:
 * - Iterates through the array while storing values in a `Map`.
 * - For each element, checks if its complement (`target - value`) exists in the map.
 * - Returns the matching indices.
 * - Time Complexity: O(n)
 * - Space Complexity: O(n)
 *
 * ### Params:
 * - `arr` (`number[]`) - The input array of integers.
 * - `target` (`number`) - The target sum to find.
 *
 * ### Returns:
 * - `[number, number]` - Indices of the two numbers that add up to the target.
 *
 * ### Example:
 * ```js
 * twoSumUsingMap([2, 7, 11, 15], 9); // returns [0, 1]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function twoSumUsingMap(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let reminder = target - arr[i];

    if (map.has(reminder)) {
      return [map.get(reminder), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

let arr = [2, 7, 11, 15];
let target = 9;
console.log("twoSumBruteForce - ", twoSumBruteForce(arr, target));
console.log("twoSumUsingObj - ", twoSumUsingObj(arr, target));
console.log("twoSumUsingMap - ", twoSumUsingMap(arr, target));
