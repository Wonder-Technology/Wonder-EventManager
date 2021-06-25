type rec mouseDomEventData = {
  priority: int,
  handleFunc: (. EventType.mouseEvent, po) => po,
}
and keyboardDomEventData = {
  priority: int,
  handleFunc: (. EventType.keyboardEvent, po) => po,
}
and touchDomEventData = {
  priority: int,
  handleFunc: (. EventType.touchEvent, po) => po,
}
and customEventData = {
  priority: int,
  handleFunc: (. EventType.customEvent, po) => (po, EventType.customEvent),
}
and eventRecord = {
  domEventStreamSubscription: option<WonderBsMost.Most.subscription>,
  mouseDomEventDataArrMap: MutableSparseMap.t<int, array<mouseDomEventData>>,
  keyboardDomEventDataArrMap: MutableSparseMap.t<int, array<keyboardDomEventData>>,
  touchDomEventDataArrMap: MutableSparseMap.t<int, array<touchDomEventData>>,
  customGlobalEventArrMap: MutableHashMap.t<string, array<customEventData>>,
  customGameObjectEventArrMap: MutableHashMap.t<
    string,
    MutableSparseMap.t<int, array<customEventData>>,
  >,
  mouseEventData: EventType.mouseEventData,
  keyboardEventData: EventType.keyboardEventData,
  touchEventData: EventType.touchEventData,
}
and po = {
  eventRecord: eventRecord,
  canvas: option<Dom.htmlCanvasElement>,
}
