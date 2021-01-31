/**
 * Use two points, left and right
 * Compare left and right
 *  if same, advance right + 1
 *  if different, increment counter, make left = right and advance right + 1
 *  return count
 */

// Space O(1) | Time O(n)
// (int[]) -> int
function countUniqueValuesInitial(arr) {
  // if array blank, 0 pairs
  if (!arr.length) return 0;

  let uniqueCnt = 0,
    left = 0,
    right = 1;
  while (left < arr.length) {
    // if pairs match, keep advancing right pointer until finding a dif val
    if (arr[left] === arr[right]) {
      right++;
    } else {
      uniqueCnt++;
      left = right;
      right++;
    }
  }
  return uniqueCnt;
}

/**
 * Solution is helpful because if we needed to we could return the list of
 * unique pairs by slicing i off the original
 * note, if we wanted to slice it we would still need to increment i by one
 * b/c slice is up to.
 * @param {int[]} arr
 */

// Space O(1) | Time O(n)
// (int[]) -> int
function countUniqueValues(arr) {
  // if array blank, 0 pairs
  if (!arr.length) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // add 1 because when j goes out of bounds, we'll miss the final increment
  // of i
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 2, 3, 4, 4])); // 4
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
