/**
 * Created by Karthik Vasudevan on 28/03/2017.
 * License: MIT
 */

'use strict';
const assert = require('chai').assert;
require('../../src/type/niType');

//remember that true, Number, null etc are valid JSON according to JSON.parse
//but this has been overridden in our validation.
describe('NIType: ', function() {
  describe('NIString: ', function() {

    //string
    it('should be string for a string', function() {
      assert.equal(niType('Hello world!'), NIString);
    });
    it('should be string for a alphanumeric', function() {
      assert.equal(niType('232ds3!%'), NIString);
    });
    it('should be string for a stringy NaN', function() {
      assert.equal(niType('NaN'), NIString);
    });
    it('should be string for a stringy undefined', function() {
      assert.equal(niType('undefined'), NIString);
    });
    it('should be string for a stringy Infinity', function() {
      assert.equal(niType('Infinity'), NIString);
    });
    it('should be string for a stringy number which starts with zero', function() {
      assert.equal(niType('032422'), NIString);
    });
    it('should be string for stringy null', function() {
      assert.equal(niType('null'), NIString);
    });
    it('should be string for stringy number', function() {
      assert.equal(niType('45232'), NIString);
    });
    it('should be string for stringy boolean', function() {
      assert.equal(niType('true'), NIString);
    });
  });
  describe('NIJSON: ', function () {
    //json
    it('should be JSON for stringy empty array', function() {
      assert.equal(niType('[]'), NIJSON);
    });
    it('should be JSON for stringy empty object', function() {
      assert.equal(niType('{}'), NIJSON);
    });
    it('should be JSON for stringy JSON', function() {
      assert.equal(niType('{"foo": 1}'), NIJSON);
    });
  });
  describe('NICreditCard: ', function () {
    //credit card
    //visa
    it('should be credit card for stringy valid visa card number without space - 16 chars', function() {
      assert.equal(niType('4242424242424242'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 16 chars', function() {
      assert.equal(niType('4242 4242 4242 4242'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 17 chars', function() {
      assert.equal(niType('4012 8888 8888 1881 1'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number without space - 17 chars', function() {
      assert.equal(niType('40128888888818811'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 13 chars', function() {
      assert.equal(niType('4222 2222 2222 2'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number without space - 13 chars', function() {
      assert.equal(niType('4222222222222'), NICreditCard);
    });

    //master card
    it('should be credit card for stringy valid master card number without space - 16 chars', function() {
      assert.equal(niType('5555555555554444'), NICreditCard);
    });
    it('should be credit card for stringy valid master card number with space - 16 chars', function() {
      assert.equal(niType('5555 5555 5555 4444'), NICreditCard);
    });

    //american express
    it('should be credit card for stringy valid american express number with space - 15 chars', function() {
      assert.equal(niType('3782 8224 6310 005'), NICreditCard);
    });
    it('should be credit card for stringy valid american express number without space - 15 chars', function() {
      assert.equal(niType('378282246310005'), NICreditCard);
    });

    //australian bank
    it('should be credit card for stringy valid australian bank number with space - 16 chars', function() {
      assert.equal(niType('5610 5910 8101 8250'), NICreditCard);
    });
    it('should be credit card for stringy valid australian bank number without space - 16 chars', function() {
      assert.equal(niType('5610591081018250'), NICreditCard);
    });

    //diners club
    it('should be credit card for stringy valid diners club number with space - 14 chars', function() {
      assert.equal(niType('3056 9309 0259 04'), NICreditCard);
    });
    it('should be credit card for stringy valid diners club number without space - 14 chars', function() {
      assert.equal(niType('30569309025904'), NICreditCard);
    });

    //Discover
    it('should be credit card for stringy valid discover number with space - 16 chars', function() {
      assert.equal(niType('6011 1111 1111 1117'), NICreditCard);
    });
    it('should be credit card for stringy valid discover number without space - 16 chars', function() {
      assert.equal(niType('6011111111111117'), NICreditCard);
    });

    //jcb
    it('should be credit card for stringy valid JCB number with space - 16 chars', function() {
      assert.equal(niType('3530 1113 3330 0000'), NICreditCard);
    });
    it('should be credit card for stringy valid JCB number without space - 16 chars', function() {
      assert.equal(niType('3530111333300000'), NICreditCard);
    });

    //switch/solo
    it('should be credit card for stringy valid switch/solo number with space - 16 chars', function() {
      assert.equal(niType('6331 1019 9999 0016'), NICreditCard);
    });
    it('should be credit card for stringy valid switch/solo number without space - 16 chars', function() {
      assert.equal(niType('6331101999990016'), NICreditCard);
    });
  });
  //IPV6
  describe('NIIPV6', function() {
    it('should be a valid ipv6', function() {
      assert.equal(niType('1200:0000:AB00:1234:0000:2552:7777:1313'), NIIPV6);
      assert.equal(niType('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'), NIIPV6);
    });
    it('should be invalid ipv6', function() {
      assert.notEqual(niType('1200:0000:AB00:1234:O000:2552:7777:1313'), NIIPV6);
    });
  });
  //IPV4
  describe('NIIPV4', function() {
    it('should be a valid ipv4', function() {
      assert.equal(niType('10.0.0.0'), NIIPV4);
      assert.equal(niType('172.16.0.0'), NIIPV4);
      assert.equal(niType('192.168.0.0'), NIIPV4);
    });
    it('should be invalid ipv4', function() {
      assert.notEqual(niType('123.266.44.0'), NIIPV4);
    });
  });
  //rgba color
  describe('NIRGBAColor', function() {
    it('should be a valid rgba color representation with alpha value', function() {
      assert.equal(niType('rgba(0,0,0,1)'), NIRGBAColor);
    });
    it('should be a valid rgba color representation without alpha value', function() {
      assert.equal(niType('rgb(0,0,0)'), NIRGBAColor);
    });
    it('should be not a valid rgba color representation without alpha value', function() {
      assert.notEqual(niType('rg(0,0,0,1)'), NIRGBAColor);
      assert.notEqual(niType('(0,0,0)'), NIRGBAColor);
    });
  });
  //hex color
  describe('NIHexColor', function() {
    it('should be a valid hex color representation', function() {
      assert.equal(niType('#000'), NIHexColor);
      assert.equal(niType('#ffffff'), NIHexColor);
    });
    it('should be invalid hex color representation', function() {
      assert.notEqual(niType('#gggggg'), NIHexColor);
      assert.notEqual(niType('#00'), NIHexColor);
      assert.notEqual(niType('#0000'), NIHexColor);
    });
  });
});
