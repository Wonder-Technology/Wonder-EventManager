open POType

let unsafeGetBody = po => {
  po.body->OptionSt.unsafeGet
}

let setBody = (po, body) => {
  {
    ...po,
    body: Some(body),
  }
}
