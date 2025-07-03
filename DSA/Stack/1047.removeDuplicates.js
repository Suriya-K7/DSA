/**
 * **removeDuplicates Function**
 *
 * Removes all **adjacent duplicate characters** in a string by using a **stack-based** approach.
 * Repeatedly removes characters until no more adjacent duplicates are found.
 *
 * ### Logic:
 * - Iterate through each character of the string.
 * - Use a stack to track the characters.
 * - If the current character is the same as the top of the stack, pop (remove) it — a duplicate is found.
 * - Otherwise, push the character onto the stack.
 * - Finally, join the stack to form the cleaned string.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n) — due to use of a stack.
 *
 * ### Params:
 * - `s` (`string`) — The input string containing lowercase letters.
 *
 * ### Returns:
 * - `string` — The resulting string after removing all adjacent duplicates.
 *
 * ### Example:
 * ```js
 * removeDuplicates("abbaca");  // "ca"
 * removeDuplicates("azxxzy");  // "ay"
 * ```
 *
 * @note Common interview question. Efficient and clean approach using stack for duplicate collapse problems.
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function removeDuplicates(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

let s = "abbaca";

console.log(removeDuplicates(s));

s = "azxxzy";

console.log(removeDuplicates(s));
