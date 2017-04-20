/**
 * Created by Karthik Vasudevan on 04/04/2017.
 * License: MIT
 */

'use strict';
const assert = require('chai').assert;
require('../../src/type/niType');

describe('NITrueTypeOf', () => {
  describe('NINumber', () => {
    it('should be a number', () => {
      assert.equal(niTrueTypeOf(1), NINumber);
      assert.equal(niTrueTypeOf(1.0), NINumber);
      assert.equal(niTrueTypeOf(-1), NINumber);
      assert.equal(niTrueTypeOf(-0), NINumber);
      assert.equal(niTrueTypeOf(1e10), NINumber);
      assert.equal(niTrueTypeOf(NaN), NINumber);
      assert.equal(niTrueTypeOf(-Infinity), NINumber);
      assert.equal(niTrueTypeOf(Infinity), NINumber);
      assert.equal(niTrueTypeOf(234234234234234234), NINumber);
      assert.equal(niTrueTypeOf(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueTypeOf(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueTypeOf(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueTypeOf(0), NINumber);
      assert.equal(niTrueTypeOf(123e-5), NINumber);
      assert.equal(niTrueTypeOf(0xFF), NINumber);
      assert.equal(niTrueTypeOf(0xDD), NINumber);
      assert.equal(niTrueTypeOf(-'4'), NINumber);
      assert.equal(niTrueTypeOf(+false), NINumber);
      assert.equal(niTrueTypeOf(-true), NINumber);
    });
    it('should not be a number', () => {
      assert.notEqual(niTrueTypeOf('345'), NINumber);
      assert.notEqual(niTrueTypeOf('0'), NINumber);
      assert.notEqual(niTrueTypeOf('sdfsdf'), NINumber);
      assert.notEqual(niTrueTypeOf('NaN'), NINumber);
      assert.notEqual(niTrueTypeOf(undefined), NINumber);
      assert.notEqual(niTrueTypeOf(false), NINumber);
    });
  });
});
describe('NITypeOf', () => {
  describe('NINumber', () => {
    it('should be a Number for unsafe integer', () => {
      assert.equal(niTypeOf(343453453453452352324323423422343453453434524), NINumber); //not a safe int
      assert.equal(niTypeOf(343453453453452352324323423422343453453434524.234234), NINumber); //not a safe int
      assert.equal(niTypeOf(Number.MAX_SAFE_INTEGER + 1), NINumber); //not a safe int
      assert.equal(niTypeOf(Number.MIN_SAFE_INTEGER - 1), NINumber); //not a safe int
      assert.equal(niTypeOf(Number.MAX_VALUE), NINumber); //not a safe int
    });
  });
  describe('NIInt', () => {
    // All .000 will be converted to INT by javascript.
    // So if you have a float like 11.0 it will be an INT
    it('should be an Int', () => {
      assert.equal(niTypeOf(+'1'), NIInt);
      assert.equal(niTypeOf(-0), NIInt);
      assert.equal(niTypeOf(-0.0), NIInt);
      assert.equal(niTypeOf(-1.0), NIInt);
      assert.equal(niTypeOf(+new Date()), NIInt);
      assert.equal(niTypeOf(-new Date()), NIInt);
    });
  });
  describe('NIFloat', () => {
    it('should be a Float', () => {
      assert.equal(niTypeOf(Number.EPSILON), NIFloat);
      assert.equal(niTypeOf(0.34234), NIFloat);
      assert.equal(niTypeOf(-0.34234), NIFloat);
      assert.equal(niTypeOf(parseFloat(1.1)), NIFloat);
      assert.equal(niTypeOf(parseFloat(-1.1)), NIFloat);
      assert.equal(niTypeOf(3453453453.34523423), NIFloat);
      assert.equal(niTypeOf(3453453453.3452342323323424234234234234242342342342342342342342), NIFloat);
      assert.equal(niTypeOf(Number.MIN_VALUE), NIFloat); //not a safe int
    });
  });
  describe('NIInfinite', () => {
    it('shoule be a NIInfinity', () => {
      assert.equal(niTypeOf(Infinity), NIInfinity);
      assert.equal(niTypeOf(-Infinity), NIInfinity);
      assert.equal(niTypeOf(1 / 0), NIInfinity);
      assert.equal(niTypeOf(-1 / 0), NIInfinity);
    });
  });
  describe('NINaN', () => {
    it('should be a NaN', () => {
      assert.equal(niTypeOf(NaN), NINaN);
      assert.equal(niTypeOf(221 / 'sdfsdf'), NINaN);
      assert.equal(niTypeOf(44 / 'sdfsd'), NINaN);
    });
  });
});
describe('NIIsOfType', () => {
  it('should be a number', () => {
    assert.isTrue(niIsOfType(343453453453452352324323423422343453453434524, NINumber)); //not a safe int
    assert.isTrue(niIsOfType(343453453453452352324323423422343453453434524.234234, NINumber)); //not a safe int
    assert.isTrue(niIsOfType(Number.MAX_SAFE_INTEGER + 1, NINumber)); //not a safe int
    assert.isTrue(niIsOfType(Number.MIN_SAFE_INTEGER - 1, NINumber)); //not a safe int
    assert.isTrue(niIsOfType(Number.MAX_VALUE, NINumber)); //not a safe int
  });
  it('should be an int', () => {
    assert.isTrue(niIsOfType(+'1', NIInt));
    assert.isTrue(niIsOfType(-0, NIInt));
    assert.isTrue(niIsOfType(-0.0, NIInt));
    assert.isTrue(niIsOfType(-1.0, NIInt));
    assert.isTrue(niIsOfType(+new Date(), NIInt));
    assert.isTrue(niIsOfType(-new Date(), NIInt));
  });
  it('should be a float', () => {
    assert.isTrue(niIsOfType(Number.EPSILON, NIFloat));
    assert.isTrue(niIsOfType(0.34234, NIFloat));
    assert.isTrue(niIsOfType(-0.34234, NIFloat));
    assert.isTrue(niIsOfType(parseFloat(1.1), NIFloat));
    assert.isTrue(niIsOfType(parseFloat(-1.1), NIFloat));
    assert.isTrue(niIsOfType(3453453453.34523423, NIFloat));
    assert.isTrue(niIsOfType(3453453453.3452342323323424234234234234242342342342342342342342, NIFloat));
    assert.isTrue(niIsOfType(Number.MIN_VALUE, NIFloat)); //not a safe int
  });
  it('should be a NaN', () => {
    assert.isTrue(niIsOfType(NaN, NINaN));
    assert.isTrue(niIsOfType(221 / 'sdfsdf', NINaN));
    assert.isTrue(niIsOfType(44 / 'sdfsd', NINaN));
  });
  it('should be an Infinity', () => {
    assert.isTrue(niIsOfType(Infinity, NIInfinity));
    assert.isTrue(niIsOfType(-Infinity, NIInfinity));
    assert.isTrue(niIsOfType(1 / 0, NIInfinity));
    assert.isTrue(niIsOfType(-1 / 0, NIInfinity));
  });
});
describe('Native Extend', () => {
  it('should be a number', () => {
    assert.isTrue((343453453453452352324323423422343453453434524).niIsOfType(NINumber)); //not a safe int
    assert.isTrue(343453453453452352324323423422343453453434524.234234.niIsOfType(NINumber)); //not a safe int
    assert.isTrue((Number.MAX_SAFE_INTEGER + 1).niIsOfType(NINumber)); //not a safe int
    assert.isTrue((Number.MIN_SAFE_INTEGER - 1).niIsOfType(NINumber)); //not a safe int
    assert.isTrue(Number.MAX_VALUE.niIsOfType(NINumber)); //not a safe int
    assert.isTrue(NaN.niIsOfType(NINumber)); //not a safe int
  });
  it('should be an int', () => {
    assert.isTrue((+'1').niIsOfType(NIInt));
    assert.isTrue((-0).niIsOfType(NIInt));
    assert.isTrue((-0.0).niIsOfType(NIInt));
    assert.isTrue((-1.0).niIsOfType(NIInt));
    assert.isTrue((+new Date()).niIsOfType(NIInt));
    assert.isTrue((-new Date()).niIsOfType(NIInt));
  });
  it('should be a float', () => {
    assert.isTrue(Number.EPSILON.niIsOfType(NIFloat));
    assert.isTrue(0.34234.niIsOfType(NIFloat));
    assert.isTrue((-0.34234).niIsOfType(NIFloat));
    assert.isTrue(parseFloat(1.1).niIsOfType(NIFloat));
    assert.isTrue(parseFloat(-1.1).niIsOfType(NIFloat));
    assert.isTrue(3453453453.34523423.niIsOfType(NIFloat));
    assert.isTrue(3453453453.3452342323323424234234234234242342342342342342342342.niIsOfType(NIFloat));
    assert.isTrue(Number.MIN_VALUE.niIsOfType(NIFloat)); //not a safe int
  });
  it('should be a NaN', () => {
    assert.isTrue(NaN.niIsOfType(NINaN));
    assert.isTrue((221 / 'sdfsdf').niIsOfType(NINaN));
    assert.isTrue((44 / 'sdfsd').niIsOfType(NINaN));
  });
  it('should be an Infinity', () => {
    assert.isTrue(Infinity.niIsOfType(NIInfinity));
    assert.isTrue((-Infinity).niIsOfType(NIInfinity));
    assert.isTrue((1 / 0).niIsOfType(NIInfinity));
    assert.isTrue((-1 / 0).niIsOfType(NIInfinity));
  });
});
