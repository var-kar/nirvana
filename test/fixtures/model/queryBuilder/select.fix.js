'use strict';

module.exports = {
  '*': [
    [],
    new Array(),
    [1,2,3,4,5],
    [undefined, false, 0, null, NaN],
    ['hello', 'world'],
    null,
    undefined,
    {},
    NaN,
    0,
    true,
    false,
    () => {},
    new Date()
  ]
};
