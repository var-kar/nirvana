'use strict';
const assert = require('chai').assert;
require('../../../src/utils/niType');
require('../../../src/utils/niFor');
const sampleArray = require('../../fixtures/array.fix');

describe('NITypeOf', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niFor(function(value) {
        assert.equal(niTypeOf(value), NIArray);
      });
    });
    it('Should not be an array', function() {
      sampleArray.invalid.niFor(function(value) {
        assert.notEqual(niTypeOf(value), NIArray);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niFor(function(value) {
        assert.equal(niTrueTypeOf(value), NIArray);
      });
    });
    it('Should not be an array', function() {
      sampleArray.invalid.niFor(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIArray);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niFor(function(value) {
        assert.isTrue((value).niIsOfType(NIArray));
      });
    });
    it('Should not be an array', function() {
      sampleArray.nativeInvalid.niFor(function(value) {
        assert.isFalse((value).niIsOfType(NIArray));
      });
    });
  });
});
