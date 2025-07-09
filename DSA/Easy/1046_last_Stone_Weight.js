/**
 * **lastStoneWeight Function**
 *
 * Simulates the process of smashing stones together according to the following rules:
 * - Take the **two heaviest stones**.
 * - If they are **equal**, both are destroyed.
 * - If not, the **difference** (`|x - y|`) is returned as a new stone.
 * - Repeat until zero or one stone remains.
 *
 * ### Logic:
 * - Continuously sort the array in descending order.
 * - Extract the two largest stones using `shift()`.
 * - If the stones differ in weight, push the difference back to the front.
 * - When only one or no stones are left, return the remaining weight (or 0).
 *
 * ### Time Complexity:
 * - Worst-case: **O(n² log n)** — Sorting inside a loop that runs up to `n` times.
 * - Can be optimized to **O(n log n)** using a **Max Heap / Priority Queue**.
 *
 * ### Space Complexity: O(1) extra (in-place array sorting and mutation)
 *
 * ### Params:
 * - `stones` (`number[]`) — Array of stone weights (positive integers).
 *
 * ### Returns:
 * - `number` — Weight of the last remaining stone or `0` if none remain.
 *
 * ### Example:
 * ```js
 * lastStoneWeight([2, 7, 4, 1, 8, 1]); // 1
 * lastStoneWeight([2, 2]); // 0
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let x = stones.shift();
    let y = stones.shift();
    if (x !== y) {
      let mergedStone = Math.abs(x - y);
      stones.unshift(mergedStone);
    }
  }

  return stones[0] || 0;
}

let stones = [2, 7, 4, 1, 8, 1];

console.log(lastStoneWeight(stones));

stones = [2, 2];

console.log(lastStoneWeight(stones));
