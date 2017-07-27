/**
 * Created by Karthik Vasudevan on 18/05/2017.
 * License: MIT
 */
'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleBoolean = require('../../fixtures/type/boolean.fix');
const assert = require('chai').assert;

describe('NITypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niLoop(function(value) {
        assert.equal(niTypeOf(value), NIBoolean);
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.invalid.niLoop(function(value) {
        assert.notEqual(niTypeOf(value), NIBoolean);
      });
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niLoop(function(value) {
        assert.equal(niTrueTypeOf(value), NIBoolean);
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.invalid.niLoop(function(value) {
        assert.notEqual(niTrueTypeOf(value), NIBoolean);
      });
    });
  });
});
describe('Native Extend', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      sampleBoolean.valid.niLoop(function(value) {
        assert.isTrue((value).niIsOfType(NIBoolean));
      });
    });
    it('Should not be a boolean', function() {
      sampleBoolean.nativeInvalid.niLoop(function(value) {
        assert.isFalse((value).niIsOfType(NIBoolean));
      });
    });
  });
});
