/**
 * **uniquePaths Function**
 *
 * Calculates the number of unique paths from the top-left corner to
 * the bottom-right corner of an `m x n` grid, moving only right or down.
 *
 * ### Logic:
 * - Use dynamic programming (2D `dp` array) where each cell `dp[i][j]` represents
 *   the number of ways to reach that cell.
 * - Initialize the first row and first column with 1, since there's only one way to reach
 *   any cell in the first row (all right moves) or first column (all down moves).
 * - For all other cells, the number of ways to reach it is the sum of the ways from
 *   the cell above and the cell to the left.
 *
 * ### Time Complexity: O(m × n)
 * - Each cell in the matrix is visited exactly once.
 *
 * ### Space Complexity: O(m × n)
 * - Uses a 2D array of size `m x n`.
 *
 * ### Params:
 * - `m` (`number`) — Number of rows in the grid.
 * - `n` (`number`) — Number of columns in the grid.
 *
 * ### Returns:
 * - `number` — Total number of unique paths from top-left to bottom-right.
 *
 * ### Example:
 * ```js
 * uniquePaths(3, 7); // Output: 28
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function uniquePaths(m, n) {
  let dp = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < dp.length; i++) dp[i][0] = 1;

  for (let j = 0; j < dp[0].length; j++) dp[0][j] = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

let m = 3;
let n = 7;

console.log(uniquePaths(m, n));

m = 3;
n = 2;

console.log(uniquePaths(m, n));
