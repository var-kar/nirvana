/**
 * Created by Karthik Vasudevan on 18/05/2017.
 * License: MIT
 */
'use strict';
const assert = require('chai').assert;
require('../../../src/utils/niType');
require('../../../src/utils/niFor');
const sampleBoolean = require('../../fixtures/boolean.fix');

describe('NITypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niFor(function(value) {
        assert.equal(niTypeOf(value), NIBoolean);
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.invalid.niFor(function(value) {
        assert.notEqual(niTypeOf(value), NIBoolean);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niFor(function(value) {
        assert.equal(niTrueTypeOf(value), NIBoolean);
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.invalid.niFor(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIBoolean);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niFor(function(value) {
        assert.isTrue((value).niIsOfType(NIBoolean));
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.nativeInvalid.niFor(function(value) {
        assert.isFalse((value).niIsOfType(NIBoolean));
      });
    });
  });
});
