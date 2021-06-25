'use strict';

var HashMap$WonderEventmanager = require("./HashMap.bs.js");

function set(map, key, value) {
  map[key] = value;
  return map;
}

function deleteVal(map, key) {
  map[key] = undefined;
  return map;
}

var createEmpty = HashMap$WonderEventmanager.createEmpty;

var get = HashMap$WonderEventmanager.get;

var getNullable = HashMap$WonderEventmanager.getNullable;

var has = HashMap$WonderEventmanager.has;

exports.createEmpty = createEmpty;
exports.set = set;
exports.get = get;
exports.getNullable = getNullable;
exports.has = has;
exports.deleteVal = deleteVal;
/* No side effect */
