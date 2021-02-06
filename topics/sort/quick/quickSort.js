/*
Approach:
Check pivot value against start index
  if arr[startIdx] < pivotValue

*/

/**
 * Take array and move less than values to left and greater than values to
 * the right of the pivot.
 * @param {number[]} arr
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {number[]}
 */
function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  const pivotVal = arr[startIdx];
  let pivotIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotVal) {
      pivotIdx++; // number of how many things are less than the pivot
      // swap current index with the pivot index. If everything behind it is
      // small then it just swaps with itself. If the thing behind it is greater
      // than the pivot, then we'll be swapping those two indices.
      swapIndices(arr, i, pivotIdx);
    }
  }

  swapIndices(arr, startIdx, pivotIdx);
  return arr;
}

function swapIndices(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function quickSort() {}

console.log(pivot([5, -1, 6, 7])); // [-1, 5, 6, 7]
console.log(pivot([5, 4, 1, 6])); // [1, 4, 5, 6]
console.log(pivot([1, 4, -1, 6, 3, 0])); // [0, -1, 1, 4, 6, 3]
