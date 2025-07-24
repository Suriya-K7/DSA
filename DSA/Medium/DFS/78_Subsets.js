/**
 * **subsets Function**
 *
 * Generates all possible subsets (the power set) of a given array using a **backtracking (DFS)** approach.
 *
 * ### Logic:
 * - Starts with an empty subset in the output.
 * - Iterates through each index starting from the given position.
 * - On each recursive call, adds the current number to the subset (`cur`), saves a copy to the output, then continues exploring further.
 * - After exploring one path, it backtracks by removing the last element and tries the next number.
 *
 * ### Time Complexity: O(2^n)
 * - Each element can be included or excluded → 2 choices → 2^n subsets
 *
 * ### Space Complexity: O(n) (max depth of recursion)
 *
 * ### Params:
 * @param {number[]} nums - Array of distinct integers
 *
 * ### Returns:
 * @returns {number[][]} - A 2D array containing all possible subsets (including the empty set).
 *
 * ### Example:
 * ```js
 * subsets([1, 2, 3]);
 * // Output: [
 * //   [], [1], [1,2], [1,2,3],
 * //   [1,3], [2], [2,3], [3]
 * // ]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function subsets(nums) {
  let output = [[]];

  function dfs(index, cur) {
    for (let i = index; i < nums.length; i++) {
      cur.push(nums[i]);
      output.push([...cur]);
      dfs(i + 1, cur);
      cur.pop();
    }
  }

  dfs(0, []);

  return output;
}

let nums = [1, 2, 3];
console.log(subsets(nums));

nums = [0];
console.log(subsets(nums));
