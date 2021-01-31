/**
 * Mimic Math.pow with recursion
 * @param {int} base
 * @param {int} exponent
 */
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(3, 3)); // 27
console.log(power(2, 4)); // 16
console.log(power(4, 1)); // 4
