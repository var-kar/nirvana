'use strict';

module.exports = {
  'valid': [
    new Date(),
    new Date(1),
    new Date('sdfcdds'),
    new Date(undefined),
    new Date([]),
    new Date(NaN),
    new Date(() => {
    }),
    new Date('2017-01-10T00:00:00'),
    new Date(null)
  ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, [], true, () => {}],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, [], () => {}, true]
};
