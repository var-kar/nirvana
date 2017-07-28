'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleCustom = require('../../fixtures/utils/type/custom.fix');
const errorMsg = require('../../../src/error');
const assert = require('chai').assert;

describe('NIIsOfType', () => {
  describe('NICustom', () => {
    it('Should be a valid custom type', function() {
      sampleCustom.valid.niLoop(function(value) {
        assert.isTrue(niIsOfType(value, NICustom, sampleCustom.regExp));
      });
    });
    it('Should be a invalid custom type', function() {
      sampleCustom.invalid.niLoop(function(value) {
        assert.isFalse(niIsOfType(value, NICustom, sampleCustom.regExp));
      });
    });
  });
});

describe('NITypeOf', () => {
  describe('NICustom', () => {
    it('Should throw an error if secondArg is not type of RegExp if expected is Custom', function () {
      let arrayEmpty = errorMsg.NIType.secondArgType + " RegExp";
      assert.throws(function() {
        return niIsOfType('sdfws', NICustom, sampleCustom.invalidRegExp);
      }, TypeError, arrayEmpty);
    });
  });
});
