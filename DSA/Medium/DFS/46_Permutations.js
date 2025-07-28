/**
 * **premutation Function**
 *
 * Generates all permutations of the given array using **Heap's Algorithm**.
 *
 * ### Logic:
 * - Heap's Algorithm generates all possible permutations by **swapping elements recursively**.
 * - It performs **in-place** swaps and recursively reduces the size of the array to permute.
 *
 * ### Time Complexity: O(n!)
 * ### Space Complexity: O(n!) — for storing results
 *
 * ### Params:
 * - `arr` (`number[]`) — The input array of numbers.
 *
 * ### Returns:
 * - `number[][]` — An array of all possible permutations.
 *
 * ### Example:
 * ```js
 * premutation([1, 2, 3]);
 * // Output: [
 * //   [1, 2, 3], [2, 1, 3], [3, 1, 2],
 * //   [1, 3, 2], [2, 3, 1], [3, 2, 1]
 * // ]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function premutation(arr) {
  let output = [];

  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  function generatePreMutation(n, array) {
    if (n === 1) {
      output.push(array.slice());
      return;
    }

    generatePreMutation(n - 1, array);

    for (let i = 0; i < n - 1; i++) {
      if (i % 2 === 0) {
        swap(arr, i, n - 1);
      } else {
        swap(arr, 0, n - 1);
      }
      generatePreMutation(n - 1, array);
    }
  }

  generatePreMutation(arr.length, arr);

  return output;
}

console.log(premutation([1, 2, 3]));

/**
 * **permute Function**
 *
 * Generates all permutations of the input array using **backtracking (DFS)**.
 *
 * ### Logic:
 * - Picks each element and recursively builds combinations using the rest.
 * - Uses a result array `res` and a temporary array `arr` for path tracking.
 *
 * ### Time Complexity: O(n!)
 * ### Space Complexity: O(n!) — for recursion stack and result array
 *
 * ### Params:
 * - `nums` (`number[]`) — The input array of numbers.
 * - `arr` (`number[]`, optional) — Temporary array to store current permutation (used in recursion).
 * - `res` (`number[][]`, optional) — Array to collect all permutations (used in recursion).
 *
 * ### Returns:
 * - `number[][]` — All possible permutations.
 *
 * ### Example:
 * ```js
 * permute([1, 2, 3]);
 * // Output: [
 * //   [1, 2, 3], [1, 3, 2],
 * //   [2, 1, 3], [2, 3, 1],
 * //   [3, 1, 2], [3, 2, 1]
 * // ]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function permute(nums, arr = [], res = []) {
  if (nums.length === 0) return res.push([...arr]);

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((num, index) => index !== i);
    arr.push(nums[i]);

    permute(rest, arr, res);

    arr.pop();
  }

  return res;
}

console.log(permute([1, 2, 3]));
