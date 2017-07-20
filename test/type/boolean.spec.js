/**
 * Created by Karthik Vasudevan on 18/05/2017.
 * License: MIT
 */
'use strict';
const assert = require('chai').assert;
require('../../src/utils/niType');

describe('NITypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      assert.equal(niTypeOf(true), NIBoolean);
      assert.equal(niTypeOf(false), NIBoolean);
      assert.equal(niTypeOf(new Boolean()), NIBoolean);
      assert.equal(niTypeOf(new Boolean(1)), NIBoolean);
    });
    it('Should not be a boolean', function() {
      assert.notEqual(niTypeOf(1), NIBoolean);
      assert.notEqual(niTypeOf(0), NIBoolean);
      assert.notEqual(niTypeOf('sdfwef'), NIBoolean);
      assert.notEqual(niTypeOf([]), NIBoolean);
      assert.notEqual(niTypeOf({}), NIBoolean);
      assert.notEqual(niTypeOf(undefined), NIBoolean);
      assert.notEqual(niTypeOf(null), NIBoolean);
      assert.notEqual(niTypeOf(function() {}), NIBoolean);
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      assert.equal(niTrueTypeOf(true), NIBoolean);
      assert.equal(niTrueTypeOf(false), NIBoolean);
      assert.equal(niTrueTypeOf(new Boolean()), NIBoolean);
      assert.equal(niTrueTypeOf(new Boolean(1)), NIBoolean);
    });
    it('Should not be a boolean', function() {
      assert.notEqual(niTrueTypeOf(1), NIBoolean);
      assert.notEqual(niTrueTypeOf(0), NIBoolean);
      assert.notEqual(niTrueTypeOf('sdfwef'), NIBoolean);
      assert.notEqual(niTrueTypeOf([]), NIBoolean);
      assert.notEqual(niTrueTypeOf({}), NIBoolean);
      assert.notEqual(niTrueTypeOf(undefined), NIBoolean);
      assert.notEqual(niTrueTypeOf(null), NIBoolean);
      assert.notEqual(niTrueTypeOf(function() {}), NIBoolean);
    });
  });
});
describe('Native Extend', () => {
  describe('NIBoolean', () => {
    it('Should be a boolean', function() {
      assert.isTrue(new Boolean(1).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean(0).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean(undefined).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean(null).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean({}).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean([]).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean(NaN).niIsOfType(NIBoolean));
      assert.isTrue(new Boolean(() => {}).niIsOfType(NIBoolean));
      assert.isTrue(true.niIsOfType(NIBoolean));
      assert.isTrue(false.niIsOfType(NIBoolean));
    });
    it('Should not be a boolean', function() {
      assert.isFalse('sdfsdf'.niIsOfType(NIBoolean));
      assert.isFalse((1).niIsOfType(NIBoolean));
      assert.isFalse((23423423424234).niIsOfType(NIBoolean));
      assert.isFalse({}.niIsOfType(NIBoolean));
      assert.isFalse([].niIsOfType(NIBoolean));
      assert.isFalse((function() {}).niIsOfType(NIBoolean));
    });
  });
});
