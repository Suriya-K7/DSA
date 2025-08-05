/**
 * **uniquePathsWithObstacles Function**
 *
 * Finds the number of unique paths from the top-left to the bottom-right of a grid,
 * avoiding obstacles (represented as 1s).
 *
 * ### Logic:
 * - Initialize a DP table with dimensions same as the obstacle grid.
 * - Set first row and column values unless blocked by an obstacle.
 * - For each cell (i, j), if there's an obstacle, set DP value to 0.
 * - Otherwise, accumulate paths from top and left.
 *
 * ### Time Complexity: O(m * n)
 * - Traverse each cell once.
 *
 * ### Space Complexity: O(m * n)
 * - Additional DP table of same size as input grid.
 *
 * ### Params:
 * - `obstacleGrid` (`number[][]`) — 2D grid with `0` as free cell and `1` as obstacle.
 *
 * ### Returns:
 * - `number` — Number of unique paths avoiding obstacles.
 *
 * ### Example:
 * ```js
 * uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]); // Output: 2
 * uniquePathsWithObstacles([[1,0]]); // Output: 0
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let dp = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < obstacleGrid.length; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0;
      break;
    } else {
      dp[i][0] = 1;
    }
  }
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0;
      break;
    } else {
      dp[0][i] = 1;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];
}

let obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

console.log(uniquePathsWithObstacles(obstacleGrid));

obstacleGrid = [
  [0, 1],
  [0, 0],
];

console.log(uniquePathsWithObstacles([[1, 0]]));
