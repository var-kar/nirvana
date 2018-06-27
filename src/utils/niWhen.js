'use strict';
require('./niType');

/**
 * [niWhen]
 * utils function for condition operation
 * @param cb
 * @return function //uses callback to return when function invoked
 */
var niWhen = function(cb) {
  let _this = this;
  return ((item) => {
    if (_this(item)) {
      return cb(item);
    } else return item;
  });
};


/**
 * [global niWhen]
 * calls niWhen with given item as thisArg and callback
 * @param predicate //thisArg
 * @param cb
 */
global.niWhen = function(predicate, cb) {
  niWhen.call(predicate, cb);
  return;
};

//extend native default types with niLoop
if (!Function.prototype.niWhen) Function.prototype.niWhen   = niWhen;
