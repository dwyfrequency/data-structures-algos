/*
Approach:
Use two pointers, one for each string.
Search valueStr until you find a sequential char from keyStr.
while key pointer is less than the length
  if char found, advance pointer for keyStr.
  else increment valueStr pointer

*/

/**
 * Verify all characters from keyStr exist in valueStr in the proper order.
 * key does not need to be co
 * @param {string} keyStr
 * @param {string} valueStr
 */
// Space O(1) | Time O(N)
// (string, string) -> boolean
function isSubsequence(keyStr, valueStr) {
  // corner cases
  if (!valueStr || keyStr.length > valueStr.length) return false;

  // init pointers
  let keyPnt = 0,
    valuePnt = 0;
  while (valuePnt < valueStr.length) {
    // if we find the key early, else if we find a matching char, advance keyPnt
    // regardless, advance value pointer
    if (keyPnt === keyStr.length) {
      return true;
    } else if (valueStr[valuePnt] === keyStr[keyPnt]) {
      keyPnt++;
    }
    valuePnt++;
  }

  // check that we found the key length eventually
  return keyPnt === keyStr.length;
}

console.log(isSubsequence('helo', 'heelo')); // true
console.log(isSubsequence('hi', 'heelloi world')); // true
console.log(isSubsequence('acb', 'abc')); // false (order matters)
