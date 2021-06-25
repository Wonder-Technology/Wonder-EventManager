'use strict';

var ArraySt$WonderEventmanager = require("../../../structure/ArraySt.js");
var MutableSparseMap$WonderEventmanager = require("../../../structure/sparse_map/MutableSparseMap.js");
var MouseEventService$WonderEventmanager = require("../MouseEventService.js");
var HandlePointDomEventMainService$WonderEventmanager = require("./HandlePointDomEventMainService.js");

function getLocation(mouseDomEvent, po) {
  return [
          mouseDomEvent.pageX,
          mouseDomEvent.pageY
        ];
}

function getLocationInView(mouseDomEvent, po) {
  return HandlePointDomEventMainService$WonderEventmanager.getLocationInView(mouseDomEvent, getLocation, po);
}

function getButton(mouseDomEvent, po) {
  var match = mouseDomEvent.which;
  switch (match) {
    case 0 :
        return /* NoButton */0;
    case 1 :
        return /* Left */1;
    case 2 :
        return /* Center */3;
    case 3 :
        return /* Right */2;
    default:
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "HandleMouseEventMainService.res",
              47,
              2
            ],
            Error: new Error()
          };
  }
}

function _getFromWheelDelta(mouseDomEvent) {
  var wheelData = mouseDomEvent.wheelDelta;
  if (!(wheelData == null)) {
    return wheelData / 120 | 0;
  } else {
    return 0;
  }
}

function getWheel(mouseDomEvent) {
  var detail = mouseDomEvent.detail;
  if (!(detail == null) && detail !== 0) {
    return Math.imul(-1, detail);
  } else {
    return _getFromWheelDelta(mouseDomEvent);
  }
}

var _isPointerLocked = (function() {
  return !!(
    document.pointerLockElement
    || document.mozPointerLockElement
    || document.webkitPointerLockElement
  );
  });

function _getMovementDeltaWhenPointerLocked(mouseDomEvent) {
  var movementX = mouseDomEvent.movementX;
  var tmp;
  if (movementX == null) {
    var webkitMovementX = mouseDomEvent.webkitMovementX;
    if (webkitMovementX == null) {
      var mozMovementX = mouseDomEvent.mozMovementX;
      tmp = (mozMovementX == null) ? 0 : mozMovementX;
    } else {
      tmp = webkitMovementX;
    }
  } else {
    tmp = movementX;
  }
  var movementY = mouseDomEvent.movementY;
  var tmp$1;
  if (movementY == null) {
    var webkitMovementY = mouseDomEvent.webkitMovementY;
    if (webkitMovementY == null) {
      var mozMovementY = mouseDomEvent.mozMovementY;
      tmp$1 = (mozMovementY == null) ? 0 : mozMovementY;
    } else {
      tmp$1 = webkitMovementY;
    }
  } else {
    tmp$1 = movementY;
  }
  return [
          tmp,
          tmp$1
        ];
}

function getMovementDelta(mouseDomEvent, po) {
  if (_isPointerLocked()) {
    return _getMovementDeltaWhenPointerLocked(mouseDomEvent);
  } else {
    return HandlePointDomEventMainService$WonderEventmanager.getMovementDelta(getLocation(mouseDomEvent, po), MouseEventService$WonderEventmanager.getLastXY(po.eventRecord), po);
  }
}

function convertMouseDomEventToMouseEvent(eventName, mouseDomEvent, po) {
  return {
          name: eventName,
          location: getLocation(mouseDomEvent, po),
          locationInView: HandlePointDomEventMainService$WonderEventmanager.getLocationInView(mouseDomEvent, getLocation, po),
          button: getButton(mouseDomEvent, po),
          wheel: getWheel(mouseDomEvent),
          movementDelta: getMovementDelta(mouseDomEvent, po),
          event: mouseDomEvent
        };
}

function execEventHandle(mouseEvent, po) {
  var arr = MutableSparseMap$WonderEventmanager.get(po.eventRecord.mouseDomEventDataArrMap, mouseEvent.name);
  if (arr !== undefined) {
    return ArraySt$WonderEventmanager.reduceOneParam(arr, (function (po, param) {
                  return param.handleFunc(mouseEvent, po);
                }), po);
  } else {
    return po;
  }
}

function setLastXY(lastX, lastY, po) {
  return {
          eventRecord: MouseEventService$WonderEventmanager.setLastXY(lastX, lastY, po.eventRecord),
          canvas: po.canvas
        };
}

function setLastXYByLocation(mouseEvent, po) {
  var $$location = mouseEvent.location;
  return setLastXY($$location[0], $$location[1], po);
}

function getIsDrag(po) {
  return po.eventRecord.mouseEventData.isDrag;
}

function setIsDrag(isDrag, po) {
  var eventRecord = po.eventRecord;
  var init = eventRecord.mouseEventData;
  return {
          eventRecord: {
            domEventStreamSubscription: eventRecord.domEventStreamSubscription,
            mouseDomEventDataArrMap: eventRecord.mouseDomEventDataArrMap,
            keyboardDomEventDataArrMap: eventRecord.keyboardDomEventDataArrMap,
            touchDomEventDataArrMap: eventRecord.touchDomEventDataArrMap,
            customGlobalEventArrMap: eventRecord.customGlobalEventArrMap,
            customGameObjectEventArrMap: eventRecord.customGameObjectEventArrMap,
            mouseEventData: {
              lastX: init.lastX,
              lastY: init.lastY,
              isDrag: isDrag
            },
            keyboardEventData: eventRecord.keyboardEventData,
            touchEventData: eventRecord.touchEventData
          },
          canvas: po.canvas
        };
}

function setLastXYWhenMouseMove(mouseEvent, po) {
  if (getIsDrag(po)) {
    return po;
  } else {
    return setLastXYByLocation(mouseEvent, po);
  }
}

exports.getLocation = getLocation;
exports.getLocationInView = getLocationInView;
exports.getButton = getButton;
exports._getFromWheelDelta = _getFromWheelDelta;
exports.getWheel = getWheel;
exports._isPointerLocked = _isPointerLocked;
exports._getMovementDeltaWhenPointerLocked = _getMovementDeltaWhenPointerLocked;
exports.getMovementDelta = getMovementDelta;
exports.convertMouseDomEventToMouseEvent = convertMouseDomEventToMouseEvent;
exports.execEventHandle = execEventHandle;
exports.setLastXY = setLastXY;
exports.setLastXYByLocation = setLastXYByLocation;
exports.getIsDrag = getIsDrag;
exports.setIsDrag = setIsDrag;
exports.setLastXYWhenMouseMove = setLastXYWhenMouseMove;
/* No side effect */