'use strict';
require('../../../src/utils/niType');
require('../../../src/utils/niLoop');
const sampleArray = require('../../fixtures/model/queryBuilder/select.fix');
const assert = require('chai').assert;
const NIQueryBuilder = require('../../../src/model/niQueryBuilder');

describe('NIQueryBuilder', () => {
  describe('Select', () => {
    it('Should be true', function () {
      let queryBuilder = new NIQueryBuilder();
      sampleArray.niLoop(function(value, key) {
        value.niLoop(function(val) {
          assert.equal(queryBuilder.select(val).getQuery(), key);
        });
      });
    });
  });
});
