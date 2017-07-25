/**
 * Created by Karthik Vasudevan on 21/04/2017.
 * License: MIT
 */
'use strict';
const assert = require('chai').assert;
require('../../../src/utils/niType');
require('../../../src/utils/niFor');
const sampleDate = require('../../fixtures/date.fix');

describe('NITypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niFor(function(value) {
        assert.equal(niTypeOf(value), NIDate);
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niFor(function(value) {
        assert.notEqual(niTypeOf(value), NIDate);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niFor(function(value) {
        assert.equal(niTrueTypeOf(value), NIDate);
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niFor(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIDate);
      });
    });
  });
});
describe('NIIsOfType', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niFor(function(value) {
        assert.isTrue(niIsOfType(value, NIDate));
      });
    });
    it('should not be a date', () => {
      sampleDate.invalid.niFor(function(value) {
        assert.isFalse(niIsOfType(value, NIDate));
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIDate', () => {
    it('should be a date', () => {
      sampleDate.valid.niFor(function(value) {
        assert.isTrue(value.niIsOfType(NIDate));
      });
    });
    it('should not be a date', () => {
      sampleDate.nativeInvalid.niFor(function(value) {
        assert.isFalse(value.niIsOfType(NIDate));
      });
    });
  });
});
