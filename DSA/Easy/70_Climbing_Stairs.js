/**
 * **climbStairs Function**
 *
 * Solves the classic **"Climbing Stairs"** problem using **dynamic programming**.
 * You are climbing a staircase with `n` steps. You can either climb **1 or 2 steps at a time**.
 * This function calculates the number of distinct ways to reach the top.
 *
 * ### Logic:
 * - Base cases:
 *   - `n = 1`: 1 way
 *   - `n = 2`: 2 ways (1+1, 2)
 * - For `n > 2`, the number of ways to reach step `n` is:
 *   - `stairs[n] = stairs[n-1] + stairs[n-2]`
 *   - This resembles the **Fibonacci sequence**.
 * - Uses a bottom-up dynamic programming approach to fill the table.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n) — Can be optimized to O(1) using two variables.
 *
 * ### Params:
 * - `n` (`number`) — Total number of stairs (1 ≤ n ≤ 45).
 *
 * ### Returns:
 * - `number` — Total distinct ways to climb `n` stairs.
 *
 * ### Example:
 * ```js
 * climbStairs(2); // 2
 * climbStairs(3); // 3
 * climbStairs(5); // 8
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function climbStairs(n) {
  let stairs = [];

  stairs[1] = 1;
  stairs[2] = 2;

  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }
  return stairs[n];
}

let n = 2;
console.log(climbStairs(n));

n = 3;
console.log(climbStairs(n));

n = 5;
console.log(climbStairs(n));
