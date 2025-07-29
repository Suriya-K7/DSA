/**
 * **numIslands**
 *
 * Counts the number of islands in a given 2D grid using **Depth-First Search (DFS)**.
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. The grid is modified **in-place** to mark visited land.
 *
 * ### Logic:
 * - Traverse every cell in the grid.
 * - When a land cell (`"1"`) is found, trigger DFS to sink the island.
 * - DFS replaces connected land cells with `"0"` to avoid revisiting.
 * - Each DFS call that finds land contributes `1` to the island count.
 *
 * ### Time Complexity: O(m × n)
 * - Every cell is visited at most once.
 *
 * ### Space Complexity: O(m × n) in worst case (due to recursive stack).
 *
 * ### Params:
 * - `grid` (`string[][]`) — 2D grid representing water (`"0"`) and land (`"1"`).
 *
 * ### Returns:
 * - `number` — Total number of islands found in the grid.
 *
 * ### Example:
 * ```js
 * numIslands([
 *   ["1", "1", "0", "0", "0"],
 *   ["1", "1", "0", "0", "0"],
 *   ["0", "0", "1", "0", "0"],
 *   ["0", "0", "0", "1", "1"],
 * ]);
 * // Output: 3
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function numIslands(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      count += dfs(grid, i, j);
    }
  }

  function dfs(grid, row, col) {
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[row].length - 1 ||
      grid[row][col] === "0"
    ) {
      return 0;
    }

    grid[row][col] = "0";

    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);

    return 1;
  }

  return count;
}

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));
