'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleObj = require('../../fixtures/utils/type/hashmap.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIHashMap', () => {
    it('Should be a hash map', function() {
      sampleObj.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIHashMap);
      });
    });
    it('Should not be a hash map', function() {
      sampleObj.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIHashMap);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIHashMap', () => {
    it('Should be a hash map', function() {
      sampleObj.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIHashMap);
      });
    });
    it('Should not be a hash map', function() {
      sampleObj.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIHashMap);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIArray', () => {
    it('Should be a hash map', function() {
      sampleObj.valid.niLoop(function(value) {
        assert.isTrue((value).niIsOfType(NIHashMap));
      });
    });
    it('Should not be a hash map', function() {
      sampleObj.nativeInvalid.niLoop(function(value) {
        assert.isFalse((value).niIsOfType(NIHashMap));
      });
    });
  });
});
