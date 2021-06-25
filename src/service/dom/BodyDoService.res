open POType

let unsafeGetBody = po => {
  po.body->WonderCommonlib.OptionSt.unsafeGet
}

let setBody = (po, body) => {
  {
    ...po,
    body: Some(body),
  }
}
