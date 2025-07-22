/**
 * **sortByBits Function**
 *
 * Sorts an array of integers in ascending order based on the **number of 1s (set bits)** in their binary representation.
 * If two numbers have the same number of set bits, they are sorted by their actual numeric value.
 *
 * ### Logic:
 * - Count the number of set bits (Hamming weight) for each element using `hammingWeight`.
 * - Store the bit count for each element in a `map`.
 * - Sort the array with a custom comparator:
 *   - Primary: By bit count (ascending).
 *   - Secondary: By numeric value (ascending).
 *
 * ### Time Complexity:
 * - **O(n log n)** — For sorting.
 * - **O(n × k)** — For calculating Hamming weight (`k` is the number of bits, max 32).
 * - Total: `O(n log n + n × k)`
 *
 * ### Space Complexity: O(n) — Due to the bit-count map.
 *
 * ### Params:
 * - `arr` (`number[]`) — Array of non-negative integers.
 *
 * ### Returns:
 * - `number[]` — Sorted array based on bit count and value.
 *
 * ### Example:
 * ```js
 * sortByBits([0,1,2,3,4,5,6,7,8]); // [0,1,2,4,8,3,5,6,7]
 * sortByBits([1024,512,256,128,64,32,16,8,4,2,1]); // [1,2,4,8,16,32,64,128,256,512,1024]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function sortByBits(arr) {
  let map = {};

  for (var i = 0; i < arr.length; i++) {
    map[arr[i]] = hammingWeight(arr[i]);
  }

  arr.sort((a, b) => map[a] - map[b] || a - b);

  return arr;
}

/**
 * **hammingWeight Function**
 *
 * Counts the number of 1s in the binary representation of a number using Brian Kernighan’s Algorithm.
 *
 * ### Time Complexity: O(k) where k is the number of set bits (≤ 32)
 * ### Space Complexity: O(1)
 *
 * @param {number} n - A non-negative integer.
 * @returns {number} - The count of 1s in its binary representation.
 */
function hammingWeight(n) {
  let count = 0;

  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sortByBits(arr));

arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
console.log(sortByBits(arr));
