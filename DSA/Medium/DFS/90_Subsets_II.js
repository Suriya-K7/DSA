/**
 * **subsetsWithDup Function**
 *
 * Generates all possible subsets of an array of numbers,
 * ensuring **no duplicate subsets** are included.
 *
 * ### Logic:
 * 1. Sort the array to ensure duplicates are adjacent.
 * 2. Use DFS (backtracking) to explore each subset possibility.
 * 3. Skip duplicate elements at the same recursion depth to avoid duplicate subsets.
 *
 * ### Time Complexity: O(2^n)
 * - Each element can be included or excluded → exponential growth.
 *
 * ### Space Complexity: O(2^n)
 * - Due to storing all subsets in the output array.
 *
 * ### Params:
 * - `nums` (`number[]`) — The input array (may contain duplicates).
 *
 * ### Returns:
 * - `number[][]` — List of all unique subsets.
 *
 * ### Example:
 * ```js
 * subsetsWithDup([1,2,2]);
 * // Output: [[], [1], [1,2], [1,2,2], [2], [2,2]]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function subsetsWithDup(nums) {
  let output = [[]];

  nums.sort((a, b) => a - b);

  function dfs(index, cur) {
    for (let i = index; i < nums.length; i++) {
      if (i === index || nums[i] !== nums[i - 1]) {
        cur.push(nums[i]);
        output.push([...cur]);
        dfs(i + 1, cur);
        cur.pop();
      }
    }
  }

  dfs(0, []);

  return output;
}

let nums = [1, 2, 2];
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup(nums));
