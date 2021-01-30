/*
Approach:
Evaluate one value at a time.
  If it is an array, we need to continue unpacking it.
  If it is not an array, add it to our current array.
Send any remaining values back to the function for further flattening.
*/

/**
 * Flatten any nested arrays into a flat array.
 * @param {T[]} arr
 */
function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return [];
  return [].concat(
    Array.isArray(arr[0]) ? flatten(arr[0]) : arr[0],
    flatten(arr.slice(1))
  );
}

console.log([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
console.log([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
console.log([[1], [2], [3]]); // [1,2,3]
console.log([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
