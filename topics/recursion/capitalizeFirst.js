/**
 * Capitalize first letter of each value in the array.
 * @param {string[]} arr
 */
function capitalizeFirst(arr) {
  if (arr.length === 0) return arr;
  return [].concat(
    arr[0][0].toUpperCase() + arr[0].slice(1),
    capitalizeFirst(arr.slice(1))
  );
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
