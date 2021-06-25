// let onMouseEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventMainService.onMouseEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let onKeyboardEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventMainService.onKeyboardEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let onTouchEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventMainService.onTouchEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let offMouseEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventMainService.offMouseEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let offKeyboardEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventMainService.offKeyboardEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let offTouchEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventMainService.offTouchEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let onCustomGlobalEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventMainService.onCustomGlobalEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let offCustomGlobalEventByEventName = (eventName, po) =>
//   ManageEventMainService.offCustomGlobalEventByEventName(~eventName, ~po)

// let offCustomGlobalEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventMainService.offCustomGlobalEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let onCustomGameObjectEvent = (eventName, target, priority, handleFunc, po) =>
//   ManageEventMainService.onCustomGameObjectEvent(
//     ~eventName,
//     ~handleFunc,
//     ~target,
//     ~po,
//     ~priority,
//     (),
//   )

// let offCustomGameObjectEventByTarget = (eventName, target, po) =>
//   ManageEventMainService.offCustomGameObjectEventByTarget(~eventName, ~target, ~po)

// let offCustomGameObjectEventByHandleFunc = (eventName, target, handleFunc, po) =>
//   ManageEventMainService.offCustomGameObjectEventByHandleFunc(
//     ~eventName,
//     ~target,
//     ~handleFunc,
//     ~po,
//   )

// let stopPropagationCustomEvent = ManageEventMainService.stopPropagationCustomEvent

// let triggerCustomGlobalEvent = (customEvent, po) =>
//   ManageEventMainService.triggerCustomGlobalEvent(customEvent, po)

// let triggerCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventMainService.triggerCustomGameObjectEvent(customEvent, target, po)

// let broadcastCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventMainService.broadcastCustomGameObjectEvent(customEvent, target, po)

// let emitCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventMainService.emitCustomGameObjectEvent(customEvent, target, po)

// let createCustomEvent = (eventName, userData) =>
//   CreateCustomEventMainService.create(eventName, Js.Nullable.to_opt(userData))

// let getCustomEventUserData = customEvent =>
//   HandleCustomEventMainService.getCustomEventUserData(customEvent)

// let getPointEventLocationInViewOfEvent = (event: EventType.pointEvent) => event.locationInView

// let getPointEventLocationOfEvent = (event: EventType.pointEvent) => event.location

// let getPointEventButtonOfEvent = (event: EventType.pointEvent) => event.button

// let getPointEventWheelOfEvent = (event: EventType.pointEvent) => event.wheel

// let getPointEventMovementDeltaOfEvent = (event: EventType.pointEvent) => event.movementDelta

// let getPointEventEventOfEvent = (event: EventType.pointEvent) => event.event
