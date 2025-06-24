let arr = [3, 6, 2, 7, 0, 8, 9, 1, 5, 4];

// Function to sort an array using the selection sort algorithm
function selectionSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Set the current index as the minimum
    let minIndex = i;
    // Loop through the array starting from the next index
    for (let j = i + 1; j < arr.length; j++) {
      // If the current element is less than the minimum, set the minimum to the current index
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the current element with the minimum element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  // Return the sorted array
  return arr;
}

console.log(selectionSort(arr));
