/**
 * Created by Karthik Vasudevan on 21/04/2017.
 * License: MIT
 */
'use strict';
const assert = require('chai').assert;
require('../../src/utils/niType');

describe('NITypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      assert.equal(niTypeOf(new Date()), NIDate);
      assert.equal(niTypeOf(new Date(1)), NIDate);
      assert.equal(niTypeOf(new Date('sdfcdds')), NIDate);
      assert.equal(niTypeOf(new Date(undefined)), NIDate);
      assert.equal(niTypeOf(new Date(null)), NIDate);
      assert.equal(niTypeOf(new Date('2017-01-10T00:00:00')), NIDate);
    });
    it('should not be a date', () => {
      assert.notEqual(niTypeOf('sdfsdf'), NIDate);
      assert.notEqual(niTypeOf(1), NIDate);
      assert.notEqual(niTypeOf(undefined), NIDate);
      assert.notEqual(niTypeOf(23423423424234), NIDate);
      assert.notEqual(niTypeOf(null), NIDate);
      assert.notEqual(niTypeOf({}), NIDate);
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      assert.equal(niTrueTypeOf(new Date()), NIDate);
      assert.equal(niTrueTypeOf(new Date(1)), NIDate);
      assert.equal(niTrueTypeOf(new Date('sdfcdds')), NIDate);
      assert.equal(niTrueTypeOf(new Date(undefined)), NIDate);
      assert.equal(niTrueTypeOf(new Date(null)), NIDate);
      assert.equal(niTrueTypeOf(new Date('2017-01-10T00:00:00')), NIDate);
    });
    it('should not be a date', () => {
      assert.notEqual(niTrueTypeOf('sdfsdf'), NIDate);
      assert.notEqual(niTrueTypeOf(1), NIDate);
      assert.notEqual(niTrueTypeOf(undefined), NIDate);
      assert.notEqual(niTrueTypeOf(23423423424234), NIDate);
      assert.notEqual(niTrueTypeOf(null), NIDate);
      assert.notEqual(niTrueTypeOf({}), NIDate);
    });
  });
});
describe('NIIsOfType', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      assert.isTrue(niIsOfType(new Date(), NIDate));
      assert.isTrue(niIsOfType(new Date(1), NIDate));
      assert.isTrue(niIsOfType(new Date('sdfcdds'), NIDate));
      assert.isTrue(niIsOfType(new Date(undefined), NIDate));
      assert.isTrue(niIsOfType(new Date(null), NIDate));
      assert.isTrue(niIsOfType(new Date('2017-01-10T00:00:00'), NIDate));
    });
    it('should not be a date', () => {
      assert.isFalse(niIsOfType('sdfsdf', NIDate));
      assert.isFalse(niIsOfType(1, NIDate));
      assert.isFalse(niIsOfType(undefined, NIDate));
      assert.isFalse(niIsOfType(23423423424234, NIDate));
      assert.isFalse(niIsOfType(null, NIDate));
      assert.isFalse(niIsOfType({}, NIDate));
    });
  });
});
describe('Native Extend', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      assert.isTrue(new Date().niIsOfType(NIDate));
      assert.isTrue(new Date(1).niIsOfType(NIDate));
      assert.isTrue(new Date('sdfcdds').niIsOfType(NIDate));
      assert.isTrue(new Date(undefined).niIsOfType(NIDate));
      assert.isTrue(new Date(null).niIsOfType(NIDate));
      assert.isTrue(new Date('2017-01-10T00:00:00').niIsOfType(NIDate));
    });
    it('should not be a date', () => {
      assert.isFalse('sdfsdf'.niIsOfType(NIDate));
      assert.isFalse((1).niIsOfType(NIDate));
      assert.isFalse((23423423424234).niIsOfType(NIDate));
      assert.isFalse({}.niIsOfType(NIDate));
      assert.isFalse([].niIsOfType(NIDate));
      assert.isFalse((function(){}).niIsOfType(NIDate));
      assert.isFalse(true.niIsOfType(NIDate));
    });
  });
});
