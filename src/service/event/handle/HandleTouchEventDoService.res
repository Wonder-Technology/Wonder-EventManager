open POType

open EventType

let _getTouchData = touchDomEvent => {
  let changedTouches = touchDomEvent["changedTouches"]
  let touchDataJsObj = Array.unsafe_get(changedTouches, 0)

  {
    clientX: touchDataJsObj["clientX"],
    clientY: touchDataJsObj["clientY"],
    pageX: touchDataJsObj["pageX"],
    pageY: touchDataJsObj["pageY"],
    identifier: touchDataJsObj["identifier"],
    screenX: touchDataJsObj["screenX"],
    screenY: touchDataJsObj["screenY"],
    radiusX: touchDataJsObj["radiusX"],
    radiusY: touchDataJsObj["radiusY"],
    rotationAngle: touchDataJsObj["rotationAngle"],
    force: touchDataJsObj["force"],
  }
}

let _getLocation = (touchDomEvent, po) => {
  let {pageX, pageY} = _getTouchData(touchDomEvent)

  (pageX, pageY)
}

let _getLocationInView = (touchDomEvent, po) =>
  HandlePointDomEventDoService.getLocationInView(touchDomEvent, _getLocation, po)

let _getMovementDelta = (touchDomEvent, {eventRecord} as po) =>
  HandlePointDomEventDoService.getMovementDelta(
    _getLocation(touchDomEvent, po),
    TouchEventDoService.getLastXY(eventRecord),
    po,
  )

let _convertTouchDomEventToTouchEvent = (eventName, touchDomEvent, po): touchEvent => {
  name: eventName,
  location: _getLocation(touchDomEvent, po),
  locationInView: _getLocationInView(touchDomEvent, po),
  touchData: _getTouchData(touchDomEvent),
  movementDelta: _getMovementDelta(touchDomEvent, po),
  event: touchDomEvent,
}

let execEventHandle = (eventName, touchDomEvent, {eventRecord} as po) => {
  let {touchDomEventDataArrMap} = eventRecord

  /* HandlePointDomEventDoService.preventDefault(
    touchDomEvent -> touchDomEventToPointDomEvent,
  ); */

  switch touchDomEventDataArrMap -> MutableSparseMap.get(
    eventName -> domEventNameToInt,
  ) {
  | None => po
  | Some(arr) =>
    arr -> ArraySt.reduceOneParam(
      (. po, {handleFunc}: touchDomEventData) =>
        handleFunc(. _convertTouchDomEventToTouchEvent(eventName, touchDomEvent, po), po),
      po,
    )
  }
}

let setLastXY = (lastX, lastY, {eventRecord} as po) => {
  ...po,
  eventRecord: TouchEventDoService.setLastXY(lastX, lastY, eventRecord),
}

let setLastXYByLocation = (eventName, touchDomEvent, {eventRecord} as po) => {
  let {location}: touchEvent = _convertTouchDomEventToTouchEvent(eventName, touchDomEvent, po)

  let (x, y) = location

  setLastXY(Some(x), Some(y), po)
}

let getIsDrag = ({eventRecord} as po) => eventRecord.touchEventData.isDrag

let setIsDrag = (isDrag, {eventRecord} as po) => {
  ...po,
  eventRecord: {
    ...eventRecord,
    touchEventData: {
      ...eventRecord.touchEventData,
      isDrag: isDrag,
    },
  },
}

let setLastXYWhenTouchMove = (eventName, touchDomEvent, po) =>
  getIsDrag(po) ? po : setLastXYByLocation(eventName, touchDomEvent, po)
