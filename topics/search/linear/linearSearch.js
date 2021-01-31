function linearSearch(arr, searchVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchVal) return i;
  }
  return -1;
}

console.log(linearSearch([5, 3, 9, 4], 1)); // -1
console.log(linearSearch([5, 3, 9, 4], 4)); // 3
