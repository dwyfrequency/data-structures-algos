// (int[]) -> int
function productOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + productOfArray(arr.slice(1));
}

console.log(productOfArray([5])); // 5
console.log(productOfArray([4, 6])); // 10
console.log(productOfArray([1, 2, 4, 6])); // 13
console.log(productOfArray([1, 2, 4, 8])); // 15
console.log(productOfArray([1, 2, 4, 8, 7])); // 22
