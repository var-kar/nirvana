/**
 * Created by Karthik Vasudevan on 10/04/2017.
 * License: MIT
 */
'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleEnum = require('../../fixtures/utils/type/enum.fix');
const errorMsg = require('../../../src/error');
const assert = require('chai').assert;
//enums doesn't have type or trueType checker
//enums can only be validated using niCompareWith
describe('NIIsOfType', () => {
  describe('NIEnum', () => {
    it('should be a valid enum', () => {
      sampleEnum.valid.niLoop(function(value) {
        assert.isTrue(niIsOfType(value, NIEnum, sampleEnum.enum));
      });
    });
    it('should be an invalid enum', () => {
      sampleEnum.invalid.niLoop(function(value) {
        assert.isFalse(niIsOfType(value, NIEnum, sampleEnum.enum));
      });
    });
    it('should throw an error if the secondArg is not of type NIArray', () => {
      var typeErrorMsg = `${errorMsg.NIType.secondArgType} ${NIArray}`;
      sampleEnum.invalid.niLoop(function (value) {
        assert.throws(function () {
          return niIsOfType('sdfws', NIEnum, value);
        }, TypeError, typeErrorMsg);
      });
    });
    it('should throw an error if the secondArg is NIArray and is empty', () => {
      let arrayEmpty = errorMsg.NIType.secondArgEmpty;
      assert.throws(function() {
        return niIsOfType('sdfws', NIEnum, []);
      }, RangeError, arrayEmpty);
      assert.throws(function() {
        return niIsOfType('sdfws', NIEnum, new Array());
      }, RangeError, arrayEmpty);
    });
  });
});

describe('Native Extend', () => {
  describe('NIEnum', () => {
    it('should be a valid enum', () => {
      sampleEnum.valid.niLoop(function(value) {
        assert.isTrue(value.niIsOfType(NIEnum, sampleEnum.enum));
      });
    });
    it('should be an invalid enum', () => {
      sampleEnum.nativeInvalid.niLoop(function(value) {
        assert.isFalse(value.niIsOfType(NIEnum, sampleEnum.enum));
      });
    });
  });
});
