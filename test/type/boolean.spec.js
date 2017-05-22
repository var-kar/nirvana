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
    });
  });
});
describe('NITrueTypeOf', () => {
  describe('NIBoolean', () => {

  });
});
describe('Native Extend', () => {
  describe('NIBoolean', () => {

  });
});
