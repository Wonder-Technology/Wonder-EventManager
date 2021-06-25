'use strict';

var SparseMap$WonderEventmanager = require("./SparseMap.bs.js");

function set(map, key, value) {
  map[key] = value;
  return map;
}

function remove(map, key) {
  map[key] = undefined;
  return map;
}

function deleteVal(map, key) {
  map[key] = undefined;
  return map;
}

var createEmpty = SparseMap$WonderEventmanager.createEmpty;

var copy = SparseMap$WonderEventmanager.copy;

var get = SparseMap$WonderEventmanager.get;

var getNullable = SparseMap$WonderEventmanager.getNullable;

var has = SparseMap$WonderEventmanager.has;

var map = SparseMap$WonderEventmanager.map;

var reducei = SparseMap$WonderEventmanager.reducei;

var getValues = SparseMap$WonderEventmanager.getValues;

var getKeys = SparseMap$WonderEventmanager.getKeys;

exports.createEmpty = createEmpty;
exports.copy = copy;
exports.get = get;
exports.getNullable = getNullable;
exports.has = has;
exports.set = set;
exports.remove = remove;
exports.map = map;
exports.reducei = reducei;
exports.getValues = getValues;
exports.getKeys = getKeys;
exports.deleteVal = deleteVal;
/* No side effect */
