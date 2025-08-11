/**
 * **exist Function**
 *
 * Determines if a given word exists in a 2D grid by sequentially adjacent cells.
 * The same letter cell may not be used more than once.
 *
 * ### Logic:
 * 1. Iterate through each cell in the grid.
 * 2. If the cell's letter matches the first letter of `word`, start DFS search.
 * 3. DFS explores up, down, left, and right:
 *    - Stop if all characters match (`i === word.length`).
 *    - Mark visited cell with a temporary placeholder (e.g., "#").
 *    - Backtrack by restoring the original letter.
 *
 * ### Time Complexity:
 * O(M × N × 4^L)
 * - `M × N` is grid size,
 * - `L` is the word length,
 * - `4^L` is branching factor in worst case.
 *
 * ### Space Complexity:
 * O(L) — Recursion stack depth.
 *
 * ### Params:
 * - `board` (`string[][]`) — 2D array of characters.
 * - `word` (`string`) — Target word to search.
 *
 * ### Returns:
 * - `boolean` — True if the word exists in the board.
 *
 * ### Example:
 * ```js
 * exist(
 *   [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
 *   "ABCCED"
 * ); // true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function exist(board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (word[0] === board[r][c] && dfs(r, c, 0)) return true;
    }
  }

  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (
      r >= board.length ||
      r < 0 ||
      c < 0 ||
      c >= board[0].length ||
      board[r][c] !== word[i]
    )
      return false;

    board[r][c] = "#";
    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    )
      return true;
    board[r][c] = word[i];
  }
  return false;
}

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
word = "SEEY";

console.log(exist(board, word));
