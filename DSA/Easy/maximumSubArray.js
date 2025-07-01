/**
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//This function takes an array of numbers as an argument and returns the maximum sum of a contiguous subarray
function maxSubArray(nums) {
  //Initialize the current maximum sum to the first element of the array
  let curMax = nums[0];
  //Initialize the updated maximum sum to the first element of the array
  let updatedMax = nums[0];
  //Loop through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    //Update the current maximum sum to the maximum of the current element and the sum of the current element and the previous maximum sum
    curMax = Math.max(nums[i], curMax + nums[i]);
    //Update the updated maximum sum to the maximum of the current maximum sum and the previous updated maximum sum
    updatedMax = Math.max(curMax, updatedMax);
  }

  //Return the updated maximum sum
  return updatedMax;
}

console.log(maxSubArray(nums));
