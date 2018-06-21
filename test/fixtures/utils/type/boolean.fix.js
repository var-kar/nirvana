'use strict';

module.exports = {
  'valid': [
    new Boolean(1),
    new Boolean(0),
    new Boolean(null),
    new Boolean({}),
    new Boolean([]),
    new Boolean(NaN),
    new Boolean(() => {
    }),
    true,
    false
  ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, [], () => {}, new Date()],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, [], () => {}, new Date()]
};
