'use strict';

module.exports = {
  'valid': [
    () => {},
    function() {},
    class Test {}
  ],
  'invalid': [undefined, null, [], 'test', 1, NaN, 0, true, {}, new Date()],
  'nativeInvalid': [[], 'test', 1, NaN, 0, true, {}, new Date()]
};
