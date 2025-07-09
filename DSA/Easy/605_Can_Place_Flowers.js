/**
 * **canPlaceFlowersBruteForce Function**
 *
 * Determines whether it's possible to plant `n` new flowers in a flowerbed without violating the **no-adjacent-flowers** rule.
 *
 * ### Problem Constraints:
 * - You cannot plant a flower in adjacent plots (i.e., no two 1's should be next to each other).
 * - You can only plant in a `0` if both neighbors are `0` or `undefined` (edge case).
 *
 * ### Logic:
 * - Traverse the flowerbed.
 * - For each plot that is `0`, check:
 *   - Is the **left plot** either `0` or out-of-bounds?
 *   - Is the **right plot** either `0` or out-of-bounds?
 * - If both are valid, plant a flower (`1`) and decrement `n`.
 * - If at any point `n === 0`, return `true`.
 * - After the loop, return whether all flowers have been placed.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `flowerbed` (`number[]`) — Array of 0s and 1s representing available (0) and occupied (1) plots.
 * - `n` (`number`) — Number of flowers to plant.
 *
 * ### Returns:
 * - `boolean` — `true` if `n` flowers can be planted without violating the rule, else `false`.
 *
 * ### Example:
 * ```js
 * canPlaceFlowersBruteForce([1, 0, 0, 0, 1], 1); // true
 * canPlaceFlowersBruteForce([1, 0, 0, 0, 1], 2); // false
 * ```
 *
 * @note This is the brute-force approach. A more optimal version could skip more iterations by incrementing `i` smartly after planting.
 * @tip Make sure to handle edge boundaries (`i - 1`, `i + 1`) using `undefined` checks.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function canPlaceFlowersBruteForce(flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
        (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
      ) {
        flowerbed[i] = 1;
        n--;
      }
      if (n === 0) return true;
    }
  }

  return n === 0 ? true : false;
}

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

console.log(
  "canPlaceFlowersBruteForce -",
  canPlaceFlowersBruteForce(flowerbed, n)
);
console.log("canPlaceFlowers -", canPlaceFlowers(flowerbed, n));

/**
 * **canPlaceFlowers Function (Optimized)**
 *
 * Determines if `n` new flowers can be planted in the `flowerbed` array without violating the rule:
 * **No two flowers can be planted in adjacent plots**.
 *
 * ### Optimized Logic:
 * - Uses a `while` loop to iterate through the flowerbed.
 * - For each `0`:
 *   - Check that the **left** and **right** plots are not `1` (or are `undefined`, i.e., out-of-bounds).
 *   - If valid, plant (`n--`) and **skip the next plot** by incrementing `i` again (since adjacent planting is disallowed).
 * - Ends early if all required flowers (`n`) are planted.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * ### Params:
 * - `flowerbed` (`number[]`) — Array representing the flowerbed (1 = occupied, 0 = empty).
 * - `n` (`number`) — Number of new flowers to plant.
 *
 * ### Returns:
 * - `boolean` — Returns `true` if `n` flowers can be planted, else `false`.
 *
 * ### Example:
 * ```js
 * canPlaceFlowers([1, 0, 0, 0, 1], 1); // true
 * canPlaceFlowers([1, 0, 0, 0, 1], 2); // false
 * ```
 *
 * @note This version is more efficient than the brute-force one due to early exit and skipping next plot after planting.
 * @tip It’s safe to check `flowerbed[i - 1] !== 1` even when `i === 0` because `undefined !== 1` is `true`.
 *
 * @see `canPlaceFlowersBruteForce` for a simpler, more readable but slightly less efficient version.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function canPlaceFlowers(flowerbed, n) {
  let i = 0;

  while (i < flowerbed.length && n !== 0) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
    i++;
  }

  return n === 0;
}

n = 2;

console.log(
  "canPlaceFlowersBruteForce -",
  canPlaceFlowersBruteForce(flowerbed, n)
);
console.log("canPlaceFlowers -", canPlaceFlowers(flowerbed, n));
