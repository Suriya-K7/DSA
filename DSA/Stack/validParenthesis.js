/**
 * **Stack Class**
 *
 * A custom implementation of a **stack data structure** using an array.
 *
 * ### Features:
 * - `push(data)` — Adds an element to the top of the stack.
 * - `pop()` — Removes the top element from the stack.
 * - `tos()` — Returns the top element without removing it.
 *
 * ### Properties:
 * - `item` (`any[]`) — Internal array to store stack elements.
 * - `top` (`number`) — Index of the top element.
 *
 * @example
 * const stack = new Stack();
 * stack.push("(");
 * stack.tos(); // returns "("
 * stack.pop();
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
class Stack {
  constructor() {
    this.item = [];
    this.top = -1;
  }
  push(data) {
    this.item.push(data);
    this.top++;
  }
  pop() {
    this.item.pop();
    this.top--;
  }
  tos() {
    return this.item[this.top];
  }
}

/**
 * **isValidParenthesis Function**
 *
 * Checks whether a given string of brackets is **valid (balanced and correctly nested)**.
 *
 * ### Logic:
 * - Uses a `Stack` to track open brackets.
 * - When a closing bracket is found, checks if it matches the top of the stack.
 * - If all brackets match correctly, stack should be empty at the end.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * ### Params:
 * - `s` (`string`) — A string containing only the characters `'(', ')', '{', '}', '[', ']'`.
 *
 * ### Returns:
 * - `boolean` — `true` if the string is a valid sequence of brackets, otherwise `false`.
 *
 * ### Example:
 * ```js
 * isValidParenthesis("()[]{}");    // true
 * isValidParenthesis("([)]");      // false
 * isValidParenthesis("{[]}");      // true
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function isValidParenthesis(s) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let stack = new Stack();

  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (obj[stack.tos()] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.item.length ? false : true;
}

let s = "()[]{}";
console.log(isValidParenthesis(s));
