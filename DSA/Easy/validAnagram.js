/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
*/
let s = "anagram";
let t = "nagaram";
// This function checks if two strings are anagrams of each other
function isAnagram(s, t) {
  // If the lengths of the two strings are not equal, they cannot be anagrams
  if (s.length !== t.length) return false;
  // Create a hash object to store the frequency of each character in the first string
  let hashed = s.split("").reduce((acc, cur) => {
    // If the character is already in the hash object, increment its count
    if (cur in acc) {
      acc[cur]++;
      // Otherwise, add the character to the hash object with a count of 1
    } else {
      acc[cur] = 1;
    }
    // Return the updated hash object
    return acc;
  }, {});

  // Iterate through the characters in the second string
  for (let i = 0; i < t.length; i++) {
    // If the character is in the hash object, decrement its count
    if (hashed[t[i]]) {
      hashed[t[i]]--;
      // Otherwise, the second string is not an anagram of the first string
    } else {
      return false;
    }
  }
  // If all characters in the second string have been accounted for, the strings are anagrams
  return true;
}

//This function checks if two strings are anagrams of each other using a brute force method
function isAnagramBruteForce(s, t) {
  //Check if the lengths of the two strings are equal
  if (s.length !== t.length) return false;
  //Split the strings into arrays, sort the arrays, and join them back into strings
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  //Return true if the sorted strings are equal, otherwise return false
  return sortedS === sortedT;
}

console.log(isAnagram(s, t));
console.log(isAnagramBruteForce(s, t));
