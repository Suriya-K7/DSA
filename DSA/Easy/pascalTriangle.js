/**
 * **pascalTriangle Function**
 *
 * Generates the **first `num` rows** of Pascal's Triangle.
 *
 * ### Logic:
 * - Starts by manually pushing the first two base rows: `[1]` and `[1, 1]` (if applicable).
 * - For each subsequent row:
 *   - Computes the middle values by summing adjacent pairs from the previous row.
 *   - Prepends and appends `1` to each row to maintain triangle structure.
 * - Time Complexity: O(num²) — each row has up to `num` elements.
 * - Space Complexity: O(num²) — entire triangle stored.
 *
 * ### Params:
 * - `num` (`number`) - The number of rows of Pascal’s Triangle to generate.
 *
 * ### Returns:
 * - `number[][]` - A 2D array representing the triangle.
 *
 * ### Example:
 * ```js
 * pascalTriangle(5);
 * // Output:
 * // [
 * //   [1],
 * //   [1, 1],
 * //   [1, 2, 1],
 * //   [1, 3, 3, 1],
 * //   [1, 4, 6, 4, 1]
 * // ]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function pascalTriangle(num) {
  let output = [];

  if (num >= 1) output.push([1]);
  if (num >= 2) output.push([1, 1]);

  for (let i = 2; i < num; i++) {
    let first = (last = 1);
    let prevArr = output[i - 1];

    if (prevArr.length === 2) {
      output.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let arrToAdd = [];

      while (right < prevArr.length) {
        arrToAdd.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }
      output.push([first, ...arrToAdd, last]);
    }
  }

  return output;
}

let num = 10;

console.log(pascalTriangle(num));
