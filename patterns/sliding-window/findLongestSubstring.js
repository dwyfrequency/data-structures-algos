// TODO finish solution

/***
 * NOTE, WE WERE STUMPED BY THESE PROBLEMS
 * NEED TO REVIEW IN DEPTH!!!!!!!!!!!!!!!
 * NEED TO REVIEW IN DEPTH!!!!!!!!!!!!!!!
 * NEED TO REVIEW IN DEPTH!!!!!!!!!!!!!!!
 */

/*
 Approach:
 create left and right pointers
 create hashmap to store {[character]: index}
 while right is not len of str:
  we'll iterate the right pointer and check hashmap
    if char exists:
      store old index
      record new index
      move left old index + 1
    else
      add char to map
      calc and store length
    iterate right
*/

/**
 * Retrieve length of longest contiguous substring with unique characters.
 * @param {string} str
 */
function findLongestSubstringBlah(str) {
  // edge cases
  if (!str.length) return 0;
  if (str.length === 1) return 1;

  const map = {};
  let left = 0,
    right = 0,
    maxLength = -Infinity;
  while (right < str.length) {
    const currentChar = str[right];
    if (map[currentChar] !== undefined) {
      const prevLeft = map[currentChar];
      map[currentChar] = right;
      left = prevLeft + 1;
    } else {
      map[currentChar] = right;
      maxLength = Math.max(right - left + 1, maxLength);
    }
    right++;
  }
  return maxLength;
}

/**
 * Retrieve length of longest contiguous substring with unique characters.
 * @param {string} str
 */
function findLongestSubstring(str) {
  // edge cases
  if (!str.length) return 0;
  if (str.length === 1) return 1;

  const map = {};
  let left = 0,
    right = 0,
    maxLength = -Infinity;
  while (right < str.length) {
    const currentChar = str[right];
    if (map[currentChar]) {
      left = right;
      map[currentChar] = true;
    } else {
      map[currentChar] = right;
      maxLength = Math.max(right - left + 1, maxLength);
    }
    right++;
  }
  return maxLength;
}

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('b')); // 1
// console.log(findLongestSubstring('bab')); // 2
// console.log(findLongestSubstring('babl')); // 3
// console.log(findLongestSubstring('rithmschool')); // 7
// console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('wellthere')); // 5
console.log(findLongestSubstring('wekellthherdc')); // 5
