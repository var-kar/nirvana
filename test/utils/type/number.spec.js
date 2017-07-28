/**
 * Created by Karthik Vasudevan on 04/04/2017.
 * License: MIT
 */

'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleNumber = require('../../fixtures/utils/type/number.fix');
const assert = require('chai').assert;

describe('NITrueTypeOf', () => {
  describe('NINumber', () => {
    it('should be a number', () => {
      sampleNumber.number.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NINumber);
      });
    });
    it('should not be a number', () => {
      sampleNumber.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NINumber);
      });
    });
  });
});
describe('NITypeOf', () => {
  describe('NINumber', () => {
    it('should be a Number for unsafe integer', () => {
      sampleNumber.unsafeInt.niLoop(function(value) {
        assert.equal(niTypeOf(value), NINumber);
      });
    });
  });
  describe('NIInt', () => {
    // All .000 will be converted to INT by javascript.
    // So if you have a float like 11.0 it will be an INT
    it('should be an Int', () => {
      sampleNumber.int.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIInt);
      });
    });
  });
  describe('NIFloat', () => {
    it('should be a Float', () => {
      sampleNumber.float.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIFloat);
      });
    });
  });
  describe('NIInfinite', () => {
    it('shoule be a NIInfinity', () => {
      sampleNumber.infinite.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIInfinity);
      });
    });
  });
  describe('NINaN', () => {
    it('should be a NaN', () => {
      sampleNumber.NaN.niLoop(function(value) {
        assert.equal(niTypeOf(value), NINaN);
      });
    });
  });
});
describe('NIIsOfType', () => {
  it('should be a number', () => {
    sampleNumber.number.niLoop(function(value) {
      assert.isTrue(niIsOfType(value, NINumber));
    });
  });
  it('should be an int', () => {
    sampleNumber.int.niLoop(function(value) {
      assert.isTrue(niIsOfType(value, NIInt));
    });
  });
  it('should be a float', () => {
    sampleNumber.float.niLoop(function(value) {
      assert.isTrue(niIsOfType(value, NIFloat));
    });
  });
  it('should be a NaN', () => {
    sampleNumber.NaN.niLoop(function(value) {
      assert.isTrue(niIsOfType(value, NINaN));
    });
  });
  it('should be an Infinity', () => {
    sampleNumber.infinite.niLoop(function(value) {
      assert.isTrue(niIsOfType(value, NIInfinity));
    });
  });
});
describe('Native Extend', () => {
  it('should be a number', () => {
    sampleNumber.number.niLoop(function(value) {
      assert.isTrue(value.niIsOfType(NINumber));
    });
  });
  it('should be an int', () => {
    sampleNumber.int.niLoop(function(value) {
      assert.isTrue(value.niIsOfType(NIInt));
    });
  });
  it('should be a float', () => {
    sampleNumber.float.niLoop(function(value) {
      assert.isTrue(value.niIsOfType(NIFloat));
    });
  });
  it('should be a NaN', () => {
    sampleNumber.NaN.niLoop(function(value) {
      assert.isTrue(value.niIsOfType(NINaN));
    });
  });
  it('should be an Infinity', () => {
    sampleNumber.infinite.niLoop(function(value) {
      assert.isTrue(value.niIsOfType(NIInfinity));
    });
  });
});
