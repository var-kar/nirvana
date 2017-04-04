/**
 * Created by Karthik Vasudevan on 04/04/2017.
 * License: MIT
 */

'use strict';
const assert = require('chai').assert;
require('../../src/type/niType');

describe('NITrueType', function() {
  describe('NINumber', function() {
    it('should be a number', function() {
      assert.equal(niTrueType(1), NINumber);
      assert.equal(niTrueType(1.0), NINumber);
      assert.equal(niTrueType(-1), NINumber);
      assert.equal(niTrueType(-0), NINumber);
      assert.equal(niTrueType(1e10), NINumber);
      assert.equal(niTrueType(NaN), NINumber);
      assert.equal(niTrueType(-Infinity), NINumber);
      assert.equal(niTrueType(Infinity), NINumber);
      assert.equal(niTrueType(234234234234234234), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(234234234234234234345353453453453453), NINumber);
      assert.equal(niTrueType(0), NINumber);
      assert.equal(niTrueType(123e-5), NINumber);
      assert.equal(niTrueType(0xFF), NINumber);
      assert.equal(niTrueType(0xDD), NINumber);
      assert.equal(niTrueType(-'4'), NINumber);
      assert.equal(niTrueType(+false), NINumber);
      assert.equal(niTrueType(-true), NINumber);
    });
    it('should not be a number', function() {
      assert.notEqual(niTrueType('345'), NINumber);
      assert.notEqual(niTrueType('0'), NINumber);
      assert.notEqual(niTrueType('sdfsdf'), NINumber);
      assert.notEqual(niTrueType('NaN'), NINumber);
      assert.notEqual(niTrueType(undefined), NINumber);
      assert.notEqual(niTrueType(false), NINumber);
    });
  });
});
