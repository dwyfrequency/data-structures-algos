/**
 *
 * @param {int[]} arr
 */
function bubbleSort(arr) {
  // len - 1 b/c we are swapping + 1 so we don't want to go out of bounds
  for (let right = arr.length - 1; right > 0; right--) {
    for (let left = 0; left < right; left++) {
      if (arr[left] > arr[left + 1]) {
        // destructing assignment
        [arr[left], arr[left + 1]] = [arr[left + 1], arr[left]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 23, 5, 6, 1])); // [ 1, 4, 5, 6, 23 ]
