/**
 * **judgeCircle Function**
 *
 * Determines whether a robot returns to the origin after executing a series of moves on a 2D plane.
 * The moves string contains characters:
 * - `'U'` = up (+y),
 * - `'D'` = down (–y),
 * - `'L'` = left (–x),
 * - `'R'` = right (+x).
 *
 * The robot starts at `(0, 0)` and must end at the origin to return `true`.
 *
 * ### Logic:
 * - Track net displacement on the `x` and `y` axes.
 * - Increment or decrement counters based on direction.
 * - Return `true` if both `x` and `y` return to zero.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `moves` (`string`) — A sequence of characters representing directions the robot takes.
 *
 * ### Returns:
 * - `boolean` — `true` if robot ends up at origin `(0, 0)`; otherwise `false`.
 *
 * ### Example:
 * ```js
 * judgeCircle("UD"); // true
 * judgeCircle("LL"); // false
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function judgeCircle(moves) {
  let x = (y = 0);

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      y++;
    } else if (moves[i] === "D") {
      y--;
    } else if (moves[i] === "R") {
      x++;
    } else if (moves[i] === "L") {
      x--;
    }
  }

  return x === 0 && y === 0;
}

let moves = "UD";

console.log(judgeCircle(moves));

moves = "LL";

console.log(judgeCircle(moves));
