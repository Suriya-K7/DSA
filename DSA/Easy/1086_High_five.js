/**
 * **highFive Function**
 *
 * Calculates the average of the **top 5 scores** for each student based on the input list of `[id, score]` pairs.
 *
 * ### Logic:
 * - Group scores by student ID using a hashmap.
 * - For each student:
 *   - Sort their scores in descending order.
 *   - Take the top 5 scores and compute the floor of their average.
 * - Return an array of `[id, average]` for each student.
 *
 * ### Time Complexity:
 * - O(n log k) per student where `k` is the number of scores for the student (due to sorting).
 * - O(n) overall grouping.
 * - Total: O(n log k)
 *
 * ### Space Complexity: O(n) — for storing scores in a map.
 *
 * ### Params:
 * - `nums` (`number[][]`) — Array of `[id, score]` pairs, where:
 *   - `id` is a student ID (number),
 *   - `score` is a test score (number).
 *
 * ### Returns:
 * - `number[][]` — Array of `[id, topFiveAverage]` pairs.
 *   - Averages are **floored** integers.
 *   - `id` values are **returned as strings** (from `Object.entries()`), unless explicitly parsed.
 *
 * ### Example:
 * ```js
 * highFive([
 *   [1, 91], [1, 92], [2, 93], [2, 97], [1, 60],
 *   [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]
 * ]); // [["1", 87], ["2", 88]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function highFive(nums) {
  let map = {};

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i][0]]) {
      map[nums[i][0]] = [nums[i][1]];
    } else {
      map[nums[i][0]].push(nums[i][1]);
    }
  }

  let output = [];
  for (const [id, value] of Object.entries(map)) {
    let sortedValue = value.sort((a, b) => b - a);
    let avg = value.slice(0, 5).reduce((acc, cur) => acc + cur, 0);
    avg = Math.floor(avg / 5);
    output.push([id, avg]);
  }

  return output;
}

let nums = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];

console.log(highFive(nums));

nums = [
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
];

console.log(highFive(nums));
