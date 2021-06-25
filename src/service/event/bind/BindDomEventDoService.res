let addToEventArr = (eventName, eventData, getPriorityFunc, eventArrMap) =>
  switch eventArrMap->MutableSparseMap.get(eventName) {
  | None => eventArrMap->MutableSparseMap.set(eventName, [eventData])
  | Some(arr) =>
    eventArrMap->MutableSparseMap.set(
      eventName,
      arr
      ->ArraySt.push(eventData)
      ->Js.Array.sortInPlaceWith(
        (eventDataA, eventDataB) => getPriorityFunc(eventDataB) - getPriorityFunc(eventDataA),
        _,
      ),
    )
  }

let removeFromEventArrMapByHandleFunc = (
  eventName,
  (getHandleFuncFunc, targetHandleFunc),
  eventArrMap,
) =>
  switch eventArrMap->MutableSparseMap.get(eventName) {
  | None => eventArrMap
  | Some(arr) =>
    eventArrMap->MutableSparseMap.set(
      eventName,
      arr->Js.Array.filter(domEventData => getHandleFuncFunc(domEventData) !== targetHandleFunc, _),
    )
  }
