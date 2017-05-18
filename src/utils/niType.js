/**
 * Created by Karthik Vasudevan on 24/03/2017.
 * License: MIT
 */
'use strict';

/*eslint "no-useless-escape": "off"*/
/*eslint "max-len": "off"*/
const PHONE_PATTERN = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_PATTERN = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
const CREDIT_CARD_PATTERN = /[0-9]{13,19}|([0-9- ]{3,8}){3,6}/;
const HEX_COLOR_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const RGBA_COLOR_PATTERN = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
const IPV4_PATTERN = /^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/;
const IPV6_PATTERN = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

/**
 * Set all types in global scope which needs to
 * get validated in the schema.
 */
//string and its sub types
global.NIString     = 'String';
global.NIEmail      = 'Email';
global.NIUrl        = 'Url';
global.NIPhone      = 'Phone';
global.NIHexColor   = 'HexColor';
global.NIRGBAColor  = 'RGBAColor';
global.NIIPV4       = 'IPV4';
global.NIIPV6       = 'IPV6';
global.NICreditCard = 'CreditCard';
global.NIJSON       = 'JSON';

//special type
global.NIEnum       = 'Enum';

//number & its sub types
global.NINumber     = 'Number';
global.NIInt        = 'Int';
global.NIFloat      = 'Float';
global.NIInfinity   = 'Infinity';
global.NINaN        = 'NaN';

//date type
global.NIDate       = 'Date';

//boolean type
global.NIBoolean    = 'Boolean';

//array type
global.NIArray      = 'Array';

//object type
global.NIHashMap    = global.NIDictionary = global.NIObject = 'Object';

//function type
global.NIFunction   = 'Function';

//regex type
global.NIRegExp     = 'RegExp';

//all falsey types
global.NINull       = 'Null';
global.NIUndefined  = 'Undefined';

//custom type
global.NICustom     = 'Custom';

//global functions

/**
 * [global niTypeOf]
 * @param suspect
 * @return {String}
 */
global.niTypeOf     = (suspect) => {
  let trueType = getTrueType(suspect);
  if (trueType === 'String') {
    return getStringSubType(suspect);
  } else if (trueType === 'Number') {
    return getNumberSubType(suspect);
  } else {
    return trueType;
  }
};

/**
 * [global niTrueTypeOf]
 * Get the actual javascript type
 * @param suspect
 * @returns {String}
 */
global.niTrueTypeOf = (suspect) => {
  return getTrueType(suspect);
};

/**
 * [extend]
 * Compares suspect with given type
 * @param thisArg suspect
 * @param expectedType
 * @param secondArg // this argument depends on expectedType value (Array for NIEnum, RegExp for NICustom)
 * @returns {boolean}
 */
var extend = function(expectedType, secondArg = null) {
  let typeError = 'Expecting secondArg to be of type';
  if (expectedType === NIEnum) {
    //enum checker
    if (secondArg === null) {
      secondArg = [];
    }
    if (getTrueType(secondArg) === NIArray) {
      return (secondArg.indexOf(this) >= 0);
    } else throw new TypeError(typeError + ' NIArray');
  } else if (expectedType === NICustom) {
    //custom regex checker
    if (getTrueType(secondArg) === NIRegExp) {
      return secondArg.test(this);
    } else throw new TypeError(typeError + ' NIRegExp');
  } else {
    //rest of it
    if (niTypeOf(this) === expectedType) {
      //check sub type
      return true;
    } else return getTrueType(this) === expectedType;
  }
};

/**
 * [global niIsOfType]
 * @param suspect
 * @param expectedType
 * @param secondArg
 * @returns Boolean {*}
 */
global.niIsOfType   = (suspect, expectedType, secondArg) => {
  return extend.call(suspect, expectedType, secondArg);
};

//extend default types with niIsOfType
if (!String.prototype.niIsOfType) String.prototype.niIsOfType     = extend;
if (!Number.prototype.niIsOfType) Number.prototype.niIsOfType     = extend;
if (!Array.prototype.niIsOfType) Array.prototype.niIsOfType       = extend;
if (!Object.prototype.niIsOfType) Object.prototype.niIsOfType     = extend;
if (!Boolean.prototype.niIsOfType) Boolean.prototype.niIsOfType   = extend;
if (!Date.prototype.niIsOfType) Date.prototype.niIsOfType         = extend;
if (!RegExp.prototype.niIsOfType) RegExp.prototype.niIsOfType     = extend;
if (!Function.prototype.niIsOfType) Function.prototype.niIsOfType = extend;

//private functions

/**
 * [getTrueType]
 * A private function with returns suspect's true type.
 * @param suspect
 * @returns {String}
 */
function getTrueType(suspect) {
  return Object.prototype.toString.call(suspect).slice(8, -1);
}

/**
 * [isJsonString]
 * A private function which checks if the string is a valid JSON.
 * @param str
 * @returns {boolean}
 */
function isJsonString(str) {
  try {
    let val = JSON.parse(str);
    let valTrueType = getTrueType(val);
    if (valTrueType === NINull || valTrueType === NINumber || valTrueType === NIBoolean) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * [getStringSubType]
 * A private function to detect string subtype
 * @param suspect
 * @returns {String}
 */
function getStringSubType(suspect) {
  if (EMAIL_PATTERN.test(suspect)) {
    return NIEmail;
  } else if (URL_PATTERN.test(suspect)) {
    return NIUrl;
  } else if (PHONE_PATTERN.test(suspect.replace(/\s/g, ''))) {
    return NIPhone;
  } else if (HEX_COLOR_PATTERN.test(suspect)) {
    return NIHexColor;
  } else if (RGBA_COLOR_PATTERN.test(suspect)) {
    return NIRGBAColor;
  } else if (IPV4_PATTERN.test(suspect)) {
    return NIIPV4;
  } else if (IPV6_PATTERN.test(suspect)) {
    return NIIPV6;
  } else if (CREDIT_CARD_PATTERN.test(suspect)) {
    return NICreditCard;
  } else if (isJsonString(suspect)) {
    return NIJSON;
  } else return NIString;
}

/**
 * [getNumberSubType]
 * A private function to detect number subtype
 * @param suspect
 * @returns {String}
 */
function getNumberSubType(suspect) {
  if (Number.isNaN(suspect)) {
    return NINaN;
  } else if (suspect === Number.POSITIVE_INFINITY || suspect === Number.NEGATIVE_INFINITY) {
    return NIInfinity;
  } else if (suspect % 1 !== 0) {
    return NIFloat;
  } else if (suspect % 1 === 0 && Number.isSafeInteger(suspect)) {
    return NIInt;
  } else return NINumber;
}
