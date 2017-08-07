'use strict';

module.exports = {
  'valid': [
    [1],
    [undefined],
    ['hello'],
    {
      'key1': 'value1'
    }
  ],
  'invalid': [undefined, null, 'test', 1, NaN, 0, true, () => {}, new Date()],
  'callbackInvalid': [undefined, [], {}, null, 'test', 1, NaN, 0, true, new Date()]
};
