/**
 * Determine if substring exists within larger string.
 * @param {string} searchStr
 * @param {string} subStr
 */
// Space O(1) | Time O(N*M)
function naiveStringWhile(searchStr, subStr) {
  // if search string is too short then sub string can't exist in it.
  if (searchStr.length < subStr.length) return false;

  // init points
  let searchStrIdx = 0;
  let subStrIdx = 0;
  while (searchStrIdx < searchStr.length) {
    // if both values equal, move to next character in sub string
    if (searchStr[searchStrIdx] === subStr[subStrIdx]) {
      subStrIdx++;
    } else {
      // if doesn't exist, reset counter
      subStrIdx = 0;
    }
    // if the index is the length of the counter, we've found the string
    if (subStr.length === subStrIdx) {
      return true;
    }
    // increment search Index
    searchStrIdx++;
  }
  return false;
}

function naiveString(searchStr, subStr) {
  if (searchStr.length < subStr.length) return false;
  for (let index = 0, subIdx = 0; index < searchStr.length; index++) {
    if (searchStr[index] === subStr[subIdx]) {
      subIdx++;
    } else {
      subIdx = 0;
    }
    if (subIdx === subStr.length) return true;
  }
  return false;
}

console.log(naiveString('weet', 'we')); // true
console.log(naiveString('heckonearth', 'earther')); // false
console.log(naiveString('heckonearth', 'earth')); // true
