/**
 * Created by Karthik Vasudevan on 24/03/2017.
 * License: MIT
 */
'use strict';

/*eslint "no-useless-escape": "off"*/
/*eslint "max-len": "off"*/
const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
const creditCardPattern = /[0-9]{13,19}|([0-9- ]{3,8}){3,6}/;
const hexColorPattern = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const rgbaColorPattern = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
const ipv4Pattern = /^\s*((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))\s*$/;
const ipv6Pattern = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

/**
 * Set all types in global scope which needs to
 * get validated in the schema.
 */
//all string types
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

//all number types
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

//special type
global.NIEnum       = 'Enum';

//all falsey types
global.NINull       = 'Null';
global.NIUndefined  = 'Undefined';

//custom type
global.NICustom     = 'Custom';

//global functions

/**
 * [global niType]
 * @param suspect
 * @return {String}
 */
global.niType       = function type(suspect) {
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
 * [global niTrueType]
 * Get the actual javascript type
 * @param suspect
 * @returns {String}
 */
global.niTrueType   = function type(suspect) {
  return getTrueType(suspect);
};

/**
 * [global niCompare]
 * Compares suspect with given type
 * @param suspect
 * @param compareWith
 * @param enumArr []
 * @returns {boolean}
 */
global.niCompare   = function compare(suspect, compareWith, enumArr = []) {
  if (compareWith === NIEnum) {
    //enum checker
    return (enumArr.indexOf(suspect) >= 0);
  } else if (compareWith instanceof RegExp) {
    //custom regex checker
    return compareWith.test(suspect);
  } else {
    //rest of it
    if (niType(suspect) === compareWith) {
      //check sub type
      return true;
    } else if (niTrueType(suspect) === compareWith) {
      //if its not satisfied with sub type, check with parent type.
      return true;
    } else {
      return false;
    }
  }
};

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
    let valTrueType = niTrueType(val);
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
  if (emailPattern.test(suspect)) {
    return NIEmail;
  } else if (urlPattern.test(suspect)) {
    return NIUrl;
  } else if (phonePattern.test(suspect.replace(/\s/g, ''))) {
    return NIPhone;
  } else if (hexColorPattern.test(suspect)) {
    return NIHexColor;
  } else if (rgbaColorPattern.test(suspect)) {
    return NIRGBAColor;
  } else if (ipv4Pattern.test(suspect)) {
    return NIIPV4;
  } else if (ipv6Pattern.test(suspect)) {
    return NIIPV6;
  } else if (creditCardPattern.test(suspect)) {
    return NICreditCard;
  } else if (isJsonString(suspect)) {
    return NIJSON;
  } else {
    return NIString;
  }
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
  } else if (suspect === Infinity || suspect === -Infinity) {
    return NIInfinity;
  } else if (suspect % 1 !== 0) {
    return NIFloat;
  } else if (suspect % 1 === 0) {
    return NIInt;
  } else {
    return NINumber;
  }
}
