'use strict';
require('../../src/utils/niType');
require('../../src/utils/niLoop');
const sampleArray = require('../fixtures/utils/loop.fix');
const assert = require('chai').assert;
const errorMsg = require('../../src/error');

describe('NILoop', () => {
  sampleArray.valid.niLoop((value) => {
    it(`Should loop ${value}`, (done) => {
      value.niLoop(() => {
        done();
      });
    });
  });
  sampleArray.invalid.niLoop((value) => {
    it(`Should throw an error if it is ${value}`, (done) => {
      assert.throws(() => {
        niLoop(value, done);
      }, TypeError, errorMsg.NILoop.itemTypeError);
    });
  });
});
  /*sampleArray.callbackInvalid.niLoop((value) => {
    it('Should throw an error if the callback is not a function', (done) => {
      assert.throws(() => {
        niLoop(done, value);
      }, TypeError, errorMsg.NILoop.cbTypeError);
    });
  });*/


