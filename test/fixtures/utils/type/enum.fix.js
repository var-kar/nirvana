'use strict';

module.exports = {
  'enum': ['Hello', 'World', '1', '144', 123, false, new Date('2013-01-01 00:00:00').toISOString()],
  'valid': [
    'Hello',
    'World',
    '1',
    '144',
    123,
    false,
    new Date('2013-01-01 00:00:00').toISOString()
  ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, true, () => {}],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, [], () => {}, true]
};
