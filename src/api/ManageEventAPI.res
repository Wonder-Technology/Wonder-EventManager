// let onMouseEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventDoService.onMouseEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let onKeyboardEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventDoService.onKeyboardEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let onTouchEvent = (eventName, priority, handleFunc, po) =>
//   ManageEventDoService.onTouchEvent(~eventName, ~handleFunc, ~po, ~priority, ())

// let offMouseEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventDoService.offMouseEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let offKeyboardEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventDoService.offKeyboardEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let offTouchEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventDoService.offTouchEventByHandleFunc(~eventName, ~handleFunc, ~po)

let onCustomGlobalEvent = (eventName, priority, handleFunc) =>
  ManageEventDoService.onCustomGlobalEvent(
    ~eventName,
    ~handleFunc,
    ~po=ContainerManager.getPO(),
    ~priority,
    (),
  )->ContainerManager.setPO

let offCustomGlobalEventByEventName = eventName =>
  ManageEventDoService.offCustomGlobalEventByEventName(
    ~eventName,
    ~po=ContainerManager.getPO(),
  )->ContainerManager.setPO

// let offCustomGlobalEventByHandleFunc = (eventName, handleFunc, po) =>
//   ManageEventDoService.offCustomGlobalEventByHandleFunc(~eventName, ~handleFunc, ~po)

// let onCustomGameObjectEvent = (eventName, target, priority, handleFunc, po) =>
//   ManageEventDoService.onCustomGameObjectEvent(
//     ~eventName,
//     ~handleFunc,
//     ~target,
//     ~po,
//     ~priority,
//     (),
//   )

// let offCustomGameObjectEventByTarget = (eventName, target, po) =>
//   ManageEventDoService.offCustomGameObjectEventByTarget(~eventName, ~target, ~po)

// let offCustomGameObjectEventByHandleFunc = (eventName, target, handleFunc, po) =>
//   ManageEventDoService.offCustomGameObjectEventByHandleFunc(
//     ~eventName,
//     ~target,
//     ~handleFunc,
//     ~po,
//   )

let stopPropagationCustomEvent = ManageEventDoService.stopPropagationCustomEvent

let triggerCustomGlobalEvent = customEvent =>
  ManageEventDoService.triggerCustomGlobalEvent(customEvent, ContainerManager.getPO())
  ->Tuple2.getFirst
  ->ContainerManager.setPO

// let triggerCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventDoService.triggerCustomGameObjectEvent(customEvent, target, po)

// let broadcastCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventDoService.broadcastCustomGameObjectEvent(customEvent, target, po)

// let emitCustomGameObjectEvent = (customEvent, target, po) =>
//   ManageEventDoService.emitCustomGameObjectEvent(customEvent, target, po)

let createCustomEvent = (eventName, userData) =>
  CreateCustomEventDoService.create(eventName, Js.Nullable.to_opt(userData))

// let getCustomEventUserData = customEvent =>
//   HandleCustomEventDoService.getCustomEventUserData(customEvent)

// let getPointEventLocationInViewOfEvent = (event: EventType.pointEvent) => event.locationInView

// let getPointEventLocationOfEvent = (event: EventType.pointEvent) => event.location

// let getPointEventButtonOfEvent = (event: EventType.pointEvent) => event.button

// let getPointEventWheelOfEvent = (event: EventType.pointEvent) => event.wheel

// let getPointEventMovementDeltaOfEvent = (event: EventType.pointEvent) => event.movementDelta

// let getPointEventEventOfEvent = (event: EventType.pointEvent) => event.event
