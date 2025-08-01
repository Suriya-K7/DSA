/**
 * **spiralOrder Function**
 *
 * Traverses a 2D matrix in spiral (clockwise) order and returns the elements as a 1D array.
 *
 * ### Logic:
 * - Use four pointers: `top`, `bottom`, `left`, `right` to define the current boundary.
 * - Move in four directions:
 *   1. Left → Right along top row
 *   2. Top → Bottom along right column
 *   3. Right → Left along bottom row
 *   4. Bottom → Top along left column
 * - After each direction, shrink the boundary inward.
 * - Stop when all elements are collected.
 *
 * ### Time Complexity: O(m × n)
 * ### Space Complexity: O(1) (excluding result array)
 *
 * ### Params:
 * - `matrix` (`number[][]`) — The 2D matrix to traverse.
 *
 * ### Returns:
 * - `number[]` — Array of matrix elements in spiral order.
 *
 * ### Example:
 * ```js
 * spiralOrder([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function spiralOrder(matrix) {
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let size = matrix.length * matrix[0].length;
  let result = [];

  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrix));

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix));
