'use strict';

var Most = require("most");
var Curry = require("rescript/lib/js/curry.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Log$WonderEventmanager = require("../../library/Log.bs.js");
var BodyDoService$WonderEventmanager = require("../dom/BodyDoService.bs.js");
var BrowserDoService$WonderEventmanager = require("../browser/BrowserDoService.bs.js");
var ContainerManager$WonderEventmanager = require("../../data/ContainerManager.bs.js");
var NameEventDoService$WonderEventmanager = require("../event/NameEventDoService.bs.js");
var ManageEventDoService$WonderEventmanager = require("../event/ManageEventDoService.bs.js");
var HandleDomEventDoService$WonderEventmanager = require("../event/handle/HandleDomEventDoService.bs.js");
var HandleMouseEventDoService$WonderEventmanager = require("../event/handle/HandleMouseEventDoService.bs.js");
var HandleTouchEventDoService$WonderEventmanager = require("../event/handle/HandleTouchEventDoService.bs.js");
var CreateCustomEventDoService$WonderEventmanager = require("../event/event/CreateCustomEventDoService.bs.js");
var HandleKeyboardEventDoService$WonderEventmanager = require("../event/handle/HandleKeyboardEventDoService.bs.js");
var HandlePointDomEventDoService$WonderEventmanager = require("../event/handle/HandlePointDomEventDoService.bs.js");

var _unsafeGetBody = BodyDoService$WonderEventmanager.unsafeGetBody;

function setBody(body, po) {
  return {
          eventRecord: po.eventRecord,
          canvas: po.canvas,
          body: Caml_option.some(body),
          browser: po.browser
        };
}

function _fromPointDomEvent(eventName, po) {
  return Most.fromEvent(eventName, BodyDoService$WonderEventmanager.unsafeGetBody(po), false);
}

function _fromMobilePointDomEvent(eventName, po) {
  return Most.fromEvent(eventName, BodyDoService$WonderEventmanager.unsafeGetBody(po), {
              passive: false
            });
}

function _fromTouchMoveDomEventAndPreventnDefault(po) {
  var __x = _fromMobilePointDomEvent("touchmove", po);
  return Most.tap(HandlePointDomEventDoService$WonderEventmanager.preventDefault, __x);
}

function _fromKeyboardDomEvent(eventName, po) {
  return Most.fromEvent(eventName, BodyDoService$WonderEventmanager.unsafeGetBody(po), false);
}

function _convertMouseEventToPointEvent(eventName, param) {
  return {
          name: eventName,
          location: param.location,
          locationInView: param.locationInView,
          button: param.button,
          wheel: param.wheel,
          movementDelta: param.movementDelta,
          event: param.event
        };
}

function _bindDomEventToTriggerPointEvent(param, param$1, po) {
  var convertDomEventToPointEventFunc = param$1[1];
  var pointEventName = param[2];
  var customEventName = param[1];
  return Curry._4(param$1[0], param[0], (function (mouseEvent, po) {
                return ManageEventDoService$WonderEventmanager.triggerCustomGlobalEvent(CreateCustomEventDoService$WonderEventmanager.create(customEventName, Caml_option.some(Curry._2(convertDomEventToPointEventFunc, pointEventName, mouseEvent))), po)[0];
              }), po, undefined);
}

function _bindMouseEventToTriggerPointEvent(po, mouseEventName, customEventName, pointEventName) {
  return _bindDomEventToTriggerPointEvent([
              mouseEventName,
              customEventName,
              pointEventName
            ], [
              (function (param) {
                  var func = function (param$1, param$2, param$3, param$4) {
                    return ManageEventDoService$WonderEventmanager.onMouseEvent(param, param$1, param$2, param$3, param$4);
                  };
                  return function (param) {
                    var func$1 = Curry._1(func, param);
                    return function (param) {
                      return Curry._2(func$1, param, 0);
                    };
                  };
                }),
              _convertMouseEventToPointEvent
            ], po);
}

function _convertTouchEventToPointEvent(eventName, param) {
  return {
          name: eventName,
          location: param.location,
          locationInView: param.locationInView,
          button: undefined,
          wheel: undefined,
          movementDelta: param.movementDelta,
          event: param.event
        };
}

function _bindTouchEventToTriggerPointEvent(po, touchEventName, customEventName, pointEventName) {
  return _bindDomEventToTriggerPointEvent([
              touchEventName,
              customEventName,
              pointEventName
            ], [
              (function (param) {
                  var func = function (param$1, param$2, param$3, param$4) {
                    return ManageEventDoService$WonderEventmanager.onTouchEvent(param, param$1, param$2, param$3, param$4);
                  };
                  return function (param) {
                    var func$1 = Curry._1(func, param);
                    return function (param) {
                      return Curry._2(func$1, param, 0);
                    };
                  };
                }),
              _convertTouchEventToPointEvent
            ], po);
}

function bindDomEventToTriggerPointEvent(po) {
  var match = BrowserDoService$WonderEventmanager.getBrowser(po);
  if (match < 2) {
    return _bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(_bindMouseEventToTriggerPointEvent(po, /* Click */1, NameEventDoService$WonderEventmanager.getPointTapEventName(undefined), /* PointTap */0), /* MouseUp */3, NameEventDoService$WonderEventmanager.getPointUpEventName(undefined), /* PointUp */2), /* MouseDown */2, NameEventDoService$WonderEventmanager.getPointDownEventName(undefined), /* PointDown */1), /* MouseWheel */5, NameEventDoService$WonderEventmanager.getPointScaleEventName(undefined), /* PointScale */4), /* MouseMove */4, NameEventDoService$WonderEventmanager.getPointMoveEventName(undefined), /* PointMove */3), /* MouseDragStart */6, NameEventDoService$WonderEventmanager.getPointDragStartEventName(undefined), /* PointDragStart */5), /* MouseDragOver */7, NameEventDoService$WonderEventmanager.getPointDragOverEventName(undefined), /* PointDragOver */6), /* MouseDragDrop */8, NameEventDoService$WonderEventmanager.getPointDragDropEventName(undefined), /* PointDragDrop */7);
  }
  if (match >= 4) {
    throw {
          RE_EXN_ID: "Match_failure",
          _1: [
            "InitEventDoService.res",
            96,
            2
          ],
          Error: new Error()
        };
  }
  return _bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(_bindTouchEventToTriggerPointEvent(po, /* TouchTap */12, NameEventDoService$WonderEventmanager.getPointTapEventName(undefined), /* PointTap */0), /* TouchEnd */13, NameEventDoService$WonderEventmanager.getPointUpEventName(undefined), /* PointUp */2), /* TouchStart */15, NameEventDoService$WonderEventmanager.getPointDownEventName(undefined), /* PointDown */1), /* TouchMove */14, NameEventDoService$WonderEventmanager.getPointMoveEventName(undefined), /* PointMove */3), /* TouchDragStart */16, NameEventDoService$WonderEventmanager.getPointDragStartEventName(undefined), /* PointDragStart */5), /* TouchDragOver */17, NameEventDoService$WonderEventmanager.getPointDragOverEventName(undefined), /* PointDragOver */6), /* TouchDragDrop */18, NameEventDoService$WonderEventmanager.getPointDragDropEventName(undefined), /* PointDragDrop */7);
}

function _preventContextMenuEvent($$event) {
  HandleDomEventDoService$WonderEventmanager.preventDefault($$event);
  
}

function _execMouseEventHandle(eventName, $$event) {
  var po = ContainerManager$WonderEventmanager.getPO(undefined);
  ContainerManager$WonderEventmanager.setPO(HandleMouseEventDoService$WonderEventmanager.execEventHandle(po, HandleMouseEventDoService$WonderEventmanager.convertMouseDomEventToMouseEvent(eventName, $$event, po)));
  
}

function _execMouseChangePositionEventHandle(mouseEventName, $$event, setPositionFunc) {
  var po = ContainerManager$WonderEventmanager.getPO(undefined);
  var mouseEvent = HandleMouseEventDoService$WonderEventmanager.convertMouseDomEventToMouseEvent(mouseEventName, $$event, po);
  ContainerManager$WonderEventmanager.setPO(Curry._2(setPositionFunc, HandleMouseEventDoService$WonderEventmanager.execEventHandle(po, mouseEvent), mouseEvent));
  
}

function _execMouseMoveEventHandle(mouseEventName, $$event) {
  return _execMouseChangePositionEventHandle(mouseEventName, $$event, HandleMouseEventDoService$WonderEventmanager.setLastXYWhenMouseMove);
}

function _execMouseDragingEventHandle(mouseEventName, $$event) {
  return _execMouseChangePositionEventHandle(mouseEventName, $$event, HandleMouseEventDoService$WonderEventmanager.setLastXYByLocation);
}

function _execMouseDragStartEventHandle($$event) {
  var po = ContainerManager$WonderEventmanager.getPO(undefined);
  ContainerManager$WonderEventmanager.setPO(HandleMouseEventDoService$WonderEventmanager.setLastXY(HandleMouseEventDoService$WonderEventmanager.setIsDrag(HandleMouseEventDoService$WonderEventmanager.execEventHandle(po, HandleMouseEventDoService$WonderEventmanager.convertMouseDomEventToMouseEvent(/* MouseDragStart */6, $$event, po)), true), undefined, undefined));
  
}

function _execMouseDragDropEventHandle($$event) {
  var po = ContainerManager$WonderEventmanager.getPO(undefined);
  ContainerManager$WonderEventmanager.setPO(HandleMouseEventDoService$WonderEventmanager.setIsDrag(HandleMouseEventDoService$WonderEventmanager.execEventHandle(po, HandleMouseEventDoService$WonderEventmanager.convertMouseDomEventToMouseEvent(/* MouseDragDrop */8, $$event, po)), false));
  
}

function _execTouchEventHandle(touchEventName, $$event) {
  ContainerManager$WonderEventmanager.setPO(HandleTouchEventDoService$WonderEventmanager.execEventHandle(ContainerManager$WonderEventmanager.getPO(undefined), touchEventName, $$event));
  
}

function _execTouchChangePositionEventHandle(touchEventName, $$event, setPositonFunc) {
  ContainerManager$WonderEventmanager.setPO(Curry._3(setPositonFunc, HandleTouchEventDoService$WonderEventmanager.execEventHandle(ContainerManager$WonderEventmanager.getPO(undefined), touchEventName, $$event), touchEventName, $$event));
  
}

function _execTouchMoveEventHandle(touchEventName, $$event) {
  return _execTouchChangePositionEventHandle(touchEventName, $$event, HandleTouchEventDoService$WonderEventmanager.setLastXYWhenTouchMove);
}

function _execTouchDragingEventHandle(touchEventName, $$event) {
  return _execTouchChangePositionEventHandle(touchEventName, $$event, HandleTouchEventDoService$WonderEventmanager.setLastXYByLocation);
}

function _execTouchDragStartEventHandle($$event) {
  ContainerManager$WonderEventmanager.setPO(HandleTouchEventDoService$WonderEventmanager.setLastXY(HandleTouchEventDoService$WonderEventmanager.setIsDrag(HandleTouchEventDoService$WonderEventmanager.execEventHandle(ContainerManager$WonderEventmanager.getPO(undefined), /* TouchDragStart */16, $$event), true), undefined, undefined));
  
}

function _execTouchDragDropEventHandle($$event) {
  ContainerManager$WonderEventmanager.setPO(HandleTouchEventDoService$WonderEventmanager.setIsDrag(HandleTouchEventDoService$WonderEventmanager.execEventHandle(ContainerManager$WonderEventmanager.getPO(undefined), /* TouchDragDrop */18, $$event), false));
  
}

function _execKeyboardEventHandle(keyboardEventName, $$event) {
  ContainerManager$WonderEventmanager.setPO(HandleKeyboardEventDoService$WonderEventmanager.execEventHandle(ContainerManager$WonderEventmanager.getPO(undefined), keyboardEventName, $$event));
  
}

function _fromPCDomEventArr(po) {
  var __x = Most.fromEvent("contextmenu", BodyDoService$WonderEventmanager.unsafeGetBody(po), false);
  var __x$1 = _fromPointDomEvent("click", po);
  var __x$2 = _fromPointDomEvent("mousedown", po);
  var __x$3 = _fromPointDomEvent("mouseup", po);
  var __x$4 = _fromPointDomEvent("mousemove", po);
  var __x$5 = _fromPointDomEvent("mousewheel", po);
  var __x$6 = _fromPointDomEvent("mousedown", po);
  var __x$7 = Most.tap(_execMouseDragStartEventHandle, __x$6);
  var __x$8 = Most.flatMap((function ($$event) {
          var __x = Most.skip(2, _fromPointDomEvent("mousemove", po));
          var __x$1 = _fromPointDomEvent("mouseup", po);
          return Most.until(Most.tap(_execMouseDragDropEventHandle, __x$1), __x);
        }), __x$7);
  var __x$9 = _fromKeyboardDomEvent("keyup", po);
  var __x$10 = _fromKeyboardDomEvent("keydown", po);
  var __x$11 = _fromKeyboardDomEvent("keypress", po);
  return [
          Most.tap((function ($$event) {
                  HandleDomEventDoService$WonderEventmanager.preventDefault($$event);
                  
                }), __x),
          Most.tap((function ($$event) {
                  return _execMouseEventHandle(/* Click */1, $$event);
                }), __x$1),
          Most.tap((function ($$event) {
                  return _execMouseEventHandle(/* MouseDown */2, $$event);
                }), __x$2),
          Most.tap((function ($$event) {
                  return _execMouseEventHandle(/* MouseUp */3, $$event);
                }), __x$3),
          Most.tap((function ($$event) {
                  return _execMouseChangePositionEventHandle(/* MouseMove */4, $$event, HandleMouseEventDoService$WonderEventmanager.setLastXYWhenMouseMove);
                }), __x$4),
          Most.tap((function ($$event) {
                  return _execMouseEventHandle(/* MouseWheel */5, $$event);
                }), __x$5),
          Most.tap((function ($$event) {
                  return _execMouseChangePositionEventHandle(/* MouseDragOver */7, $$event, HandleMouseEventDoService$WonderEventmanager.setLastXYByLocation);
                }), __x$8),
          Most.tap((function ($$event) {
                  return _execKeyboardEventHandle(/* KeyUp */9, $$event);
                }), __x$9),
          Most.tap((function ($$event) {
                  return _execKeyboardEventHandle(/* KeyDown */10, $$event);
                }), __x$10),
          Most.tap((function ($$event) {
                  return _execKeyboardEventHandle(/* KeyPress */11, $$event);
                }), __x$11)
        ];
}

function _fromMobileDomEventArr(po) {
  var __x = _fromMobilePointDomEvent("touchend", po);
  var __x$1 = Most.since(_fromMobilePointDomEvent("touchstart", po), __x);
  var __x$2 = _fromMobilePointDomEvent("touchend", po);
  var __x$3 = _fromMobilePointDomEvent("touchstart", po);
  var __x$4 = _fromTouchMoveDomEventAndPreventnDefault(po);
  var __x$5 = _fromMobilePointDomEvent("touchstart", po);
  var __x$6 = Most.tap(_execTouchDragStartEventHandle, __x$5);
  var __x$7 = Most.flatMap((function ($$event) {
          var __x = _fromTouchMoveDomEventAndPreventnDefault(po);
          var __x$1 = _fromMobilePointDomEvent("touchend", po);
          return Most.until(Most.tap(_execTouchDragDropEventHandle, __x$1), __x);
        }), __x$6);
  return [
          Most.tap((function ($$event) {
                  return _execTouchEventHandle(/* TouchTap */12, $$event);
                }), __x$1),
          Most.tap((function ($$event) {
                  return _execTouchEventHandle(/* TouchEnd */13, $$event);
                }), __x$2),
          Most.tap((function ($$event) {
                  return _execTouchEventHandle(/* TouchStart */15, $$event);
                }), __x$3),
          Most.tap((function ($$event) {
                  return _execTouchChangePositionEventHandle(/* TouchMove */14, $$event, HandleTouchEventDoService$WonderEventmanager.setLastXYWhenTouchMove);
                }), __x$4),
          Most.tap((function ($$event) {
                  return _execTouchChangePositionEventHandle(/* TouchDragOver */17, $$event, HandleTouchEventDoService$WonderEventmanager.setLastXYByLocation);
                }), __x$7)
        ];
}

function fromDomEvent(po) {
  var match = BrowserDoService$WonderEventmanager.getBrowser(po);
  var tmp;
  if (match >= 2) {
    if (match >= 4) {
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "InitEventDoService.res",
              419,
              4
            ],
            Error: new Error()
          };
    }
    tmp = _fromMobileDomEventArr(po);
  } else {
    tmp = _fromPCDomEventArr(po);
  }
  return Most.mergeArray(tmp);
}

function handleDomEventStreamError(e) {
  var message = e.message;
  var stack = e.stack;
  var partial_arg = "message:" + message + "\nstack:" + stack;
  var partial_arg$1 = "from dom event stream error";
  return Log$WonderEventmanager.logForDebug(function (param) {
              return Log$WonderEventmanager.buildDebugMessage(partial_arg$1, partial_arg, param);
            });
}

function initEvent(po) {
  var __x = fromDomEvent(po);
  var domEventStreamSubscription = __x.subscribe({
        next: (function (param) {
            
          }),
        error: handleDomEventStreamError,
        complete: (function (param) {
            
          })
      });
  return bindDomEventToTriggerPointEvent(ManageEventDoService$WonderEventmanager.setDomEventStreamSubscription(po, domEventStreamSubscription));
}

exports._unsafeGetBody = _unsafeGetBody;
exports.setBody = setBody;
exports._fromPointDomEvent = _fromPointDomEvent;
exports._fromMobilePointDomEvent = _fromMobilePointDomEvent;
exports._fromTouchMoveDomEventAndPreventnDefault = _fromTouchMoveDomEventAndPreventnDefault;
exports._fromKeyboardDomEvent = _fromKeyboardDomEvent;
exports._convertMouseEventToPointEvent = _convertMouseEventToPointEvent;
exports._bindDomEventToTriggerPointEvent = _bindDomEventToTriggerPointEvent;
exports._bindMouseEventToTriggerPointEvent = _bindMouseEventToTriggerPointEvent;
exports._convertTouchEventToPointEvent = _convertTouchEventToPointEvent;
exports._bindTouchEventToTriggerPointEvent = _bindTouchEventToTriggerPointEvent;
exports.bindDomEventToTriggerPointEvent = bindDomEventToTriggerPointEvent;
exports._preventContextMenuEvent = _preventContextMenuEvent;
exports._execMouseEventHandle = _execMouseEventHandle;
exports._execMouseChangePositionEventHandle = _execMouseChangePositionEventHandle;
exports._execMouseMoveEventHandle = _execMouseMoveEventHandle;
exports._execMouseDragingEventHandle = _execMouseDragingEventHandle;
exports._execMouseDragStartEventHandle = _execMouseDragStartEventHandle;
exports._execMouseDragDropEventHandle = _execMouseDragDropEventHandle;
exports._execTouchEventHandle = _execTouchEventHandle;
exports._execTouchChangePositionEventHandle = _execTouchChangePositionEventHandle;
exports._execTouchMoveEventHandle = _execTouchMoveEventHandle;
exports._execTouchDragingEventHandle = _execTouchDragingEventHandle;
exports._execTouchDragStartEventHandle = _execTouchDragStartEventHandle;
exports._execTouchDragDropEventHandle = _execTouchDragDropEventHandle;
exports._execKeyboardEventHandle = _execKeyboardEventHandle;
exports._fromPCDomEventArr = _fromPCDomEventArr;
exports._fromMobileDomEventArr = _fromMobileDomEventArr;
exports.fromDomEvent = fromDomEvent;
exports.handleDomEventStreamError = handleDomEventStreamError;
exports.initEvent = initEvent;
/* most Not a pure module */
