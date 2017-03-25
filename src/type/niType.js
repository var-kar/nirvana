/**
 * Created by Karthik Vasudevan on 24/03/2017.
 */
'use strict';

/**
 *
 */
//all string types
global.NIString     = 'String';
global.NIEmail      = 'Email';
global.NIUrl        = 'Url';
global.NIPhone      = 'Phone';
global.NIHexaColor  = 'HexaColor';
global.NIRGBColor   = 'RGBColor';
global.NIIPV4       = 'IPV4';
global.NIIPV6       = 'IPV6';
global.NICreditCard = 'CreditCard';
global.NIJSON       = 'JSON';

//all number types
global.NINumber     = 'Number';
global.NIInt        = 'Int';
global.NIFloat      = 'Float';
global.NIInfinity   = 'Infinity';

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

//all falsy type
global.NINull       = 'Null';
global.NIUndefined  = 'Undefined';
global.NINaN        = 'NaN';

/**
 * [global niType]
 * @param Any suspect
 * @return {String type}
 */
global.niType       = function type(suspect) {
  console.log(NIHashMap);
};
niType();
global.niTrueType   = function type(suspect) {

};
