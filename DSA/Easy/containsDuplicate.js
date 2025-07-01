let nums = [1, 2, 3, 1];

// This function checks if an array contains any duplicate numbers
function containsDuplicate(nums) {
  // Create a new Set object to store the numbers
  let set = new Set();

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // If the Set already contains the current number, return true
    if (set.has(nums[i])) {
      return true;
    }
    // Otherwise, add the current number to the Set
    set.add(nums[i]);
  }
  // If the loop completes without finding any duplicates, return false
  return false;
}

//This function checks if an array contains duplicate values using a Set
function containsDuplicateUsingSet(nums) {
  //Create a new Set from the array
  let set = new Set([...nums]);

  //Return true if the size of the Set is not equal to the length of the array, meaning there are duplicate values
  return set.size !== nums.length;
}

console.log(containsDuplicate(nums));

console.log(containsDuplicateUsingSet(nums));
