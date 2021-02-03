/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
function mergeArrays(arr1, arr2) {
  const newArr = [];
  let arr1Idx = 0,
    arr2Idx = 0;
  while (arr1Idx < arr1.length || arr2Idx < arr2.length) {
    const arr1IdxVal = arr1[arr1Idx],
      arr2IdxVal = arr2[arr2Idx];
    if (arr1IdxVal === undefined) {
      return newArr.concat(arr2.slice(arr2Idx));
    } else if (arr2IdxVal === undefined) {
      return newArr.concat(arr1.slice(arr1Idx));
    }

    if (arr1IdxVal < arr2IdxVal) {
      newArr.push(arr1IdxVal);
      arr1Idx++;
    } else {
      newArr.push(arr2IdxVal);
      arr2Idx++;
    }
  }
  return newArr;
}

function mergeSort(arr) {}

console.log(mergeArrays([4, 23], [1, 5, 6])); // [ 1, 4, 5, 6, 23 ]
console.log(mergeArrays([4, 5, 25], [-1, 2, 25])); // [ 1, 4, 5, 23, 25 ]
