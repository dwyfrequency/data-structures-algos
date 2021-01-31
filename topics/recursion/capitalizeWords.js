// Space O(N) | Time O(N)
function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  const str = arr[0];
  return [].concat(str.toUpperCase(), capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
