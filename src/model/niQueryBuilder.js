/**
 * Created by karthikvasudevan on 15/08/2017.
 * License: MIT
 */
'use strict';

require('../utils/niType.js');
require('../utils/niLoop.js');
const niOperator = require('./niOperator');

class NIQueryBuilder {
  constructor() {
    this._query = '';
  }

  select(fields) {
    if (niIsOfType(fields, NIArray)) {
      this._query = `SELECT ${this._formatField(fields)} `;
    } else {
      this._query = 'SELECT * ';
    }
    return this;
  }

  from(param) {
    this._query += this._tableDeclaration('FROM', param);
    return this;
  }

  innerJoin(param) {
    this._query += this._tableDeclaration('INNER JOIN', param);
    return this;
  }

  leftJoin(param) {
    this._query += this._tableDeclaration('LEFT JOIN', param);
    return this;
  }

  rightJoin(param) {
    this._query += this._tableDeclaration('RIGHT JOIN', param);
    return this;
  }

  on(condition) {
    this._query += `ON ${this._condition(condition)}`;
    return this;
  }

  alias(param) {
    this._query += `AS \`${param}\` `;
    return this;
  }

  where(condition) {
    this._query += `WHERE ${this._condition(condition)} `;
    return this;
  }

  union() {
    let queryString = '';
    [...arguments].forEach(function(item) {
      if (item instanceof NIQueryBuilder) {
        queryString += `(${item._query.trim()}) UNION `;
      }
    });

    this._query += queryString.substring(0, queryString.length - 7);
    return this;
  }

  insert() {
    this._query = 'INSERT ';
    return this;
  }

  into(tableName) {
    this._query += `INTO ${tableName} `;
    return this;
  }

  values(obj) {

  }

  update() {
    this._query = 'UPDATE ';
    return this;
  }

  byQuery(query) {
    if (niIsOfType(query, NIString)) {
      this._query = query;
    } else {
      throw new TypeError('Query must be a valid sql string');
    }
    return this;
  }

  getQuery() {
    return this._query.trim();
  }

  _condition(_where, operator = 'AND') {
    let queryString = '';

    if (!niIsOfType(_where, NIArray)) {
      throw new TypeError(`NIQueryBuilder expects an array for where condition instead of ${niTypeOf(_where)}`);
    }
    _where.niLoop((item) => {
      if (item.niIsOfType(NIDictionary)) {
        queryString += this._parseCondition(item, operator);
      } else if (item.niIsOfType(NIArray)) {
        queryString += `(${this._condition(item, 'OR')}) AND `;
      } else {
        throw new TypeError(`NIQueryBuilder expects an array of arrays or objects for where condition instead of array of ${niTypeOf(_where)}`);
      }
    });
    return queryString.substring(0, queryString.length - 4);
  }

  _parseCondition(item, operator) {
    let fieldName = Object.keys(item)[0];
    let condition = Object.keys(item[fieldName])[0];
    let conditionOperator = (niOperator[condition]) ? niOperator[condition] : condition;
    let value = this._conditionOperatorException(item[fieldName][condition], conditionOperator);
    fieldName = this._formatField(fieldName);
    return `(${fieldName} ${conditionOperator} ${value}) ${operator} `;
  }

  _conditionOperatorException(value, conditionOperator) {
    switch (conditionOperator) {
      case 'BETWEEN':
      case 'NOT BETWEEN':
        if (niIsOfType(value, NIArray)) {
          value = `'${value[0]}' AND '${value[1]}'`;
        } else {
          throw new TypeError('Expects an array for BETWEEN and NOT BETWEEN conditions');
        }
        break;
      case 'IN':
      case 'NOT IN':
        if (niIsOfType(value, NIArray)) {
          value = `('${value.join('\',\'')}')`;
        } else {
          throw new TypeError('Expects an array for IN and NOT IN conditions');
        }
        break;
      case 'IS':
      case 'IS NOT':
        if (niIsOfType(value, NINull)) {
          value = 'NULL';
        } else if (!niIsOfType(value, NIBoolean)) { //if boolean, return the value itself
          throw new TypeError('Expects boolean or null for IS and IS NOT conditions');
        }
        break;
      default: // null should not be checked here so all nulls will be wrapped as string
        value = this._checkForFunctions(value);
        break;
    }
    return value;
  }

  _formatField(field) {
    let fieldStr = '';
    let _this = this;
    if (niIsOfType(field, NIArray)) {
      field.niLoop(function(item) {
        if (niIsOfType(item, NIString)) {
          fieldStr += `${_this._checkForFunctions(item, '`')}, `;
        }
      });
      fieldStr = fieldStr.substring(0, fieldStr.length - 2);
    } else if (niIsOfType(field, NIString)) {
      fieldStr += `${_this._checkForFunctions(field, '`')}`;
    } else {
      throw new TypeError('Expecting array or string for fields');
    }
    return fieldStr;
  }

  _checkForFunctions(value, wrapping = '"') {
    if (value.indexOf('(') >= 0 && value.indexOf(')') >= 0) {
      return value;
    } else if (niIsOfType(value, NINull)) {
      return 'NULL';
    } else {
      return `${wrapping}${value}${wrapping}`;
    }
  }

  _tableDeclaration(keyword, param) {
    let query = '';
    if (param instanceof NIQueryBuilder) {
      query = `${keyword} (${param._query.trim()}) `;
    } else {
      query = `${keyword} \`${param}\` `;
    }
    return query;
  }
}

let queryBuilder = new NIQueryBuilder().select(['name', 'COUNT(id) AS `test`']).from('Merchant').getQuery();
console.log(queryBuilder);
