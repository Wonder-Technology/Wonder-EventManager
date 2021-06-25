'use strict';

var HashMap$WonderEventmanager = require("./HashMap.bs.js");

function set(map, key, value) {
  var newMap = HashMap$WonderEventmanager.copy(map);
  newMap[key] = value;
  return newMap;
}

function deleteVal(map, key) {
  var newMap = HashMap$WonderEventmanager.copy(map);
  newMap[key] = undefined;
  return newMap;
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
