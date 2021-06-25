'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var Tuple2$WonderEventmanager = require("../structure/tuple/Tuple2.bs.js");
var ContainerManager$WonderEventmanager = require("../data/ContainerManager.bs.js");
var ManageEventDoService$WonderEventmanager = require("../service/event/ManageEventDoService.bs.js");
var CreateCustomEventDoService$WonderEventmanager = require("../service/event/event/CreateCustomEventDoService.bs.js");

function onCustomGlobalEvent(eventName, priority, handleFunc) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.onCustomGlobalEvent(eventName, handleFunc, ContainerManager$WonderEventmanager.getPO(undefined), priority, undefined));
}

function offCustomGlobalEventByEventName(eventName) {
  return ContainerManager$WonderEventmanager.setPO(ManageEventDoService$WonderEventmanager.offCustomGlobalEventByEventName(eventName, ContainerManager$WonderEventmanager.getPO(undefined)));
}

function triggerCustomGlobalEvent(customEvent) {
  return ContainerManager$WonderEventmanager.setPO(Tuple2$WonderEventmanager.getFirst(ManageEventDoService$WonderEventmanager.triggerCustomGlobalEvent(customEvent, ContainerManager$WonderEventmanager.getPO(undefined))));
}

function createCustomEvent(eventName, userData) {
  return CreateCustomEventDoService$WonderEventmanager.create(eventName, (userData == null) ? undefined : Caml_option.some(userData));
}

var stopPropagationCustomEvent = ManageEventDoService$WonderEventmanager.stopPropagationCustomEvent;

exports.onCustomGlobalEvent = onCustomGlobalEvent;
exports.offCustomGlobalEventByEventName = offCustomGlobalEventByEventName;
exports.stopPropagationCustomEvent = stopPropagationCustomEvent;
exports.triggerCustomGlobalEvent = triggerCustomGlobalEvent;
exports.createCustomEvent = createCustomEvent;
/* ContainerManager-WonderEventmanager Not a pure module */
