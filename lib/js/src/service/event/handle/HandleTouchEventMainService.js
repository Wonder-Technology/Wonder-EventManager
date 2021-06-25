'use strict';

var ArraySt$WonderEventmanager = require("../../../structure/ArraySt.js");
var MutableSparseMap$WonderEventmanager = require("../../../structure/sparse_map/MutableSparseMap.js");
var TouchEventService$WonderEventmanager = require("../TouchEventService.js");
var HandlePointDomEventMainService$WonderEventmanager = require("./HandlePointDomEventMainService.js");

function _getTouchData(touchDomEvent) {
  var changedTouches = touchDomEvent.changedTouches;
  var touchDataJsObj = changedTouches[0];
  return {
          clientX: touchDataJsObj.clientX,
          clientY: touchDataJsObj.clientY,
          pageX: touchDataJsObj.pageX,
          pageY: touchDataJsObj.pageY,
          identifier: touchDataJsObj.identifier,
          screenX: touchDataJsObj.screenX,
          screenY: touchDataJsObj.screenY,
          radiusX: touchDataJsObj.radiusX,
          radiusY: touchDataJsObj.radiusY,
          rotationAngle: touchDataJsObj.rotationAngle,
          force: touchDataJsObj.force
        };
}

function _getLocation(touchDomEvent, po) {
  var match = _getTouchData(touchDomEvent);
  return [
          match.pageX,
          match.pageY
        ];
}

function _getLocationInView(touchDomEvent, po) {
  return HandlePointDomEventMainService$WonderEventmanager.getLocationInView(touchDomEvent, _getLocation, po);
}

function _getMovementDelta(touchDomEvent, po) {
  return HandlePointDomEventMainService$WonderEventmanager.getMovementDelta(_getLocation(touchDomEvent, po), TouchEventService$WonderEventmanager.getLastXY(po.eventRecord), po);
}

function _convertTouchDomEventToTouchEvent(eventName, touchDomEvent, po) {
  return {
          name: eventName,
          location: _getLocation(touchDomEvent, po),
          locationInView: HandlePointDomEventMainService$WonderEventmanager.getLocationInView(touchDomEvent, _getLocation, po),
          touchData: _getTouchData(touchDomEvent),
          movementDelta: _getMovementDelta(touchDomEvent, po),
          event: touchDomEvent
        };
}

function execEventHandle(eventName, touchDomEvent, po) {
  var arr = MutableSparseMap$WonderEventmanager.get(po.eventRecord.touchDomEventDataArrMap, eventName);
  if (arr !== undefined) {
    return ArraySt$WonderEventmanager.reduceOneParam(arr, (function (po, param) {
                  return param.handleFunc(_convertTouchDomEventToTouchEvent(eventName, touchDomEvent, po), po);
                }), po);
  } else {
    return po;
  }
}

function setLastXY(lastX, lastY, po) {
  return {
          eventRecord: TouchEventService$WonderEventmanager.setLastXY(lastX, lastY, po.eventRecord),
          canvas: po.canvas
        };
}

function setLastXYByLocation(eventName, touchDomEvent, po) {
  var match = _convertTouchDomEventToTouchEvent(eventName, touchDomEvent, po);
  var $$location = match.location;
  return setLastXY($$location[0], $$location[1], po);
}

function getIsDrag(po) {
  return po.eventRecord.touchEventData.isDrag;
}

function setIsDrag(isDrag, po) {
  var eventRecord = po.eventRecord;
  var init = eventRecord.touchEventData;
  return {
          eventRecord: {
            domEventStreamSubscription: eventRecord.domEventStreamSubscription,
            mouseDomEventDataArrMap: eventRecord.mouseDomEventDataArrMap,
            keyboardDomEventDataArrMap: eventRecord.keyboardDomEventDataArrMap,
            touchDomEventDataArrMap: eventRecord.touchDomEventDataArrMap,
            customGlobalEventArrMap: eventRecord.customGlobalEventArrMap,
            customGameObjectEventArrMap: eventRecord.customGameObjectEventArrMap,
            mouseEventData: eventRecord.mouseEventData,
            keyboardEventData: eventRecord.keyboardEventData,
            touchEventData: {
              lastX: init.lastX,
              lastY: init.lastY,
              isDrag: isDrag
            }
          },
          canvas: po.canvas
        };
}

function setLastXYWhenTouchMove(eventName, touchDomEvent, po) {
  if (getIsDrag(po)) {
    return po;
  } else {
    return setLastXYByLocation(eventName, touchDomEvent, po);
  }
}

exports._getTouchData = _getTouchData;
exports._getLocation = _getLocation;
exports._getLocationInView = _getLocationInView;
exports._getMovementDelta = _getMovementDelta;
exports._convertTouchDomEventToTouchEvent = _convertTouchDomEventToTouchEvent;
exports.execEventHandle = execEventHandle;
exports.setLastXY = setLastXY;
exports.setLastXYByLocation = setLastXYByLocation;
exports.getIsDrag = getIsDrag;
exports.setIsDrag = setIsDrag;
exports.setLastXYWhenTouchMove = setLastXYWhenTouchMove;
/* No side effect */
