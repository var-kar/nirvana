'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleFalsey = require('../../fixtures/type/falsey.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIUndefined', () => {
    it('Should be undefined', function() {
      sampleFalsey.undefined.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIUndefined);
      });
    });
    it('Should not be undefined', function() {
      sampleFalsey.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIUndefined);
      });
    });
  });
  describe('NINull', () => {
    it('Should be null', function() {
      sampleFalsey.null.niLoop(function(value) {
        assert.equal(niTypeOf(value), NINull);
      });
    });
    it('Should not be null', function() {
      sampleFalsey.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NINull);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIUndefined', () => {
    it('Should be undefined', function() {
      sampleFalsey.undefined.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIUndefined);
      });
    });
    it('Should not be undefined', function() {
      sampleFalsey.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIUndefined);
      });
    });
  });
  describe('NINull', () => {
    it('Should be null', function() {
      sampleFalsey.null.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NINull);
      });
    });
    it('Should not be null', function() {
      sampleFalsey.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NINull);
      });
    });
  });
});
