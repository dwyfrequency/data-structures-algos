/*
Approach:
It is a sorted input array so we can use two pointers. We'll start one at the
beginning of the array and one at the end. Do take the average,
  if avg is too small, move the left pointer
  if avg is too large, move the right pointer
while left < right

*/

/**
 * Find if there are any pairs in the array which equal num.
 * @param {int[]} arr
 * @param {number} num
 */
// Space O(1) | Time O(N)
// (int[], number) -> boolean
function averagePair(arr, num) {
  if (!arr || arr.length < 2) return false;
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;
    if (avg < num) {
      left++;
    } else if (avg > num) {
      right--;
    } else {
      return true;
    }
  }
  return false;
}

// Test Cases
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 4, 5, 7, 10], 5)); // true
console.log(averagePair([-1, 3, 4, 20], 2.5)); // false
console.log(averagePair([], 4)); // false
