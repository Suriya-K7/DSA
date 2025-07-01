let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

// This function takes an array as an argument and returns a sorted array using the quicksort algorithm
function quickSort(arr) {
  // If the array has a length of 1 or less, return the array
  if (arr.length <= 1) return arr;

  // Set the first element of the array as the start point
  let start = arr[0];
  // Create two empty arrays to hold elements less than and greater than the start point
  let left = [];
  let right = [];

  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is less than the start point, push it to the left array
    if (arr[i] < start) {
      left.push(arr[i]);
      // Otherwise, push it to the right array
    } else {
      right.push(arr[i]);
    }
  }

  // Return a new array that is the result of recursively sorting the left and right arrays,
  // and then concatenating the start point in the middle
  return [...quickSort(left), start, ...quickSort(right)];
}

console.log(quickSort(arr));
