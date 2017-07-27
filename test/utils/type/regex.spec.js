'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleRegEx = require('../../fixtures/type/regex.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIRegExp', () => {
    it('Should be a reg exp', function() {
      sampleRegEx.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIRegExp);
      });
    });
    it('Should not be a reg exp', function() {
      sampleRegEx.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIRegExp);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIRegExp', () => {
    it('Should be a reg exp', function() {
      sampleRegEx.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIRegExp);
      });
    });
    it('Should not be a reg exp', function() {
      sampleRegEx.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIRegExp);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIRegExp', () => {
    it('Should be a reg exp', function() {
      sampleRegEx.valid.niLoop(function(value) {
        assert.isTrue((value).niIsOfType(NIRegExp));
      });
    });
    it('Should not be a reg exp', function() {
      sampleRegEx.nativeInvalid.niLoop(function(value) {
        assert.isFalse((value).niIsOfType(NIRegExp));
      });
    });
  });
});
