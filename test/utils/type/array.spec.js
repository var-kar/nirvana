'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleArray = require('../../fixtures/type/array.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIArray);
      });
    });
    it('Should not be an array', function() {
      sampleArray.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIArray);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIArray);
      });
    });
    it('Should not be an array', function() {
      sampleArray.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIArray);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIArray', () => {
    it('Should be an array', function() {
      sampleArray.valid.niLoop(function(value) {
        assert.isTrue((value).niIsOfType(NIArray));
      });
    });
    it('Should not be an array', function() {
      sampleArray.nativeInvalid.niLoop(function(value) {
        assert.isFalse((value).niIsOfType(NIArray));
      });
    });
  });
});
