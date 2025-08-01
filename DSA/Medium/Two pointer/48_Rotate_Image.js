/**
 * **rotate Function**
 *
 * Rotates an `n x n` 2D matrix 90 degrees clockwise **in-place**.
 *
 * ### Logic:
 * 1. **Transpose the matrix** — Swap elements across the diagonal.
 * 2. **Reverse each row** — Flip elements horizontally to complete the rotation.
 *
 * ### Time Complexity: O(n²)
 * ### Space Complexity: O(1) — In-place
 *
 * ### Params:
 * - `matrix` (`number[][]`) — The square matrix to rotate.
 *
 * ### Returns:
 * - `number[][]` — The same matrix reference, rotated in place.
 *
 * ### Example:
 * ```js
 * rotate([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]); // Output: [[7,4,1],[8,5,2],[9,6,3]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      if (i !== j) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(matrix));
