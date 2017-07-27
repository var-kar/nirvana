'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleFn = require('../../fixtures/type/function.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIHashMap', () => {
    it('Should be a function', function() {
      sampleFn.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIFunction);
      });
    });
    it('Should not be a function', function() {
      sampleFn.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIFunction);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIHashMap', () => {
    it('Should be a function', function() {
      sampleFn.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIFunction);
      });
    });
    it('Should not be a function', function() {
      sampleFn.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIFunction);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIArray', () => {
    it('Should be a function', function() {
      sampleFn.valid.niLoop(function(value) {
        assert.isTrue((value).niIsOfType(NIFunction));
      });
    });
    it('Should not be a function', function() {
      sampleFn.nativeInvalid.niLoop(function(value) {
        assert.isFalse((value).niIsOfType(NIFunction));
      });
    });
  });
});
