let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];
// Function to sort an array using insertion sort
function insertionSort(arr) {
  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Loop through the array from the current element backwards
    for (let j = i; j >= 0; j--) {
      // If the current element is less than the previous element, swap them
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  // Return the sorted array
  return arr;
}

console.log(insertionSort(arr));
