/**
 * **longestConsecutive Function**
 *
 * Finds the length of the longest consecutive sequence in an unsorted array.
 *
 * ### Logic:
 * - Use a `Set` for O(1) lookups.
 * - For each number, only start counting if it's the **start of a sequence** (`num - 1` not in set).
 * - Incrementally count consecutive numbers (`num + 1`, `num + 2`, ...) and track the maximum length.
 *
 * ### Time Complexity: O(n)
 * - Each element is processed at most twice — once during set iteration and once during sequence building.
 *
 * ### Space Complexity: O(n)
 * - Extra space used for the `Set`.
 *
 * ### Params:
 * - `nums` (`number[]`) — The input array of integers.
 *
 * ### Returns:
 * - `number` — The length of the longest consecutive elements sequence.
 *
 * ### Example:
 * ```js
 * longestConsecutive([100,4,200,1,3,2]); // Output: 4  → [1,2,3,4]
 * longestConsecutive([0,3,7,2,5,8,4,6,0,1]); // Output: 9 → [0-8]
 * longestConsecutive([1,0,1,2]); // Output: 3 → [0,1,2]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function longestConsecutive(nums) {
  let count = 0;

  let set = new Set(nums);

  for (let num of set) {
    if (!set.has(num - 1)) {
      let curCount = 1;
      while (set.has(num + 1)) {
        curCount++;
        num++;
      }
      count = Math.max(count, curCount);
    }
  }

  return count;
}

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));

nums = [1, 0, 1, 2];
console.log(longestConsecutive(nums));
