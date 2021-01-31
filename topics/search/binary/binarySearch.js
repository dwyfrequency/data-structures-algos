// Space O(1) | Time O(log n)
// (arr) -> boolean
function binarySearch(arr, searchVal) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivotIndex = Math.floor((right + left) / 2);
    const pivotValue = arr[pivotIndex];
    if (searchVal === pivotValue) {
      return pivotIndex;
    } else if (searchVal > pivotValue) {
      // reduce new window size excluding the pivot value as pivot val has
      // already been determined to be not the answer
      left = pivotIndex + 1;
    } else {
      // reduce new window size excluding the pivot value as pivot val has
      // already been determined to be not the answer
      right = pivotIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 8, 9], 9)); // true
console.log(binarySearch([1, 2, 4, 6, 7, 8, 9], 9)); // true
console.log(binarySearch([1, 2, 4, 6, 7, 8, 9], 2)); // true
console.log(binarySearch([1, 2, 4, 7, 8, 9], 2)); // true
console.log(binarySearch([1, 2, 4, 6, 7, 8, 9], 19)); // false
console.log(binarySearch([1, 2, 4, 6, 7, 9], 3)); // false
