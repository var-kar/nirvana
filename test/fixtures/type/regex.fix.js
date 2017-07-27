'use strict';

module.exports = {
  'valid': [
    /nirvana/i,
    /eighteen\+/,
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  ],
  'invalid': [undefined, null, {}, 'test', 1, NaN, 0, true, () => {}, new Date()],
  'nativeInvalid': [{}, 'test', 1, NaN, 0, true, () => {}, new Date()]
};
