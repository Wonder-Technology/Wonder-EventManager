'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var BindCustomEventDoService$WonderEventmanager = require("./bind/BindCustomEventDoService.bs.js");
var BindMouseDomEventDoService$WonderEventmanager = require("./bind/BindMouseDomEventDoService.bs.js");
var BindTouchDomEventDoService$WonderEventmanager = require("./bind/BindTouchDomEventDoService.bs.js");
var HandleCustomEventDoService$WonderEventmanager = require("./handle/HandleCustomEventDoService.bs.js");
var BindKeyboardDomEventDoService$WonderEventmanager = require("./bind/BindKeyboardDomEventDoService.bs.js");

function onMouseEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindMouseDomEventDoService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

function onKeyboardEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindKeyboardDomEventDoService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

function onTouchEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindTouchDomEventDoService$WonderEventmanager.bind(eventName, priority, handleFunc, po);
}

var offMouseEventByHandleFunc = BindMouseDomEventDoService$WonderEventmanager.unbindByHandleFunc;

var offKeyboardEventByHandleFunc = BindKeyboardDomEventDoService$WonderEventmanager.unbindByHandleFunc;

var offTouchEventByHandleFunc = BindTouchDomEventDoService$WonderEventmanager.unbindByHandleFunc;

function onCustomGlobalEvent(eventName, handleFunc, po, priorityOpt, param) {
  var priority = priorityOpt !== undefined ? priorityOpt : 0;
  return BindCustomEventDoService$WonderEventmanager.bindGlobalEvent(eventName, priority, handleFunc, po);
}

var offCustomGlobalEventByEventName = BindCustomEventDoService$WonderEventmanager.unbindGlobalEventByEventName;

var offCustomGlobalEventByHandleFunc = BindCustomEventDoService$WonderEventmanager.unbindGlobalEventByHandleFunc;

var stopPropagationCustomEvent = HandleCustomEventDoService$WonderEventmanager.stopPropagation;

var triggerCustomGlobalEvent = HandleCustomEventDoService$WonderEventmanager.triggerGlobalEvent;

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
exports.triggerCustomGlobalEvent = triggerCustomGlobalEvent;
exports.setDomEventStreamSubscription = setDomEventStreamSubscription;
exports._unsubscribeDomEventStream = _unsubscribeDomEventStream;
exports.unsubscribeDomEventStream = unsubscribeDomEventStream;
/* No side effect */
