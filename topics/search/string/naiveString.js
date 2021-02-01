/**
 * Determine if substring exists within larger string.
 * @param {string} searchStr
 * @param {string} subStr
 */
// Space O(1) | Time O(N*M)
function naiveStringWhile(searchStr, subStr) {
  if (searchStr.length < subStr.length) return false;
  let searchStrIdx = 0;
  let subStrIdx = 0;
  while (searchStrIdx < searchStr.length) {
    if (searchStr[searchStrIdx] === subStr[subStrIdx]) {
      subStrIdx++;
    } else {
      subStrIdx = 0;
    }
    if (subStr.length === subStrIdx) {
      return true;
    }
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
