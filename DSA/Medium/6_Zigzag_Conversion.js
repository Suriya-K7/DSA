/**
 * **convertBasic Function**
 *
 * Converts a string into a **ZigZag pattern** across the given number of rows.
 * A basic version using a boolean flag `direction` to track vertical/horizontal movement.
 *
 * ### Logic:
 * - Traverse the string and append characters to the corresponding row in an array.
 * - Toggle direction (down or up) based on row index.
 * - Join all rows at the end to form the final string.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * ### Params:
 * - `s` (`string`) — Input string to be converted.
 * - `numRows` (`number`) — Number of rows for the zigzag pattern.
 *
 * ### Returns:
 * - `string` — Zigzag converted string.
 *
 * ### Example:
 * ```js
 * convertBasic("PAYPALISHIRING", 3); // Output: "PAHNAPLSIIGYIR"
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function convertBasic(s, numRows) {
  if (numRows === 1) return s;
  let direction = false;
  let arr = Array(numRows).fill("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    arr[count] += s[i];

    if (count === 0) {
      direction = true;
    }
    if (count === numRows - 1) {
      direction = false;
    }
    if (direction) {
      count++;
    } else {
      count--;
    }
  }
  return arr.join("");
}

/**
 * **convert Function**
 *
 * Converts a string into a **ZigZag pattern** using an improved toggle direction approach.
 *
 * ### Logic:
 * - Instead of two `if` checks, uses one conditional to toggle the `direction`.
 * - Characters are placed into rows accordingly.
 * - Final result is obtained by joining all rows.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * ### Params:
 * - `s` (`string`) — Input string to be converted.
 * - `numRows` (`number`) — Number of rows for the zigzag pattern.
 *
 * ### Returns:
 * - `string` — Zigzag converted string.
 *
 * ### Example:
 * ```js
 * convert("PAYPALISHIRING", 4); // Output: "PINALSIGYAHRPI"
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function convert(s, numRows) {
  if (numRows === 1) return s;
  let direction = false;
  let arr = new Array(numRows).fill("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    arr[count] += s[i];

    if (count === 0 || count >= numRows - 1) direction = !direction;

    direction ? count++ : count--;
  }
  return arr.join("");
}

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convertBasic(s, numRows));
console.log(convert(s, numRows));

s = "PAYPALISHIRING";
numRows = 4;
console.log(convertBasic(s, numRows));
console.log(convert(s, numRows));
