'use strict';
require('./niType');

var niFor = function(cb) {
  var items = this;
  for (let itemKey in items) {
    if (items.hasOwnProperty(itemKey)) {
      cb(items[itemKey], itemKey);
    }
  }
};

global.niFor = function(item, cb) {
  niFor.call(item, cb);
};

if (!Array.prototype.niFor) Array.prototype.niFor   = niFor;
if (!Object.prototype.niFor) Object.prototype.niFor = niFor;
