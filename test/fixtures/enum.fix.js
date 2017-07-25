'use strict';

module.exports = {
  'enum': ['Hello', 'World', '1', '144', 123, true, new Date('2013-01-01 00:00:00'), ['test']],
  'valid': [
    'Hello',
    'World',
    '1',
    '144',
    123,
    true,
    new Date('2013-01-01 00:00:00'),
    ['test']
  ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, [], true, () => {}],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, [], () => {}, true]
};
