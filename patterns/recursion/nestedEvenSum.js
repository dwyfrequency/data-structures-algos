/**
 * Return the sum of all even numbers in an object which may contain nested
 * objects.
 * @param {*} obj1
 */
// (Object, Object) -> int
function nestedEvenSum(obj) {
  return Object.values(obj).reduce((accum, curr) => {
    if (typeof curr === 'number' && curr % 2 === 0) {
      // sum any even numbers
      return accum + curr;
    } else if (typeof curr === 'object') {
      // unpack sum any inner objects
      return accum + nestedEvenSum(curr);
    } else {
      // skip any non-nums or objects
      return accum;
    }
  }, 0);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
