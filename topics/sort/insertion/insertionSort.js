/**
 * Sort array by gradually comparing and making subset of array sorted.
 * @param {int[]} array
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swapIndexValues(array, j - 1, j);
      } else {
        break;
      }
    }
  }
  return array;
}

function swapIndexValues(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(insertionSort([4, 23, 5, 6, 1])); // [ 1, 4, 5, 6, 23 ]
console.log(insertionSort([4, 23, 5, 25, 1])); // [ 1, 4, 5, 23, 25 ]
