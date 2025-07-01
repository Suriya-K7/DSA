/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
*/

let s = "()[]{}";

// Define a class called Stack
class Stack {
  // Constructor function to initialize the stack
  constructor() {
    // Initialize an empty array to store the stack items
    this.item = [];
    // Initialize the top index of the stack to -1
    this.top = -1;
  }
  // Function to push an item onto the stack
  push(data) {
    // Add the item to the end of the array
    this.item.push(data);
    // Increment the top index
    this.top++;
  }
  // Function to pop an item off the stack
  pop() {
    // Remove the last item from the array
    this.item.pop();
    // Decrement the top index
    this.top--;
  }
  // Function to return the top item of the stack
  tos() {
    // Return the item at the top index
    return this.item[this.top];
  }
}

// Function to check if a string of brackets is valid
function isValid(s) {
  // Create an object to store the pairs of brackets
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
    "(": ")",
  };
  // Create a new stack
  let stack = new Stack();

  // Push the first character of the string onto the stack
  stack.push(s[0]);

  // Loop through the rest of the string
  for (let i = 1; i < s.length; i++) {
    // If the top of the stack is the opening bracket of the current character, pop the stack
    if (obj[stack.tos()] === s[i]) {
      stack.pop();
      // Otherwise, push the current character onto the stack
    } else {
      stack.push(s[i]);
    }
  }

  // Return true if the stack is empty, false otherwise
  return stack.item.length ? false : true;
}

console.log(isValid(s));
