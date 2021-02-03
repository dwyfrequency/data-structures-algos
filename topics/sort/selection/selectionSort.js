function selectionSort(array) {
  for (let left = 0; left < array.length - 1; left++) {
    // keep them in the loop so they reset each time
    // store so we know which values and indexes to swap at the end
    let minValue = Infinity;
    let minIdx = Infinity;
    for (let right = left; right < array.length; right++) {
      const currValue = array[right];
      if (minValue > currValue) {
        minValue = currValue;
        minIdx = right;
      }
    }
    [array[left], array[minIdx]] = [array[minIdx], array[left]];
  }
  return array;
}
console.log(selectionSort([4, 23, 5, 6, 1])); // [ 1, 4, 5, 6, 23 ]
console.log(selectionSort([4, 23, 5, 25, 1])); // [ 1, 4, 5, 23, 25 ]
