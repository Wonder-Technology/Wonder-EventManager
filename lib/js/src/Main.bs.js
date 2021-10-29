'use strict';

var BodyAPI$WonderEventmanager = require("./api/BodyAPI.bs.js");
var CanvasAPI$WonderEventmanager = require("./api/CanvasAPI.bs.js");
var BrowserAPI$WonderEventmanager = require("./api/BrowserAPI.bs.js");
var InitEventAPI$WonderEventmanager = require("./api/InitEventAPI.bs.js");
var ManageEventAPI$WonderEventmanager = require("./api/ManageEventAPI.bs.js");
var NameEventDoService$WonderEventmanager = require("./service/event/NameEventDoService.bs.js");

var onMouseEvent = ManageEventAPI$WonderEventmanager.onMouseEvent;

var onKeyboardEvent = ManageEventAPI$WonderEventmanager.onKeyboardEvent;

var onTouchEvent = ManageEventAPI$WonderEventmanager.onTouchEvent;

var offMouseEventByHandleFunc = ManageEventAPI$WonderEventmanager.offMouseEventByHandleFunc;

var offKeyboardEventByHandleFunc = ManageEventAPI$WonderEventmanager.offKeyboardEventByHandleFunc;

var offTouchEventByHandleFunc = ManageEventAPI$WonderEventmanager.offTouchEventByHandleFunc;

var onCustomGlobalEvent = ManageEventAPI$WonderEventmanager.onCustomGlobalEvent;

var offCustomGlobalEventByEventName = ManageEventAPI$WonderEventmanager.offCustomGlobalEventByEventName;

var offCustomGlobalEventByHandleFunc = ManageEventAPI$WonderEventmanager.offCustomGlobalEventByHandleFunc;

var stopPropagationCustomEvent = ManageEventAPI$WonderEventmanager.stopPropagationCustomEvent;

var triggerCustomGlobalEvent = ManageEventAPI$WonderEventmanager.triggerCustomGlobalEvent;

var createCustomEvent = ManageEventAPI$WonderEventmanager.createCustomEvent;

var getPointDownEventName = NameEventDoService$WonderEventmanager.getPointDownEventName;

var getPointUpEventName = NameEventDoService$WonderEventmanager.getPointUpEventName;

var getPointTapEventName = NameEventDoService$WonderEventmanager.getPointTapEventName;

var getPointMoveEventName = NameEventDoService$WonderEventmanager.getPointMoveEventName;

var getPointScaleEventName = NameEventDoService$WonderEventmanager.getPointScaleEventName;

var getPointDragStartEventName = NameEventDoService$WonderEventmanager.getPointDragStartEventName;

var getPointDragOverEventName = NameEventDoService$WonderEventmanager.getPointDragOverEventName;

var getPointDragDropEventName = NameEventDoService$WonderEventmanager.getPointDragDropEventName;

var initEvent = InitEventAPI$WonderEventmanager.initEvent;

var setCanvas = CanvasAPI$WonderEventmanager.setCanvas;

var setBody = BodyAPI$WonderEventmanager.setBody;

var setBrowser = BrowserAPI$WonderEventmanager.setBrowser;

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
exports.getPointDownEventName = getPointDownEventName;
exports.getPointUpEventName = getPointUpEventName;
exports.getPointTapEventName = getPointTapEventName;
exports.getPointMoveEventName = getPointMoveEventName;
exports.getPointScaleEventName = getPointScaleEventName;
exports.getPointDragStartEventName = getPointDragStartEventName;
exports.getPointDragOverEventName = getPointDragOverEventName;
exports.getPointDragDropEventName = getPointDragDropEventName;
exports.initEvent = initEvent;
exports.setCanvas = setCanvas;
exports.setBody = setBody;
exports.setBrowser = setBrowser;
/* BodyAPI-WonderEventmanager Not a pure module */
