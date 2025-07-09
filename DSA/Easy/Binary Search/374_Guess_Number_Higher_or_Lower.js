/**
 * **guessNumber Function**
 *
 * A binary search-based solution to the "Guess the Number" problem.
 * You must guess a number selected by the system within the range [1, n].
 * The function uses a helper API `guess(num)` to get feedback:
 *
 * - `0` → Your guess is correct.
 * - `-1` → The picked number is **lower** than the guess.
 * - `1` → The picked number is **higher** than the guess.
 *
 * ### Logic:
 * - Apply binary search between `1` and `n`.
 * - Use the `guess(mid)` API to shrink the search space.
 * - Adjust `left` and `right` pointers until the correct number is found.
 *
 * ### Time Complexity: O(log n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `n` (`number`) — The upper limit of the guessing range (inclusive).
 *
 * ### Returns:
 * - `number` — The number picked by the system (correct guess).
 *
 * ### Example:
 * ```js
 * let pick = 6;
 * guessNumber(10); // returns 6
 * ```
 *
 * @note Assumes access to a globally defined `pick` variable and `guess()` function.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function guessNumber(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let result = guess(mid);

    if (result === 0) return mid;

    if (result === -1) {
      right = mid - 1;
    }
    if (result === 1) {
      left = mid + 1;
    }
  }
}

/**
 * **guess Function (Mock API)**
 *
 * Compares the guessed number `n` with the globally defined `pick` value.
 *
 * @param {number} n - The current guessed number.
 * @returns {number} - `0` if correct, `1` if `pick` is higher, `-1` if lower.
 */
function guess(n) {
  if (pick === n) return 0;
  if (pick > n) return 1;
  return -1;
}

let n = 10;
let pick = 6;
console.log(guessNumber(n)); // 6

n = 1;
pick = 1;
console.log(guessNumber(n)); // 1

n = 2;
pick = 1;
console.log(guessNumber(n)); // 1
