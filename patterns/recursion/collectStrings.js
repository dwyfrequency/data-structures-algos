function collectStrings(obj) {
  return Object.keys(obj).reduce((accum, key) => {
    const value = obj[key];
    if (typeof value === 'string') {
      accum = accum.concat(value);
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      accum = accum.concat(collectStrings(value));
    }
    return accum;
  }, []);
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
