/**
 * Created by Karthik Vasudevan on 04/04/2017.
 * License: MIT
 */

'use strict';
const assert = require('chai').assert;
require('../../src/type/niType');

describe('NITrueType', () => {
  describe('NINumber', () => {
    it('should be a number', () => {
      assert.equal(niTrueType(1), NINumber);
      assert.equal(niTrueType(1.0), NINumber);
      assert.equal(niTrueType(-1), NINumber);
      assert.equal(niTrueType(-0), NINumber);
      assert.equal(niTrueType(1e10), NINumber);
      assert.equal(niTrueType(NaN), NINumber);
      assert.equal(niTrueType(-Infinity), NINumber);
      assert.equal(niTrueType(Infinity), NINumber);
      assert.equal(niTrueType(234234234234234234), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(0), NINumber);
      assert.equal(niTrueType(123e-5), NINumber);
      assert.equal(niTrueType(0xFF), NINumber);
      assert.equal(niTrueType(0xDD), NINumber);
      assert.equal(niTrueType(-'4'), NINumber);
      assert.equal(niTrueType(+false), NINumber);
      assert.equal(niTrueType(-true), NINumber);
    });
    it('should not be a number', () => {
      assert.notEqual(niTrueType('345'), NINumber);
      assert.notEqual(niTrueType('0'), NINumber);
      assert.notEqual(niTrueType('sdfsdf'), NINumber);
      assert.notEqual(niTrueType('NaN'), NINumber);
      assert.notEqual(niTrueType(undefined), NINumber);
      assert.notEqual(niTrueType(false), NINumber);
    });
  });
});
describe('NIType', () => {
  describe('NINumber', () => {
    it('should be a Number for unsafe integer', () => {
      assert.equal(niType(343453453453452352324323423422343453453434524), NINumber); //not a safe int
      assert.equal(niType(343453453453452352324323423422343453453434524.234234), NINumber); //not a safe int
      assert.equal(niType(Number.MAX_SAFE_INTEGER + 1), NINumber); //not a safe int
      assert.equal(niType(Number.MIN_SAFE_INTEGER - 1), NINumber); //not a safe int
      assert.equal(niType(Number.MAX_VALUE), NINumber); //not a safe int
    });
  });
  describe('NIInt', () => {
    // All .000 will be converted to INT by javascript.
    // So if you have a float like 11.0 it will be an INT
    it('should be an Int', () => {
      assert.equal(niType(+'1'), NIInt);
      assert.equal(niType(-0), NIInt);
      assert.equal(niType(-0.0), NIInt);
      assert.equal(niType(-1.0), NIInt);
      assert.equal(niType(+new Date()), NIInt);
      assert.equal(niType(-new Date()), NIInt);
    });
  });
  describe('NIFloat', () => {
    it('should be a Float', () => {
      assert.equal(niType(Number.EPSILON), NIFloat);
      assert.equal(niType(0.34234), NIFloat);
      assert.equal(niType(-0.34234), NIFloat);
      assert.equal(niType(parseFloat(1.1)), NIFloat);
      assert.equal(niType(parseFloat(-1.1)), NIFloat);
      assert.equal(niType(3453453453.34523423), NIFloat);
      assert.equal(niType(3453453453.3452342323323424234234234234242342342342342342342342), NIFloat);
      assert.equal(niType(Number.MIN_VALUE), NIFloat); //not a safe int
    });
  });
  describe('NIInfinite', () => {
    it('shoule be a NIInfinity', () => {
      assert.equal(niType(Infinity), NIInfinity);
      assert.equal(niType(-Infinity), NIInfinity);
      assert.equal(niType(1 / 0), NIInfinity);
      assert.equal(niType(-1 / 0), NIInfinity);
    });
  });
  describe('NINaN', () => {
    it('should be a NaN', () => {
      assert.equal(niType(NaN), NINaN);
      assert.equal(niType(221 / 'sdfsdf'), NINaN);
      assert.equal(niType(44 / 'sdfsd'), NINaN);
    });
  });
});
describe('NICompare', () => {
  it('should be a number', () => {
    assert.isTrue(niCompare(343453453453452352324323423422343453453434524, NINumber)); //not a safe int
    assert.isTrue(niCompare(343453453453452352324323423422343453453434524.234234, NINumber)); //not a safe int
    assert.isTrue(niCompare(Number.MAX_SAFE_INTEGER + 1, NINumber)); //not a safe int
    assert.isTrue(niCompare(Number.MIN_SAFE_INTEGER - 1, NINumber)); //not a safe int
    assert.isTrue(niCompare(Number.MAX_VALUE, NINumber)); //not a safe int
  });
  it('should be an int', () => {
    assert.isTrue(niCompare(+'1', NIInt));
    assert.isTrue(niCompare(-0, NIInt));
    assert.isTrue(niCompare(-0.0, NIInt));
    assert.isTrue(niCompare(-1.0, NIInt));
    assert.isTrue(niCompare(+new Date(), NIInt));
    assert.isTrue(niCompare(-new Date(), NIInt));
  });
  it('should be a float', () => {
    assert.isTrue(niCompare(Number.EPSILON, NIFloat));
    assert.isTrue(niCompare(0.34234, NIFloat));
    assert.isTrue(niCompare(-0.34234, NIFloat));
    assert.isTrue(niCompare(parseFloat(1.1), NIFloat));
    assert.isTrue(niCompare(parseFloat(-1.1), NIFloat));
    assert.isTrue(niCompare(3453453453.34523423, NIFloat));
    assert.isTrue(niCompare(3453453453.3452342323323424234234234234242342342342342342342342, NIFloat));
    assert.isTrue(niCompare(Number.MIN_VALUE, NIFloat)); //not a safe int
  });
  it('should be a NaN', () => {
    assert.isTrue(niCompare(NaN, NINaN));
    assert.isTrue(niCompare(221 / 'sdfsdf', NINaN));
    assert.isTrue(niCompare(44 / 'sdfsd', NINaN));
  });
  it('should be an Infinity', () => {
    assert.isTrue(niCompare(Infinity, NIInfinity));
    assert.isTrue(niCompare(-Infinity, NIInfinity));
    assert.isTrue(niCompare(1 / 0, NIInfinity));
    assert.isTrue(niCompare(-1 / 0, NIInfinity));
  });
});
