/**
 * Created by Karthik Vasudevan on 21/04/2017.
 * License: MIT
 */
'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleDate = require('../../fixtures/utils/type/date.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIDate);
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIDate);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIDate);
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIDate);
      });
    });
  });
});
describe('NIIsOfType', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niLoop(function(value) {
        assert.isTrue(niIsOfType(value, NIDate));
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niLoop(function(value) {
        assert.isFalse(niIsOfType(value, NIDate));
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niLoop(function(value) {
        assert.isTrue(value.niIsOfType(NIDate));
      });
    });
    it('should not be a date', () => {
      sampleDate.nativeInvalid.niLoop(function(value) {
        assert.isFalse(value.niIsOfType(NIDate));
      });
    });
  });
});
