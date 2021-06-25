'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var Tuple2$WonderCommonlib = require("wonder-commonlib/lib/js/src/structure/tuple/Tuple2.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");
var ManageEventDoService$WonderEventmanager = require("../service/event/ManageEventDoService.bs.js");
var CreateCustomEventDoService$WonderEventmanager = require("../service/event/event/CreateCustomEventDoService.bs.js");

function onMouseEvent(eventName, priority, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.onMouseEvent(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined), priority, undefined));
}

function onKeyboardEvent(eventName, priority, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.onKeyboardEvent(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined), priority, undefined));
}

function onTouchEvent(eventName, priority, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.onTouchEvent(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined), priority, undefined));
}

function offMouseEventByHandleFunc(eventName, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offMouseEventByHandleFunc(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function offKeyboardEventByHandleFunc(eventName, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offKeyboardEventByHandleFunc(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function offTouchEventByHandleFunc(eventName, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offTouchEventByHandleFunc(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function onCustomGlobalEvent(eventName, priority, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.onCustomGlobalEvent(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined), priority, undefined));
}

function offCustomGlobalEventByEventName(eventName) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offCustomGlobalEventByEventName(eventName, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function offCustomGlobalEventByHandleFunc(eventName, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offCustomGlobalEventByHandleFunc(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function triggerCustomGlobalEvent(customEvent) {
  return ContainerManager$WonderEventmanager.setPO(Tuple2$WonderCommonlib.getFirst(ManageEventDoService$WonderEventmanager.triggerCustomGlobalEvent(customEvent, ContainerManager$WonderEventmanager.getPO(undefined))));
}

function createCustomEvent(eventName, userData) {
  return CreateCustomEventDoService$WonderEventmanager.create(eventName, (userData == null) ? undefined : Caml_option.some(userData));
}

var stopPropagationCustomEvent = ManageEventDoService$WonderEventmanager.stopPropagationCustomEvent;

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
exports.createCustomEvent = createCustomEvent;
/* ContainerManager-WonderEventmanager Not a pure module */
