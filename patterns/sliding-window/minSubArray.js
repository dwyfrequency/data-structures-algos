/*
Approach:
Create window of left and right pointer.
while right is less than the length
  verify if it equals the target or is greater
    record length then:
      is less -> move right pointer forward
      is greater -> move the both right pointer and left pointer forward
  return max length
*/

// TODO revisit and determine solution!!!

/**
 * Find minimum length of contiguous subarray that is greater than or equal to
 * the target.
 * @param {int[]} arr
 * @param {int} target
 */
// Space O(1) | Time O(N)
// (int[], int) -> int|null
function minSubArray(arr, target) {
  if (!arr || !arr.length) return 0;
  let left = 0,
    right = 0,
    currSum = arr[right],
    minLength = Infinity;
  while (right < arr.length) {
    if (currSum >= target) {
      minLength = Math.min(right - left + 1, minLength);
      currSum -= arr[left];
      left++;
    } else {
      right++;
      currSum += arr[right];
    }
    if (minLength === 1) return 1;
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArray([2, 3, 1, 2, 4], 6)); // 2 b/c [2,4]
console.log(minSubArray([2, 3, 1, 2, 4, 3], 7)); // 2 b/c [4,3]
console.log(minSubArray([2, 1, 6, 5, 4, 2], 9)); // 2 b/c [5, 4]
console.log(minSubArray([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
