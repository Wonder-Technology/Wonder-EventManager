open POType

open EventType

let _addToEventArr = (eventName, eventData, eventArrMap) =>
  BindDomEventMainService.addToEventArr(
    eventName,
    eventData,
    ({priority}: touchDomEventData) => priority,
    eventArrMap,
  )

let _removeFromEventArrMapByHandleFunc = (eventName, targetHandleFunc, eventArrMap) =>
  BindDomEventMainService.removeFromEventArrMapByHandleFunc(
    eventName,
    (({handleFunc}: touchDomEventData) => handleFunc, targetHandleFunc),
    eventArrMap,
  )

let bind = (eventName, priority, handleFunc, {eventRecord} as po) => {
  let {touchDomEventDataArrMap} = eventRecord

  {
    ...po,
    eventRecord: {
      ...eventRecord,
      touchDomEventDataArrMap: _addToEventArr(
        eventName -> domEventNameToInt,
        {priority: priority, handleFunc: handleFunc},
        touchDomEventDataArrMap,
      ),
    },
  }
}

let unbindByHandleFunc = (eventName, handleFunc, {eventRecord} as po) => {
  let {touchDomEventDataArrMap} = eventRecord

  {
    ...po,
    eventRecord: {
      ...eventRecord,
      touchDomEventDataArrMap: _removeFromEventArrMapByHandleFunc(
        eventName -> domEventNameToInt,
        handleFunc,
        touchDomEventDataArrMap,
      ),
    },
  }
}
