// O(2N) Space | O(3N) Time
// (str) -> boolean
function validAnagramInitial(str1, str2) {
  if (str1.length !== str2.length) return false;

  // init frequency counters
  const counterStr1 = {};
  const counterStr2 = {};

  // record frequency of each string
  for (const ch of str1) {
    // if undefined, default to 0 before adding 1
    counterStr1[ch] = (counterStr1[ch] || 0) + 1;
  }
  for (const ch of str2) {
    // if undefined, default to 0 before adding 1
    counterStr2[ch] = (counterStr2[ch] || 0) + 1;
  }

  // check that all keys appear in proper frequency
  for (const ch of str1) {
    if (counterStr1[ch] !== counterStr2[ch]) {
      return false;
    }
  }
  return true;
}

// O(N) Space | O(2N) Time
// (str) -> boolean
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // init frequency counter
  const counterStr1 = {};

  // record frequency of each string
  for (const ch of str1) {
    // if undefined, default to 1
    counterStr1[ch] ? (counterStr1[ch] += 1) : (counterStr1[ch] = 1);
  }

  // check that all keys appear in proper frequency
  for (const ch of str2) {
    // if undefined or 0, return false; b/c there are no letters left in this frequency
    if (!counterStr1[ch]) {
      return false;
    }
    counterStr1[ch] -= 1;
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('abb', 'bab')); // true
console.log(validAnagram('xxa', 'xxb')); // false
console.log(validAnagram('a', '')); // false
console.log(validAnagram('abe', 'babe')); // false
console.log(validAnagram('aaaa', 'babe')); // false
