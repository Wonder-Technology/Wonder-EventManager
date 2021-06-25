'use strict';

var Curry = require("rescript/lib/js/curry.js");
var ArraySt$WonderEventmanager = require("../../../structure/ArraySt.bs.js");
var MutableSparseMap$WonderEventmanager = require("../../../structure/sparse_map/MutableSparseMap.bs.js");

function addToEventArr(eventName, eventData, getPriorityFunc, eventArrMap) {
  var arr = MutableSparseMap$WonderEventmanager.get(eventArrMap, eventName);
  if (arr === undefined) {
    return MutableSparseMap$WonderEventmanager.set(eventArrMap, eventName, [eventData]);
  }
  var __x = ArraySt$WonderEventmanager.push(arr, eventData);
  return MutableSparseMap$WonderEventmanager.set(eventArrMap, eventName, __x.sort(function (eventDataA, eventDataB) {
                  return Curry._1(getPriorityFunc, eventDataB) - Curry._1(getPriorityFunc, eventDataA) | 0;
                }));
}

function removeFromEventArrMapByHandleFunc(eventName, param, eventArrMap) {
  var targetHandleFunc = param[1];
  var getHandleFuncFunc = param[0];
  var arr = MutableSparseMap$WonderEventmanager.get(eventArrMap, eventName);
  if (arr !== undefined) {
    return MutableSparseMap$WonderEventmanager.set(eventArrMap, eventName, arr.filter(function (domEventData) {
                    return Curry._1(getHandleFuncFunc, domEventData) !== targetHandleFunc;
                  }));
  } else {
    return eventArrMap;
  }
}

exports.addToEventArr = addToEventArr;
exports.removeFromEventArrMapByHandleFunc = removeFromEventArrMapByHandleFunc;
/* No side effect */
