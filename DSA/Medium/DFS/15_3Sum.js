/**
 * **threeSum (Brute Force Backtracking)**
 *
 * Finds all combinations of 3 numbers in the array that sum to zero using **DFS/backtracking**.
 *
 * ### Logic:
 * - Generate all possible combinations of 3 numbers using backtracking.
 * - For each combination, check if the sum equals zero.
 * - Does **not** handle duplicate triplets; use a Set or sorting for uniqueness if needed.
 *
 * ### Time Complexity: O(n^3)
 * - Combination generation is O(n choose 3), and checking the sum takes O(1).
 *
 * ### Space Complexity: O(n) for recursion stack and result storage.
 *
 * ### Params:
 * - `nums` (`number[]`) — Input array of integers.
 *
 * ### Returns:
 * - `number[][]` — List of triplets that sum to zero.
 *
 * ### Example:
 * ```js
 * threeSum([-1, 0, 1, 2, -1, -4]);
 * // Output (may contain duplicates): [[-1, 0, 1], [-1, -1, 2], ...]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function threeSum(nums) {
  let result = [];

  function dfs(index, cur) {
    if (cur.length === 3 && sum3(cur)) {
      result.push([...cur]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      cur.push(nums[i]);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(0, []);

  return result;
}

function sum3(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) === 0;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

nums = [0, 1, 1];
console.log(threeSum(nums));

nums = [0, 0, 0];
console.log(threeSum(nums));
