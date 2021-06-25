'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var BindCustomEventMainService$WonderEventmanager = require("./bind/BindCustomEventMainService.js");
var BindMouseDomEventMainService$WonderEventmanager = require("./bind/BindMouseDomEventMainService.js");
var BindTouchDomEventMainService$WonderEventmanager = require("./bind/BindTouchDomEventMainService.js");
var HandleCustomEventMainService$WonderEventmanager = require("./handle/HandleCustomEventMainService.js");
var BindKeyboardDomEventMainService$WonderEventmanager = require("./bind/BindKeyboardDomEventMainService.js");

function onMouseEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindMouseDomEventMainService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

function onKeyboardEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindKeyboardDomEventMainService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

function onTouchEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindTouchDomEventMainService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

var offMouseEventByHandleFunc = BindMouseDomEventMainService$WonderEventmanager.unbindByHandleFunc;

var offKeyboardEventByHandleFunc = BindKeyboardDomEventMainService$WonderEventmanager.unbindByHandleFunc;

var offTouchEventByHandleFunc = BindTouchDomEventMainService$WonderEventmanager.unbindByHandleFunc;

function onCustomGlobalEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindCustomEventMainService$WonderEventmanager.bindGlobalEvent(eventName, priority, handleFunc, po);
}

var offCustomGlobalEventByEventName = BindCustomEventMainService$WonderEventmanager.unbindGlobalEventByEventName;

var offCustomGlobalEventByHandleFunc = BindCustomEventMainService$WonderEventmanager.unbindGlobalEventByHandleFunc;

var stopPropagationCustomEvent = HandleCustomEventMainService$WonderEventmanager.stopPropagation;

function setDomEventStreamSubscription(domEventStreamSubscription, po) {
  var eventRecord = po.eventRecord;
  return {
          eventRecord: {
            domEventStreamSubscription: Caml_option.some(domEventStreamSubscription),
            mouseDomEventDataArrMap: eventRecord.mouseDomEventDataArrMap,
            keyboardDomEventDataArrMap: eventRecord.keyboardDomEventDataArrMap,
            touchDomEventDataArrMap: eventRecord.touchDomEventDataArrMap,
            customGlobalEventArrMap: eventRecord.customGlobalEventArrMap,
            customGameObjectEventArrMap: eventRecord.customGameObjectEventArrMap,
            mouseEventData: eventRecord.mouseEventData,
            keyboardEventData: eventRecord.keyboardEventData,
            touchEventData: eventRecord.touchEventData
          },
          canvas: po.canvas
        };
}

var _unsubscribeDomEventStream = (function(domEventStreamSubscription){
  domEventStreamSubscription.unsubscribe();
  });

function unsubscribeDomEventStream(po) {
  var domEventStreamSubscription = po.eventRecord.domEventStreamSubscription;
  if (domEventStreamSubscription !== undefined) {
    _unsubscribeDomEventStream(Caml_option.valFromOption(domEventStreamSubscription));
    return po;
  } else {
    return po;
  }
}

exports.onMouseEvent = onMouseEvent;
exports.onKeyboardEvent = onKeyboardEvent;
exports.onTouchEvent = onTouchEvent;
exports.offMouseEventByHandleFunc = offMouseEventByHandleFunc;
exports.offKeyboardEventByHandleFunc = offKeyboardEventByHandleFunc;
exports.offTouchEventByHandleFunc = offTouchEventByHandleFunc;
exports.onCustomGlobalEvent = onCustomGlobalEvent;
exports.offCustomGlobalEventByEventName = offCustomGlobalEventByEventName;
exports.offCustomGlobalEventByHandleFunc = offCustomGlobalEventByHandleFunc;
exports.stopPropagationCustomEvent = stopPropagationCustomEvent;
exports.setDomEventStreamSubscription = setDomEventStreamSubscription;
exports._unsubscribeDomEventStream = _unsubscribeDomEventStream;
exports.unsubscribeDomEventStream = unsubscribeDomEventStream;
/* No side effect */
