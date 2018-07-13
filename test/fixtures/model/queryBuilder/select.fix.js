'use strict';

module.exports = {
  'SELECT *': [
    [],
    new Array(),
    [undefined, false, 0, null, NaN],
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
