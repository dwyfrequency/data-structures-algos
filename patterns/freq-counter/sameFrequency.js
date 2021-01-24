// Space O(N) where is N is num1 length | Time O(N)
// (int, int) -> boolean
function sameFrequency(num1, num2) {
  const freqCounter1 = {};
  let num1Cnt = 0;
  let num2Cnt = 0;

  //
  while (num1 >= 1) {
    // take the remainder which will be the final digit
    const key = num1 % 10;
    freqCounter1[key] ? (freqCounter1[key] += 1) : (freqCounter1[key] = 1);
    // remove the final digit by only taking the integer of / 10.
    num1 = Math.trunc(num1 / 10);
    // increase count of numbers scene; this is so we can compare the length later
    num1Cnt++;
  }

  while (num2 >= 1) {
    const key = num2 % 10;
    // if key, exists decrement. If no key, return false.
    if (freqCounter1[key]) {
      freqCounter1[key] -= 1;
    } else {
      return false;
    }
    num2 = Math.trunc(num2 / 10);
    num2Cnt++;
  }

  // if the length of the numbers is different, they cannot have same frequency
  return num1Cnt === num2Cnt;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(21, 312)); // false
console.log(sameFrequency(213, 312)); // true
console.log(sameFrequency(213, 332)); // false
console.log(sameFrequency(2213, 3232)); // false
console.log(sameFrequency(2213, 3212)); // true
