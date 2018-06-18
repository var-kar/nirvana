'use strict';
require('./niType');
const errorMsg = require('../error');

/**
 * [niLoop]
 * loop through an array or object
 * @param cb
 * @return undefined //uses callback to return
 */
var niLoop = function(cb) {
  if (niTypeOf(cb) === NIFunction) {
    if (niIsOfType(this, NIArray) || niIsOfType(this, NIHashMap)) {
      for (let itemKey in this) {
        if (this.hasOwnProperty(itemKey)) {
          cb(this[itemKey], itemKey);
        }
      }
    } else {
      cb();
      throw new TypeError(`${errorMsg.NILoop.itemTypeError}`);
    }
  } else {
    throw new TypeError(`${errorMsg.NILoop.cbTypeError}`);
  }
  return;
};

/**
 * [global niLoop]
 * calls niLoop with given item as thisArg and callback
 * @param item //thisArg
 * @param cb
 */
global.niLoop = function(items, cb) {
  niLoop.call(items, cb);
  return;
};

//extend native default types with niLoop
if (!Array.prototype.niLoop) Array.prototype.niLoop   = niLoop;
if (!Object.prototype.niLoop) Object.prototype.niLoop = niLoop;
