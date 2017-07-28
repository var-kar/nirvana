'use strict';

module.exports = {
  'valid': [
    {},
    new Object(),
    {'key': 'value'}
  ],
  'invalid': [undefined, null, [], 'test', 1, NaN, 0, true, () => {}, new Date()],
  'nativeInvalid': [[], 'test', 1, NaN, 0, true, () => {}, new Date()]
};
