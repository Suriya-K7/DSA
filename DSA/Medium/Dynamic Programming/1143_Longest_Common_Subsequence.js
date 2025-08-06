/**
 * **longestCommonSubsequence Function**
 *
 * Finds the length of the Longest Common Subsequence (LCS) between two strings.
 *
 * ### Logic:
 * - Use dynamic programming with a 2D `dp` table.
 * - `dp[i][j]` represents the LCS length between `text2[0...i-1]` and `text1[0...j-1]`.
 * - If characters match, increment from the diagonal: `dp[i][j] = dp[i-1][j-1] + 1`.
 * - Else, take max of left or top: `dp[i][j] = max(dp[i][j-1], dp[i-1][j])`.
 *
 * ### Time Complexity: O(m * n)
 * - Where `m = text1.length`, `n = text2.length`
 *
 * ### Space Complexity: O(m * n)
 * - Due to 2D DP array
 *
 * ### Params:
 * - `text1` (`string`) — First string
 * - `text2` (`string`) — Second string
 *
 * ### Returns:
 * - `number` — Length of the longest common subsequence between the two strings
 *
 * ### Example:
 * ```js
 * longestCommonSubsequence("abcde", "ace"); // 3 ("ace")
 * longestCommonSubsequence("abc", "abc");   // 3 ("abc")
 * longestCommonSubsequence("abc", "def");   // 0
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function longestCommonSubsequence(text1, text2) {
  let n = text1.length + 1;
  let m = text2.length + 1;
  let dp = Array.from(Array(m), () => Array(n));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 0;
  }
  for (let i = 0; i < n; i++) dp[0][i] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (text2[i - 1] === text1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m - 1][n - 1];
}

let text1 = "abcde";
let text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));

text1 = "abc";
text2 = "abc";
console.log(longestCommonSubsequence(text1, text2));

text1 = "abc";
text2 = "def";
console.log(longestCommonSubsequence(text1, text2));
