'use strict';

module.exports = {
  'undefined': [
    undefined, , undefined
  ],
  'null': [
    null
  ],
  'invalid': [{}, 'test', 1, NaN, 0, true, false, () => {}, new Date()]
};
