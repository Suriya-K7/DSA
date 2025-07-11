/**
 * **missingNumber Function** (Set-based)
 *
 * Finds the missing number from an array containing `n` distinct numbers
 * taken from `0` to `n`.
 *
 * ### Logic:
 * - Convert the array to a Set.
 * - Iterate from `0` to `n` (inclusive).
 * - Return the first number that is not in the Set.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n)
 *
 * @param {number[]} nums - Array of size `n` with numbers from `0` to `n`, missing one number.
 * @returns {number} - The missing number.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function missingNumber(nums) {
  let set = new Set([...nums]);

  for (let i = 0; i <= set.size; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

/**
 * **missingNumber2 Function** (Math Sum)
 *
 * Uses arithmetic formula to compute the missing number from a range of `0` to `n`.
 *
 * ### Logic:
 * - Compute expected sum: `n * (n + 1) / 2`
 * - Subtract actual sum of elements in the array.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of size `n` with numbers from `0` to `n`, missing one number.
 * @returns {number} - The missing number.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function missingNumber2(nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

/**
 * **missingNumberXOR Function** (Bitwise XOR)
 *
 * Uses XOR property to cancel out all matching indices and values.
 *
 * ### Logic:
 * - XOR all indices and all numbers in the array.
 * - Add `n` as one extra index.
 * - The remaining value will be the missing number.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of size `n` with numbers from `0` to `n`, missing one number.
 * @returns {number} - The missing number.
 * @author [Suriya](https://github.com/suriya-k7)
 */
function missingNumberXOR(nums) {
  let xor = nums.length;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }

  return xor;
}
let nums = [3, 0, 1];
console.log(missingNumber(nums));
console.log(missingNumber2(nums));
console.log(missingNumberXOR(nums));

nums = [0, 1];
console.log(missingNumber(nums));
console.log(missingNumber2(nums));
console.log(missingNumberXOR(nums));

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
console.log(missingNumber2(nums));
console.log(missingNumberXOR(nums));
