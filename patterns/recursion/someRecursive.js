/**
 * If any of the callbacks returns true, return true.
 * @param {int[]} arr
 * @param {function} callback
 */
// Space O(N) | Time O(N)
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
