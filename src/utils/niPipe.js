'use strict';
require('./niType');

/**
 * [niPipe]
 * utils function to invoke functions in series
 * @param cb
 * @return function //uses callback to return when function invoked
 */
var niPipe = function() {
  let _this = this;
  return ((input) => {
    return _this.reduce((output, singleFunc) => {
      return singleFunc(output);
    }, input);
  });
};


/**
 * [global niWhen]
 * calls niPipe with given item as thisArg and callback
 * @param funct //thisArg
 * @param cb
 */
global.niPipe = function() {
  niWhen.call([...arguments]);
  return;
};

//extend native default types with niPipe
if (!Array.prototype.niPipe) Array.prototype.niPipe   = niPipe;
