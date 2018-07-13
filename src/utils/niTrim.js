'use strict';

require('./niType');

/**
 * [niTrim]
 * utils function to trim white spaces if string and falsey objects in case of array
 * @param cb
 * @return function //uses callback to return when function invoked
 */
var niTrim = function(cb) {
  console.log(this);
  if (niIsOfType(this, NIString)) {
    return this.trim();
  } else if (niIsOfType(this, NIArray)) {
    return this.filter(Boolean);
  }
};


/**
 * [global niTrim]
 * calls niTrim with given item as thisArg and callback
 * @param input //thisArg
 * @param cb
 */
global.niTrim = function(input) {
  return niTrim.call(input);
};

//extend native default types with niLoop
if (!String.prototype.niTrim) String.prototype.niTrim   = niTrim;
if (!Array.prototype.niTrim) Array.prototype.niTrim   = niTrim;
