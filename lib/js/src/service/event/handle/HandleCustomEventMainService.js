'use strict';

var ArraySt$WonderEventmanager = require("../../../structure/ArraySt.js");
var MutableHashMap$WonderEventmanager = require("../../../structure/hash_map/MutableHashMap.js");

function _triggerHandleFunc(customEvent, arr, po) {
  return ArraySt$WonderEventmanager.reduceOneParam(arr, (function (param, param$1) {
                var customEvent = param[1];
                var po = param[0];
                if (customEvent.isStopPropagation) {
                  return [
                          po,
                          customEvent
                        ];
                } else {
                  return param$1.handleFunc(customEvent, po);
                }
              }), [
              po,
              customEvent
            ]);
}

function stopPropagation(customEvent) {
  return {
          name: customEvent.name,
          isStopPropagation: true,
          phase: customEvent.phase,
          userData: customEvent.userData
        };
}

function triggerGlobalEvent(customEvent, po) {
  var arr = MutableHashMap$WonderEventmanager.get(po.eventRecord.customGlobalEventArrMap, customEvent.name);
  if (arr !== undefined) {
    return _triggerHandleFunc(customEvent, arr, po);
  } else {
    return [
            po,
            customEvent
          ];
  }
}

function getCustomEventUserData(customEvent) {
  return customEvent.userData;
}

exports._triggerHandleFunc = _triggerHandleFunc;
exports.stopPropagation = stopPropagation;
exports.triggerGlobalEvent = triggerGlobalEvent;
exports.getCustomEventUserData = getCustomEventUserData;
/* No side effect */
