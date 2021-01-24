// Space O(n) | Time O(n) - time to create set from args
function areThereDuplicatesWithSet(...args) {
  return args.length !== new Set(args).size;
}

// Space O(n) | Time O(n) -
function areThereDuplicatesWithMap(...args) {
  const freqCnt = {};
  for (const arg of args) {
    if (freqCnt[arg]) {
      return true;
    }
    freqCnt[arg] = true;
  }
  return false;
}
