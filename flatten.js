const assert = require("assert");

function flatten(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  let flattenedArray = [];

  array.forEach(item => {

    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(flatten(item));
    } else {
      flattenedArray.push(item);
    }
  });

  return flattenedArray;
}

//tests
assert.deepEqual([1,2,3,4], flatten([ 1, [ 2, [ 3 ] ], 4 ]));
assert.deepEqual([null,undefined,3,4], flatten([ null, [ undefined, [ 3 ] ], 4 ]));
assert.deepEqual([2, 4.0, { "prop": { '1': 'One' } }, {}], flatten([ 2, [ 4.0, [ {"prop": {"1":"One"}} ] ], {} ]));