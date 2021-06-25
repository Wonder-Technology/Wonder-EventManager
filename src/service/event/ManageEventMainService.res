open POType

open EventType

let onMouseEvent = (~eventName, ~handleFunc, ~po, ~priority=0, ()) =>
  BindMouseDomEventMainService.bind(eventName, priority, handleFunc, po)

let onKeyboardEvent = (~eventName, ~handleFunc, ~po, ~priority=0, ()) =>
  BindKeyboardDomEventMainService.bind(eventName, priority, handleFunc, po)

let onTouchEvent = (~eventName, ~handleFunc, ~po, ~priority=0, ()) =>
  BindTouchDomEventMainService.bind(eventName, priority, handleFunc, po)

let offMouseEventByHandleFunc = (~eventName, ~handleFunc, ~po) =>
  BindMouseDomEventMainService.unbindByHandleFunc(eventName, handleFunc, po)

let offKeyboardEventByHandleFunc = (~eventName, ~handleFunc, ~po) =>
  BindKeyboardDomEventMainService.unbindByHandleFunc(eventName, handleFunc, po)

let offTouchEventByHandleFunc = (~eventName, ~handleFunc, ~po) =>
  BindTouchDomEventMainService.unbindByHandleFunc(eventName, handleFunc, po)

let onCustomGlobalEvent = (~eventName, ~handleFunc, ~po, ~priority=0, ()) =>
  BindCustomEventMainService.bindGlobalEvent(eventName, priority, handleFunc, po)

let offCustomGlobalEventByEventName = (~eventName, ~po) =>
  BindCustomEventMainService.unbindGlobalEventByEventName(eventName, po)

let offCustomGlobalEventByHandleFunc = (~eventName, ~handleFunc, ~po) =>
  BindCustomEventMainService.unbindGlobalEventByHandleFunc(eventName, handleFunc, po)

// let onCustomGameObjectEvent = (~eventName, ~handleFunc, ~target, ~po, ~priority=0, ()) =>
//   BindCustomEventMainService.bindGameObjectEvent((eventName, priority, target), handleFunc, po)

// let offCustomGameObjectEventByTarget = (~eventName, ~target, ~po) =>
//   BindCustomEventMainService.unbindGameObjectEventByTarget((eventName, target), po)

// let offCustomGameObjectEventByHandleFunc = (~eventName, ~handleFunc, ~target, ~po) =>
//   BindCustomEventMainService.unbindGameObjectEventByHandleFunc((eventName, target), handleFunc, po)

/* let execDomEventHandle = (eventName, domEvent, po) =>
   switch (eventName) {
   | MouseDown
   | MouseUp =>
     HandleMouseEventMainService.execEventHandle(eventName, domEvent, po)
   }; */

let stopPropagationCustomEvent = customEvent =>
  HandleCustomEventMainService.stopPropagation(customEvent)

// let triggerCustomGlobalEvent = (customEvent, po) =>
//   HandleCustomEventMainService.triggerGlobalEvent(customEvent, po)

// let triggerCustomGameObjectEvent = (customEvent, target, po) =>
//   HandleCustomEventMainService.triggerGameObjectEvent(target, customEvent, po)

// let broadcastCustomGameObjectEvent = (customEvent, target, po) =>
//   HandleCustomEventMainService.broadcastGameObjectEvent(target, customEvent, po)

// let emitCustomGameObjectEvent = (customEvent, target, po) =>
//   HandleCustomEventMainService.emitGameObjectEvent(target, customEvent, po)

let setDomEventStreamSubscription = (domEventStreamSubscription, {eventRecord} as po) => {
  ...po,
  eventRecord: {
    ...eventRecord,
    domEventStreamSubscription: Some(domEventStreamSubscription),
  },
}

let _unsubscribeDomEventStream = %raw(`
  function(domEventStreamSubscription){
  domEventStreamSubscription.unsubscribe();
  }
  `)

let unsubscribeDomEventStream = ({eventRecord} as po) =>
  switch eventRecord.domEventStreamSubscription {
  | None => po
  | Some(domEventStreamSubscription) =>
    /* let unsubscribe = domEventStreamSubscription##unsubscribe;
     unsubscribe(); */
    _unsubscribeDomEventStream(domEventStreamSubscription)

    po
  }
