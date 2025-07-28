/**
 * **productExceptSelf Function**
 *
 * Returns an array `result` such that `result[i]` is the product of all elements of `nums`
 * except `nums[i]`, without using division and in **O(n)** time.
 *
 * ### Logic:
 * - First pass (left to right): populate `result[i]` with the product of all elements before index `i`.
 * - Second pass (right to left): multiply `result[i]` with the product of all elements after index `i`.
 * - Two accumulators `start` and `start2` track the prefix and suffix products respectively.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(1) (excluding the output array)
 *
 * ### Params:
 * - `nums` (`number[]`) — Array of integers where we compute product except self.
 *
 * ### Returns:
 * - `number[]` — Output array where each index contains the product of all other elements.
 *
 * ### Example:
 * ```js
 * productExceptSelf([1, 2, 3, 4]);
 * // Output: [24, 12, 8, 6]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function productExceptSelf(nums) {
  let result = [];
  let start = 1;
  let start2 = 1;

  for (let i = 0; i < nums.length; i++) {
    result.push(start);
    start *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * start2;
    start2 *= nums[i];
  }

  return result;
}

/**
 * **productExceptSelfBrute Function**
 *
 * Returns an array such that each element is the product of all elements in the input
 * array except the one at the current index, using a **brute-force approach** with
 * forward and backward pass arrays.
 *
 * ### Logic:
 * - First pass: build a forward product array `forw` (prefix products).
 * - Second pass: multiply each element in `forw` with a reverse suffix product (`start2`).
 * - Uses `unshift` to build the result in reverse order.
 *
 * ### Time Complexity: O(n)
 * ### Space Complexity: O(n) — uses two additional arrays: `forw` and `rev`.
 *
 * ### Params:
 * - `nums` (`number[]`) — Array of integers.
 *
 * ### Returns:
 * - `number[]` — Output array where each index contains the product of all other elements.
 *
 * ### Example:
 * ```js
 * productExceptSelfBrute([1, 2, 3, 4]);
 * // Output: [24, 12, 8, 6]
 * ```
 *
 * @author [Suriya](https://github.com/suriya-k7)
 */
function productExceptSelfBrute(nums) {
  let start = (start2 = 1);
  let forw = [];
  let rev = [];

  for (let index = 0; index < nums.length; index++) {
    forw.push(start);
    start *= nums[index];
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    rev.unshift(start2 * forw[index]);
    start2 *= nums[index];
  }

  return rev;
}

function productExceptSelfBruteExtra(nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let temp = nums.filter((_, index) => index !== i);

    res.push(selfProd(temp));
  }

  return res;
}
function selfProd(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]
console.log(productExceptSelf(nums));
console.log(productExceptSelfBrute(nums));
console.log(productExceptSelfBruteExtra(nums));

nums = [-1, 1, 0, -3, 3];
// Output: [0,0,9,0,0]
console.log(productExceptSelf(nums));
console.log(productExceptSelfBrute(nums));
console.log(productExceptSelfBruteExtra(nums));
