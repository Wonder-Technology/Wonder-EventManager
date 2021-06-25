open POType

open EventType

let _addEventDataByPriority = (eventData, arr) =>
  arr
  ->ArraySt.push(eventData)
  ->Js.Array.sortInPlaceWith(
    (eventDataA, eventDataB) => eventDataB.priority - eventDataA.priority,
    _,
  )

let _addToEventArr = (eventName, eventData, eventArrMap) =>
  switch eventArrMap->MutableHashMap.get(eventName) {
  | None => eventArrMap->MutableHashMap.set(eventName, [eventData])
  | Some(arr) => eventArrMap->MutableHashMap.set(eventName, _addEventDataByPriority(eventData, arr))
  }

let bindGlobalEvent = (eventName, priority, handleFunc, {eventRecord} as po) => {
  let {customGlobalEventArrMap} = eventRecord

  {
    ...po,
    eventRecord: {
      ...eventRecord,
      customGlobalEventArrMap: _addToEventArr(
        eventName,
        {priority: priority, handleFunc: handleFunc},
        customGlobalEventArrMap,
      ),
    },
  }
}

let _removeFromEventArrByHandleFunc = (arr, targetHandleFunc) =>
  arr->Js.Array.filter(({handleFunc}) => handleFunc !== targetHandleFunc, _)

let _removeFromEventArrMapByHandleFunc = (eventName, handleFunc, eventArrMap) =>
  switch eventArrMap->MutableHashMap.get(eventName) {
  | None => eventArrMap
  | Some(arr) =>
    eventArrMap->MutableHashMap.set(eventName, _removeFromEventArrByHandleFunc(arr, handleFunc))
  }

let unbindGlobalEventByHandleFunc = (eventName, handleFunc, {eventRecord} as po) => {
  let {customGlobalEventArrMap} = eventRecord

  {
    ...po,
    eventRecord: {
      ...eventRecord,
      customGlobalEventArrMap: _removeFromEventArrMapByHandleFunc(
        eventName,
        handleFunc,
        customGlobalEventArrMap,
      ),
    },
  }
}

let _removeFromEventListMapByEventName = (eventName, eventArrMap) =>
  eventArrMap->Obj.magic->MutableHashMap.deleteVal(eventName)->Obj.magic

let unbindGlobalEventByEventName = (eventName, {eventRecord} as po) => {
  let {customGlobalEventArrMap} = eventRecord

  {
    ...po,
    eventRecord: {
      ...eventRecord,
      customGlobalEventArrMap: _removeFromEventListMapByEventName(
        eventName,
        customGlobalEventArrMap,
      ),
    },
  }
}

// let bindGameObjectEvent = ((eventName, priority, target), handleFunc, {eventRecord} as po) => {
//   let {customGameObjectEventArrMap} = eventRecord

//   let eventData = {priority: priority, handleFunc: handleFunc}

//   {
//     ...po,
//     eventRecord: {
//       ...eventRecord,
//       customGameObjectEventArrMap: switch customGameObjectEventArrMap->MutableHashMap.get(
//         eventName,
//       ) {
//       | None =>
//         customGameObjectEventArrMap->MutableHashMap.set(
//           eventName,
//           MutableSparseMap.createEmpty()->MutableSparseMap.set(target, [eventData]),
//         )
//       | Some(targetEventArrMap) =>
//         switch targetEventArrMap->MutableSparseMap.get(target) {
//         | None =>
//           customGameObjectEventArrMap->MutableHashMap.set(
//             eventName,
//             targetEventArrMap->MutableSparseMap.set(target, [eventData]),
//           )
//         | Some(arr) =>
//           customGameObjectEventArrMap->MutableHashMap.set(
//             eventName,
//             targetEventArrMap->MutableSparseMap.set(
//               target,
//               _addEventDataByPriority(eventData, arr),
//             ),
//           )
//         }
//       },
//     },
//   }
// }

// let unbindGameObjectEventByTarget = ((eventName, target), {eventRecord} as po) => {
//   let {customGameObjectEventArrMap} = eventRecord

//   {
//     ...po,
//     eventRecord: {
//       ...eventRecord,
//       customGameObjectEventArrMap: switch customGameObjectEventArrMap->MutableHashMap.get(
//         eventName,
//       ) {
//       | None => customGameObjectEventArrMap
//       | Some(targetEventArrMap) =>
//         customGameObjectEventArrMap->MutableHashMap.set(
//           eventName,
//           targetEventArrMap->MutableSparseMap.deleteVal(target),
//         )
//       },
//     },
//   }
// }

// let unbindGameObjectEventByHandleFunc = ((eventName, target), handleFunc, {eventRecord} as po) => {
//   let {customGameObjectEventArrMap} = eventRecord

//   {
//     ...po,
//     eventRecord: {
//       ...eventRecord,
//       customGameObjectEventArrMap: switch customGameObjectEventArrMap->MutableHashMap.get(
//         eventName,
//       ) {
//       | None => customGameObjectEventArrMap
//       | Some(targetEventArrMap) =>
//         switch targetEventArrMap->MutableSparseMap.get(target) {
//         | None => customGameObjectEventArrMap
//         | Some(arr) =>
//           customGameObjectEventArrMap->MutableHashMap.set(
//             eventName,
//             targetEventArrMap->MutableSparseMap.set(
//               target,
//               _removeFromEventArrByHandleFunc(arr, handleFunc),
//             ),
//           )
//         }
//       },
//     },
//   }
// }
