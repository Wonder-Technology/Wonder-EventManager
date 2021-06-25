open POType

open EventType

let _getKeyCode = keyboardDomEvent => keyboardDomEvent["keyCode"]

let _getShiftKey = keyboardDomEvent => keyboardDomEvent["shiftKey"]

let _getKeyFromSpecialKeyMap = (keyCode, char, specialKeyMap) =>
  switch specialKeyMap -> MutableSparseMap.get(keyCode) {
  | None => char
  | Some(key) => key
  }

let _handleShiftKey = (
  keyCode,
  char,
  (shiftKeyByKeyCodeMap, shiftKeyByCharCodeMap, specialKeyMap),
) =>
  switch shiftKeyByKeyCodeMap -> MutableSparseMap.get(keyCode) {
  | None =>
    switch shiftKeyByCharCodeMap -> MutableHashMap.get(char) {
    | None => _getKeyFromSpecialKeyMap(keyCode, char, specialKeyMap)
    | Some(upperCaseChar) => upperCaseChar
    }

  | Some(upperCaseChar) => upperCaseChar
  }

let _getKey = (keyboardDomEvent, {eventRecord}) => {
  let {keyboardEventData} = eventRecord
  let {specialKeyMap, shiftKeyByKeyCodeMap, shiftKeyByCharCodeMap} = keyboardEventData
  let keyCode = _getKeyCode(keyboardDomEvent)

  let char = Js.String.fromCharCode(keyCode) -> Js.String.toLowerCase

  _getShiftKey(keyboardDomEvent)
    ? _handleShiftKey(keyCode, char, (shiftKeyByKeyCodeMap, shiftKeyByCharCodeMap, specialKeyMap))
    : _getKeyFromSpecialKeyMap(keyCode, char, specialKeyMap)
}

let _convertKeyboardDomEventToKeyboardEvent = (
  eventName,
  keyboardDomEvent,
  po,
): keyboardEvent => {
  name: eventName,
  ctrlKey: keyboardDomEvent["ctrlKey"],
  altKey: keyboardDomEvent["altKey"],
  shiftKey: _getShiftKey(keyboardDomEvent),
  metaKey: keyboardDomEvent["metaKey"],
  keyCode: _getKeyCode(keyboardDomEvent),
  key: _getKey(keyboardDomEvent, po),
  event: keyboardDomEvent,
}

let execEventHandle = (eventName, keyboardDomEvent, {eventRecord} as po) => {
  let {keyboardDomEventDataArrMap} = eventRecord

  switch keyboardDomEventDataArrMap -> MutableSparseMap.get(
    eventName -> domEventNameToInt,
  ) {
  | None => po
  | Some(arr) =>
    arr -> ArraySt.reduceOneParam(
      (. po, {handleFunc}: keyboardDomEventData) =>
        handleFunc(.
          _convertKeyboardDomEventToKeyboardEvent(eventName, keyboardDomEvent, po),
          po,
        ),
      po,
    )
  }
}
