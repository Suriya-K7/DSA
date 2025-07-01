let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

// Function to sort an array using bubble sort
function bubbleSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Loop through the array again
    for (let j = 0; j < arr.length - 1; j++) {
      // If the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // Return the sorted array
  return arr;
}

console.log(bubbleSort(arr));
