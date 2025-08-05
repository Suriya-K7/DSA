/**
 * **simplifyPath Function**
 *
 * Simplifies a given Unix-style absolute file path by resolving `"."`, `".."`, and redundant slashes.
 *
 * ### Logic:
 * - Split the path by `/`.
 * - Use a stack to process directory segments:
 *   - Ignore empty strings and `"."` (current directory).
 *   - `".."` pops from the stack (move up one directory).
 *   - Any valid directory name is pushed onto the stack.
 * - Join the stack with `/` to return the canonical path.
 *
 * ### Time Complexity: O(n)
 * - `n` is the length of the path.
 * - Each segment is visited once.
 *
 * ### Space Complexity: O(n)
 * - Stack holds valid directory names.
 *
 * ### Params:
 * - `path` (`string`) — The absolute path string to simplify.
 *
 * ### Returns:
 * - `string` — Canonical simplified path.
 *
 * ### Example:
 * ```js
 * simplifyPath("/home//foo/"); // Output: "/home/foo"
 * simplifyPath("/../"); // Output: "/"
 * simplifyPath("/a/./b/../../c/"); // Output: "/c"
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function simplifyPath(path) {
  let stack = [];

  let splited = path.split("/");

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] == "" || splited[i] == ".") continue;

    if (splited[i] == "..") {
      stack.pop();
    } else {
      stack.push(splited[i]);
    }
  }

  return `/${stack.join("/")}`;
}

let path = "/home//foo/";

console.log(simplifyPath(path));

path = "/home/user/Documents/../Pictures";

console.log(simplifyPath(path));

path = "/../";

console.log(simplifyPath(path));

path = "/.../a/../b/c/../d/./";

console.log(simplifyPath(path));
