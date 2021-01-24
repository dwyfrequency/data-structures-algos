/**
 *
 */

/**
 * Find max sum of contiguous subarray.
 * Keeps a running sum of previously seen values. Each time we reach the size
 * of the restriction, we decrement the left value and add the right of the
 * window. After we compare, the curr sum to the max sum.
 * @param {int[]} arr
 * @param {int} subArrSize
 */
// (int[], int) -> int|null
function maxSubArray(arr, subArrSize) {
  if (!arr.length) return null;
  let maxSum = 0,
    currWindowSum = 0;
  let left = 0,
    right = 0;

  while (right < arr.length) {
    // window is now proper size, we advance it by deduction previous left value
    // to make room for the right most value
    if (right - left === subArrSize) {
      currWindowSum -= arr[left];
      left++;
    }
    currWindowSum += arr[right];
    right++;
    maxSum = Math.max(currWindowSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([1, 3, 7], 2)); // 10
console.log(maxSubArray([10, 3, 7, 4], 2)); // 13
console.log(maxSubArray([10, 4], 3)); // 14
