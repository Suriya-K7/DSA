/**
 * **combine Function**
 *
 * Generates all possible combinations of `k` numbers out of the range `[1...n]`.
 * Uses **backtracking (DFS)** to explore and build valid combinations.
 *
 * ### Logic:
 * - Starts from index `1` and recursively builds combinations.
 * - Each recursive call adds a new number to the current combination (`cur`).
 * - Once a combination of size `k` is formed, it’s pushed to the final output.
 * - After exploring a branch, the last element is popped to backtrack.
 *
 * ### Time Complexity: O(C(n, k)) where C is the binomial coefficient
 * ### Space Complexity: O(k) for recursion stack
 *
 * ### Params:
 * @param {number} n - The upper bound of the range (inclusive).
 * @param {number} k - Number of elements in each combination.
 *
 * ### Returns:
 * @returns {number[][]} - A list of all valid `k`-combinations from numbers `1` to `n`.
 *
 * ### Example:
 * ```js
 * combine(4, 2); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * combine(1, 1); // [[1]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function combine(n, k) {
  let output = [];

  function dfs(index, cur) {
    if (cur.length === k) {
      output.push([...cur]);
      return;
    }

    for (let i = index; i <= n; i++) {
      cur.push(i);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(1, []);

  return output;
}

let n = 4;
let k = 2;
console.log(combine(n, k));

n = 1;
k = 1;
console.log(combine(n, k));
