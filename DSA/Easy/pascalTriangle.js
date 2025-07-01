let num = 10;
// Function to generate Pascal's Triangle
function pascalTriangle(num) {
  // Initialize an empty array to store the output
  let output = [];

  // If the input number is greater than or equal to 1, push the first row of Pascal's Triangle to the output array
  if (num >= 1) output.push([1]);
  // If the input number is greater than or equal to 2, push the second row of Pascal's Triangle to the output array
  if (num >= 2) output.push([1, 1]);

  // Loop through the remaining rows of Pascal's Triangle
  for (let i = 2; i < num; i++) {
    // Initialize the first and last elements of the row
    let first = (last = 1);
    // Get the previous row of Pascal's Triangle
    let prevArr = output[i - 1];

    // If the previous row has only two elements, push the current row to the output array
    if (prevArr.length === 2) {
      output.push([first, first + last, last]);
    } else {
      // Initialize variables to keep track of the left and right elements of the previous row
      let left = 0;
      let right = 1;
      // Initialize an empty array to store the current row
      let arrToAdd = [];

      // Loop through the previous row and calculate the sum of the left and right elements
      while (right < prevArr.length) {
        arrToAdd.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }
      // Push the current row to the output array
      output.push([first, ...arrToAdd, last]);
    }
  }

  // Return the output array
  return output;
}

console.log(pascalTriangle(num));
