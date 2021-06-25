'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var OptionSt$WonderEventmanager = require("../../structure/OptionSt.bs.js");

function unsafeGetBody(po) {
  return OptionSt$WonderEventmanager.unsafeGet(po.body);
}

function setBody(po, body) {
  return {
          eventRecord: po.eventRecord,
          canvas: po.canvas,
          body: Caml_option.some(body),
          browser: po.browser
        };
}

exports.unsafeGetBody = unsafeGetBody;
exports.setBody = setBody;
/* No side effect */
