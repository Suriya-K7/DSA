/**
 * **setZeroes Function**
 *
 * Modifies the input matrix in-place such that if any element is 0,
 * its entire row and column are set to 0.
 *
 * ### Logic:
 * - First, scan the matrix to record positions of all zero elements.
 * - Then for each recorded zero position, set all elements in its row and column to zero.
 *
 * ### Time Complexity: O(m × n × (m + n))
 * - m × n for scanning the matrix
 * - Worst-case m + n operations per zero found
 *
 * ### Space Complexity: O(k)
 * - Where k is the number of zeroes (to store their positions)
 *
 * ### Params:
 * - `matrix` (`number[][]`) — The input 2D matrix to be modified in-place.
 *
 * ### Returns:
 * - `number[][]` — The modified matrix with zeroed rows and columns.
 *
 * ### Example:
 * ```js
 * setZeroes([
 *   [1, 1, 1],
 *   [1, 0, 1],
 *   [1, 1, 1]
 * ]);
 * // Output: [
 * //   [1, 0, 1],
 * //   [0, 0, 0],
 * //   [1, 0, 1]
 * // ]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function setZeroes(matrix) {
  let zeroPosition = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroPosition.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeroPosition.length; i++) {
    let [row, col] = zeroPosition[i];

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
    for (let k = 0; k < matrix[0].length; k++) {
      matrix[row][k] = 0;
    }
  }

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

console.log(setZeroes(matrix));

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(setZeroes(matrix));
