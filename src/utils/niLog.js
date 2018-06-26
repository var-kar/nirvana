'use strict';
require('./niType');

/**
 * [global niLog]
 * calls niLog with given item to print to your console
 * @param item
 */
global.niLog = (items) => {
  console.log(items);
  return;
};
