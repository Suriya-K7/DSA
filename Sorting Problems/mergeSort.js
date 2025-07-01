let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

// This function takes an array as an argument and returns a sorted array using the merge sort algorithm
function mergeSortArray(arr) {
  // If the array has a length of 1 or less, return the array
  if (arr.length <= 1) return arr;

  // Calculate the middle index of the array
  let mid = Math.floor(arr.length / 2);
  // Recursively call mergeSortArray on the left half of the array
  let left = mergeSortArray(arr.slice(0, mid));
  // Recursively call mergeSortArray on the right half of the array
  let right = mergeSortArray(arr.slice(mid));

  // Merge the two sorted halves
  return merge(left, right);
}

// This function takes two arrays as parameters and merges them into a single sorted array
function merge(left, right) {
  // Create an empty array to store the sorted elements
  let sorted = [];

  // While there are still elements in both arrays
  while (left.length && right.length) {
    // If the first element in the left array is less than the first element in the right array
    if (left[0] < right[0]) {
      // Add the first element in the left array to the sorted array and remove it from the left array
      sorted.push(left.shift());
    } else {
      // Otherwise, add the first element in the right array to the sorted array and remove it from the right array
      sorted.push(right.shift());
    }
  }

  // Return the sorted array, along with any remaining elements in the left and right arrays
  return [...sorted, ...left, ...right];
}

console.log(mergeSortArray(arr));
