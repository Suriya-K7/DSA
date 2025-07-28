/**
 * **combinationSum3 Function**
 *
 * Finds all possible combinations of `k` numbers that add up to a number `n`,
 * using only numbers from 1 to 9 and **each number used at most once**.
 *
 * ### Approach:
 * - Uses **DFS (backtracking)** to explore valid combinations.
 * - Starts from `1` to `9`, adds the current number to a temporary array (`cur`), and recurses with the next index.
 * - When the array has exactly `k` elements and their sum is `n`, the current combination is added to the result.
 * - After exploring one path, it backtracks by removing the last element added.
 *
 * ### Optimizations:
 * - Early return when the length of `cur` exceeds `k` or its sum exceeds `n` can be added for pruning (optional).
 *
 * ### Time Complexity: O(C(9, k))
 * - Since we are generating combinations of k numbers from 1 to 9.
 *
 * ### Space Complexity: O(k) recursion depth
 *
 * ### Parameters:
 * @param {number} k - Number of elements to include in the combination
 * @param {number} n - Target sum to reach
 *
 * ### Returns:
 * @returns {number[][]} - A 2D array of all valid combinations
 *
 * ### Example:
 * ```js
 * combinationSum3(3, 7);
 * // Output: [[1,2,4]]
 *
 * combinationSum3(3, 9);
 * // Output: [[1,2,6],[1,3,5],[2,3,4]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function combinationSum3(k, n) {
  let output = [];

  function dfs(index, cur) {
    if (cur.length === k && sum(cur) === n) {
      output.push([...cur]);
      return;
    }

    for (let i = index; i <= 9; i++) {
      cur.push(i);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(1, []);

  return output;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

let n = 7;
let k = 3;
console.log(combinationSum3(k, n));

n = 9;
k = 3;
console.log(combinationSum3(k, n));

n = 18;
k = 2;
console.log(combinationSum3(k, n));
