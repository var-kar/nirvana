'use strict';

module.exports = {
  'valid': [
              [],
              new Array(),
              [1,2,3,4,5],
              [undefined, false, 0, null, NaN],
              ['hello', 'world']
          ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, true, () => {}, new Date()],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, true, () => {}, new Date()]
};
