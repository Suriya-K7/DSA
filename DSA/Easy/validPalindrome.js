/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
let s = "A man, a plan, a canal: Panama";

//This function checks if a string is a palindrome
function isPalindrome(s) {
  //Call the isPal function and pass in the cleaned up string
  return isPal(cleanUp(s));
}

//This function takes a string as an argument and returns a new string with only lowercase letters and numbers
function cleanUp(s) {
  //Create a string of lowercase letters and numbers
  let char = "abcdefghijlkmnopqrstuvwxyz1234567890";
  //Create an empty string to store the cleaned up string
  let str = "";

  //Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    let letter = s[i].toLowerCase();
    //Check if the character is in the string of lowercase letters and numbers
    if (char.includes(letter)) {
      //If it is, add it to the cleaned up string
      str += letter;
    }
  }
  return str;
}

// This function checks if a string is a palindrome
function isPal(s) {
  // Initialize two pointers, one at the beginning and one at the end of the string
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    // If the characters at the two pointers are equal, move the pointers towards the center
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // If the characters at the two pointers are not equal, return false
      return false;
    }
  }
  // If the loop completes without returning false, the string is a palindrome
  return true;
}

console.log(isPalindrome(s));
