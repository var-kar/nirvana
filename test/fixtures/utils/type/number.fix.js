'use strict';

module.exports = {
  'number': [
    1,
    1.0,
    -1,
    -0,
    1e10,
    NaN,
    -Infinity,
    Infinity,
    234234234234234234,
    234234234234234234345353453453453453,
    0,
    123e-5,
    0xFF,
    0xDD,
    -'4',
    +false,
    -true
  ],
  'unsafeInt': [
    343453453453452352324323423422343453453434524,
    343453453453452352324323423422343453453434524.234234,
    Number.MAX_SAFE_INTEGER + 1,
    Number.MIN_SAFE_INTEGER - 1,
    Number.MAX_VALUE
  ],
  'int': [
    +'1',
    -0,
    -0.0,
    -1.0,
    +new Date(),
    -new Date()
  ],
  'float': [
    Number.EPSILON,
    0.34234,
    -0.34234,
    parseFloat(1.1),
    parseFloat(-1.1),
    3453453453.34523423,
    3453453453.3452342323323424234234234234242342342342342342342342,
    Number.MIN_VALUE
  ],
  'infinite': [
    Infinity,
    -Infinity,
    (1 / 0),
    (-1 / 0)
  ],
  'NaN': [
    NaN,
    (221 / 'sdfsdf'),
    (44 / 'sdfsd')
  ],
  'invalid': [undefined, null, {}, [], 'test', 'NaN', true, () => {}, new Date()],
  'nativeInvalid': [{}, [], 'test', 'NaN', true, () => {}, new Date()]
};
