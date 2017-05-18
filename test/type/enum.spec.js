/**
 * Created by Karthik Vasudevan on 10/04/2017.
 * License: MIT
 */
'use strict';
const assert = require('chai').assert;
require('../../src/utils/niType');
//enums doesn't have type or trueType checker
//enums can only be validated using niCompareWith
describe('NIIsOfType', () => {
  describe('NIEnum', () => {
    let testEnumArray = ['Hello', 'World', '1', '144', 123, null, undefined];
    it('should be a valid enum', () => {
      assert.isTrue(niIsOfType('Hello', NIEnum, testEnumArray));
      assert.isTrue(niIsOfType(123, NIEnum, testEnumArray));
      assert.isTrue(niIsOfType(null, NIEnum, testEnumArray));
      assert.isTrue(niIsOfType(undefined, NIEnum, testEnumArray));
    });
    it('should be an invalid enum', () => {
      assert.isFalse(niIsOfType('sdfws', NIEnum, testEnumArray));
      assert.isFalse(niIsOfType(345, NIEnum, testEnumArray));
      assert.isFalse(niIsOfType(NaN, NIEnum, testEnumArray));
      assert.isFalse(niIsOfType('sss', NIEnum, testEnumArray));
    });
  });
});

describe('Native Extend', () => {
  describe('NIEnum', () => {
    let testEnumArray = ['Hello', 'World', '1', '144', 123, null, undefined];
    it('should be a valid enum', () => {
      assert.isTrue('Hello'.niIsOfType(NIEnum, testEnumArray));
      assert.isTrue((123).niIsOfType(NIEnum, testEnumArray));
    });
    it('should be an invalid enum', () => {
      assert.isFalse('sdfws'.niIsOfType(NIEnum, testEnumArray));
      assert.isFalse((345).niIsOfType(NIEnum, testEnumArray));
      assert.isFalse(NaN.niIsOfType(NIEnum, testEnumArray));
      assert.isFalse('sss'.niIsOfType(NIEnum, testEnumArray));
    });
  });
});
