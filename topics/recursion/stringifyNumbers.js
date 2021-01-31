/**
 * Return object with all number values as strings
 * @param {Object} obj
 */
// Space O(N) |Time O(N)
function stringifyNumbers(obj) {
  return Object.keys(obj).reduce((accum, key) => {
    const val = obj[key];
    if (typeof val === 'number') {
      // update number to string
      accum[key] = `${val}`;
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      // send objects back into function
      accum[key] = stringifyNumbers(val);
    } else {
      // reassign any non-transformed values into accumulator
      accum[key] = val;
    }
    return accum;
  }, {});
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
