/**
 * Created by Karthik Vasudevan on 28/03/2017.
 * License: MIT
 */

'use strict';
const assert = require('chai').assert;
require('../../src/type/niType');

//remember that true, Number, null etc are valid JSON according to JSON.parse
//but this has been overridden in our validation.
describe('NITrueTypeOf', () => {
  describe('NIString', () => {
    it('should be a string', () => {
      assert.equal(niTrueTypeOf('test@test.com'), NIString);
      assert.equal(niTrueTypeOf('http://sdfsdf.com'), NIString);
      assert.equal(niTrueTypeOf('+447595171911'), NIString);
      assert.equal(niTrueTypeOf('undefined'), NIString);
      assert.equal(niTrueTypeOf('null'), NIString);
      assert.equal(niTrueTypeOf('infinity'), NIString);
      assert.equal(niTrueTypeOf('-infinity'), NIString);
      assert.equal(niTrueTypeOf('4242 4242 4242 4242'), NIString);
    });
    it('should not be a string', () => {
      assert.notEqual(niTrueTypeOf(-'test@test.com'), NIString);
      assert.notEqual(niTrueTypeOf(123), NIString);
      assert.notEqual(niTrueTypeOf(123), NIString);
      assert.notEqual(niTrueTypeOf(123.3423), NIString);
      assert.notEqual(niTrueTypeOf(undefined), NIString);
      assert.notEqual(niTrueTypeOf(null), NIString);
      assert.notEqual(niTrueTypeOf(NaN), NIString);
      assert.notEqual(niTrueTypeOf(false), NIString);
      assert.notEqual(niTrueTypeOf(0), NIString);
      assert.notEqual(niTrueTypeOf(0), NIString);
      assert.notEqual(niTrueTypeOf({}), NIString);
      assert.notEqual(niTrueTypeOf([]), NIString);
      assert.notEqual(niTrueTypeOf(() => {}), NIString);
      assert.notEqual(niTrueTypeOf(new Error('hello error world')), NIString);
    });
  });
});
describe('NITypeOf ', () => {
  describe('NIString ', () => {

    //string
    it('should be string for a string', () => {
      assert.equal(niTypeOf('Hello world!'), NIString);
    });
    it('should be string for a alphanumeric', () => {
      assert.equal(niTypeOf('232ds3!%'), NIString);
    });
    it('should be string for a stringy NaN', () => {
      assert.equal(niTypeOf('NaN'), NIString);
    });
    it('should be string for a stringy undefined', () => {
      assert.equal(niTypeOf('undefined'), NIString);
    });
    it('should be string for a stringy Infinity', () => {
      assert.equal(niTypeOf('Infinity'), NIString);
    });
    it('should be string for a stringy number which starts with zero', () => {
      assert.equal(niTypeOf('032422'), NIString);
    });
    it('should be string for stringy null', () => {
      assert.equal(niTypeOf('null'), NIString);
    });
    it('should be string for stringy number', () => {
      assert.equal(niTypeOf('45232'), NIString);
    });
    it('should be string for stringy boolean', () => {
      assert.equal(niTypeOf('true'), NIString);
    });
  });
  describe('NIJSON ', () => {
    //json
    it('should be JSON for stringy empty array', () => {
      assert.equal(niTypeOf('[]'), NIJSON);
    });
    it('should be JSON for stringy empty object', () => {
      assert.equal(niTypeOf('{}'), NIJSON);
    });
    it('should be JSON for stringy JSON', () => {
      assert.equal(niTypeOf('{"foo": 1}'), NIJSON);
    });
  });
  describe('NICreditCard ', () => {
    //credit card
    //visa
    it('should be credit card for stringy valid visa card number without space - 16 chars', () => {
      assert.equal(niTypeOf('4242424242424242'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 16 chars', () => {
      assert.equal(niTypeOf('4242 4242 4242 4242'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 17 chars', () => {
      assert.equal(niTypeOf('4012 8888 8888 1881 1'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number without space - 17 chars', () => {
      assert.equal(niTypeOf('40128888888818811'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number with space - 13 chars', () => {
      assert.equal(niTypeOf('4222 2222 2222 2'), NICreditCard);
    });
    it('should be credit card for stringy valid visa card number without space - 13 chars', () => {
      assert.equal(niTypeOf('4222222222222'), NICreditCard);
    });

    //master card
    it('should be credit card for stringy valid master card number without space - 16 chars', () => {
      assert.equal(niTypeOf('5555555555554444'), NICreditCard);
    });
    it('should be credit card for stringy valid master card number with space - 16 chars', () => {
      assert.equal(niTypeOf('5555 5555 5555 4444'), NICreditCard);
    });

    //american express
    it('should be credit card for stringy valid american express number with space - 15 chars', () => {
      assert.equal(niTypeOf('3782 8224 6310 005'), NICreditCard);
    });
    it('should be credit card for stringy valid american express number without space - 15 chars', () => {
      assert.equal(niTypeOf('378282246310005'), NICreditCard);
    });

    //australian bank
    it('should be credit card for stringy valid australian bank number with space - 16 chars', () => {
      assert.equal(niTypeOf('5610 5910 8101 8250'), NICreditCard);
    });
    it('should be credit card for stringy valid australian bank number without space - 16 chars', () => {
      assert.equal(niTypeOf('5610591081018250'), NICreditCard);
    });

    //diners club
    it('should be credit card for stringy valid diners club number with space - 14 chars', () => {
      assert.equal(niTypeOf('3056 9309 0259 04'), NICreditCard);
    });
    it('should be credit card for stringy valid diners club number without space - 14 chars', () => {
      assert.equal(niTypeOf('30569309025904'), NICreditCard);
    });

    //Discover
    it('should be credit card for stringy valid discover number with space - 16 chars', () => {
      assert.equal(niTypeOf('6011 1111 1111 1117'), NICreditCard);
    });
    it('should be credit card for stringy valid discover number without space - 16 chars', () => {
      assert.equal(niTypeOf('6011111111111117'), NICreditCard);
    });

    //jcb
    it('should be credit card for stringy valid JCB number with space - 16 chars', () => {
      assert.equal(niTypeOf('3530 1113 3330 0000'), NICreditCard);
    });
    it('should be credit card for stringy valid JCB number without space - 16 chars', () => {
      assert.equal(niTypeOf('3530111333300000'), NICreditCard);
    });

    //switch/solo
    it('should be credit card for stringy valid switch/solo number with space - 16 chars', () => {
      assert.equal(niTypeOf('6331 1019 9999 0016'), NICreditCard);
    });
    it('should be credit card for stringy valid switch/solo number without space - 16 chars', () => {
      assert.equal(niTypeOf('6331101999990016'), NICreditCard);
    });
  });
  //IPV6
  describe('NIIPV6', () => {
    it('should be a valid ipv6', () => {
      assert.equal(niTypeOf('1200:0000:AB00:1234:0000:2552:7777:1313'), NIIPV6);
      assert.equal(niTypeOf('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'), NIIPV6);
    });
    it('should be invalid ipv6', () => {
      assert.notEqual(niTypeOf('1200:0000:AB00:1234:O000:2552:7777:1313'), NIIPV6);
    });
  });
  //IPV4
  describe('NIIPV4', () => {
    it('should be a valid ipv4', () => {
      assert.equal(niTypeOf('10.0.0.0'), NIIPV4);
      assert.equal(niTypeOf('172.16.0.0'), NIIPV4);
      assert.equal(niTypeOf('192.168.0.0'), NIIPV4);
    });
    it('should be invalid ipv4', () => {
      assert.notEqual(niTypeOf('123.266.44.0'), NIIPV4);
    });
  });
  //rgba color
  describe('NIRGBAColor', () => {
    it('should be a valid rgba color representation with alpha value', () => {
      assert.equal(niTypeOf('rgba(0,0,0,1)'), NIRGBAColor);
    });
    it('should be a valid rgba color representation without alpha value', () => {
      assert.equal(niTypeOf('rgb(0,0,0)'), NIRGBAColor);
    });
    it('should be not a valid rgba color representation without alpha value', () => {
      assert.notEqual(niTypeOf('rg(0,0,0,1)'), NIRGBAColor);
      assert.notEqual(niTypeOf('(0,0,0)'), NIRGBAColor);
    });
  });
  //hex color
  describe('NIHexColor', () => {
    it('should be a valid hex color representation', () => {
      assert.equal(niTypeOf('#000'), NIHexColor);
      assert.equal(niTypeOf('#ffffff'), NIHexColor);
    });
    it('should be invalid hex color representation', () => {
      assert.notEqual(niTypeOf(' #gggggg '), NIHexColor);
      assert.notEqual(niTypeOf('#00'), NIHexColor);
      assert.notEqual(niTypeOf('#0000'), NIHexColor);
    });
  });
  //phone
  describe('NIPhone', () => {
    it('should be a valid phone number', () => {
      assert.equal(niTypeOf(' +44 7595 171900 '), NIPhone);
      assert.equal(niTypeOf('07595171900'), NIPhone);
      assert.equal(niTypeOf('7595171900'), NIPhone);
      assert.equal(niTypeOf('919894227627'), NIPhone);
      assert.equal(niTypeOf('919894227627'), NIPhone);
      assert.equal(niTypeOf('02034174046'), NIPhone);
      assert.equal(niTypeOf('020 341 74046'), NIPhone);
      assert.equal(niTypeOf('044 43302065'), NIPhone);
      assert.equal(niTypeOf('+91 44 43302065'), NIPhone);
      assert.equal(niTypeOf('(541) 754-3010'), NIPhone);
    });
    it('should be invalid phone number', () => {
      assert.notEqual(niTypeOf('754-3010'), NIPhone); //because no need for local phone number in internet
      assert.notEqual(niTypeOf('636-48018'), NIPhone);
      assert.notEqual(niTypeOf('191 541 754 3010'), NIPhone);
      assert.notEqual(niTypeOf('191 541 sdfssf'), NIPhone);
      assert.notEqual(niTypeOf('111111'), NIPhone);
      assert.notEqual(niTypeOf('#111111'), NIPhone);
    });
  });
  describe('NIUrl', () => {
    it('should be a valid URL', () => {
      assert.equal(niTypeOf('http://google.com'), NIUrl);
      assert.equal(niTypeOf('https://www.google.com'), NIUrl);
      assert.equal(niTypeOf('www.google.com'), NIUrl);
      assert.equal(niTypeOf('google.com'), NIUrl);
      assert.equal(niTypeOf('google.com?query=test'), NIUrl);
      assert.equal(niTypeOf('google.com/about/'), NIUrl);
      assert.equal(niTypeOf('google.com#about'), NIUrl);
    });
    it('should be invalid URL', () => {
      assert.notEqual(niTypeOf('google'), NIUrl);
      assert.notEqual(niTypeOf('google.s'), NIUrl);
      assert.notEqual(niTypeOf('google!.com'), NIUrl);
      assert.notEqual(niTypeOf('sdfds@ggg.com'), NIUrl);
    });
  });
  describe('NIEmail', () => {
    it('should be a valid email', () => {
      assert.equal(niTypeOf('test@test.com'), NIEmail);
      assert.equal(niTypeOf('TestSpec.Mocha@Example.com'), NIEmail);
      assert.equal(niTypeOf('g@g.co'), NIEmail);
      assert.equal(niTypeOf('g_o@g.co'), NIEmail);
    });
    it('should be invalid email', () => {
      assert.notEqual(niTypeOf('testtest.com'), NIEmail);
      assert.notEqual(niTypeOf('test@test'), NIEmail);
      assert.notEqual(niTypeOf('!@%.^^'), NIEmail);
    });
  });
});

describe('NIIsOfType', () => {
  describe('NIString', () => {
    it('should be true for all strings', () => {
      assert.isTrue(niIsOfType('sfdfsdf', NIString));
      assert.isTrue(niIsOfType('sdfds@sdfsd.com', NIString));
      assert.isTrue(niIsOfType('4242 4242 4242 4242', NIString));
      assert.isTrue(niIsOfType('http://google.com', NIString));
      assert.isTrue(niIsOfType('NaN', NIString));
      assert.isTrue(niIsOfType('undefined', NIString));
      assert.isTrue(niIsOfType('0', NIString));
    });
    it('should be false for all non strings', () => {
      assert.isFalse(niIsOfType(0, NIString));
      assert.isFalse(niIsOfType(-Infinity, NIString));
      assert.isFalse(niIsOfType(undefined, NIString));
      assert.isFalse(niIsOfType(null, NIString));
      assert.isFalse(niIsOfType(false, NIString));
      assert.isFalse(niIsOfType([], NIString));
      assert.isFalse(niIsOfType({}, NIString));
      assert.isFalse(niIsOfType(() => {}, NIString));
    });
  });
  describe('NIJSON', () => {
    it('should be a valid JSON and a string', () => {
      assert.isTrue(niIsOfType('{}', NIJSON));
      assert.isTrue(niIsOfType('[]', NIJSON));
      assert.isTrue(niIsOfType('{"test": 4}', NIJSON));
      assert.isTrue(niIsOfType('{"test": 4}', NIString));
      assert.isTrue(niIsOfType('[]', NIString));
    });
    it('should be invalid JSON and a string', () => {
      assert.isFalse(niIsOfType('undefined', NIJSON));
      assert.isFalse(niIsOfType('null', NIJSON));
      assert.isFalse(niIsOfType('0', NIJSON));
      assert.isFalse(niIsOfType('234234', NIJSON));
      assert.isFalse(niIsOfType('false', NIJSON));
      assert.isFalse(niIsOfType('NaN', NIJSON));
      assert.isFalse(niIsOfType(undefined, NIJSON));
    });
  });
  describe('NICreditCard', () => {
    it('should be true for all valid credit cards', () => {
      assert.isTrue(niIsOfType('4242424242424242', NICreditCard));
      assert.isTrue(niIsOfType('4242 4242 4242 4242', NICreditCard));
      assert.isTrue(niIsOfType('4012 8888 8888 1881 1', NICreditCard));
      assert.isTrue(niIsOfType('40128888888818811', NICreditCard));
      assert.isTrue(niIsOfType('4222 2222 2222 2', NICreditCard));
      assert.isTrue(niIsOfType('4222222222222', NICreditCard));
      assert.isTrue(niIsOfType('5555555555554444', NICreditCard));
      assert.isTrue(niIsOfType('5555 5555 5555 4444', NICreditCard));
      assert.isTrue(niIsOfType('3782 8224 6310 005', NICreditCard));
      assert.isTrue(niIsOfType('378282246310005', NICreditCard));
      assert.isTrue(niIsOfType('5610 5910 8101 8250', NICreditCard));
      assert.isTrue(niIsOfType('5610591081018250', NICreditCard));
      assert.isTrue(niIsOfType('3056 9309 0259 04', NICreditCard));
      assert.isTrue(niIsOfType('30569309025904', NICreditCard));
      assert.isTrue(niIsOfType('6011 1111 1111 1117', NICreditCard));
      assert.isTrue(niIsOfType('6011111111111117', NICreditCard));
      assert.isTrue(niIsOfType('3530 1113 3330 0000', NICreditCard));
      assert.isTrue(niIsOfType('3530111333300000', NICreditCard));
      assert.isTrue(niIsOfType('6331 1019 9999 0016', NICreditCard));
      assert.isTrue(niIsOfType('6331101999990016', NICreditCard));
    });
    it('should be true for all valid string', () => {
      assert.isTrue(niIsOfType('4242424242424242', NIString));
      assert.isTrue(niIsOfType('4242 4242 4242 4242', NIString));
      assert.isTrue(niIsOfType('4012 8888 8888 1881 1', NIString));
      assert.isTrue(niIsOfType('40128888888818811', NIString));
      assert.isTrue(niIsOfType('4222 2222 2222 2', NIString));
      assert.isTrue(niIsOfType('4222222222222', NIString));
      assert.isTrue(niIsOfType('5555555555554444', NIString));
      assert.isTrue(niIsOfType('5555 5555 5555 4444', NIString));
      assert.isTrue(niIsOfType('3782 8224 6310 005', NIString));
      assert.isTrue(niIsOfType('378282246310005', NIString));
      assert.isTrue(niIsOfType('5610 5910 8101 8250', NIString));
      assert.isTrue(niIsOfType('5610591081018250', NIString));
      assert.isTrue(niIsOfType('3056 9309 0259 04', NIString));
      assert.isTrue(niIsOfType('30569309025904', NIString));
      assert.isTrue(niIsOfType('6011 1111 1111 1117', NIString));
      assert.isTrue(niIsOfType('6011111111111117', NIString));
      assert.isTrue(niIsOfType('3530 1113 3330 0000', NIString));
      assert.isTrue(niIsOfType('3530111333300000', NIString));
      assert.isTrue(niIsOfType('6331 1019 9999 0016', NIString));
      assert.isTrue(niIsOfType('6331101999990016', NIString));
    });
  });
  describe('NIIPV6', () => {
    it('should be a valid IPV6', () => {
      assert.isTrue(niIsOfType('1200:0000:AB00:1234:0000:2552:7777:1313', NIIPV6));
      assert.isTrue(niIsOfType('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A', NIIPV6));
    });
    it('should be a valid string too', () => {
      assert.isTrue(niIsOfType('1200:0000:AB00:1234:0000:2552:7777:1313', NIString));
      assert.isTrue(niIsOfType('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A', NIString));
    });
  });
  describe('NIIPV4', () => {
    it('should be a valid IPV4', () => {
      assert.isTrue(niIsOfType('10.0.0.0', NIIPV4));
      assert.isTrue(niIsOfType('172.16.0.0', NIIPV4));
      assert.isTrue(niIsOfType('192.168.0.0', NIIPV4));
    });
    it('should be a valid string too', () => {
      assert.isTrue(niIsOfType('10.0.0.0', NIString));
      assert.isTrue(niIsOfType('172.16.0.0', NIString));
      assert.isTrue(niIsOfType('192.168.0.0', NIString));
    });
  });
  describe('NIRGBAColor', () => {
    it('should be a valid RGBA color', () => {
      assert.isTrue(niIsOfType('rgba(0,0,0,1)', NIRGBAColor));
      assert.isTrue(niIsOfType('rgba(0,0,0)', NIRGBAColor));
    });
    it('should be a valid string', () => {
      assert.isTrue(niIsOfType('rgba(0,0,0,1)', NIString));
      assert.isTrue(niIsOfType('rgba(0,0,0)', NIString));
    });
  });
  describe('NIHexColor', () => {
    it('should be a valid hex color', () => {
      assert.isTrue(niIsOfType('#000', NIHexColor));
      assert.isTrue(niIsOfType('#ffffff', NIHexColor));
    });
    it('should be a valid string', () => {
      assert.isTrue(niIsOfType('#ffffff', NIString));
      assert.isTrue(niIsOfType('#000', NIString));
    });
  });
  describe('NIPhone', () => {
    it('should be a valid phone number', () => {
      assert.isTrue(niIsOfType('+44 7595 171900', NIPhone));
      assert.isTrue(niIsOfType('07595171900', NIPhone));
      assert.isTrue(niIsOfType('7595171900', NIPhone));
      assert.isTrue(niIsOfType('919894227627', NIPhone));
      assert.isTrue(niIsOfType('919894227627', NIPhone));
      assert.isTrue(niIsOfType('02034174046', NIPhone));
      assert.isTrue(niIsOfType('020 341 74046', NIPhone));
      assert.isTrue(niIsOfType('044 43302065', NIPhone));
      assert.isTrue(niIsOfType('+91 44 43302065', NIPhone));
      assert.isTrue(niIsOfType('(541) 754-3010', NIPhone));
    });
    it('should be a valid string', () => {
      assert.isTrue(niIsOfType('+44 7595 171900', NIString));
      assert.isTrue(niIsOfType('07595171900', NIString));
      assert.isTrue(niIsOfType('7595171900', NIString));
      assert.isTrue(niIsOfType('919894227627', NIString));
      assert.isTrue(niIsOfType('919894227627', NIString));
      assert.isTrue(niIsOfType('02034174046', NIString));
      assert.isTrue(niIsOfType('020 341 74046', NIString));
      assert.isTrue(niIsOfType('044 43302065', NIString));
      assert.isTrue(niIsOfType('+91 44 43302065', NIString));
      assert.isTrue(niIsOfType('(541) 754-3010', NIString));
    });
  });
  describe('NIUrl', () => {
    it('should be a valid URL', () => {
      assert.isTrue(niIsOfType('http://google.com', NIUrl));
      assert.isTrue(niIsOfType('https://www.google.com', NIUrl));
      assert.isTrue(niIsOfType('www.google.com', NIUrl));
      assert.isTrue(niIsOfType('google.com', NIUrl));
      assert.isTrue(niIsOfType('google.com?query=test', NIUrl));
      assert.isTrue(niIsOfType('google.com/about/', NIUrl));
      assert.isTrue(niIsOfType('google.com#about', NIUrl));
    });
    it('should be a valid string', () => {
      assert.isTrue(niIsOfType('http://google.com', NIString));
      assert.isTrue(niIsOfType('https://www.google.com', NIString));
      assert.isTrue(niIsOfType('www.google.com', NIString));
      assert.isTrue(niIsOfType('google.com', NIString));
      assert.isTrue(niIsOfType('google.com?query=test', NIString));
      assert.isTrue(niIsOfType('google.com/about/', NIString));
      assert.isTrue(niIsOfType('google.com#about', NIString));
    });
  });
  describe('NIEmail', () => {
    it('should be a valid email address', () => {
      assert.isTrue(niIsOfType('test@test.com', NIEmail));
      assert.isTrue(niIsOfType('TestSpec.Mocha@Example.com', NIEmail));
      assert.isTrue(niIsOfType('g@g.co', NIEmail));
      assert.isTrue(niIsOfType('g_o@g.co', NIEmail));
    });
    it('should be a valid string', () => {
      assert.isTrue(niIsOfType('test@test.com', NIString));
      assert.isTrue(niIsOfType('TestSpec.Mocha@Example.com', NIString));
      assert.isTrue(niIsOfType('g@g.co', NIString));
      assert.isTrue(niIsOfType('g_o@g.co', NIString));
    });
  });
});

//you can't check undefined or null
describe('Native Extend', () => {
  describe('NIString', () => {
    it('should be true for all strings', () => {
      assert.isTrue('sfdfsdf'.niIsOfType(NIString));
      assert.isTrue('sdfds@sdfsd.com'.niIsOfType(NIString));
      assert.isTrue('4242 4242 4242 4242'.niIsOfType(NIString));
      assert.isTrue('http://google.com'.niIsOfType(NIString));
      assert.isTrue('NaN'.niIsOfType(NIString));
      assert.isTrue('undefined'.niIsOfType(NIString));
      assert.isTrue('0'.niIsOfType(NIString));
    });
    it('should be false for all non strings', () => {
      assert.isFalse((0).niIsOfType(NIString));
      assert.isFalse((-Infinity).niIsOfType(NIString));
      assert.isFalse(false.niIsOfType(NIString));
      assert.isFalse([].niIsOfType(NIString));
      assert.isFalse({}.niIsOfType(NIString));
      assert.isFalse((() => {}).niIsOfType(NIString));
    });
  });
  describe('NIJSON', () => {
    it('should be a valid JSON and a string', () => {
      assert.isTrue('{}'.niIsOfType(NIJSON));
      assert.isTrue('[]'.niIsOfType(NIJSON));
      assert.isTrue('{"test": 4}'.niIsOfType(NIJSON));
      assert.isTrue('{"test": 4}'.niIsOfType(NIString));
      assert.isTrue('[]'.niIsOfType(NIString));
    });
    it('should be invalid JSON and a string', () => {
      assert.isFalse('undefined'.niIsOfType(NIJSON));
      assert.isFalse('null'.niIsOfType(NIJSON));
      assert.isFalse('0'.niIsOfType(NIJSON));
      assert.isFalse('234234'.niIsOfType(NIJSON));
      assert.isFalse('false'.niIsOfType(NIJSON));
      assert.isFalse('NaN'.niIsOfType(NIJSON));
    });
  });
  describe('NICreditCard', () => {
    it('should be true for all valid credit cards', () => {
      assert.isTrue('4242424242424242'.niIsOfType(NICreditCard));
      assert.isTrue('4242 4242 4242 4242'.niIsOfType(NICreditCard));
      assert.isTrue('4012 8888 8888 1881 1'.niIsOfType(NICreditCard));
      assert.isTrue('40128888888818811'.niIsOfType(NICreditCard));
      assert.isTrue('4222 2222 2222 2'.niIsOfType(NICreditCard));
      assert.isTrue('4222222222222'.niIsOfType(NICreditCard));
      assert.isTrue('5555555555554444'.niIsOfType(NICreditCard));
      assert.isTrue('5555 5555 5555 4444'.niIsOfType(NICreditCard));
      assert.isTrue('3782 8224 6310 005'.niIsOfType(NICreditCard));
      assert.isTrue('378282246310005'.niIsOfType(NICreditCard));
      assert.isTrue('5610 5910 8101 8250'.niIsOfType(NICreditCard));
      assert.isTrue('5610591081018250'.niIsOfType(NICreditCard));
      assert.isTrue('3056 9309 0259 04'.niIsOfType(NICreditCard));
      assert.isTrue('30569309025904'.niIsOfType(NICreditCard));
      assert.isTrue('6011 1111 1111 1117'.niIsOfType(NICreditCard));
      assert.isTrue('6011111111111117'.niIsOfType(NICreditCard));
      assert.isTrue('3530 1113 3330 0000'.niIsOfType(NICreditCard));
      assert.isTrue('3530111333300000'.niIsOfType(NICreditCard));
      assert.isTrue('6331 1019 9999 0016'.niIsOfType(NICreditCard));
      assert.isTrue('6331101999990016'.niIsOfType(NICreditCard));
    });
    it('should be true for all valid string', () => {
      assert.isTrue('4242424242424242'.niIsOfType(NIString));
      assert.isTrue('4242 4242 4242 4242'.niIsOfType(NIString));
      assert.isTrue('4012 8888 8888 1881 1'.niIsOfType(NIString));
      assert.isTrue('40128888888818811'.niIsOfType(NIString));
      assert.isTrue('4222 2222 2222 2'.niIsOfType(NIString));
      assert.isTrue('4222222222222'.niIsOfType(NIString));
      assert.isTrue('5555555555554444'.niIsOfType(NIString));
      assert.isTrue('5555 5555 5555 4444'.niIsOfType(NIString));
      assert.isTrue('3782 8224 6310 005'.niIsOfType(NIString));
      assert.isTrue('378282246310005'.niIsOfType(NIString));
      assert.isTrue('5610 5910 8101 8250'.niIsOfType(NIString));
      assert.isTrue('5610591081018250'.niIsOfType(NIString));
      assert.isTrue('3056 9309 0259 04'.niIsOfType(NIString));
      assert.isTrue('30569309025904'.niIsOfType(NIString));
      assert.isTrue('6011 1111 1111 1117'.niIsOfType(NIString));
      assert.isTrue('6011111111111117'.niIsOfType(NIString));
      assert.isTrue('3530 1113 3330 0000'.niIsOfType(NIString));
      assert.isTrue('3530111333300000'.niIsOfType(NIString));
      assert.isTrue('6331 1019 9999 0016'.niIsOfType(NIString));
      assert.isTrue('6331101999990016'.niIsOfType(NIString));
    });
  });
  describe('NIIPV6', () => {
    it('should be a valid IPV6', () => {
      assert.isTrue('1200:0000:AB00:1234:0000:2552:7777:1313'.niIsOfType(NIIPV6));
      assert.isTrue('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'.niIsOfType(NIIPV6));
    });
    it('should be a valid string too', () => {
      assert.isTrue('1200:0000:AB00:1234:0000:2552:7777:1313'.niIsOfType(NIString));
      assert.isTrue('21DA:D3:0:2F3B:2AA:FF:FE28:9C5A'.niIsOfType(NIString));
    });
  });
  describe('NIIPV4', () => {
    it('should be a valid IPV4', () => {
      assert.isTrue('10.0.0.0'.niIsOfType(NIIPV4));
      assert.isTrue('172.16.0.0'.niIsOfType(NIIPV4));
      assert.isTrue('192.168.0.0'.niIsOfType(NIIPV4));
    });
    it('should be a valid string too', () => {
      assert.isTrue('10.0.0.0'.niIsOfType(NIString));
      assert.isTrue('172.16.0.0'.niIsOfType(NIString));
      assert.isTrue('192.168.0.0'.niIsOfType(NIString));
    });
  });
  describe('NIRGBAColor', () => {
    it('should be a valid RGBA color', () => {
      assert.isTrue('rgba(0,0,0,1)'.niIsOfType(NIRGBAColor));
      assert.isTrue('rgba(0,0,0)'.niIsOfType(NIRGBAColor));
    });
    it('should be a valid string', () => {
      assert.isTrue('rgba(0,0,0,1)'.niIsOfType(NIString));
      assert.isTrue('rgba(0,0,0)'.niIsOfType(NIString));
    });
  });
  describe('NIHexColor', () => {
    it('should be a valid hex color', () => {
      assert.isTrue('#000'.niIsOfType(NIHexColor));
      assert.isTrue('#ffffff'.niIsOfType(NIHexColor));
    });
    it('should be a valid string', () => {
      assert.isTrue('#ffffff'.niIsOfType(NIString));
      assert.isTrue('#000'.niIsOfType(NIString));
    });
  });
  describe('NIPhone', () => {
    it('should be a valid phone number', () => {
      assert.isTrue('+44 7595 171900'.niIsOfType(NIPhone));
      assert.isTrue('07595171900'.niIsOfType(NIPhone));
      assert.isTrue('7595171900'.niIsOfType(NIPhone));
      assert.isTrue('919894227627'.niIsOfType(NIPhone));
      assert.isTrue('919894227627'.niIsOfType(NIPhone));
      assert.isTrue('02034174046'.niIsOfType(NIPhone));
      assert.isTrue('020 341 74046'.niIsOfType(NIPhone));
      assert.isTrue('044 43302065'.niIsOfType(NIPhone));
      assert.isTrue('+91 44 43302065'.niIsOfType(NIPhone));
      assert.isTrue('(541) 754-3010'.niIsOfType(NIPhone));
    });
    it('should be a valid string', () => {
      assert.isTrue('+44 7595 171900'.niIsOfType(NIString));
      assert.isTrue('07595171900'.niIsOfType(NIString));
      assert.isTrue('7595171900'.niIsOfType(NIString));
      assert.isTrue('919894227627'.niIsOfType(NIString));
      assert.isTrue('919894227627'.niIsOfType(NIString));
      assert.isTrue('02034174046'.niIsOfType(NIString));
      assert.isTrue('020 341 74046'.niIsOfType(NIString));
      assert.isTrue('044 43302065'.niIsOfType(NIString));
      assert.isTrue('+91 44 43302065'.niIsOfType(NIString));
      assert.isTrue('(541) 754-3010'.niIsOfType(NIString));
    });
  });
  describe('NIUrl', () => {
    it('should be a valid URL', () => {
      assert.isTrue('http://google.com'.niIsOfType(NIUrl));
      assert.isTrue('https://www.google.com'.niIsOfType(NIUrl));
      assert.isTrue('www.google.com'.niIsOfType(NIUrl));
      assert.isTrue('google.com'.niIsOfType(NIUrl));
      assert.isTrue('google.com?query=test'.niIsOfType(NIUrl));
      assert.isTrue('google.com/about/'.niIsOfType(NIUrl));
      assert.isTrue('google.com#about'.niIsOfType(NIUrl));
    });
    it('should be a valid string', () => {
      assert.isTrue('http://google.com'.niIsOfType(NIString));
      assert.isTrue('https://www.google.com'.niIsOfType(NIString));
      assert.isTrue('www.google.com'.niIsOfType(NIString));
      assert.isTrue('google.com'.niIsOfType(NIString));
      assert.isTrue('google.com?query=test'.niIsOfType(NIString));
      assert.isTrue('google.com/about/'.niIsOfType(NIString));
      assert.isTrue('google.com#about'.niIsOfType(NIString));
    });
  });
  describe('NIEmail', () => {
    it('should be a valid email address', () => {
      assert.isTrue('test@test.com'.niIsOfType(NIEmail));
      assert.isTrue('TestSpec.Mocha@Example.com'.niIsOfType(NIEmail));
      assert.isTrue('g@g.co'.niIsOfType(NIEmail));
      assert.isTrue('g_o@g.co'.niIsOfType(NIEmail));
    });
    it('should be a valid string', () => {
      assert.isTrue('test@test.com'.niIsOfType(NIString));
      assert.isTrue('TestSpec.Mocha@Example.com'.niIsOfType(NIString));
      assert.isTrue('g@g.co'.niIsOfType(NIString));
      assert.isTrue('g_o@g.co'.niIsOfType(NIString));
    });
  });
});
